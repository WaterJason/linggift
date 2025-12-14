import Image from "next/image"

const reviews = [
  {
    quote: "定制的莲韵耳环配色太美了！宫廷蓝配金色非常显气质，戴上后收到很多赞美。",
    customer: "王女士",
    product: "莲韵耳环 - 宫廷蓝",
    image: "/cloisonne-lotus-earrings-blue-gold-elegant.jpg",
  },
  {
    quote: "送给妈妈的生日礼物，她特别喜欢！胭脂红的配色很衬肤色，做工也非常精致。",
    customer: "李先生",
    product: "牡丹胸针 - 胭脂红",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    quote: "第三次购买了，这次选了翠玉绿的手链，每一件配色都很独特，品质始终如一。",
    customer: "张女士",
    product: "如意手链 - 翠玉绿",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">顾客好评</h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">听听他们的定制故事</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#faf8f5] rounded-2xl p-6">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                <Image src={review.image || "/placeholder.svg"} alt={review.product} fill className="object-cover" />
              </div>
              <p className="text-xs text-[#c9a96e] mb-2">{review.product}</p>
              <p className="text-[#5a4a3a] text-sm leading-relaxed mb-4">"{review.quote}"</p>
              <p className="text-xs text-[#8a7a6a]">— {review.customer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
