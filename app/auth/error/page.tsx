import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { AlertCircle } from "lucide-react"

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <Link href="/">
            <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={120} height={120} className="object-contain" />
          </Link>

          <Card className="w-full border-red-200 text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <CardTitle className="text-2xl text-[#8b7355]">出错了</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {params?.error ? (
                <p className="text-sm text-[#666]">错误信息：{params.error}</p>
              ) : (
                <p className="text-sm text-[#666]">发生了未知错误，请重试。</p>
              )}
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
