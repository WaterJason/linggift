export interface JewelryProduct {
  id: string
  name: string
  description: string
  basePriceInCents: number
  category: string
  image: string
}

export interface Accessory {
  id: string
  name: string
  category: string
  priceInCents: number
  image: string
}

// 首饰基础产品
export const JEWELRY_PRODUCTS: JewelryProduct[] = [
  {
    id: "lotus-earrings",
    name: "莲韵耳饰",
    description: "传统莲花图案珐琅耳饰",
    basePriceInCents: 128000,
    category: "耳饰",
    image: "/cloisonne-lotus-earrings-blue-gold-elegant.jpg",
  },
  {
    id: "butterfly-earrings",
    name: "蝶舞耳饰",
    description: "精美蝴蝶造型珐琅耳钉",
    basePriceInCents: 98000,
    category: "耳饰",
    image: "/cloisonne-butterfly-earrings-studs-enamel-jewelry.jpg",
  },
  {
    id: "phoenix-pendant",
    name: "凤凰吊坠",
    description: "凤凰图案珐琅项链吊坠",
    basePriceInCents: 168000,
    category: "项链",
    image: "/cloisonne-phoenix-pendant-necklace-enamel-gold.jpg",
  },
  {
    id: "lotus-pendant",
    name: "莲花吊坠",
    description: "莲花图案珐琅项链",
    basePriceInCents: 158000,
    category: "项链",
    image: "/cloisonne-necklace-pendant-lotus-flower-enamel.jpg",
  },
  {
    id: "ruyi-bracelet",
    name: "如意手链",
    description: "如意云纹珐琅手链",
    basePriceInCents: 188000,
    category: "手链",
    image: "/cloisonne-bracelet-ruyi-pattern-enamel-gold.jpg",
  },
  {
    id: "plum-blossom-bangle",
    name: "梅韵手镯",
    description: "梅花图案珐琅手镯",
    basePriceInCents: 268000,
    category: "手链",
    image: "/cloisonne-plum-blossom-bracelet-bangle-enamel.jpg",
  },
  {
    id: "peony-brooch",
    name: "牡丹胸针",
    description: "牡丹花造型珐琅胸针",
    basePriceInCents: 138000,
    category: "胸针",
    image: "/cloisonne-brooch-peony-flower-enamel-gold-jewelry.jpg",
  },
  {
    id: "cloud-ring",
    name: "祥云戒指",
    description: "祥云图案珐琅戒指",
    basePriceInCents: 88000,
    category: "戒指",
    image: "/cloisonne-ring-cloud-pattern-enamel-gold.jpg",
  },
]

// 配饰选项
export const ACCESSORIES: Accessory[] = [
  // 珠宝
  {
    id: "pearl",
    name: "天然珍珠",
    category: "珠宝",
    priceInCents: 28000,
    image: "/pearl-gemstone.png",
  },
  {
    id: "agate",
    name: "玛瑙",
    category: "珠宝",
    priceInCents: 18000,
    image: "/agate-gemstone.png",
  },
  {
    id: "jade",
    name: "翡翠",
    category: "珠宝",
    priceInCents: 58000,
    image: "/jade-gemstone.jpg",
  },
  {
    id: "turquoise",
    name: "绿松石",
    category: "珠宝",
    priceInCents: 38000,
    image: "/turquoise-gemstone.jpg",
  },
  {
    id: "crystal",
    name: "水晶",
    category: "珠宝",
    priceInCents: 12000,
    image: "/crystal-gemstone.jpg",
  },
  // 链条
  {
    id: "14k-gold-chain",
    name: "14K金链",
    category: "链条",
    priceInCents: 88000,
    image: "/14k-gold-chain.jpg",
  },
  {
    id: "18k-gold-chain",
    name: "18K金链",
    category: "链条",
    priceInCents: 128000,
    image: "/18k-gold-chain.jpg",
  },
  {
    id: "rose-gold-chain",
    name: "玫瑰金链",
    category: "链条",
    priceInCents: 98000,
    image: "/rose-gold-chain.jpg",
  },
  {
    id: "silver-chain",
    name: "925银链",
    category: "链条",
    priceInCents: 28000,
    image: "/silver-chain-jewelry.png",
  },
  // 绳饰
  {
    id: "red-silk-cord",
    name: "红色丝绳",
    category: "绳饰",
    priceInCents: 8000,
    image: "/red-silk-cord-jewelry.jpg",
  },
  {
    id: "black-silk-cord",
    name: "黑色丝绳",
    category: "绳饰",
    priceInCents: 8000,
    image: "/black-silk-cord-jewelry.jpg",
  },
  {
    id: "leather-cord",
    name: "皮绳",
    category: "绳饰",
    priceInCents: 12000,
    image: "/leather-cord-jewelry.jpg",
  },
  {
    id: "sweater-chain",
    name: "毛衣链绳",
    category: "绳饰",
    priceInCents: 18000,
    image: "/sweater-chain-long-necklace.jpg",
  },
]

export function getJewelryById(id: string) {
  return JEWELRY_PRODUCTS.find((p) => p.id === id)
}

export function getAccessoryById(id: string) {
  return ACCESSORIES.find((a) => a.id === id)
}
