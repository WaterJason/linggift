"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import type { UserInfo, ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { generateColorScheme } from "@/lib/ai-api"

interface DirectColorStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onColorGenerated: (result: ColorResult) => void
  onBack: () => void
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

const colorPalettes = [
  {
    id: "royal-blue",
    name: "宫廷蓝",
    colors: ["#1a4b8c", "#3d7ab8", "#89b4d4", "#c9a96e"],
    description: "经典皇家蓝，尊贵典雅",
  },
  {
    id: "jade-green",
    name: "翠玉绿",
    colors: ["#2d5a4a", "#4a8b6f", "#7bb896", "#c9a96e"],
    description: "清新翡翠绿，自然灵动",
  },
  {
    id: "rouge-red",
    name: "胭脂红",
    colors: ["#8b2942", "#c44569", "#e87a9f", "#c9a96e"],
    description: "优雅胭脂红，喜庆祥和",
  },
  {
    id: "purple",
    name: "紫禁紫",
    colors: ["#4a2c6a", "#7b4e9e", "#a87cc9", "#c9a96e"],
    description: "尊贵紫罗兰，神秘高雅",
  },
  {
    id: "amber",
    name: "暖阳橙",
    colors: ["#b35c1e", "#d97a3a", "#f0a060", "#c9a96e"],
    description: "温暖琥珀橙，活力四射",
  },
  {
    id: "ivory",
    name: "素雅白",
    colors: ["#f5f5f0", "#e8e8e0", "#d4d4cc", "#c9a96e"],
    description: "纯净素白，简约大方",
  },
  {
    id: "peacock",
    name: "孔雀蓝",
    colors: ["#006d77", "#0a9396", "#94d2bd", "#c9a96e"],
    description: "孔雀羽翠，华丽璀璨",
  },
  {
    id: "peach",
    name: "桃花粉",
    colors: ["#d4a5a5", "#e8c4c4", "#f5e6e6", "#c9a96e"],
    description: "温柔桃粉，甜美可人",
  },
]

export function DirectColorStep({
  jewelry,
  userInfo,
  onColorGenerated,
  onBack,
  isGenerating,
  setIsGenerating,
}: DirectColorStepProps) {
  const [selectedPalette, setSelectedPalette] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!selectedPalette) return

    const palette = colorPalettes.find((p) => p.id === selectedPalette)
    if (!palette) return

    setIsGenerating(true)

    try {
      const result = await generateColorScheme({
        method: "direct",
        jewelry,
        userInfo,
        selectedPalette: palette,
      })
      onColorGenerated(result)
    } catch (error) {
      console.error("生成配色方案失败:", error)
      // Fallback to default result
      onColorGenerated({
        primaryColor: palette.colors[0],
        secondaryColor: palette.colors[1],
        accentColor: palette.colors[2],
        goldTone: palette.colors[3],
        name: palette.name,
        description: `基于${palette.name}配色方案，为您的${jewelry.name}定制的专属珐琅配色。`,
      })
    } finally {
      setIsGenerating(false)
    }
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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">选择配色方案</h3>
      <p className="text-sm text-[#8a7a6a] mb-6">选择您喜欢的配色，AI将为您生成专属效果图</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {colorPalettes.map((palette) => (
          <button
            key={palette.id}
            onClick={() => setSelectedPalette(palette.id)}
            className={`p-4 rounded-xl border-2 transition-all text-left ${
              selectedPalette === palette.id
                ? "border-[#c9a96e] bg-[#faf8f5]"
                : "border-transparent bg-[#faf8f5] hover:border-[#c9a96e]/50"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {palette.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-white -ml-1 first:ml-0"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              {selectedPalette === palette.id && <Check className="h-4 w-4 text-[#c9a96e] ml-auto" />}
            </div>
            <p className="font-medium text-sm text-[#3a3028]">{palette.name}</p>
            <p className="text-xs text-[#8a7a6a]">{palette.description}</p>
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回
        </Button>
        <Button
          onClick={handleGenerate}
          disabled={!selectedPalette || isGenerating}
          className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 h-12"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              AI生成中...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              AI生成配色方案
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
