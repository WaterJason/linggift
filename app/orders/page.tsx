"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Loader2 } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export default function OrdersPage() {
  const { t } = useI18n()
  const router = useRouter()
  const [orders, setOrders] = useState<any[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    pending: { label: t.orders.status.pending, variant: "secondary" },
    paid: { label: t.orders.status.paid, variant: "default" },
    processing: { label: t.orders.status.processing, variant: "outline" },
    shipped: { label: t.orders.status.shipped, variant: "outline" },
    completed: { label: t.orders.status.completed, variant: "default" },
    cancelled: { label: t.orders.status.cancelled, variant: "destructive" },
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/login?redirect=/orders")
        return
      }

      const { data } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      setOrders(data)
      setIsLoading(false)
    }

    fetchOrders()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#c9a86c] animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <header className="bg-white border-b border-[#c9a86c]/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={40} height={40} className="object-contain" />
          <h1 className="text-lg font-medium text-[#8b7355]">{t.orders.title}</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {!orders || orders.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="w-16 h-16 text-[#c9a86c]/50 mx-auto mb-4" />
            <h2 className="text-xl text-[#8b7355] mb-2">{t.orders.empty.title}</h2>
            <p className="text-[#666] mb-6">{t.orders.empty.description}</p>
            <Button asChild className="bg-[#c9a86c] hover:bg-[#b89555]">
              <Link href="/">{t.orders.empty.browse}</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const status = statusMap[order.status] || statusMap.pending
              const colorScheme = order.color_scheme as { name: string; colors: string[] } | null
              const accessories = order.accessories as Array<{ name: string }> | null

              return (
                <Card key={order.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#f5f3ef] flex-shrink-0">
                      {order.ai_generated_image ? (
                        <img
                          src={order.ai_generated_image || "/placeholder.svg"}
                          alt={order.jewelry_name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={order.jewelry_image || "/placeholder.jpg"}
                          alt={order.jewelry_name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-[#8b7355]">{order.jewelry_name}</h3>
                          <p className="text-sm text-[#999] mt-1">
                            {t.orders.orderNumber}：{order.order_number}
                          </p>
                          {colorScheme && (
                            <p className="text-sm text-[#666] mt-1">
                              {t.orders.colorScheme}：{colorScheme.name}
                            </p>
                          )}
                          {accessories && accessories.length > 0 && (
                            <p className="text-sm text-[#666]">
                              {t.orders.accessories}：{accessories.map((a) => a.name).join(", ")}
                            </p>
                          )}
                        </div>
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-lg font-medium text-[#c9a86c]">
                          ¥{(order.total_price / 100).toLocaleString()}
                        </p>
                        <p className="text-xs text-[#999]">{new Date(order.created_at).toLocaleDateString("zh-CN")}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
