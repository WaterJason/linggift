"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, X, Sparkles, ImageIcon } from "lucide-react"
import type { UserInfo, ColorResult } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"
import { generateColorSchemeFromImage } from "@/lib/ai-api"
import { useI18n } from "@/lib/i18n/context"

interface ImageColorStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onColorGenerated: (result: ColorResult) => void
  onBack: () => void
  isGenerating: boolean
  setIsGenerating: (value: boolean) => void
}

export function ImageColorStep({
  jewelry,
  userInfo,
  onColorGenerated,
  onBack,
  isGenerating,
  setIsGenerating,
}: ImageColorStepProps) {
  const { t } = useI18n()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const removeImage = () => {
    setUploadedImage(null)
    setImageFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleGenerate = async () => {
    if (!uploadedImage || !imageFile) return

    setIsGenerating(true)

    try {
      const result = await generateColorSchemeFromImage({
        jewelry,
        userInfo,
        imageBase64: uploadedImage,
      })
      onColorGenerated(result)
    } catch (error) {
      console.error("Failed to generate color scheme:", error)
      onColorGenerated({
        primaryColor: "#2d5a4a",
        secondaryColor: "#4a8b6f",
        accentColor: "#7bb896",
        goldTone: "#c9a96e",
        name: "Natural Harmony",
        description: "AI recommended color scheme based on your uploaded image.",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
      {/* Selected Jewelry Preview */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#e5e0d8]">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#faf8f5] relative flex-shrink-0">
          <Image src={jewelry.image || "/placeholder.svg"} alt={jewelry.name} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-lg font-medium text-[#3a3028]">{jewelry.name}</h2>
          <p className="text-sm text-[#8a7a6a]">
            {jewelry.category} · {jewelry.price}
          </p>
        </div>
      </div>

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-2">{t.customization.imageColorStep.title}</h3>
      <p className="text-sm text-[#8a7a6a] mb-6">{t.customization.imageColorStep.subtitle}</p>

      {/* Upload Area */}
      <div className="mb-8">
        {!uploadedImage ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#c9a96e]/30 rounded-2xl p-12 text-center cursor-pointer hover:border-[#c9a96e]/60 transition-colors bg-[#faf8f5]"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a96e]/10 flex items-center justify-center">
              <Upload className="w-8 h-8 text-[#c9a96e]" />
            </div>
            <p className="font-medium text-[#3a3028] mb-2">{t.customization.imageColorStep.uploadArea.title}</p>
            <p className="text-sm text-[#8a7a6a]">{t.customization.imageColorStep.uploadArea.description}</p>
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden bg-[#faf8f5]">
            <div className="aspect-video relative">
              <Image src={uploadedImage || "/placeholder.svg"} alt="Uploaded" fill className="object-contain" />
            </div>
            <button
              onClick={removeImage}
              className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <X className="w-4 h-4 text-[#6a5a4a]" />
            </button>
          </div>
        )}
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
      </div>

      {/* Tips */}
      <div className="bg-[#faf8f5] rounded-xl p-4 mb-8">
        <h4 className="font-medium text-sm text-[#3a3028] mb-2 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-[#c9a96e]" />
          {t.customization.imageColorStep.tips.title}
        </h4>
        <ul className="text-sm text-[#6a5a4a] space-y-1">
          <li>• {t.customization.imageColorStep.tips.tip1}</li>
          <li>• {t.customization.imageColorStep.tips.tip2}</li>
          <li>• {t.customization.imageColorStep.tips.tip3}</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 h-12 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.customization.imageColorStep.back}
        </Button>
        <Button
          onClick={handleGenerate}
          disabled={!uploadedImage || isGenerating}
          className="flex-[2] bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 h-12"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              {t.customization.imageColorStep.generating}
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              {t.customization.imageColorStep.generate}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
