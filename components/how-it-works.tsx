import { Gem, UserCircle, Palette, Sparkles, Link2, CreditCard } from "lucide-react"

const steps = [
  {
    icon: Gem,
    title: "选择款式",
    description: "浏览珐琅首饰系列，选择您心仪的款式。款式不变，只定制配色。",
  },
  {
    icon: UserCircle,
    title: "填写信息",
    description: "告诉AI使用者身份、年龄、风格偏好，让AI更懂您的需求。",
  },
  {
    icon: Palette,
    title: "配色方式",
    description: "三种方式：直接选色、场景推荐、或上传图片让AI智能配色。",
  },
  {
    icon: Sparkles,
    title: "AI生成",
    description: "AI根据您的选择，为这款首饰生成专属的珐琅配色效果图。",
  },
  {
    icon: Link2,
    title: "选配饰",
    description: "可选珍珠、玛瑙等珠宝点缀，以及金链、丝绳等链条搭配。",
  },
  {
    icon: CreditCard,
    title: "确认下单",
    description: "填写收件信息，确认订单，匠人将为您手工制作专属作品。",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">AI定制流程</h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">六步轻松定制您的专属珐琅首饰配色</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-[#faf8f5] border border-[#c9a96e]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-[#c9a96e]" />
              </div>
              <div className="text-xs text-[#c9a96e] mb-1 font-medium">0{index + 1}</div>
              <h3 className="text-sm font-serif font-medium mb-2 text-[#3a3028]">{step.title}</h3>
              <p className="text-[#6a5a4a] leading-relaxed text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
