"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t } = useI18n()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError(t.auth.signUp.passwordMismatch)
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError(t.auth.signUp.passwordTooShort)
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/`,
          data: {
            name,
          },
        },
      })
      if (error) throw error
      router.push("/auth/sign-up-success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : t.auth.signUp.error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <Link href="/">
            <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={120} height={120} className="object-contain" />
          </Link>

          <Card className="w-full border-[#c9a86c]/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-[#8b7355]">{t.auth.signUp.title}</CardTitle>
              <CardDescription className="text-[#666]">{t.auth.signUp.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-[#8b7355]">
                      {t.auth.signUp.name}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.auth.signUp.namePlaceholder}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-[#c9a86c]/30 focus:border-[#c9a86c]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-[#8b7355]">
                      {t.auth.signUp.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-[#c9a86c]/30 focus:border-[#c9a86c]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-[#8b7355]">
                      {t.auth.signUp.password}
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-[#c9a86c]/30 focus:border-[#c9a86c]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword" className="text-[#8b7355]">
                      {t.auth.signUp.confirmPassword}
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="border-[#c9a86c]/30 focus:border-[#c9a86c]"
                    />
                  </div>
                  {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-[#c9a86c] hover:bg-[#b89555] text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? t.auth.signUp.loading : t.auth.signUp.submit}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-[#666]">
                  {t.auth.signUp.hasAccount}{" "}
                  <Link href="/auth/login" className="text-[#c9a86c] hover:underline">
                    {t.auth.signUp.login}
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
