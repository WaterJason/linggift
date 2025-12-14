import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package } from "lucide-react"

const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "待支付", variant: "secondary" },
  paid: { label: "已支付", variant: "default" },
  processing: { label: "制作中", variant: "outline" },
  shipped: { label: "已发货", variant: "outline" },
  completed: { label: "已完成", variant: "default" },
  cancelled: { label: "已取消", variant: "destructive" },
}

export default async function OrdersPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?redirect=/orders")
  }

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

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
          <h1 className="text-lg font-medium text-[#8b7355]">我的订单</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {!orders || orders.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="w-16 h-16 text-[#c9a86c]/50 mx-auto mb-4" />
            <h2 className="text-xl text-[#8b7355] mb-2">暂无订单</h2>
            <p className="text-[#666] mb-6">快去定制您的专属珐琅首饰吧</p>
            <Button asChild className="bg-[#c9a86c] hover:bg-[#b89555]">
              <Link href="/">浏览首饰</Link>
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
                          <p className="text-sm text-[#999] mt-1">订单号：{order.order_number}</p>
                          {colorScheme && <p className="text-sm text-[#666] mt-1">配色：{colorScheme.name}</p>}
                          {accessories && accessories.length > 0 && (
                            <p className="text-sm text-[#666]">配饰：{accessories.map((a) => a.name).join(", ")}</p>
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
