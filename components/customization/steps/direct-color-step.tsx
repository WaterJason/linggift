"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import type { UserInfo, ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { generateColorScheme } from "@/lib/ai-api"
import { useI18n } from "@/lib/i18n/context"

interface DirectColorStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onColorGenerated: (result: ColorResult) => void
  onBack: () => void
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

export function DirectColorStep({
  jewelry,
  userInfo,
  onColorGenerated,
  onBack,
  isGenerating,
  setIsGenerating,
}: DirectColorStepProps) {
  const { t } = useI18n()
  const [selectedPalette, setSelectedPalette] = useState<string | null>(null)

  const colorPalettes = [
    {
      id: "royal-blue",
      name: t.customization.directColorStep.palettes.royalBlue.name,
      colors: ["#1a4b8c", "#3d7ab8", "#89b4d4", "#c9a96e"],
      description: t.customization.directColorStep.palettes.royalBlue.description,
    },
    {
      id: "jade-green",
      name: t.customization.directColorStep.palettes.jadeGreen.name,
      colors: ["#2d5a4a", "#4a8b6f", "#7bb896", "#c9a96e"],
      description: t.customization.directColorStep.palettes.jadeGreen.description,
    },
    {
      id: "rouge-red",
      name: t.customization.directColorStep.palettes.rougeRed.name,
      colors: ["#8b2942", "#c44569", "#e87a9f", "#c9a96e"],
      description: t.customization.directColorStep.palettes.rougeRed.description,
    },
    {
      id: "purple",
      name: t.customization.directColorStep.palettes.purple.name,
      colors: ["#4a2c6a", "#7b4e9e", "#a87cc9", "#c9a96e"],
      description: t.customization.directColorStep.palettes.purple.description,
    },
    {
      id: "amber",
      name: t.customization.directColorStep.palettes.amber.name,
      colors: ["#b35c1e", "#d97a3a", "#f0a060", "#c9a96e"],
      description: t.customization.directColorStep.palettes.amber.description,
    },
    {
      id: "ivory",
      name: t.customization.directColorStep.palettes.ivory.name,
      colors: ["#f5f5f0", "#e8e8e0", "#d4d4cc", "#c9a96e"],
      description: t.customization.directColorStep.palettes.ivory.description,
    },
    {
      id: "peacock",
      name: t.customization.directColorStep.palettes.peacock.name,
      colors: ["#006d77", "#0a9396", "#94d2bd", "#c9a96e"],
      description: t.customization.directColorStep.palettes.peacock.description,
    },
    {
      id: "peach",
      name: t.customization.directColorStep.palettes.peach.name,
      colors: ["#d4a5a5", "#e8c4c4", "#f5e6e6", "#c9a96e"],
      description: t.customization.directColorStep.palettes.peach.description,
    },
  ]

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
      console.error("Failed to generate color scheme:", error)
      onColorGenerated({
        primaryColor: palette.colors[0],
        secondaryColor: palette.colors[1],
        accentColor: palette.colors[2],
        goldTone: palette.colors[3],
        name: palette.name,
        description: palette.description,
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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">{t.customization.directColorStep.title}</h3>
      <p className="text-sm text-[#8a7a6a] mb-6">{t.customization.directColorStep.subtitle}</p>

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
          {t.customization.directColorStep.back}
        </Button>
        <Button
          onClick={handleGenerate}
          disabled={!selectedPalette || isGenerating}
          className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 h-12"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              {t.customization.directColorStep.generating}
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              {t.customization.directColorStep.generate}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
