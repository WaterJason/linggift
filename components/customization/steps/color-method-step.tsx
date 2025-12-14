"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette, MapPin, ImageIcon, ArrowLeft } from "lucide-react"
import type { ColorMethod } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"

interface ColorMethodStepProps {
  jewelry: JewelryItem
  onSelectMethod: (method: ColorMethod) => void
  onBack: () => void
}

const methods = [
  {
    id: "direct" as const,
    icon: Palette,
    title: "直接选择配色",
    description: "从预设配色方案中选择您喜欢的颜色，AI立即生成效果图",
    color: "bg-gradient-to-br from-[#c9a96e]/20 to-[#c9a96e]/5",
  },
  {
    id: "scene" as const,
    icon: MapPin,
    title: "场景推荐配色",
    description: "告诉AI您的使用场景，如婚礼、商务、日常等，获得专属配色建议",
    color: "bg-gradient-to-br from-[#7bb896]/20 to-[#7bb896]/5",
  },
  {
    id: "image" as const,
    icon: ImageIcon,
    title: "图片智能配色",
    description: "上传服装或人物照片，AI分析色彩为您推荐最搭配的珐琅配色",
    color: "bg-gradient-to-br from-[#a87cc9]/20 to-[#a87cc9]/5",
  },
]

export function ColorMethodStep({ jewelry, onSelectMethod, onBack }: ColorMethodStepProps) {
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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">选择配色定制方式</h3>
      <p className="text-sm text-[#8a7a6a] mb-8">三种方式帮您找到专属配色，款式保持不变，只改变珐琅釉色</p>

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
        返回上一步
      </Button>
    </div>
  )
}
