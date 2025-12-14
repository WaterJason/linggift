"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import type { UserInfo, ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { generateColorScheme } from "@/lib/ai-api"
import { useI18n } from "@/lib/i18n/context"

interface SceneColorStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onColorGenerated: (result: ColorResult) => void
  onBack: () => void
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

export function SceneColorStep({
  jewelry,
  userInfo,
  onColorGenerated,
  onBack,
  isGenerating,
  setIsGenerating,
}: SceneColorStepProps) {
  const { t } = useI18n()
  const [selectedScene, setSelectedScene] = useState<string | null>(null)

  const scenes = [
    {
      id: "wedding",
      name: t.customization.sceneColorStep.scenes.wedding.name,
      icon: "💒",
      description: t.customization.sceneColorStep.scenes.wedding.description,
    },
    {
      id: "business",
      name: t.customization.sceneColorStep.scenes.business.name,
      icon: "💼",
      description: t.customization.sceneColorStep.scenes.business.description,
    },
    {
      id: "daily",
      name: t.customization.sceneColorStep.scenes.daily.name,
      icon: "☕",
      description: t.customization.sceneColorStep.scenes.daily.description,
    },
    {
      id: "party",
      name: t.customization.sceneColorStep.scenes.party.name,
      icon: "🥂",
      description: t.customization.sceneColorStep.scenes.party.description,
    },
    {
      id: "cultural",
      name: t.customization.sceneColorStep.scenes.cultural.name,
      icon: "🎭",
      description: t.customization.sceneColorStep.scenes.cultural.description,
    },
    {
      id: "travel",
      name: t.customization.sceneColorStep.scenes.travel.name,
      icon: "✈️",
      description: t.customization.sceneColorStep.scenes.travel.description,
    },
    {
      id: "gift",
      name: t.customization.sceneColorStep.scenes.gift.name,
      icon: "🎁",
      description: t.customization.sceneColorStep.scenes.gift.description,
    },
    {
      id: "traditional",
      name: t.customization.sceneColorStep.scenes.traditional.name,
      icon: "🏮",
      description: t.customization.sceneColorStep.scenes.traditional.description,
    },
  ]

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
      const fallbackColors: Record<string, ColorResult> = {
        wedding: {
          primaryColor: "#8b2942",
          secondaryColor: "#c44569",
          accentColor: "#e87a9f",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        business: {
          primaryColor: "#1a4b8c",
          secondaryColor: "#3d7ab8",
          accentColor: "#89b4d4",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        daily: {
          primaryColor: "#2d5a4a",
          secondaryColor: "#4a8b6f",
          accentColor: "#7bb896",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        party: {
          primaryColor: "#4a2c6a",
          secondaryColor: "#7b4e9e",
          accentColor: "#a87cc9",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        cultural: {
          primaryColor: "#006d77",
          secondaryColor: "#0a9396",
          accentColor: "#94d2bd",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        travel: {
          primaryColor: "#b35c1e",
          secondaryColor: "#d97a3a",
          accentColor: "#f0a060",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        gift: {
          primaryColor: "#d4a5a5",
          secondaryColor: "#e8c4c4",
          accentColor: "#f5e6e6",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
        },
        traditional: {
          primaryColor: "#8b2942",
          secondaryColor: "#c9a96e",
          accentColor: "#f0a060",
          goldTone: "#c9a96e",
          name: scene.name,
          description: scene.description,
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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">{t.customization.sceneColorStep.title}</h3>
      <p className="text-sm text-[#8a7a6a] mb-6">{t.customization.sceneColorStep.subtitle}</p>

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
          {t.customization.sceneColorStep.back}
        </Button>
        <Button
          onClick={handleGenerate}
          disabled={!selectedScene || isGenerating}
          className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 h-12"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              {t.customization.sceneColorStep.generating}
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              {t.customization.sceneColorStep.generate}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
