import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

export function Hero() {
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
          定制专属珐琅首饰
        </h1>
        <p className="text-base sm:text-lg text-[#6a5a4a] max-w-2xl mx-auto mb-4 leading-relaxed">
          传承千年珐琅工艺，融合现代美学设计
        </p>
        <p className="text-sm sm:text-base text-[#8a7a6a] max-w-xl mx-auto mb-10 leading-relaxed">
          选择您心仪的款式，定制专属配色方案，每一件都是独一无二的艺术珍品
        </p>

        {/* Color Customization CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[#c9a96e] text-white hover:bg-[#b8986d] text-base font-medium px-8 py-6 rounded-full">
            <Palette className="h-5 w-5 mr-2" />
            开始配色定制
          </Button>
          <Button
            variant="outline"
            className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 text-base font-medium px-8 py-6 rounded-full bg-transparent"
          >
            浏览首饰系列
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">100+</p>
            <p className="text-xs text-[#8a7a6a]">珐琅配色</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">纯手工</p>
            <p className="text-xs text-[#8a7a6a]">匠心制作</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif text-[#c9a96e] mb-1">专属</p>
            <p className="text-xs text-[#8a7a6a]">独一无二</p>
          </div>
        </div>
      </div>
    </section>
  )
}
