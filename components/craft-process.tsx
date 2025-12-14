import Image from "next/image"

const craftSteps = [
  {
    title: "掐丝",
    description: "用镊子将金丝弯曲成各种图案，固定在胎体上",
    image: "/cloisonne-wire-bending-craft-process-traditional.jpg",
  },
  {
    title: "点蓝",
    description: "将珐琅釉料填入金丝间隙，精确控制颜色层次",
    image: "/cloisonne-enamel-filling-colorful-craft-process.jpg",
  },
  {
    title: "烧蓝",
    description: "高温烧制使珐琅釉料熔化，与金属完美融合",
    image: "/kiln-firing-enamel-jewelry-craft-process.jpg",
  },
  {
    title: "打磨",
    description: "精细打磨抛光，呈现珐琅的璀璨光泽",
    image: "/polishing-jewelry-craft-process-shiny.jpg",
  },
]

export function CraftProcess() {
  return (
    <section id="craft" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">匠心工艺</h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">传承千年的珐琅工艺，每一步都凝聚匠人心血</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftSteps.map((step, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-8 h-8 bg-[#c9a96e] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
              </div>
              <h3 className="font-serif font-medium text-[#3a3028] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6a5a4a] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Brand Story Preview */}
        <div id="about" className="mt-16 bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-[#3a3028] mb-4">品牌故事</h3>
              <p className="text-[#6a5a4a] leading-relaxed mb-4">
                聆花珐琅，源于对传统珐琅工艺的热爱与传承。我们相信，每一件珐琅首饰都应该是独一无二的艺术品，承载着佩戴者的个性与品味。
              </p>
              <p className="text-[#6a5a4a] leading-relaxed">
                我们精选百余种珐琅釉色，让您能够自由搭配，打造专属于自己的色彩故事。每一件作品都由资深珐琅工艺师手工制作，确保品质与美感的完美结合。
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image src="/artisan-craftsman-making-cloisonne-jewelry-worksho.jpg" alt="珐琅工艺师" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
