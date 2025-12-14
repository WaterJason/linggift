"use client"

import { Gem, UserCircle, Palette, Sparkles, Link2, CreditCard } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const icons = [Gem, UserCircle, Palette, Sparkles, Link2, CreditCard]

export function HowItWorks() {
  const { t } = useI18n()

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">
          {t.howItWorks.title}
        </h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">{t.howItWorks.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#faf8f5] border border-[#c9a96e]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-[#c9a96e]" />
                </div>
                <div className="text-xs text-[#c9a96e] mb-1 font-medium">0{index + 1}</div>
                <h3 className="text-sm font-serif font-medium mb-2 text-[#3a3028]">{step.title}</h3>
                <p className="text-[#6a5a4a] leading-relaxed text-xs">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
