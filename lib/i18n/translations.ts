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
  auth: {
    login: {
      title: string
      description: string
      email: string
      password: string
      submit: string
      loading: string
      noAccount: string
      register: string
      error: string
    }
    signUp: {
      title: string
      description: string
      name: string
      namePlaceholder: string
      email: string
      password: string
      confirmPassword: string
      submit: string
      loading: string
      hasAccount: string
      login: string
      passwordMismatch: string
      passwordTooShort: string
      error: string
    }
    signUpSuccess: {
      title: string
      description: string
      message: string
      backToLogin: string
    }
    error: {
      title: string
      errorMessage: string
      unknownError: string
      backToLogin: string
    }
  }
  orders: {
    title: string
    empty: {
      title: string
      description: string
      browse: string
    }
    orderNumber: string
    colorScheme: string
    accessories: string
    status: {
      pending: string
      paid: string
      processing: string
      shipped: string
      completed: string
      cancelled: string
    }
  }
  checkout: {
    title: string
    loading: string
    error: {
      title: string
      missingData: string
      backHome: string
    }
    success: {
      title: string
      confirmed: string
      orderNumber: string
      viewOrders: string
      continueShopping: string
    }
  }
  customization: {
    notFound: string
    steps: {
      userInfo: string
      method: string
      colorSelection: string
      colorScheme: string
      accessories: string
      checkout: string
    }
    userInfoStep: {
      title: string
      purposeQuestion: string
      purposeSelf: string
      purposeGift: string
      identityLabel: string
      identityGiftLabel: string
      identities: {
        professional: string
        student: string
        bride: string
        elder: string
        artist: string
        other: string
      }
      ageLabel: string
      ages: {
        "18-25": string
        "26-35": string
        "36-45": string
        "46-55": string
        "55+": string
      }
      styleLabel: string
      styles: {
        elegant: string
        modern: string
        classic: string
        artistic: string
        simple: string
      }
      additionalNotes: string
      additionalNotesPlaceholder: string
      next: string
    }
    colorMethodStep: {
      title: string
      subtitle: string
      methods: {
        direct: {
          title: string
          description: string
        }
        scene: {
          title: string
          description: string
        }
        image: {
          title: string
          description: string
        }
      }
      back: string
    }
    directColorStep: {
      title: string
      subtitle: string
      palettes: {
        royalBlue: { name: string; description: string }
        jadeGreen: { name: string; description: string }
        rougeRed: { name: string; description: string }
        purple: { name: string; description: string }
        amber: { name: string; description: string }
        ivory: { name: string; description: string }
        peacock: { name: string; description: string }
        peach: { name: string; description: string }
      }
      back: string
      generate: string
      generating: string
    }
    sceneColorStep: {
      title: string
      subtitle: string
      scenes: {
        wedding: { name: string; description: string }
        business: { name: string; description: string }
        daily: { name: string; description: string }
        party: { name: string; description: string }
        cultural: { name: string; description: string }
        travel: { name: string; description: string }
        gift: { name: string; description: string }
        traditional: { name: string; description: string }
      }
      back: string
      generate: string
      generating: string
    }
    imageColorStep: {
      title: string
      subtitle: string
      uploadArea: {
        title: string
        description: string
      }
      tips: {
        title: string
        tip1: string
        tip2: string
        tip3: string
      }
      back: string
      generate: string
      generating: string
    }
    colorResultStep: {
      title: string
      schemeLabel: string
      colorDetails: string
      primaryColor: string
      secondaryColor: string
      accentColor: string
      goldTone: string
      aiGenerated: string
      back: string
      regenerate: string
      confirm: string
    }
    accessoriesStep: {
      title: string
      subtitle: string
      gemstones: {
        title: string
        none: string
        pearl: string
        agate: string
        jade: string
        crystal: string
        turquoise: string
      }
      chains: {
        title: string
        none: string
        gold18k: string
        gold14k: string
        silver: string
        roseGold: string
      }
      ropes: {
        title: string
        none: string
        silkRed: string
        silkBlack: string
        leather: string
        sweater: string
      }
      accessoryFee: string
      back: string
      confirm: string
    }
    checkoutStep: {
      loginRequired: {
        title: string
        description: string
        back: string
        login: string
      }
      title: string
      orderSummary: {
        jewelryPrice: string
        total: string
      }
      shippingInfo: {
        title: string
        recipientName: string
        recipientNamePlaceholder: string
        phone: string
        phonePlaceholder: string
        province: string
        provincePlaceholder: string
        city: string
        cityPlaceholder: string
        district: string
        districtPlaceholder: string
        address: string
        addressPlaceholder: string
        notes: string
        notesPlaceholder: string
      }
      back: string
      submit: string
      submitting: string
    }
  }
}

