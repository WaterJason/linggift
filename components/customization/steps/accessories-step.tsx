"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import type { Accessories } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { useI18n } from "@/lib/i18n/context"

interface AccessoriesStepProps {
  jewelry: JewelryItem
  accessories: Accessories
  onAccessoriesChange: (accessories: Accessories) => void
  onNext: () => void
  onBack: () => void
}

export function AccessoriesStep({ jewelry, accessories, onAccessoriesChange, onNext, onBack }: AccessoriesStepProps) {
  const { t } = useI18n()

  const gemstones = [
    { id: "none", name: t.customization.accessoriesStep.gemstones.none, price: 0 },
    { id: "pearl", name: t.customization.accessoriesStep.gemstones.pearl, price: 280, image: "/pearl-gemstone.png" },
    { id: "agate", name: t.customization.accessoriesStep.gemstones.agate, price: 320, image: "/agate-gemstone.png" },
    { id: "jade", name: t.customization.accessoriesStep.gemstones.jade, price: 580, image: "/jade-gemstone.jpg" },
    {
      id: "crystal",
      name: t.customization.accessoriesStep.gemstones.crystal,
      price: 180,
      image: "/crystal-gemstone.jpg",
    },
    {
      id: "turquoise",
      name: t.customization.accessoriesStep.gemstones.turquoise,
      price: 420,
      image: "/turquoise-gemstone.jpg",
    },
  ]

  const chains = [
    { id: "none", name: t.customization.accessoriesStep.chains.none, price: 0 },
    { id: "gold-18k", name: t.customization.accessoriesStep.chains.gold18k, price: 1280, image: "/18k-gold-chain.jpg" },
    { id: "gold-14k", name: t.customization.accessoriesStep.chains.gold14k, price: 880, image: "/14k-gold-chain.jpg" },
    {
      id: "silver",
      name: t.customization.accessoriesStep.chains.silver,
      price: 280,
      image: "/silver-chain-jewelry.png",
    },
    {
      id: "rose-gold",
      name: t.customization.accessoriesStep.chains.roseGold,
      price: 980,
      image: "/rose-gold-chain.jpg",
    },
  ]

  const ropes = [
    { id: "none", name: t.customization.accessoriesStep.ropes.none, price: 0 },
    {
      id: "silk-red",
      name: t.customization.accessoriesStep.ropes.silkRed,
      price: 68,
      image: "/red-silk-cord-jewelry.jpg",
    },
    {
      id: "silk-black",
      name: t.customization.accessoriesStep.ropes.silkBlack,
      price: 68,
      image: "/black-silk-cord-jewelry.jpg",
    },
    {
      id: "leather",
      name: t.customization.accessoriesStep.ropes.leather,
      price: 128,
      image: "/leather-cord-jewelry.jpg",
    },
    {
      id: "sweater",
      name: t.customization.accessoriesStep.ropes.sweater,
      price: 168,
      image: "/sweater-chain-long-necklace.jpg",
    },
  ]

  const updateAccessory = <K extends keyof Accessories>(key: K, value: Accessories[K]) => {
    onAccessoriesChange({ ...accessories, [key]: value })
  }

  const calculateTotal = () => {
    let total = 0
    const gemstone = gemstones.find((g) => g.id === accessories.gemstone)
    const chain = chains.find((c) => c.id === accessories.chain)
    const rope = ropes.find((r) => r.id === accessories.rope)
    if (gemstone) total += gemstone.price
    if (chain) total += chain.price
    if (rope) total += rope.price
    return total
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
      {/* Selected Jewelry Preview */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#e5e0d8]">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#faf8f5] relative flex-shrink-0">
          <Image src={jewelry.image || "/placeholder.svg"} alt={jewelry.name} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-lg font-medium text-[#3a3028]">{jewelry.name}</h2>
          <p className="text-sm text-[#8a7a6a]">
            {jewelry.category} · {jewelry.price}
          </p>
        </div>
      </div>

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">{t.customization.accessoriesStep.title}</h3>
      <p className="text-sm text-[#8a7a6a] mb-8">{t.customization.accessoriesStep.subtitle}</p>

      {/* Gemstones */}
      <div className="mb-8">
        <h4 className="font-medium text-[#3a3028] mb-4">{t.customization.accessoriesStep.gemstones.title}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {gemstones.map((gem) => (
            <button
              key={gem.id}
              onClick={() => updateAccessory("gemstone", gem.id === "none" ? null : gem.id)}
              className={`p-3 rounded-xl border-2 transition-all text-center ${
                accessories.gemstone === gem.id || (gem.id === "none" && !accessories.gemstone)
                  ? "border-[#c9a96e] bg-[#faf8f5]"
                  : "border-transparent bg-[#faf8f5] hover:border-[#c9a96e]/50"
              }`}
            >
              {gem.image && (
                <div className="w-10 h-10 mx-auto mb-2 rounded-full overflow-hidden relative">
                  <Image src={gem.image || "/placeholder.svg"} alt={gem.name} fill className="object-cover" />
                </div>
              )}
              <p className="text-xs font-medium text-[#3a3028]">{gem.name}</p>
              {gem.price > 0 && <p className="text-xs text-[#c9a96e]">+¥{gem.price}</p>}
            </button>
          ))}
        </div>
      </div>

      {/* Chains */}
      <div className="mb-8">
        <h4 className="font-medium text-[#3a3028] mb-4">{t.customization.accessoriesStep.chains.title}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {chains.map((chain) => (
            <button
              key={chain.id}
              onClick={() => updateAccessory("chain", chain.id === "none" ? null : chain.id)}
              className={`p-3 rounded-xl border-2 transition-all text-center ${
                accessories.chain === chain.id || (chain.id === "none" && !accessories.chain)
                  ? "border-[#c9a96e] bg-[#faf8f5]"
                  : "border-transparent bg-[#faf8f5] hover:border-[#c9a96e]/50"
              }`}
            >
              {chain.image && (
                <div className="w-10 h-10 mx-auto mb-2 rounded-full overflow-hidden relative">
                  <Image src={chain.image || "/placeholder.svg"} alt={chain.name} fill className="object-cover" />
                </div>
              )}
              <p className="text-xs font-medium text-[#3a3028]">{chain.name}</p>
              {chain.price > 0 && <p className="text-xs text-[#c9a96e]">+¥{chain.price}</p>}
            </button>
          ))}
        </div>
      </div>

      {/* Ropes */}
      <div className="mb-8">
        <h4 className="font-medium text-[#3a3028] mb-4">{t.customization.accessoriesStep.ropes.title}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {ropes.map((rope) => (
            <button
              key={rope.id}
              onClick={() => updateAccessory("rope", rope.id === "none" ? null : rope.id)}
              className={`p-3 rounded-xl border-2 transition-all text-center ${
                accessories.rope === rope.id || (rope.id === "none" && !accessories.rope)
                  ? "border-[#c9a96e] bg-[#faf8f5]"
                  : "border-transparent bg-[#faf8f5] hover:border-[#c9a96e]/50"
              }`}
            >
              {rope.image && (
                <div className="w-10 h-10 mx-auto mb-2 rounded-full overflow-hidden relative">
                  <Image src={rope.image || "/placeholder.svg"} alt={rope.name} fill className="object-cover" />
                </div>
              )}
              <p className="text-xs font-medium text-[#3a3028]">{rope.name}</p>
              {rope.price > 0 && <p className="text-xs text-[#c9a96e]">+¥{rope.price}</p>}
            </button>
          ))}
        </div>
      </div>

      {/* Total */}
      {calculateTotal() > 0 && (
        <div className="bg-[#faf8f5] rounded-xl p-4 mb-8">
          <p className="text-sm text-[#6a5a4a]">
            {t.customization.accessoriesStep.accessoryFee}：
            <span className="font-medium text-[#c9a96e]">+¥{calculateTotal()}</span>
          </p>
        </div>
      )}

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.customization.accessoriesStep.back}
        </Button>
        <Button onClick={onNext} className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] h-12">
          <Check className="w-4 h-4 mr-2" />
          {t.customization.accessoriesStep.confirm}
        </Button>
      </div>
    </div>
  )
}
