export type Locale = "zh" | "en"

interface StepItem {
  title: string
  description: string
}

interface ReviewItem {
  quote: string
  customer: string
  product: string
}

export interface Translations {
  header: {
    jewelryCollection: string
    colorCustomization: string
    craftsmanship: string
    brandStory: string
    startCustomization: string
    myOrders: string
    signOut: string
    loginRegister: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    startCustomization: string
    browseCollection: string
    colorOptions: string
    colorOptionsLabel: string
    handmade: string
    handmadeLabel: string
    exclusive: string
    exclusiveLabel: string
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: StepItem[]
  }
  collection: {
    title: string
    subtitle: string
    categories: {
      all: string
      earrings: string
      necklace: string
      bracelet: string
      brooch: string
      ring: string
    }
    colorOptions: string
    aiCustomize: string
  }
  craft: {
    title: string
    subtitle: string
    innovation: string
    innovationBadge: string
    steps: StepItem[]
    brandStory: {
      title: string
      p1: string
      p2: string
      p3: string
    }
  }
  reviews: {
    title: string
    subtitle: string
    items: ReviewItem[]
  }
  footer: {
    brandDescription: string
    brandDescription2: string
    quickLinks: string
    contactUs: string
    qualityGuarantee: string
    qualityDescription: string
    privacyPolicy: string
    termsOfService: string
    address: string
  }
}