export const translations: Record<Locale, Translations> = {
  zh: {
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
    howItWorks: {
      title: "AI定制流程",
      subtitle: "六步轻松定制您的专属珐琅首饰配色",
      steps: [
        { title: "选择款式", description: "浏览珐琅首饰系列，选择您心仪的款式。款式不变，只定制配色。" },
        { title: "填写信息", description: "告诉AI使用者身份、年龄、风格偏好，让AI更懂您的需求。" },
        { title: "配色方式", description: "三种方式：直接选色、场景推荐、或上传图片让AI智能配色。" },
        { title: "AI生成", description: "AI根据您的选择，为这款首饰生成专属的珐琅配色效果图。" },
        { title: "选配饰", description: "可选珍珠、玛瑙等珠宝点缀，以及金链、丝绳等链条搭配。" },
        { title: "确认下单", description: "填写收件信息，确认订单，匠人将为您手工制作专属作品。" },
      ],
    },
    collection: {
      title: "首饰系列",
      subtitle: "每一款都可AI定制专属配色",
      categories: { all: "全部", earrings: "耳饰", necklace: "项链", bracelet: "手链", brooch: "胸针", ring: "戒指" },
      colorOptions: "可选配色：",
      aiCustomize: "AI定制配色",
    },
    craft: {
      title: "匠心工艺",
      subtitle: "传承千年的珐琅工艺，每一步都凝聚匠人心血",
      innovation: "我们的当代珐琅工艺以固釉技术替代传统烧制，更好地保留珐琅的宝石颗粒感，呈现更加精美的质感",
      innovationBadge: "当代创新工艺",
      steps: [
        { title: "制胎", description: "精选优质金属材料，手工打造首饰胎体，奠定作品基础形态" },
        { title: "鏨刻", description: "运用传统鏨刻技法，在胎体上雕刻精美纹样与掐丝图案" },
        { title: "烧蓝", description: "将珐琅釉料初步烧制，使其与金属胎体初步结合" },
        { title: "点蓝", description: "将彩色珐琅釉料精准填入图案间隙，呈现丰富色彩层次" },
        { title: "固釉", description: "采用当代固釉技术替代传统烧制，完美保留珐琅的宝石颗粒质感" },
        { title: "配饰", description: "精选珍珠、玛瑙等珠宝与链饰，完成最终的首饰组装" },
      ],
      brandStory: {
        title: "品牌故事",
        p1: "聆花珐琅，源于对传统珐琅工艺的热爱与传承。我们相信，每一件珐琅首饰都应该是独一无二的艺术品，承载着佩戴者的个性与品味。",
        p2: "我们创新性地采用固釉技术替代传统的高温烧制工艺，这一突破使珐琅釉料能够完美保留其天然的宝石颗粒质感，呈现出更加璀璨精美的视觉效果。",
        p3: "结合AI智能配色技术，我们精选百余种珐琅釉色，让您能够自由搭配，打造专属于自己的色彩故事。每一件作品都由资深珐琅工艺师手工制作，确保品质与美感的完美结合。",
      },
    },
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
          product: "如意手链 - 翡翠绿",
        },
      ],
    },
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
    auth: {
      login: {
        title: "登录账户",
        description: "输入您的邮箱和密码登录",
        email: "邮箱",
        password: "密码",
        submit: "登录",
        loading: "登录中...",
        noAccount: "还没有账户？",
        register: "立即注册",
        error: "登录失败，请重试",
      },
      signUp: {
        title: "注册账户",
        description: "创建您的聆花珐琅账户",
        name: "姓名",
        namePlaceholder: "您的姓名",
        email: "邮箱",
        password: "密码",
        confirmPassword: "确认密码",
        submit: "注册",
        loading: "注册中...",
        hasAccount: "已有账户？",
        login: "立即登录",
        passwordMismatch: "两次输入的密码不一致",
        passwordTooShort: "密码长度至少为6位",
        error: "注册失败，请重试",
      },
      signUpSuccess: {
        title: "注册成功！",
        description: "请查收您的邮箱以确认账户",
        message: "我们已向您的邮箱发送了一封确认邮件，请点击邮件中的链接以激活您的账户。",
        backToLogin: "返回登录",
      },
      error: {
        title: "出错了",
        errorMessage: "错误信息：",
        unknownError: "发生了未知错误，请重试。",
        backToLogin: "返回登录",
      },
    },
    orders: {
      title: "我的订单",
      empty: {
        title: "暂无订单",
        description: "快去定制您的专属珐琅首饰吧",
        browse: "浏览首饰",
      },
      orderNumber: "订单号",
      colorScheme: "配色",
      accessories: "配饰",
      status: {
        pending: "待支付",
        paid: "已支付",
        processing: "制作中",
        shipped: "已发货",
        completed: "已完成",
        cancelled: "已取消",
      },
    },
    checkout: {
      title: "确认支付",
      loading: "正在创建订单...",
      error: {
        title: "订单创建失败",
        missingData: "缺少订单数据",
        backHome: "返回首页",
      },
      success: {
        title: "支付成功！",
        confirmed: "您的订单已确认",
        orderNumber: "订单号",
        viewOrders: "查看订单",
        continueShopping: "继续购物",
      },
    },
    customization: {
      notFound: "未找到该款式",
      steps: {
        userInfo: "用户信息",
        method: "定制方式",
        colorSelection: "配色选择",
        colorScheme: "配色方案",
        accessories: "配饰选择",
        checkout: "确认下单",
      },
      userInfoStep: {
        title: "让AI了解您的需求",
        purposeQuestion: "这件作品是给谁用的？",
        purposeSelf: "自己使用",
        purposeGift: "赠送他人",
        identityLabel: "您的身份",
        identityGiftLabel: "收礼人的身份",
        identities: {
          professional: "职业女性",
          student: "学生",
          bride: "新娘",
          elder: "长辈",
          artist: "艺术工作者",
          other: "其他",
        },
        ageLabel: "年龄段",
        ages: {
          "18-25": "18-25岁",
          "26-35": "26-35岁",
          "36-45": "36-45岁",
          "46-55": "46-55岁",
          "55+": "55岁以上",
        },
        styleLabel: "风格偏好",
        styles: {
          elegant: "优雅端庄",
          modern: "时尚现代",
          classic: "经典传统",
          artistic: "艺术个性",
          simple: "简约低调",
        },
        additionalNotes: "其他需求（选填）",
        additionalNotesPlaceholder: "例如：喜欢的颜色、特殊寓意、搭配需求等...",
        next: "下一步：选择定制方式",
      },
      colorMethodStep: {
        title: "选择配色定制方式",
        subtitle: "三种方式帮您找到专属配色，款式保持不变，只改变珐琅釉色",
        methods: {
          direct: { title: "直接选择配色", description: "从预设配色方案中选择您喜欢的颜色，AI立即生成效果图" },
          scene: { title: "场景推荐配色", description: "告诉AI您的使用场景，如婚礼、商务、日常等，获得专属配色建议" },
          image: { title: "图片智能配色", description: "上传服装或人物照片，AI分析色彩为您推荐最搭配的珐琅配色" },
        },
        back: "返回上一步",
      },
      directColorStep: {
        title: "选择配色方案",
        subtitle: "选择您喜欢的配色，AI将为您生成专属效果图",
        palettes: {
          royalBlue: { name: "宫廷蓝", description: "经典皇家蓝，尊贵典雅" },
          jadeGreen: { name: "翠玉绿", description: "清新翡翠绿，自然灵动" },
          rougeRed: { name: "胭脂红", description: "优雅胭脂红，喜庆祥和" },
          purple: { name: "紫禁紫", description: "尊贵紫罗兰，神秘高雅" },
          amber: { name: "暖阳橙", description: "温暖琥珀橙，活力四射" },
          ivory: { name: "素雅白", description: "纯净素白，简约大方" },
          peacock: { name: "孔雀蓝", description: "孔雀羽翠，华丽璀璨" },
          peach: { name: "桃花粉", description: "温柔桃粉，甜美可人" },
        },
        back: "返回",
        generate: "AI生成配色方案",
        generating: "AI生成中...",
      },
      sceneColorStep: {
        title: "选择使用场景",
        subtitle: "告诉AI您的佩戴场景，为您推荐最合适的配色",
        scenes: {
          wedding: { name: "婚礼喜庆", description: "婚宴、订婚、周年纪念" },
          business: { name: "商务正装", description: "会议、商务宴请、职场" },
          daily: { name: "日常休闲", description: "逛街、约会、朋友聚会" },
          party: { name: "晚宴派对", description: "晚会、宴会、颁奖典礼" },
          cultural: { name: "文化艺术", description: "展览、演出、文艺活动" },
          travel: { name: "旅行度假", description: "度假、旅拍、户外" },
          gift: { name: "节日送礼", description: "生日、节日、特殊纪念" },
          traditional: { name: "传统节庆", description: "春节、中秋、传统仪式" },
        },
        back: "返回",
        generate: "AI推荐配色方案",
        generating: "AI生成中...",
      },
      imageColorStep: {
        title: "上传参考图片",
        subtitle: "上传服装、角色或任意图片，AI将分析色彩为您推荐最搭配的珐琅配色",
        uploadArea: { title: "点击或拖拽上传图片", description: "支持 JPG、PNG 格式，建议清晰的服装或人物照片" },
        tips: {
          title: "图片建议",
          tip1: "上传您想要搭配的服装照片",
          tip2: "或上传喜欢的角色/风格参考图",
          tip3: "图片色彩越清晰，AI分析越准确",
        },
        back: "返回",
        generate: "AI智能配色",
        generating: "AI分析中...",
      },
      colorResultStep: {
        title: "AI为您定制的配色方案",
        schemeLabel: "方案名称",
        colorDetails: "配色详情",
        primaryColor: "主色调",
        secondaryColor: "辅色调",
        accentColor: "点缀色",
        goldTone: "金丝色",
        aiGenerated: "AI生成",
        back: "返回",
        regenerate: "重新生成",
        confirm: "确认配色，选择配饰",
      },
      accessoriesStep: {
        title: "选择配饰",
        subtitle: "为您的首饰搭配珠宝和链条（可选）",
        gemstones: {
          title: "珠宝点缀",
          none: "无",
          pearl: "珍珠",
          agate: "玛瑙",
          jade: "翡翠",
          crystal: "水晶",
          turquoise: "绿松石",
        },
        chains: {
          title: "链条选择",
          none: "无",
          gold18k: "18K金链",
          gold14k: "14K金链",
          silver: "925银链",
          roseGold: "玫瑰金链",
        },
        ropes: {
          title: "绳饰选择",
          none: "无",
          silkRed: "红色丝绳",
          silkBlack: "黑色丝绳",
          leather: "皮绳",
          sweater: "毛衣链绳",
        },
        accessoryFee: "配饰费用",
        back: "返回",
        confirm: "确认，去结算",
      },
      checkoutStep: {
        loginRequired: { title: "请先登录", description: "登录后即可完成订单支付", back: "返回", login: "立即登录" },
        title: "确认订单",
        orderSummary: { jewelryPrice: "首饰价格", total: "合计" },
        shippingInfo: {
          title: "收件信息",
          recipientName: "收件人姓名",
          recipientNamePlaceholder: "请输入姓名",
          phone: "联系电话",
          phonePlaceholder: "请输入手机号",
          province: "省份",
          provincePlaceholder: "省份",
          city: "城市",
          cityPlaceholder: "城市",
          district: "区县",
          districtPlaceholder: "区县",
          address: "详细地址",
          addressPlaceholder: "请输入详细地址（街道、门牌号等）",
          notes: "备注（选填）",
          notesPlaceholder: "如有特殊要求请备注",
        },
        back: "返回",
        submit: "确认支付",
        submitting: "处理中...",
      },
    },
  },
  en: {
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
        { title: "Enamel Firing", description: "Initial firing of enamel glaze to bond with the metal base" },
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
    auth: {
      login: {
        title: "Login",
        description: "Enter your email and password to login",
        email: "Email",
        password: "Password",
        submit: "Login",
        loading: "Logging in...",
        noAccount: "Don't have an account?",
        register: "Register now",
        error: "Login failed, please try again",
      },
      signUp: {
        title: "Create Account",
        description: "Create your Linghua Cloisonné account",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        submit: "Register",
        loading: "Registering...",
        hasAccount: "Already have an account?",
        login: "Login now",
        passwordMismatch: "Passwords do not match",
        passwordTooShort: "Password must be at least 6 characters",
        error: "Registration failed, please try again",
      },
      signUpSuccess: {
        title: "Registration Successful!",
        description: "Please check your email to confirm your account",
        message:
          "We've sent a confirmation email to your inbox. Please click the link in the email to activate your account.",
        backToLogin: "Back to Login",
      },
      error: {
        title: "Something Went Wrong",
        errorMessage: "Error message: ",
        unknownError: "An unknown error occurred, please try again.",
        backToLogin: "Back to Login",
      },
    },
    orders: {
      title: "My Orders",
      empty: {
        title: "No Orders Yet",
        description: "Start customizing your exclusive cloisonné jewelry",
        browse: "Browse Jewelry",
      },
      orderNumber: "Order No.",
      colorScheme: "Color Scheme",
      accessories: "Accessories",
      status: {
        pending: "Pending",
        paid: "Paid",
        processing: "Processing",
        shipped: "Shipped",
        completed: "Completed",
        cancelled: "Cancelled",
      },
    },
    checkout: {
      title: "Confirm Payment",
      loading: "Creating order...",
      error: {
        title: "Order Creation Failed",
        missingData: "Missing order data",
        backHome: "Back to Home",
      },
      success: {
        title: "Payment Successful!",
        confirmed: "Your order is confirmed",
        orderNumber: "Order No.",
        viewOrders: "View Orders",
        continueShopping: "Continue Shopping",
      },
    },
    customization: {
      notFound: "Style not found",
      steps: {
        userInfo: "User Info",
        method: "Method",
        colorSelection: "Color Selection",
        colorScheme: "Color Scheme",
        accessories: "Accessories",
        checkout: "Checkout",
      },
      userInfoStep: {
        title: "Help AI Understand Your Needs",
        purposeQuestion: "Who is this piece for?",
        purposeSelf: "For Myself",
        purposeGift: "As a Gift",
        identityLabel: "Your Identity",
        identityGiftLabel: "Recipient's Identity",
        identities: {
          professional: "Professional",
          student: "Student",
          bride: "Bride",
          elder: "Elder",
          artist: "Artist",
          other: "Other",
        },
        ageLabel: "Age Range",
        ages: {
          "18-25": "18-25",
          "26-35": "26-35",
          "36-45": "36-45",
          "46-55": "46-55",
          "55+": "55+",
        },
        styleLabel: "Style Preference",
        styles: {
          elegant: "Elegant",
          modern: "Modern",
          classic: "Classic",
          artistic: "Artistic",
          simple: "Minimalist",
        },
        additionalNotes: "Additional Notes (Optional)",
        additionalNotesPlaceholder: "E.g., favorite colors, special meanings, matching needs...",
        next: "Next: Choose Customization Method",
      },
      colorMethodStep: {
        title: "Choose Customization Method",
        subtitle: "Three ways to find your exclusive colors. Style stays the same, only enamel colors change.",
        methods: {
          direct: {
            title: "Direct Color Selection",
            description: "Choose from preset color palettes, AI generates preview instantly",
          },
          scene: {
            title: "Scene-Based Recommendation",
            description: "Tell AI your occasion - wedding, business, casual - get tailored color suggestions",
          },
          image: {
            title: "Smart Color Matching",
            description: "Upload outfit or reference photos, AI analyzes and recommends matching enamel colors",
          },
        },
        back: "Go Back",
      },
      directColorStep: {
        title: "Select Color Palette",
        subtitle: "Choose your favorite colors, AI will generate an exclusive preview",
        palettes: {
          royalBlue: { name: "Royal Blue", description: "Classic royal blue, noble and elegant" },
          jadeGreen: { name: "Jade Green", description: "Fresh jade green, natural and lively" },
          rougeRed: { name: "Rouge Red", description: "Elegant rouge red, festive and auspicious" },
          purple: { name: "Imperial Purple", description: "Noble violet, mysterious and elegant" },
          amber: { name: "Warm Amber", description: "Warm amber orange, vibrant and energetic" },
          ivory: { name: "Ivory White", description: "Pure ivory, simple and elegant" },
          peacock: { name: "Peacock Blue", description: "Peacock feather blue, gorgeous and dazzling" },
          peach: { name: "Peach Blossom", description: "Gentle peach pink, sweet and lovely" },
        },
        back: "Back",
        generate: "AI Generate Color Scheme",
        generating: "AI Generating...",
      },
      sceneColorStep: {
        title: "Select Usage Scene",
        subtitle: "Tell AI your wearing occasion for the most suitable color recommendation",
        scenes: {
          wedding: { name: "Wedding & Celebration", description: "Wedding, engagement, anniversary" },
          business: { name: "Business Formal", description: "Meetings, business dinners, workplace" },
          daily: { name: "Daily Casual", description: "Shopping, dating, gatherings" },
          party: { name: "Evening Party", description: "Galas, banquets, award ceremonies" },
          cultural: { name: "Cultural & Arts", description: "Exhibitions, performances, art events" },
          travel: { name: "Travel & Vacation", description: "Vacation, travel photos, outdoor" },
          gift: { name: "Holiday Gifting", description: "Birthday, holidays, special occasions" },
          traditional: { name: "Traditional Festival", description: "Chinese New Year, Mid-Autumn, ceremonies" },
        },
        back: "Back",
        generate: "AI Recommend Colors",
        generating: "AI Generating...",
      },
      imageColorStep: {
        title: "Upload Reference Image",
        subtitle: "Upload outfit, character or any image, AI will analyze colors and recommend matching enamel colors",
        uploadArea: {
          title: "Click or drag to upload image",
          description: "Supports JPG, PNG formats. Clear outfit or portrait photos recommended",
        },
        tips: {
          title: "Image Tips",
          tip1: "Upload the outfit you want to match",
          tip2: "Or upload a character/style reference",
          tip3: "Clearer colors lead to more accurate AI analysis",
        },
        back: "Back",
        generate: "AI Smart Color Match",
        generating: "AI Analyzing...",
      },
      colorResultStep: {
        title: "AI Custom Color Scheme",
        schemeLabel: "Scheme Name",
        colorDetails: "Color Details",
        primaryColor: "Primary Color",
        secondaryColor: "Secondary Color",
        accentColor: "Accent Color",
        goldTone: "Gold Wire",
        aiGenerated: "AI Generated",
        back: "Back",
        regenerate: "Regenerate",
        confirm: "Confirm & Choose Accessories",
      },
      accessoriesStep: {
        title: "Select Accessories",
        subtitle: "Add gemstones and chains to your jewelry (optional)",
        gemstones: {
          title: "Gemstone Accents",
          none: "None",
          pearl: "Pearl",
          agate: "Agate",
          jade: "Jade",
          crystal: "Crystal",
          turquoise: "Turquoise",
        },
        chains: {
          title: "Chain Selection",
          none: "None",
          gold18k: "18K Gold Chain",
          gold14k: "14K Gold Chain",
          silver: "925 Silver Chain",
          roseGold: "Rose Gold Chain",
        },
        ropes: {
          title: "Cord Selection",
          none: "None",
          silkRed: "Red Silk Cord",
          silkBlack: "Black Silk Cord",
          leather: "Leather Cord",
          sweater: "Sweater Chain",
        },
        accessoryFee: "Accessory Fee",
        back: "Back",
        confirm: "Confirm & Checkout",
      },
      checkoutStep: {
        loginRequired: {
          title: "Please Login",
          description: "Login to complete your order payment",
          back: "Back",
          login: "Login Now",
        },
        title: "Confirm Order",
        orderSummary: { jewelryPrice: "Jewelry Price", total: "Total" },
        shippingInfo: {
          title: "Shipping Information",
          recipientName: "Recipient Name",
          recipientNamePlaceholder: "Enter name",
          phone: "Phone Number",
          phonePlaceholder: "Enter phone number",
          province: "Province/State",
          provincePlaceholder: "Province",
          city: "City",
          cityPlaceholder: "City",
          district: "District",
          districtPlaceholder: "District",
          address: "Detailed Address",
          addressPlaceholder: "Enter detailed address (street, building, etc.)",
          notes: "Notes (Optional)",
          notesPlaceholder: "Any special requirements",
        },
        back: "Back",
        submit: "Confirm Payment",
        submitting: "Processing...",
      },
    },
  },
}
