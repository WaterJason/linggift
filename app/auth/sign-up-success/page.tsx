import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
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
              <CardTitle className="text-2xl text-[#8b7355]">注册成功！</CardTitle>
              <CardDescription className="text-[#666]">请查收您的邮箱以确认账户</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#666]">
                我们已向您的邮箱发送了一封确认邮件，请点击邮件中的链接以激活您的账户。
              </p>
              <Button asChild className="w-full bg-[#c9a86c] hover:bg-[#b89555]">
                <Link href="/auth/login">返回登录</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
