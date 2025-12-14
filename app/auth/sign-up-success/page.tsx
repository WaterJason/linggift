"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export default function SignUpSuccessPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <Link href="/">
            <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={120} height={120} className="object-contain" />
          </Link>

          <Card className="w-full border-[#c9a86c]/20 text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-[#c9a86c]/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-[#c9a86c]" />
              </div>
              <CardTitle className="text-2xl text-[#8b7355]">{t.auth.signUpSuccess.title}</CardTitle>
              <CardDescription className="text-[#666]">{t.auth.signUpSuccess.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#666]">{t.auth.signUpSuccess.message}</p>
              <Button asChild className="w-full bg-[#c9a86c] hover:bg-[#b89555]">
                <Link href="/auth/login">{t.auth.signUpSuccess.backToLogin}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
