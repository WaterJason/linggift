import Image from "next/image"

const craftSteps = [
  {
    title: "制胎",
    description: "精选优质金属材料，手工打造首饰胎体，奠定作品基础形态",
    image: "/metal-base-forming-jewelry-craft.jpg",
  },
  {
    title: "鏨刻",
    description: "运用传统鏨刻技法，在胎体上雕刻精美纹样与掐丝图案",
    image: "/metal-engraving-chiseling-jewelry-craft.jpg",
  },
  {
    title: "烧蓝",
    description: "将珐琅釉料初步烧制，使其与金属胎体初步结合",
    image: "/enamel-firing-blue-craft-process.jpg",
  },
  {
    title: "点蓝",
    description: "将彩色珐琅釉料精准填入图案间隙，呈现丰富色彩层次",
    image: "/cloisonne-enamel-filling-colorful-craft.jpg",
  },
  {
    title: "固釉",
    description: "采用当代固釉技术替代传统烧制，完美保留珐琅的宝石颗粒质感",
    image: "/enamel-glaze-fixing-crystal-texture-jewelry.jpg",
    highlight: true, // Mark as innovative technique
  },
  {
    title: "配饰",
    description: "精选珍珠、玛瑙等珠宝与链饰，完成最终的首饰组装",
    image: "/jewelry-accessory-assembly-pearls-chains.jpg",
  },
]

export function CraftProcess() {
  return (
    <section id="craft" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">匠心工艺</h2>
        <p className="text-center text-[#8a7a6a] mb-4 max-w-lg mx-auto">传承千年的珐琅工艺，每一步都凝聚匠人心血</p>
        <p className="text-center text-[#c9a96e] text-sm mb-12 max-w-2xl mx-auto">
          我们的当代珐琅工艺以固釉技术替代传统烧制，更好地保留珐琅的宝石颗粒感，呈现更加精美的质感
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {craftSteps.map((step, index) => (
            <div key={index} className="group">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.highlight ? "bg-[#b8860b] ring-2 ring-[#c9a96e] ring-offset-2" : "bg-[#c9a96e]"
                  }`}
                >
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
                {step.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#b8860b]/90 to-transparent p-2">
                    <span className="text-white text-xs font-medium">当代创新工艺</span>
                  </div>
                )}
              </div>
              <h3 className={`font-serif font-medium mb-2 ${step.highlight ? "text-[#b8860b]" : "text-[#3a3028]"}`}>
                {step.title}
              </h3>
              <p className="text-xs text-[#6a5a4a] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-[#3a3028] mb-4">品牌故事</h3>
              <p className="text-[#6a5a4a] leading-relaxed mb-4">
                聆花珐琅，源于对传统珐琅工艺的热爱与传承。我们相信，每一件珐琅首饰都应该是独一无二的艺术品，承载着佩戴者的个性与品味。
              </p>
              <p className="text-[#6a5a4a] leading-relaxed mb-4">
                我们创新性地采用固釉技术替代传统的高温烧制工艺，这一突破使珐琅釉料能够完美保留其天然的宝石颗粒质感，呈现出更加璀璨精美的视觉效果。
              </p>
              <p className="text-[#6a5a4a] leading-relaxed">
                结合AI智能配色技术，我们精选百余种珐琅釉色，让您能够自由搭配，打造专属于自己的色彩故事。每一件作品都由资深珐琅工艺师手工制作，确保品质与美感的完美结合。
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image src="/artisan-craftsman-making-cloisonne-enamel-jewelry-.jpg" alt="珐琅工艺师" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
