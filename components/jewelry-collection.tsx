"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { jewelryItems } from "@/lib/jewelry-data"

const categories = ["全部", "耳饰", "项链", "手链", "胸针", "戒指"]

export function JewelryCollection() {
  const [activeCategory, setActiveCategory] = useState("全部")

  const filteredItems =
    activeCategory === "全部" ? jewelryItems : jewelryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="collection" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">首饰系列</h2>
        <p className="text-center text-[#8a7a6a] mb-10 max-w-lg mx-auto">每一款都可AI定制专属配色</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#c9a96e] text-white"
                  : "bg-white text-[#6a5a4a] hover:bg-[#c9a96e]/10 border border-[#c9a96e]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
                    AI定制配色
                  </Button>
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-medium text-[#3a3028] mb-1">{item.name}</h3>
                <p className="text-xs text-[#8a7a6a] mb-2">可选配色：{item.colors.join("、")}</p>
                <p className="text-[#c9a96e] font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
