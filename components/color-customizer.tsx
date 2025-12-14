"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const colorPalettes = [
  { id: 1, name: "宫廷蓝", colors: ["#1a4b8c", "#3d7ab8", "#89b4d4", "#c9a96e"], description: "经典皇家蓝配金" },
  { id: 2, name: "翠玉绿", colors: ["#2d5a4a", "#4a8b6f", "#7bb896", "#c9a96e"], description: "清新翡翠绿配金" },
  { id: 3, name: "胭脂红", colors: ["#8b2942", "#c44569", "#e87a9f", "#c9a96e"], description: "优雅胭脂红配金" },
  { id: 4, name: "紫禁紫", colors: ["#4a2c6a", "#7b4e9e", "#a87cc9", "#c9a96e"], description: "尊贵紫罗兰配金" },
  { id: 5, name: "暖阳橙", colors: ["#b35c1e", "#d97a3a", "#f0a060", "#c9a96e"], description: "温暖琥珀橙配金" },
  { id: 6, name: "素雅白", colors: ["#f5f5f0", "#e8e8e0", "#d4d4cc", "#c9a96e"], description: "纯净素白配金" },
]

export function ColorCustomizer() {
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0])

  return (
    <section id="customize" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">配色定制</h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">
          选择您喜爱的珐琅配色方案，让每件首饰都独一无二
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Area */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#faf8f5] p-8">
              <div className="relative w-full h-full">
                <Image src="/cloisonne-jewelry-pendant-detailed-gold-enamel.jpg" alt="配色预览" fill className="object-contain" />
                {/* Color overlay effect simulation */}
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-30 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${selectedPalette.colors[0]}, ${selectedPalette.colors[1]})`,
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-[#c9a96e]/20">
              <p className="text-sm text-[#6a5a4a]">
                当前配色：<span className="font-medium text-[#c9a96e]">{selectedPalette.name}</span>
              </p>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-[#3a3028]">选择配色方案</h3>
            <div className="grid grid-cols-2 gap-4">
              {colorPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => setSelectedPalette(palette)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedPalette.id === palette.id
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
                    {selectedPalette.id === palette.id && <Check className="h-4 w-4 text-[#c9a96e] ml-auto" />}
                  </div>
                  <p className="font-medium text-sm text-[#3a3028]">{palette.name}</p>
                  <p className="text-xs text-[#8a7a6a]">{palette.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#faf8f5] rounded-xl">
              <p className="text-sm text-[#6a5a4a] mb-4">
                提示：配色定制仅改变珐琅釉色，首饰款式和工艺保持不变，确保每件作品的品质与美感。
              </p>
              <Button className="w-full bg-[#c9a96e] text-white hover:bg-[#b8986d]">确认配色并下单</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
