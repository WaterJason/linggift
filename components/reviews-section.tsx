"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

const reviewImages = [
  "/cloisonne-lotus-earrings-blue-gold-elegant.jpg",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

export function ReviewsSection() {
  const { t } = useI18n()

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">
          {t.reviews.title}
        </h2>
        <p className="text-center text-[#8a7a6a] mb-12 max-w-lg mx-auto">{t.reviews.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.reviews.items.map((review, index) => (
            <div key={index} className="bg-[#faf8f5] rounded-2xl p-6">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={reviewImages[index] || "/placeholder.svg"}
                  alt={review.product}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#c9a96e] mb-2">{review.product}</p>
              <p className="text-[#5a4a3a] text-sm leading-relaxed mb-4">"{review.quote}"</p>
              <p className="text-xs text-[#8a7a6a]">— {review.customer}</p>
            </div>
          ))}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
