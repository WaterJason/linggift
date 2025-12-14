"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import type { UserInfo, ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { generateColorScheme } from "@/lib/ai-api"

interface SceneColorStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onColorGenerated: (result: ColorResult) => void
  onBack: () => void
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

const scenes = [
  { id: "wedding", name: "婚礼喜庆", icon: "💒", description: "婚宴、订婚、周年纪念" },
  { id: "business", name: "商务正装", icon: "💼", description: "会议、商务宴请、职场" },
  { id: "daily", name: "日常休闲", icon: "☕", description: "逛街、约会、朋友聚会" },
  { id: "party", name: "晚宴派对", icon: "🥂", description: "晚会、宴会、颁奖典礼" },
  { id: "cultural", name: "文化艺术", icon: "🎭", description: "展览、演出、文艺活动" },
  { id: "travel", name: "旅行度假", icon: "✈️", description: "度假、旅拍、户外" },
  { id: "gift", name: "节日送礼", icon: "🎁", description: "生日、节日、特殊纪念" },
  { id: "traditional", name: "传统节庆", icon: "🏮", description: "春节、中秋、传统仪式" },
]

export function SceneColorStep({
  jewelry,
  userInfo,
  onColorGenerated,
  onBack,
  isGenerating,
  setIsGenerating,
}: SceneColorStepProps) {
  const [selectedScene, setSelectedScene] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!selectedScene) return

    const scene = scenes.find((s) => s.id === selectedScene)
    if (!scene) return

    setIsGenerating(true)

    try {
      const result = await generateColorScheme({
        method: "scene",
        jewelry,
        userInfo,
        scene,
      })
      onColorGenerated(result)
    } catch (error) {
      console.error("生成配色方案失败:", error)
      // Fallback result based on scene
      const fallbackColors: Record<string, ColorResult> = {
        wedding: {
          primaryColor: "#8b2942",
          secondaryColor: "#c44569",
          accentColor: "#e87a9f",
          goldTone: "#c9a96e",
          name: "喜庆红韵",
          description: "婚礼专属的喜庆红配色",
        },
        business: {
          primaryColor: "#1a4b8c",
          secondaryColor: "#3d7ab8",
          accentColor: "#89b4d4",
          goldTone: "#c9a96e",
          name: "商务蓝调",
          description: "专业稳重的商务蓝配色",
        },
        daily: {
          primaryColor: "#2d5a4a",
          secondaryColor: "#4a8b6f",
          accentColor: "#7bb896",
          goldTone: "#c9a96e",
          name: "清新日常",
          description: "适合日常佩戴的清新绿配色",
        },
        party: {
          primaryColor: "#4a2c6a",
          secondaryColor: "#7b4e9e",
          accentColor: "#a87cc9",
          goldTone: "#c9a96e",
          name: "派对紫韵",
          description: "华丽璀璨的派对紫配色",
        },
        cultural: {
          primaryColor: "#006d77",
          secondaryColor: "#0a9396",
          accentColor: "#94d2bd",
          goldTone: "#c9a96e",
          name: "艺术青韵",
          description: "富有艺术气息的青绿配色",
        },
        travel: {
          primaryColor: "#b35c1e",
          secondaryColor: "#d97a3a",
          accentColor: "#f0a060",
          goldTone: "#c9a96e",
          name: "阳光橙韵",
          description: "活力四射的旅行橙配色",
        },
        gift: {
          primaryColor: "#d4a5a5",
          secondaryColor: "#e8c4c4",
          accentColor: "#f5e6e6",
          goldTone: "#c9a96e",
          name: "温馨粉韵",
          description: "温柔甜美的送礼粉配色",
        },
        traditional: {
          primaryColor: "#8b2942",
          secondaryColor: "#c9a96e",
          accentColor: "#f0a060",
          goldTone: "#c9a96e",
          name: "传统红金",
          description: "喜庆祥和的传统红金配色",
        },
      }
      onColorGenerated(fallbackColors[selectedScene] || fallbackColors.daily)
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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">选择使用场景</h3>
      <p className="text-sm text-[#8a7a6a] mb-6">告诉AI您的佩戴场景，为您推荐最合适的配色</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene.id)}
            className={`p-4 rounded-xl border-2 transition-all text-left ${
              selectedScene === scene.id
                ? "border-[#c9a96e] bg-[#faf8f5]"
                : "border-transparent bg-[#faf8f5] hover:border-[#c9a96e]/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{scene.icon}</span>
              {selectedScene === scene.id && <Check className="h-4 w-4 text-[#c9a96e]" />}
            </div>
            <p className="font-medium text-sm text-[#3a3028]">{scene.name}</p>
            <p className="text-xs text-[#8a7a6a]">{scene.description}</p>
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
          disabled={!selectedScene || isGenerating}
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
              AI推荐配色方案
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
