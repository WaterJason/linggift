"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette, MapPin, ImageIcon, ArrowLeft } from "lucide-react"
import type { ColorMethod } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { useI18n } from "@/lib/i18n/context"

interface ColorMethodStepProps {
  jewelry: JewelryItem
  onSelectMethod: (method: ColorMethod) => void
  onBack: () => void
}

export function ColorMethodStep({ jewelry, onSelectMethod, onBack }: ColorMethodStepProps) {
  const { t } = useI18n()

  const methods = [
    {
      id: "direct" as const,
      icon: Palette,
      title: t.customization.colorMethodStep.methods.direct.title,
      description: t.customization.colorMethodStep.methods.direct.description,
      color: "bg-gradient-to-br from-[#c9a96e]/20 to-[#c9a96e]/5",
    },
    {
      id: "scene" as const,
      icon: MapPin,
      title: t.customization.colorMethodStep.methods.scene.title,
      description: t.customization.colorMethodStep.methods.scene.description,
      color: "bg-gradient-to-br from-[#7bb896]/20 to-[#7bb896]/5",
    },
    {
      id: "image" as const,
      icon: ImageIcon,
      title: t.customization.colorMethodStep.methods.image.title,
      description: t.customization.colorMethodStep.methods.image.description,
      color: "bg-gradient-to-br from-[#a87cc9]/20 to-[#a87cc9]/5",
    },
  ]

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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">{t.customization.colorMethodStep.title}</h3>
      <p className="text-sm text-[#8a7a6a] mb-8">{t.customization.colorMethodStep.subtitle}</p>

      <div className="space-y-4 mb-8">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelectMethod(method.id)}
            className={`w-full p-6 rounded-2xl text-left transition-all hover:shadow-md border-2 border-transparent hover:border-[#c9a96e]/30 ${method.color}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0">
                <method.icon className="w-6 h-6 text-[#c9a96e]" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[#3a3028] mb-1">{method.title}</h4>
                <p className="text-sm text-[#6a5a4a]">{method.description}</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-[#c9a96e] rotate-180 flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={onBack}
        className="w-full border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.customization.colorMethodStep.back}
      </Button>
    </div>
  )
}
