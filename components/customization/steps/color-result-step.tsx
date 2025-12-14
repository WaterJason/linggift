"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, Check, Sparkles } from "lucide-react"
import type { ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"

interface ColorResultStepProps {
  jewelry: JewelryItem
  colorResult: ColorResult
  onConfirm: () => void
  onRegenerate: () => void
  onBack: () => void
}

export function ColorResultStep({ jewelry, colorResult, onConfirm, onRegenerate, onBack }: ColorResultStepProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2 text-center">AI为您定制的配色方案</h3>
      <p className="text-sm text-[#8a7a6a] mb-8 text-center">
        方案名称：<span className="text-[#c9a96e] font-medium">{colorResult.name}</span>
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Preview - 支持显示AI生成的效果图 */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#faf8f5] p-4">
            <div className="relative w-full h-full">
              {colorResult.generatedImage ? (
                <>
                  <Image
                    src={colorResult.generatedImage || "/placeholder.svg"}
                    alt={`${jewelry.name} - ${colorResult.name}配色效果图`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-2 right-2 bg-[#c9a96e] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI生成
                  </div>
                </>
              ) : (
                <>
                  <Image src={jewelry.image || "/placeholder.svg"} alt={jewelry.name} fill className="object-contain" />
                  {/* Color overlay simulation */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-30 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colorResult.primaryColor}, ${colorResult.secondaryColor})`,
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#c9a96e]/20">
            <p className="text-xs text-[#6a5a4a]">
              {jewelry.name} · {colorResult.name}
            </p>
          </div>
        </div>

        {/* Color Details */}
        <div>
          <h4 className="font-serif text-lg mb-4 text-[#3a3028]">配色详情</h4>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 p-3 bg-[#faf8f5] rounded-xl">
              <div
                className="w-12 h-12 rounded-lg border border-white shadow-sm"
                style={{ backgroundColor: colorResult.primaryColor }}
              />
              <div>
                <p className="text-sm font-medium text-[#3a3028]">主色调</p>
                <p className="text-xs text-[#8a7a6a]">{colorResult.primaryColor}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-[#faf8f5] rounded-xl">
              <div
                className="w-12 h-12 rounded-lg border border-white shadow-sm"
                style={{ backgroundColor: colorResult.secondaryColor }}
              />
              <div>
                <p className="text-sm font-medium text-[#3a3028]">辅色调</p>
                <p className="text-xs text-[#8a7a6a]">{colorResult.secondaryColor}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-[#faf8f5] rounded-xl">
              <div
                className="w-12 h-12 rounded-lg border border-white shadow-sm"
                style={{ backgroundColor: colorResult.accentColor }}
              />
              <div>
                <p className="text-sm font-medium text-[#3a3028]">点缀色</p>
                <p className="text-xs text-[#8a7a6a]">{colorResult.accentColor}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-[#faf8f5] rounded-xl">
              <div
                className="w-12 h-12 rounded-lg border border-white shadow-sm"
                style={{ backgroundColor: colorResult.goldTone }}
              />
              <div>
                <p className="text-sm font-medium text-[#3a3028]">金丝色</p>
                <p className="text-xs text-[#8a7a6a]">{colorResult.goldTone}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#faf8f5] rounded-xl">
            <p className="text-sm text-[#6a5a4a]">{colorResult.description}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回
        </Button>
        <Button
          variant="outline"
          onClick={onRegenerate}
          className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          重新生成
        </Button>
        <Button onClick={onConfirm} className="flex-1 bg-[#c9a96e] text-white hover:bg-[#b8986d] h-12">
          <Check className="w-4 h-4 mr-2" />
          确认配色，选择配饰
        </Button>
      </div>
    </div>
  )
}
