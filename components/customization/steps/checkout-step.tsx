"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CreditCard, LogIn } from "lucide-react"
import type { ColorResult, Accessories, UserInfo } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import type { User } from "@supabase/supabase-js"
import { useI18n } from "@/lib/i18n/context"

interface CheckoutStepProps {
  jewelry: JewelryItem
  colorResult: ColorResult
  accessories: Accessories
  userInfo: UserInfo
  user: User | null
  onBack: () => void
}

interface ShippingInfo {
  recipientName: string
  phone: string
  province: string
  city: string
  district: string
  address: string
  notes: string
}

export function CheckoutStep({ jewelry, colorResult, accessories, userInfo, user, onBack }: CheckoutStepProps) {
  const { t, locale } = useI18n()
  const router = useRouter()
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    recipientName: "",
    phone: "",
    province: "",
    city: "",
    district: "",
    address: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const gemstoneNames: Record<string, { name: string; price: number }> = {
    pearl: { name: t.customization.accessoriesStep.gemstones.pearl, price: 280 },
    agate: { name: t.customization.accessoriesStep.gemstones.agate, price: 320 },
    jade: { name: t.customization.accessoriesStep.gemstones.jade, price: 580 },
    crystal: { name: t.customization.accessoriesStep.gemstones.crystal, price: 180 },
    turquoise: { name: t.customization.accessoriesStep.gemstones.turquoise, price: 420 },
  }

  const chainNames: Record<string, { name: string; price: number }> = {
    "gold-18k": { name: t.customization.accessoriesStep.chains.gold18k, price: 1280 },
    "gold-14k": { name: t.customization.accessoriesStep.chains.gold14k, price: 880 },
    silver: { name: t.customization.accessoriesStep.chains.silver, price: 280 },
    "rose-gold": { name: t.customization.accessoriesStep.chains.roseGold, price: 980 },
  }

  const ropeNames: Record<string, { name: string; price: number }> = {
    "silk-red": { name: t.customization.accessoriesStep.ropes.silkRed, price: 68 },
    "silk-black": { name: t.customization.accessoriesStep.ropes.silkBlack, price: 68 },
    leather: { name: t.customization.accessoriesStep.ropes.leather, price: 128 },
    sweater: { name: t.customization.accessoriesStep.ropes.sweater, price: 168 },
  }

  const updateField = <K extends keyof ShippingInfo>(field: K, value: ShippingInfo[K]) => {
    setShippingInfo({ ...shippingInfo, [field]: value })
  }

  const calculateTotal = () => {
    const basePrice = Number.parseInt(jewelry.price.replace(/[^\d]/g, ""))
    let accessoryPrice = 0

    if (accessories.gemstone && gemstoneNames[accessories.gemstone]) {
      accessoryPrice += gemstoneNames[accessories.gemstone].price
    }
    if (accessories.chain && chainNames[accessories.chain]) {
      accessoryPrice += chainNames[accessories.chain].price
    }
    if (accessories.rope && ropeNames[accessories.rope]) {
      accessoryPrice += ropeNames[accessories.rope].price
    }

    return basePrice + accessoryPrice
  }

  const isValid =
    shippingInfo.recipientName &&
    shippingInfo.phone &&
    shippingInfo.province &&
    shippingInfo.city &&
    shippingInfo.district &&
    shippingInfo.address

  const handleSubmit = async () => {
    if (!isValid) return
    if (!user) {
      router.push(`/auth/login?redirect=${encodeURIComponent(window.location.pathname)}`)
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const accessoryIds: string[] = []
      if (accessories.gemstone) accessoryIds.push(accessories.gemstone)
      if (accessories.chain) accessoryIds.push(accessories.chain)
      if (accessories.rope) accessoryIds.push(accessories.rope)

      const checkoutData = {
        jewelryId: jewelry.id,
        colorScheme: {
          name: colorResult.name,
          colors: [colorResult.primaryColor, colorResult.secondaryColor, colorResult.accentColor, colorResult.goldTone],
        },
        aiGeneratedImage: colorResult.generatedImage,
        accessories: accessoryIds,
        userInfo: {
          recipient: userInfo.purpose === "gift" ? "送礼" : "自用",
          age: userInfo.ageRange,
          identity: userInfo.recipientIdentity,
          details: userInfo.additionalNotes,
        },
        shippingAddress: {
          recipientName: shippingInfo.recipientName,
          phone: shippingInfo.phone,
          province: shippingInfo.province,
          city: shippingInfo.city,
          district: shippingInfo.district,
          address: shippingInfo.address,
        },
      }

      const encodedData = encodeURIComponent(JSON.stringify(checkoutData))
      router.push(`/checkout?data=${encodedData}`)
    } catch (err) {
      console.error("Checkout error:", err)
      setError(err instanceof Error ? err.message : "Checkout failed")
      setIsSubmitting(false)
    }
  }

  if (!user) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
          <LogIn className="w-10 h-10 text-[#c9a96e]" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#3a3028] mb-2">
          {t.customization.checkoutStep.loginRequired.title}
        </h3>
        <p className="text-[#6a5a4a] mb-6">{t.customization.checkoutStep.loginRequired.description}</p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={onBack}
            className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.customization.checkoutStep.loginRequired.back}
          </Button>
          <Button asChild className="bg-[#c9a96e] text-white hover:bg-[#b8986d]">
            <Link href={`/auth/login?redirect=${encodeURIComponent(window.location.pathname)}`}>
              {t.customization.checkoutStep.loginRequired.login}
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-6">{t.customization.checkoutStep.title}</h3>

      {/* Order Summary */}
      <div className="bg-[#faf8f5] rounded-xl p-4 mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-white relative flex-shrink-0">
            {colorResult.generatedImage ? (
              <img
                src={colorResult.generatedImage || "/placeholder.svg"}
                alt={jewelry.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image src={jewelry.image || "/placeholder.svg"} alt={jewelry.name} fill className="object-cover" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-serif font-medium text-[#3a3028]">{jewelry.name}</h4>
            <p className="text-sm text-[#8a7a6a] mb-2">
              {t.customization.checkoutStep.orderSummary.jewelryPrice}: {colorResult.name}
            </p>
            <div className="flex gap-1">
              {[
                colorResult.primaryColor,
                colorResult.secondaryColor,
                colorResult.accentColor,
                colorResult.goldTone,
              ].map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e0d8] pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#6a5a4a]">{t.customization.checkoutStep.orderSummary.jewelryPrice}</span>
            <span className="text-[#3a3028]">{jewelry.price}</span>
          </div>
          {accessories.gemstone && gemstoneNames[accessories.gemstone] && (
            <div className="flex justify-between">
              <span className="text-[#6a5a4a]">{gemstoneNames[accessories.gemstone].name}</span>
              <span className="text-[#3a3028]">+¥{gemstoneNames[accessories.gemstone].price}</span>
            </div>
          )}
          {accessories.chain && chainNames[accessories.chain] && (
            <div className="flex justify-between">
              <span className="text-[#6a5a4a]">{chainNames[accessories.chain].name}</span>
              <span className="text-[#3a3028]">+¥{chainNames[accessories.chain].price}</span>
            </div>
          )}
          {accessories.rope && ropeNames[accessories.rope] && (
            <div className="flex justify-between">
              <span className="text-[#6a5a4a]">{ropeNames[accessories.rope].name}</span>
              <span className="text-[#3a3028]">+¥{ropeNames[accessories.rope].price}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-[#e5e0d8] font-medium">
            <span className="text-[#3a3028]">{t.customization.checkoutStep.orderSummary.total}</span>
            <span className="text-[#c9a96e] text-lg">¥{calculateTotal()}</span>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      <div className="space-y-4 mb-8">
        <h4 className="font-medium text-[#3a3028]">{t.customization.checkoutStep.shippingInfo.title}</h4>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
              {t.customization.checkoutStep.shippingInfo.recipientName}
            </Label>
            <Input
              value={shippingInfo.recipientName}
              onChange={(e) => updateField("recipientName", e.target.value)}
              placeholder={t.customization.checkoutStep.shippingInfo.recipientNamePlaceholder}
              className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
            />
          </div>
          <div>
            <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
              {t.customization.checkoutStep.shippingInfo.phone}
            </Label>
            <Input
              value={shippingInfo.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder={t.customization.checkoutStep.shippingInfo.phonePlaceholder}
              className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
              {t.customization.checkoutStep.shippingInfo.province}
            </Label>
            <Input
              value={shippingInfo.province}
              onChange={(e) => updateField("province", e.target.value)}
              placeholder={t.customization.checkoutStep.shippingInfo.provincePlaceholder}
              className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
            />
          </div>
          <div>
            <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
              {t.customization.checkoutStep.shippingInfo.city}
            </Label>
            <Input
              value={shippingInfo.city}
              onChange={(e) => updateField("city", e.target.value)}
              placeholder={t.customization.checkoutStep.shippingInfo.cityPlaceholder}
              className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
            />
          </div>
          <div>
            <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
              {t.customization.checkoutStep.shippingInfo.district}
            </Label>
            <Input
              value={shippingInfo.district}
              onChange={(e) => updateField("district", e.target.value)}
              placeholder={t.customization.checkoutStep.shippingInfo.districtPlaceholder}
              className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
            {t.customization.checkoutStep.shippingInfo.address}
          </Label>
          <Textarea
            value={shippingInfo.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder={t.customization.checkoutStep.shippingInfo.addressPlaceholder}
            className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e] min-h-[80px]"
          />
        </div>

        <div>
          <Label className="text-sm text-[#6a5a4a] mb-1.5 block">
            {t.customization.checkoutStep.shippingInfo.notes}
          </Label>
          <Input
            value={shippingInfo.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder={t.customization.checkoutStep.shippingInfo.notesPlaceholder}
            className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e]"
          />
        </div>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.customization.checkoutStep.back}
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!isValid || isSubmitting}
          className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 h-12"
        >
          {isSubmitting ? (
            t.customization.checkoutStep.submitting
          ) : (
            <>
              <CreditCard className="w-4 h-4 mr-2" />
              {t.customization.checkoutStep.submit} ¥{calculateTotal()}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
