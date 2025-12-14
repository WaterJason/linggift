import { Palette, Gem, Package } from "lucide-react"

const steps = [
  {
    icon: Gem,
    title: "选择款式",
    description: "浏览我们的珐琅首饰系列，选择您心仪的款式设计。每款首饰都由资深工艺师精心打造。",
  },
  {
    icon: Palette,
    title: "定制配色",
    description: "从上百种珐琅釉色中选择您喜爱的配色方案，打造专属于您的独特色彩组合。",
  },
  {
    icon: Package,
    title: "匠心制作",
    description: "由经验丰富的珐琅工艺师手工制作，每一件作品都经过严格品控，确保品质卓越。",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">定制流程</h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">三步轻松定制您的专属珐琅首饰</p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#faf8f5] border border-[#c9a96e]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-[#c9a96e]" />
              </div>
              <div className="text-sm text-[#c9a96e] mb-2">0{index + 1}</div>
              <h3 className="text-lg font-serif font-medium mb-3 text-[#3a3028]">{step.title}</h3>
              <p className="text-[#6a5a4a] leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