export const translations: Record<Locale, Translations> = {
  zh: {
    // Header
    header: {
      jewelryCollection: "首饰系列",
      colorCustomization: "配色定制",
      craftsmanship: "匠心工艺",
      brandStory: "品牌故事",
      startCustomization: "开始定制",
      myOrders: "我的订单",
      signOut: "退出登录",
      loginRegister: "登录 / 注册",
    },
    // Hero
    hero: {
      title: "定制专属珐琅首饰",
      subtitle: "传承千年珐琅工艺，融合现代美学设计",
      description: "选择您心仪的款式，定制专属配色方案，每一件都是独一无二的艺术珍品",
      startCustomization: "开始配色定制",
      browseCollection: "浏览首饰系列",
      colorOptions: "100+",
      colorOptionsLabel: "珐琅配色",
      handmade: "纯手工",
      handmadeLabel: "匠心制作",
      exclusive: "专属",
      exclusiveLabel: "独一无二",
    },
    // How It Works
    howItWorks: {
      title: "AI定制流程",
      subtitle: "六步轻松定制您的专属珐琅首饰配色",
      steps: [
        {
          title: "选择款式",
          description: "浏览珐琅首饰系列，选择您心仪的款式。款式不变，只定制配色。",
        },
        {
          title: "填写信息",
          description: "告诉AI使用者身份、年龄、风格偏好，让AI更懂您的需求。",
        },
        {
          title: "配色方式",
          description: "三种方式：直接选色、场景推荐、或上传图片让AI智能配色。",
        },
        {
          title: "AI生成",
          description: "AI根据您的选择，为这款首饰生成专属的珐琅配色效果图。",
        },
        {
          title: "选配饰",
          description: "可选珍珠、玛瑙等珠宝点缀，以及金链、丝绳等链条搭配。",
        },
        {
          title: "确认下单",
          description: "填写收件信息，确认订单，匠人将为您手工制作专属作品。",
        },
      ],
    },
    // Jewelry Collection
    collection: {
      title: "首饰系列",
      subtitle: "每一款都可AI定制专属配色",
      categories: {
        all: "全部",
        earrings: "耳饰",
        necklace: "项链",
        bracelet: "手链",
        brooch: "胸针",
        ring: "戒指",
      },
      colorOptions: "可选配色：",
      aiCustomize: "AI定制配色",
    },
    // Craft Process
    craft: {
      title: "匠心工艺",
      subtitle: "传承千年的珐琅工艺，每一步都凝聚匠人心血",
      innovation: "我们的当代珐琅工艺以固釉技术替代传统烧制，更好地保留珐琅的宝石颗粒感，呈现更加精美的质感",
      innovationBadge: "当代创新工艺",
      steps: [
        {
          title: "制胎",
          description: "精选优质金属材料，手工打造首饰胎体，奠定作品基础形态",
        },
        {
          title: "鏨刻",
          description: "运用传统鏨刻技法，在胎体上雕刻精美纹样与掐丝图案",
        },
        {
          title: "烧蓝",
          description: "将珐琅釉料初步烧制，使其与金属胎体初步结合",
        },
        {
          title: "点蓝",
          description: "将彩色珐琅釉料精准填入图案间隙，呈现丰富色彩层次",
        },
        {
          title: "固釉",
          description: "采用当代固釉技术替代传统烧制，完美保留珐琅的宝石颗粒质感",
        },
        {
          title: "配饰",
          description: "精选珍珠、玛瑙等珠宝与链饰，完成最终的首饰组装",
        },
      ],
      brandStory: {
        title: "品牌故事",
        p1: "聆花珐琅，源于对传统珐琅工艺的热爱与传承。我们相信，每一件珐琅首饰都应该是独一无二的艺术品，承载着佩戴者的个性与品味。",
        p2: "我们创新性地采用固釉技术替代传统的高温烧制工艺，这一突破使珐琅釉料能够完美保留其天然的宝石颗粒质感，呈现出更加璀璨精美的视觉效果。",
        p3: "结合AI智能配色技术，我们精选百余种珐琅釉色，让您能够自由搭配，打造专属于自己的色彩故事。每一件作品都由资深珐琅工艺师手工制作，确保品质与美感的完美结合。",
      },
    },
    // Reviews
    reviews: {
      title: "顾客好评",
      subtitle: "听听他们的定制故事",
      items: [
        {
          quote: "定制的莲韵耳环配色太美了！宫廷蓝配金色非常显气质，戴上后收到很多赞美。",
          customer: "王女士",
          product: "莲韵耳环 - 宫廷蓝",
        },
        {
          quote: "送给妈妈的生日礼物，她特别喜欢！胭脂红的配色很衬肤色，做工也非常精致。",
          customer: "李先生",
          product: "牡丹胸针 - 胭脂红",
        },
        {
          quote: "第三次购买了，这次选了翠玉绿的手链，每一件配色都很独特，品质始终如一。",
          customer: "张女士",
          product: "如意手链 - 翠玉绿",
        },
      ],
    },
    // Footer
    footer: {
      brandDescription:
        "聆花珐琅，专注于珐琅首饰的设计与定制。我们传承千年珐琅工艺，融合现代美学，为您打造独一无二的珐琅艺术品。",
      brandDescription2: "每一件作品都可定制专属配色，让您的首饰与众不同。",
      quickLinks: "快速链接",
      contactUs: "联系我们",
      qualityGuarantee: "品质保障",
      qualityDescription: "所有作品均提供品质保证，如有任何质量问题，我们承诺免费维修或更换。",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      address: "北京市朝阳区艺术区",
    },
  },
  en: {
    // Header
    header: {
      jewelryCollection: "Collection",
      colorCustomization: "Customize",
      craftsmanship: "Craftsmanship",
      brandStory: "About",
      startCustomization: "Start",
      myOrders: "My Orders",
      signOut: "Sign Out",
      loginRegister: "Login / Register",
    },
    // Hero
    hero: {
      title: "Custom Cloisonné Jewelry",
      subtitle: "Ancient enamel craftsmanship meets modern aesthetics",
      description: "Choose your favorite style, customize exclusive color schemes, each piece is a unique treasure",
      startCustomization: "Start Customization",
      browseCollection: "Browse Collection",
      colorOptions: "100+",
      colorOptionsLabel: "Color Options",
      handmade: "Handmade",
      handmadeLabel: "Artisan Crafted",
      exclusive: "Exclusive",
      exclusiveLabel: "One of a Kind",
    },
    // How It Works
    howItWorks: {
      title: "AI Customization Process",
      subtitle: "Six easy steps to customize your exclusive cloisonné jewelry colors",
      steps: [
        {
          title: "Choose Style",
          description:
            "Browse our cloisonné collection and select your favorite design. Style remains, only colors change.",
        },
        {
          title: "Fill Info",
          description: "Tell AI about the wearer's identity, age, and style preferences for better recommendations.",
        },
        {
          title: "Color Method",
          description: "Three options: direct selection, scene-based recommendation, or AI color matching from photos.",
        },
        {
          title: "AI Generate",
          description: "AI creates exclusive color schemes for your chosen jewelry based on your preferences.",
        },
        {
          title: "Add Accessories",
          description: "Optional pearls, agate gems, and chain styles including gold chains and silk cords.",
        },
        {
          title: "Place Order",
          description: "Fill in shipping details, confirm order, and artisans will handcraft your exclusive piece.",
        },
      ],
    },
    // Jewelry Collection
    collection: {
      title: "Jewelry Collection",
      subtitle: "Every piece can be AI-customized with exclusive colors",
      categories: {
        all: "All",
        earrings: "Earrings",
        necklace: "Necklace",
        bracelet: "Bracelet",
        brooch: "Brooch",
        ring: "Ring",
      },
      colorOptions: "Available colors: ",
      aiCustomize: "AI Customize",
    },
    // Craft Process
    craft: {
      title: "Artisan Craftsmanship",
      subtitle: "Millennium enamel craft, each step infused with artisan dedication",
      innovation:
        "Our contemporary enamel technique uses glaze-fixing instead of traditional firing, better preserving the gemstone-like texture",
      innovationBadge: "Modern Innovation",
      steps: [
        {
          title: "Base Forming",
          description: "Select premium metal materials, handcraft the jewelry base, establishing the foundation",
        },
        {
          title: "Engraving",
          description: "Apply traditional chiseling techniques, carving exquisite patterns on the base",
        },
        {
          title: "Enamel Firing",
          description: "Initial firing of enamel glaze to bond with the metal base",
        },
        {
          title: "Color Filling",
          description: "Precisely fill colorful enamel glazes into pattern gaps, creating rich color layers",
        },
        {
          title: "Glaze Fixing",
          description: "Modern glaze-fixing technique replaces traditional firing, preserving gemstone texture",
        },
        {
          title: "Assembly",
          description: "Select pearls, agate and other gems with chains for final jewelry assembly",
        },
      ],
      brandStory: {
        title: "Brand Story",
        p1: "Linghua Cloisonné was born from a passion for traditional enamel craftsmanship. We believe every piece of cloisonné jewelry should be a unique work of art, carrying the wearer's personality and taste.",
        p2: "We innovatively use glaze-fixing technology instead of traditional high-temperature firing, allowing enamel glazes to perfectly retain their natural gemstone-like texture with more brilliant visual effects.",
        p3: "Combined with AI color matching technology, we offer over 100 enamel colors for you to freely mix and match, creating your own color story. Each piece is handcrafted by senior enamel artisans, ensuring perfect quality and beauty.",
      },
    },
    // Reviews
    reviews: {
      title: "Customer Reviews",
      subtitle: "Hear their customization stories",
      items: [
        {
          quote:
            "The custom lotus earrings are gorgeous! The palace blue with gold is so elegant, I've received many compliments.",
          customer: "Ms. Wang",
          product: "Lotus Earrings - Palace Blue",
        },
        {
          quote: "A birthday gift for mom, she loves it! The rouge red complements her skin tone beautifully.",
          customer: "Mr. Li",
          product: "Peony Brooch - Rouge Red",
        },
        {
          quote: "Third purchase! This time jade green bracelet. Every piece has unique colors, consistent quality.",
          customer: "Ms. Zhang",
          product: "Ruyi Bracelet - Jade Green",
        },
      ],
    },
    // Footer
    footer: {
      brandDescription:
        "Linghua Cloisonné specializes in enamel jewelry design and customization. We inherit millennium enamel craftsmanship, combining modern aesthetics to create unique enamel art pieces.",
      brandDescription2: "Every piece can be customized with exclusive colors, making your jewelry truly unique.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      qualityGuarantee: "Quality Guarantee",
      qualityDescription:
        "All pieces come with quality assurance. We promise free repair or replacement for any quality issues.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      address: "Art District, Chaoyang, Beijing",
    },
  },
}
