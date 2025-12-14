export interface JewelryItem {
  id: string
  name: string
  category: string
  price: string
  image: string
  colors: string[]
  description?: string
}

export const jewelryItems: JewelryItem[] = [
  {
    id: "1",
    name: "莲韵耳环",
    category: "耳饰",
    price: "¥1,280",
    image: "/cloisonne-lotus-earrings-gold-blue-enamel-jewelry.jpg",
    colors: ["蓝", "绿", "红"],
    description: "灵感源自荷塘莲韵，掐丝精细，釉色温润。",
  },
  {
    id: "2",
    name: "缠枝莲项链",
    category: "项链",
    price: "¥2,680",
    image: "/cloisonne-necklace-pendant-lotus-flower-enamel.jpg",
    colors: ["蓝白", "粉金", "翠绿"],
    description: "缠枝莲纹样，寓意连绵不断，生生不息。",
  },
  {
    id: "3",
    name: "如意手链",
    category: "手链",
    price: "¥1,580",
    image: "/cloisonne-bracelet-ruyi-pattern-enamel-gold.jpg",
    colors: ["红金", "蓝金", "绿金"],
    description: "如意云纹，寓意吉祥如意，万事顺遂。",
  },
  {
    id: "4",
    name: "牡丹胸针",
    category: "胸针",
    price: "¥1,980",
    image: "/cloisonne-brooch-peony-flower-enamel-gold-jewelry.jpg",
    colors: ["粉红", "紫红", "珊瑚"],
    description: "国色天香牡丹，尽显雍容华贵之美。",
  },
  {
    id: "5",
    name: "云纹戒指",
    category: "戒指",
    price: "¥980",
    image: "/cloisonne-ring-cloud-pattern-enamel-gold.jpg",
    colors: ["天蓝", "墨绿", "朱红"],
    description: "祥云纹饰，寓意步步高升，前程似锦。",
  },
  {
    id: "6",
    name: "蝶舞耳钉",
    category: "耳饰",
    price: "¥880",
    image: "/cloisonne-butterfly-earrings-studs-enamel-jewelry.jpg",
    colors: ["紫蓝", "粉白", "金绿"],
    description: "蝴蝶翩翩，灵动优雅，点缀耳畔风情。",
  },
  {
    id: "7",
    name: "凤凰涅槃吊坠",
    category: "项链",
    price: "¥3,280",
    image: "/cloisonne-phoenix-pendant-necklace-enamel-gold.jpg",
    colors: ["红金", "蓝金", "紫金"],
    description: "凤凰浴火重生，象征涅槃新生。",
  },
  {
    id: "8",
    name: "梅花手镯",
    category: "手链",
    price: "¥2,180",
    image: "/cloisonne-plum-blossom-bracelet-bangle-enamel.jpg",
    colors: ["粉白", "红白", "紫白"],
    description: "傲雪寒梅，坚韧高洁，冬日里的一抹芳香。",
  },
]

export function getJewelryById(id: string): JewelryItem | undefined {
  return jewelryItems.find((item) => item.id === id)
}

export function getJewelryByCategory(category: string): JewelryItem[] {
  if (category === "全部") return jewelryItems
  return jewelryItems.filter((item) => item.category === category)
}
