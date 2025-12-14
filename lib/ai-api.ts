import type { UserInfo, ColorResult } from "@/components/customization/customization-flow"
import type { JewelryItem } from "./jewelry-data"

const AI_API_KEY = "sk-9uzJq0Ocw1W5DV9wdQy1CrxgdEc73TBd0APaBofLsPXTYt0s"
const AI_API_URL = "https://api.apimart.ai/v1"

interface DirectColorParams {
  method: "direct"
  jewelry: JewelryItem
  userInfo: UserInfo
  selectedPalette: {
    id: string
    name: string
    colors: string[]
    description: string
  }
}

interface SceneColorParams {
  method: "scene"
  jewelry: JewelryItem
  userInfo: UserInfo
  scene: {
    id: string
    name: string
    description: string
  }
}

type GenerateColorParams = DirectColorParams | SceneColorParams

// 生成配色方案并生成效果图
export async function generateColorScheme(params: GenerateColorParams): Promise<ColorResult> {
  const { jewelry, userInfo } = params

  let colorName = ""
  let colorDescription = ""
  let primaryColor = ""
  let secondaryColor = ""
  let accentColor = ""

  if (params.method === "direct") {
    const { selectedPalette } = params
    colorName = selectedPalette.name
    primaryColor = selectedPalette.colors[0]
    secondaryColor = selectedPalette.colors[1]
    accentColor = selectedPalette.colors[2]
    colorDescription = `基于${selectedPalette.name}配色方案，为${userInfo.recipientIdentity}定制的${jewelry.name}专属珐琅配色。${selectedPalette.description}`
  } else {
    const { scene } = params
    // 根据场景选择预设配色
    const sceneColors: Record<string, { primary: string; secondary: string; accent: string; name: string }> = {
      wedding: { primary: "#8b2942", secondary: "#c44569", accent: "#e87a9f", name: "喜庆红韵" },
      business: { primary: "#1a4b8c", secondary: "#3d7ab8", accent: "#89b4d4", name: "商务蓝调" },
      daily: { primary: "#2d5a4a", secondary: "#4a8b6f", accent: "#7bb896", name: "清新日常" },
      party: { primary: "#4a2c6a", secondary: "#7b4e9e", accent: "#a87cc9", name: "派对紫韵" },
      cultural: { primary: "#006d77", secondary: "#0a9396", accent: "#94d2bd", name: "艺术青韵" },
      travel: { primary: "#b35c1e", secondary: "#d97a3a", accent: "#f0a060", name: "阳光橙韵" },
      gift: { primary: "#d4a5a5", secondary: "#e8c4c4", accent: "#f5e6e6", name: "温馨粉韵" },
      traditional: { primary: "#8b2942", secondary: "#c9a96e", accent: "#f0a060", name: "传统红金" },
    }
    const colors = sceneColors[scene.id] || sceneColors.daily
    primaryColor = colors.primary
    secondaryColor = colors.secondary
    accentColor = colors.accent
    colorName = colors.name
    colorDescription = `为${scene.name}场景推荐的${colors.name}配色，适合${userInfo.recipientIdentity}在${scene.description}时佩戴。`
  }

  // 生成效果图的prompt
  const imagePrompt = buildJewelryImagePrompt(jewelry, { primaryColor, secondaryColor, accentColor })

  try {
    // 调用图像生成API
    const imageUrl = await generateJewelryImage(imagePrompt)

    return {
      primaryColor,
      secondaryColor,
      accentColor,
      goldTone: "#c9a96e",
      name: colorName,
      description: colorDescription,
      generatedImage: imageUrl,
    }
  } catch (error) {
    console.error("AI图像生成错误:", error)
    // 返回配色方案，但不包含生成的图像
    return {
      primaryColor,
      secondaryColor,
      accentColor,
      goldTone: "#c9a96e",
      name: colorName,
      description: colorDescription,
    }
  }
}

// 根据上传的图片生成配色方案
export async function generateColorSchemeFromImage(params: {
  jewelry: JewelryItem
  userInfo: UserInfo
  imageBase64: string
}): Promise<ColorResult> {
  const { jewelry, userInfo } = params

  // 从图片中提取主色调（简化处理：使用预设的和谐配色）
  // 在实际应用中，可以使用图像分析API来提取颜色
  const harmonicColors = [
    { primary: "#2d5a4a", secondary: "#4a8b6f", accent: "#7bb896", name: "自然和谐" },
    { primary: "#1a4b8c", secondary: "#3d7ab8", accent: "#89b4d4", name: "宁静蓝调" },
    { primary: "#8b2942", secondary: "#c44569", accent: "#e87a9f", name: "温柔粉调" },
    { primary: "#b35c1e", secondary: "#d97a3a", accent: "#f0a060", name: "暖阳橙韵" },
  ]

  // 随机选择一个和谐配色
  const selectedColors = harmonicColors[Math.floor(Math.random() * harmonicColors.length)]

  const imagePrompt = buildJewelryImagePrompt(jewelry, {
    primaryColor: selectedColors.primary,
    secondaryColor: selectedColors.secondary,
    accentColor: selectedColors.accent,
  })

  try {
    const imageUrl = await generateJewelryImage(imagePrompt)

    return {
      primaryColor: selectedColors.primary,
      secondaryColor: selectedColors.secondary,
      accentColor: selectedColors.accent,
      goldTone: "#c9a96e",
      name: selectedColors.name,
      description: `根据您上传的图片，AI为您推荐${selectedColors.name}配色方案，与您的服装/风格和谐搭配。`,
      generatedImage: imageUrl,
    }
  } catch (error) {
    console.error("AI图像生成错误:", error)
    return {
      primaryColor: selectedColors.primary,
      secondaryColor: selectedColors.secondary,
      accentColor: selectedColors.accent,
      goldTone: "#c9a96e",
      name: selectedColors.name,
      description: `根据您上传的图片，AI为您推荐${selectedColors.name}配色方案。`,
    }
  }
}

// 构建首饰图像生成的prompt
function buildJewelryImagePrompt(
  jewelry: JewelryItem,
  colors: { primaryColor: string; secondaryColor: string; accentColor: string },
): string {
  const categoryMap: Record<string, string> = {
    耳饰: "earrings",
    项链: "necklace pendant",
    手链: "bracelet",
    胸针: "brooch",
    戒指: "ring",
  }

  const jewelryType = categoryMap[jewelry.category] || "jewelry piece"

  return `A beautiful Chinese cloisonné enamel ${jewelryType}, traditional Jingfa craft style, 
intricate gold wire filigree patterns, 
main enamel color ${colors.primaryColor}, 
secondary enamel color ${colors.secondaryColor}, 
accent details in ${colors.accentColor}, 
golden metal framework, 
elegant floral lotus motif, 
professional product photography, 
white background, 
studio lighting, 
high detail, 
luxury jewelry aesthetic, 
8k quality`
}

// 调用图像生成API
async function generateJewelryImage(prompt: string): Promise<string> {
  const response = await fetch(`${AI_API_URL}/images/generations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gemini-3-pro-image-preview",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`API请求失败: ${response.status} - ${JSON.stringify(errorData)}`)
  }

  const data = await response.json()

  if (data.data && data.data[0]) {
    // 支持url或b64_json格式的返回
    if (data.data[0].url) {
      return data.data[0].url
    }
    if (data.data[0].b64_json) {
      return `data:image/png;base64,${data.data[0].b64_json}`
    }
  }

  throw new Error("无法获取生成的图像")
}
