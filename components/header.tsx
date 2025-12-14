"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#c9a96e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo-e5-ba-95.png" alt="聆花珐琅" width={48} height={48} className="h-12 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg text-[#c9a96e] tracking-wider">聆花珐琅</span>
              <span className="text-[10px] text-[#c9a96e]/70 tracking-widest">LINGHUA CLOISONNE</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#collection"
              className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors"
            >
              首饰系列
            </Link>
            <Link
              href="#customize"
              className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors"
            >
              配色定制
            </Link>
            <Link href="#craft" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors">
              匠心工艺
            </Link>
            <Link href="#about" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors">
              品牌故事
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#5a4a3a] hover:text-[#c9a96e]">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-[#c9a96e] text-white hover:bg-[#b8986d] text-sm font-medium">开始定制</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#5a4a3a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#c9a96e]/20">
            <div className="flex flex-col gap-4">
              <Link href="#collection" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                首饰系列
              </Link>
              <Link href="#customize" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                配色定制
              </Link>
              <Link href="#craft" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                匠心工艺
              </Link>
              <Link href="#about" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                品牌故事
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
