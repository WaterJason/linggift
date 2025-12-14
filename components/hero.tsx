"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative bg-gradient-to-b from-[#faf8f5] to-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#c9a96e] rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#c9a96e] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={120} height={120} className="mx-auto mb-6" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-wider text-[#3a3028] mb-6">
          {t.hero.title}
        </h1>
        <p className="text-base sm:text-lg text-[#6a5a4a] max-w-2xl mx-auto mb-4 leading-relaxed">{t.hero.subtitle}</p>
        <p className="text-sm sm:text-base text-[#8a7a6a] max-w-xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        {/* Color Customization CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#collection">
            <Button className="bg-[#c9a96e] text-white hover:bg-[#b8986d] text-base font-medium px-8 py-6 rounded-full">
              <Palette className="h-5 w-5 mr-2" />
              {t.hero.startCustomization}
            </Button>
          </Link>
          <Link href="#collection">
            <Button
              variant="outline"
              className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 text-base font-medium px-8 py-6 rounded-full bg-transparent"
            >
              {t.hero.browseCollection}
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">{t.hero.colorOptions}</p>
            <p className="text-xs text-[#8a7a6a]">{t.hero.colorOptionsLabel}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">{t.hero.handmade}</p>
            <p className="text-xs text-[#8a7a6a]">{t.hero.handmadeLabel}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">{t.hero.exclusive}</p>
            <p className="text-xs text-[#8a7a6a]">{t.hero.exclusiveLabel}</p>
          </div>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
