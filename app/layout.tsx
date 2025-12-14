import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n/context"
import "./globals.css"

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "聆花珐琅 - 定制专属珐琅首饰 | Linghua Cloisonné",
  description:
    "聆花珐琅，传承千年珐琅工艺，为您打造独一无二的珐琅首饰。选择您喜爱的配色方案，定制专属于您的珐琅艺术品。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSerifSC.variable} ${notoSansSC.variable} font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
        {/* </CHANGE> */}
        <Analytics />
      </body>
    </html>
  )
}
