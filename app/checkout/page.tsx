"use client"

import { useEffect, useState, useCallback, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createCheckoutSession, updateOrderStatus } from "@/app/actions/stripe"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [orderNumber, setOrderNumber] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [paymentComplete, setPaymentComplete] = useState(false)

  useEffect(() => {
    const initCheckout = async () => {
      try {
        const dataParam = searchParams.get("data")
        if (!dataParam) {
          throw new Error("缺少订单数据")
        }

        const checkoutData = JSON.parse(decodeURIComponent(dataParam))
        const result = await createCheckoutSession(checkoutData)

        setClientSecret(result.clientSecret)
        setOrderNumber(result.orderNumber)
      } catch (err) {
        console.error("Checkout error:", err)
        setError(err instanceof Error ? err.message : "创建订单失败")
      } finally {
        setIsLoading(false)
      }
    }

    initCheckout()
  }, [searchParams])

  const handleComplete = useCallback(async () => {
    if (clientSecret) {
      try {
        // 从 clientSecret 获取 session ID
        const sessionId = clientSecret.split("_secret_")[0]
        await updateOrderStatus(sessionId, "paid")
        setPaymentComplete(true)
      } catch (err) {
        console.error("Payment completion error:", err)
      }
    }
  }, [clientSecret])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#c9a86c] animate-spin mx-auto mb-4" />
          <p className="text-[#8b7355]">正在创建订单...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-red-500 mb-4">
            <p className="text-lg font-medium">订单创建失败</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
          <Button asChild className="bg-[#c9a86c] hover:bg-[#b89555]">
            <Link href="/">返回首页</Link>
          </Button>
        </Card>
      </div>
    )
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-[#8b7355] mb-2">支付成功！</h2>
          <p className="text-[#666] mb-2">您的订单已确认</p>
          <p className="text-sm text-[#999] mb-6">订单号：{orderNumber}</p>
          <div className="space-y-3">
            <Button asChild className="w-full bg-[#c9a86c] hover:bg-[#b89555]">
              <Link href="/orders">查看订单</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">继续购物</Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <header className="bg-white border-b border-[#c9a86c]/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={40} height={40} className="object-contain" />
          <div>
            <h1 className="text-lg font-medium text-[#8b7355]">确认支付</h1>
            {orderNumber && <p className="text-xs text-[#999]">订单号：{orderNumber}</p>}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{
              clientSecret,
              onComplete: handleComplete,
            }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </main>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#c9a86c] animate-spin" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
