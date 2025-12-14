"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { UserInfo } from "../customization-flow"
import type { JewelryItem } from "@/lib/jewelry-data"

interface UserInfoStepProps {
  jewelry: JewelryItem
  userInfo: UserInfo
  onUserInfoChange: (info: UserInfo) => void
  onNext: () => void
}

const identities = [
  { value: "professional", label: "职业女性" },
  { value: "student", label: "学生" },
  { value: "bride", label: "新娘" },
  { value: "elder", label: "长辈" },
  { value: "artist", label: "艺术工作者" },
  { value: "other", label: "其他" },
]

const ageRanges = [
  { value: "18-25", label: "18-25岁" },
  { value: "26-35", label: "26-35岁" },
  { value: "36-45", label: "36-45岁" },
  { value: "46-55", label: "46-55岁" },
  { value: "55+", label: "55岁以上" },
]

const styles = [
  { value: "elegant", label: "优雅端庄" },
  { value: "modern", label: "时尚现代" },
  { value: "classic", label: "经典传统" },
  { value: "artistic", label: "艺术个性" },
  { value: "simple", label: "简约低调" },
]

export function UserInfoStep({ jewelry, userInfo, onUserInfoChange, onNext }: UserInfoStepProps) {
  const updateField = <K extends keyof UserInfo>(field: K, value: UserInfo[K]) => {
    onUserInfoChange({ ...userInfo, [field]: value })
  }

  const isValid = userInfo.purpose && userInfo.recipientIdentity && userInfo.ageRange && userInfo.style

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

      <h3 className="font-serif text-xl font-medium text-[#3a3028] mb-6">让AI了解您的需求</h3>

      {/* Purpose */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-[#3a3028] mb-3 block">这件作品是给谁用的？</Label>
        <RadioGroup
          value={userInfo.purpose || ""}
          onValueChange={(value) => updateField("purpose", value as "self" | "gift")}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="self" id="self" className="border-[#c9a96e] text-[#c9a96e]" />
            <Label htmlFor="self" className="text-[#6a5a4a] cursor-pointer">
              自己使用
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gift" id="gift" className="border-[#c9a96e] text-[#c9a96e]" />
            <Label htmlFor="gift" className="text-[#6a5a4a] cursor-pointer">
              赠送他人
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Identity */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-[#3a3028] mb-3 block">
          {userInfo.purpose === "gift" ? "收礼人的身份" : "您的身份"}
        </Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {identities.map((identity) => (
            <button
              key={identity.value}
              onClick={() => updateField("recipientIdentity", identity.value)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                userInfo.recipientIdentity === identity.value
                  ? "bg-[#c9a96e] text-white"
                  : "bg-[#faf8f5] text-[#6a5a4a] hover:bg-[#c9a96e]/10 border border-[#e5e0d8]"
              }`}
            >
              {identity.label}
            </button>
          ))}
        </div>
      </div>

      {/* Age Range */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-[#3a3028] mb-3 block">年龄段</Label>
        <div className="flex flex-wrap gap-3">
          {ageRanges.map((age) => (
            <button
              key={age.value}
              onClick={() => updateField("ageRange", age.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                userInfo.ageRange === age.value
                  ? "bg-[#c9a96e] text-white"
                  : "bg-[#faf8f5] text-[#6a5a4a] hover:bg-[#c9a96e]/10 border border-[#e5e0d8]"
              }`}
            >
              {age.label}
            </button>
          ))}
        </div>
      </div>

      {/* Style Preference */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-[#3a3028] mb-3 block">风格偏好</Label>
        <div className="flex flex-wrap gap-3">
          {styles.map((style) => (
            <button
              key={style.value}
              onClick={() => updateField("style", style.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                userInfo.style === style.value
                  ? "bg-[#c9a96e] text-white"
                  : "bg-[#faf8f5] text-[#6a5a4a] hover:bg-[#c9a96e]/10 border border-[#e5e0d8]"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mb-8">
        <Label className="text-sm font-medium text-[#3a3028] mb-3 block">其他需求（选填）</Label>
        <Textarea
          value={userInfo.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
          placeholder="例如：喜欢的颜色、特殊寓意、搭配需求等..."
          className="bg-[#faf8f5] border-[#e5e0d8] focus:border-[#c9a96e] focus:ring-[#c9a96e]/20 min-h-[100px]"
        />
      </div>

      <Button
        onClick={onNext}
        disabled={!isValid}
        className="w-full bg-[#c9a96e] text-white hover:bg-[#b8986d] disabled:opacity-50 disabled:cursor-not-allowed h-12 text-base"
      >
        下一步：选择定制方式
      </Button>
    </div>
  )
}
