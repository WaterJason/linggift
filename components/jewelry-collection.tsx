"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { jewelryItems } from "@/lib/jewelry-data"
import { useI18n } from "@/lib/i18n/context"

export function JewelryCollection() {
  const { t, locale } = useI18n()
  const [activeCategory, setActiveCategory] = useState("all")

  const categoryKeys = ["all", "earrings", "necklace", "bracelet", "brooch", "ring"] as const
  const categoryMap: Record<string, string> = {
    all: "全部",
    earrings: "耳饰",
    necklace: "项链",
    bracelet: "手链",
    brooch: "胸针",
    ring: "戒指",
  }

  const filteredItems =
    activeCategory === "all"
      ? jewelryItems
      : jewelryItems.filter((item) => item.category === categoryMap[activeCategory])
  // </CHANGE>

  return (
    <section id="collection" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">
          {t.collection.title}
        </h2>
        <p className="text-center text-[#8a7a6a] mb-10 max-w-lg mx-auto">{t.collection.subtitle}</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === key
                  ? "bg-[#c9a96e] text-white"
                  : "bg-white text-[#6a5a4a] hover:bg-[#c9a96e]/10 border border-[#c9a96e]/30"
              }`}
            >
              {t.collection.categories[key]}
            </button>
          ))}
        </div>
        {/* </CHANGE> */}

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Link
                  href={`/customize/${item.id}`}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Button className="bg-white text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-sm">
                    <Palette className="h-4 w-4 mr-1" />
                    {t.collection.aiCustomize}
                  </Button>
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-medium text-[#3a3028] mb-1">{item.name}</h3>
                <p className="text-xs text-[#8a7a6a] mb-2">
                  {t.collection.colorOptions}
                  {item.colors.join("、")}
                </p>
                <p className="text-[#c9a96e] font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
