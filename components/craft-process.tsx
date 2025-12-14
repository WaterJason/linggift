"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

const craftImages = [
  "/metal-base-forming-jewelry-craft.jpg",
  "/metal-engraving-chiseling-jewelry-craft.jpg",
  "/enamel-firing-blue-craft-process.jpg",
  "/cloisonne-enamel-filling-colorful-craft.jpg",
  "/enamel-glaze-fixing-crystal-texture-jewelry.jpg",
  "/jewelry-accessory-assembly-pearls-chains.jpg",
]

export function CraftProcess() {
  const { t } = useI18n()

  return (
    <section id="craft" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">{t.craft.title}</h2>
        <p className="text-center text-[#8a7a6a] mb-4 max-w-lg mx-auto">{t.craft.subtitle}</p>
        <p className="text-center text-[#c9a96e] text-sm mb-12 max-w-2xl mx-auto">{t.craft.innovation}</p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.craft.steps.map((step, index) => {
            const isHighlight = index === 4 // Glaze fixing step
            return (
              <div key={index} className="group">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={craftImages[index] || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center ${
                      isHighlight ? "bg-[#b8860b] ring-2 ring-[#c9a96e] ring-offset-2" : "bg-[#c9a96e]"
                    }`}
                  >
                    <span className="text-white text-sm font-medium">{index + 1}</span>
                  </div>
                  {isHighlight && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#b8860b]/90 to-transparent p-2">
                      <span className="text-white text-xs font-medium">{t.craft.innovationBadge}</span>
                    </div>
                  )}
                </div>
                <h3 className={`font-serif font-medium mb-2 ${isHighlight ? "text-[#b8860b]" : "text-[#3a3028]"}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-[#6a5a4a] leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div id="about" className="mt-16 bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-[#3a3028] mb-4">
                {t.craft.brandStory.title}
              </h3>
              <p className="text-[#6a5a4a] leading-relaxed mb-4">{t.craft.brandStory.p1}</p>
              <p className="text-[#6a5a4a] leading-relaxed mb-4">{t.craft.brandStory.p2}</p>
              <p className="text-[#6a5a4a] leading-relaxed">{t.craft.brandStory.p3}</p>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/artisan-craftsman-making-cloisonne-enamel-jewelry-.jpg"
                alt="珐琅工艺师"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
