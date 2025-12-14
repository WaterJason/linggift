"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { StepIndicator } from "./step-indicator"
import { UserInfoStep } from "./steps/user-info-step"
import { ColorMethodStep } from "./steps/color-method-step"
import { DirectColorStep } from "./steps/direct-color-step"
import { SceneColorStep } from "./steps/scene-color-step"
import { ImageColorStep } from "./steps/image-color-step"
import { ColorResultStep } from "./steps/color-result-step"
import { AccessoriesStep } from "./steps/accessories-step"
import { CheckoutStep } from "./steps/checkout-step"
import { getJewelryById } from "@/lib/jewelry-data"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { useI18n } from "@/lib/i18n/context"

export type ColorMethod = "direct" | "scene" | "image" | null

export interface UserInfo {
  purpose: "self" | "gift" | null
  recipientIdentity: string
  ageRange: string
  style: string
  additionalNotes: string
}

export interface ColorResult {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  goldTone: string
  name: string
  description: string
  generatedImage?: string
}

export interface Accessories {
  gemstone: string | null
  chain: string | null
  rope: string | null
}

interface CustomizationFlowProps {
  jewelryId: string
}

export function CustomizationFlow({ jewelryId }: CustomizationFlowProps) {
  const jewelry = getJewelryById(jewelryId)
  const { t } = useI18n()

  const [currentStep, setCurrentStep] = useState(1)
  const [user, setUser] = useState<User | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    purpose: null,
    recipientIdentity: "",
    ageRange: "",
    style: "",
    additionalNotes: "",
  })
  const [colorMethod, setColorMethod] = useState<ColorMethod>(null)
  const [colorResult, setColorResult] = useState<ColorResult | null>(null)
  const [accessories, setAccessories] = useState<Accessories>({
    gemstone: null,
    chain: null,
    rope: null,
  })
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const steps = [
    { number: 1, title: t.customization.steps.userInfo },
    { number: 2, title: t.customization.steps.method },
    { number: 3, title: t.customization.steps.colorSelection },
    { number: 4, title: t.customization.steps.colorScheme },
    { number: 5, title: t.customization.steps.accessories },
    { number: 6, title: t.customization.steps.checkout },
  ]

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6))
  }

  const handleBack = () => {
    if (currentStep === 4) {
      setCurrentStep(3)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1))
    }
  }

  const handleColorMethodSelect = (method: ColorMethod) => {
    setColorMethod(method)
    setCurrentStep(3)
  }

  const handleColorGenerated = (result: ColorResult) => {
    setColorResult(result)
    setCurrentStep(4)
  }

  if (!jewelry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#6a5a4a]">{t.customization.notFound}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-12">
          {currentStep === 1 && (
            <UserInfoStep jewelry={jewelry} userInfo={userInfo} onUserInfoChange={setUserInfo} onNext={handleNext} />
          )}

          {currentStep === 2 && (
            <ColorMethodStep jewelry={jewelry} onSelectMethod={handleColorMethodSelect} onBack={handleBack} />
          )}

          {currentStep === 3 && colorMethod === "direct" && (
            <DirectColorStep
              jewelry={jewelry}
              userInfo={userInfo}
              onColorGenerated={handleColorGenerated}
              onBack={handleBack}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          )}

          {currentStep === 3 && colorMethod === "scene" && (
            <SceneColorStep
              jewelry={jewelry}
              userInfo={userInfo}
              onColorGenerated={handleColorGenerated}
              onBack={handleBack}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          )}

          {currentStep === 3 && colorMethod === "image" && (
            <ImageColorStep
              jewelry={jewelry}
              userInfo={userInfo}
              onColorGenerated={handleColorGenerated}
              onBack={handleBack}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          )}

          {currentStep === 4 && colorResult && (
            <ColorResultStep
              jewelry={jewelry}
              colorResult={colorResult}
              onConfirm={handleNext}
              onRegenerate={() => setCurrentStep(3)}
              onBack={handleBack}
            />
          )}

          {currentStep === 5 && (
            <AccessoriesStep
              jewelry={jewelry}
              accessories={accessories}
              onAccessoriesChange={setAccessories}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {currentStep === 6 && colorResult && (
            <CheckoutStep
              jewelry={jewelry}
              colorResult={colorResult}
              accessories={accessories}
              userInfo={userInfo}
              user={user}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  )
}
