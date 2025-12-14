"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

const categories = ["全部", "耳饰", "项链", "手链", "胸针", "戒指"]

const jewelryItems = [
  {
    id: 1,
    name: "莲韵耳环",
    category: "耳饰",
    price: "¥1,280",
    image: "/cloisonne-lotus-earrings-gold-blue-enamel-jewelry.jpg",
    colors: ["蓝", "绿", "红"],
  },
  {
    id: 2,
    name: "缠枝莲项链",
    category: "项链",
    price: "¥2,680",
    image: "/cloisonne-necklace-pendant-lotus-flower-enamel.jpg",
    colors: ["蓝白", "粉金", "翠绿"],
  },
  {
    id: 3,
    name: "如意手链",
    category: "手链",
    price: "¥1,580",
    image: "/cloisonne-bracelet-ruyi-pattern-enamel-gold.jpg",
    colors: ["红金", "蓝金", "绿金"],
  },
  {
    id: 4,
    name: "牡丹胸针",
    category: "胸针",
    price: "¥1,980",
    image: "/cloisonne-brooch-peony-flower-enamel-gold-jewelry.jpg",
    colors: ["粉红", "紫红", "珊瑚"],
  },
  {
    id: 5,
    name: "云纹戒指",
    category: "戒指",
    price: "¥980",
    image: "/cloisonne-ring-cloud-pattern-enamel-gold.jpg",
    colors: ["天蓝", "墨绿", "朱红"],
  },
  {
    id: 6,
    name: "蝶舞耳钉",
    category: "耳饰",
    price: "¥880",
    image: "/cloisonne-butterfly-earrings-studs-enamel-jewelry.jpg",
    colors: ["紫蓝", "粉白", "金绿"],
  },
]

export function JewelryCollection() {
  const [activeCategory, setActiveCategory] = useState("全部")

  const filteredItems =
    activeCategory === "全部" ? jewelryItems : jewelryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="collection" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-center mb-4 text-[#3a3028]">首饰系列</h2>
        <p className="text-center text-[#8a7a6a] mb-10 max-w-lg mx-auto">每一款都可定制专属配色</p>

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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white opacity-0 group-hover:opacity-100 transition-all text-sm">
                  <Palette className="h-4 w-4 mr-1" />
                  定制配色
                </Button>
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
