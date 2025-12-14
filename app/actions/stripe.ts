"use server"

import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"
import { getJewelryById, getAccessoryById } from "@/lib/products"

interface CheckoutData {
  jewelryId: string
  colorScheme: {
    name: string
    colors: string[]
  }
  aiGeneratedImage?: string
  accessories: string[]
  userInfo: {
    recipient: string
    age: string
    identity: string
    details: string
  }
  shippingAddress: {
    recipientName: string
    phone: string
    province: string
    city: string
    district: string
    address: string
  }
}

export async function createCheckoutSession(data: CheckoutData) {
  const supabase = await createClient()

  // 验证用户登录
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("请先登录")
  }

  // 获取产品信息
  const jewelry = getJewelryById(data.jewelryId)
  if (!jewelry) {
    throw new Error("产品不存在")
  }

  // 计算配饰价格
  let accessoriesPrice = 0
  const accessoryDetails: Array<{ id: string; name: string; price: number }> = []

  for (const accId of data.accessories) {
    const acc = getAccessoryById(accId)
    if (acc) {
      accessoriesPrice += acc.priceInCents
      accessoryDetails.push({
        id: acc.id,
        name: acc.name,
        price: acc.priceInCents,
      })
    }
  }

  const totalPrice = jewelry.basePriceInCents + accessoriesPrice

  // 生成订单号
  const orderNumber = `LH${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`

  // 创建 Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "cny",
          product_data: {
            name: `${jewelry.name} - 定制款`,
            description: `配色方案：${data.colorScheme.name}${accessoryDetails.length > 0 ? ` | 配饰：${accessoryDetails.map((a) => a.name).join(", ")}` : ""}`,
          },
          unit_amount: totalPrice,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {
      orderNumber,
      userId: user.id,
      jewelryId: data.jewelryId,
    },
  })

  // 创建订单记录
  const { error: orderError } = await supabase.from("orders").insert({
    user_id: user.id,
    order_number: orderNumber,
    status: "pending",
    jewelry_id: data.jewelryId,
    jewelry_name: jewelry.name,
    jewelry_image: jewelry.image,
    color_scheme: data.colorScheme,
    ai_generated_image: data.aiGeneratedImage,
    accessories: accessoryDetails,
    user_info: data.userInfo,
    subtotal: jewelry.basePriceInCents,
    accessories_price: accessoriesPrice,
    total_price: totalPrice,
    shipping_address: data.shippingAddress,
    stripe_session_id: session.id,
  })

  if (orderError) {
    console.error("Order creation error:", orderError)
    throw new Error("创建订单失败")
  }

  return {
    clientSecret: session.client_secret,
    orderNumber,
  }
}

export async function updateOrderStatus(sessionId: string, status: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("orders")
    .update({
      status,
      paid_at: status === "paid" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_session_id", sessionId)

  if (error) {
    console.error("Update order status error:", error)
    throw new Error("更新订单状态失败")
  }
}
