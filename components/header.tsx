"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User, LogOut, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const { t } = useI18n()

  useEffect(() => {
    const supabase = createClient()

    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = "/"
  }

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
              {t.header.jewelryCollection}
            </Link>
            <Link
              href="#customize"
              className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors"
            >
              {t.header.colorCustomization}
            </Link>
            <Link href="#craft" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors">
              {t.header.craftsmanship}
            </Link>
            <Link href="#about" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e] transition-colors">
              {t.header.brandStory}
            </Link>
          </nav>
          {/* </CHANGE> */}

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            {/* </CHANGE> */}

            {loading ? (
              <div className="w-9 h-9 rounded-full bg-[#f5f3ef] animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-[#5a4a3a] hover:text-[#c9a96e]">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-[#3a3028] truncate">
                      {user.user_metadata?.name || user.email}
                    </p>
                    <p className="text-xs text-[#8a7a6a] truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/orders" className="flex items-center cursor-pointer">
                      <Package className="w-4 h-4 mr-2" />
                      {t.header.myOrders}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    {t.header.signOut}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" size="icon" className="text-[#5a4a3a] hover:text-[#c9a96e]">
                <Link href="/auth/login">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            )}

            <Button asChild className="bg-[#c9a96e] text-white hover:bg-[#b8986d] text-sm font-medium">
              <Link href="#collection">{t.header.startCustomization}</Link>
            </Button>

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
                {t.header.jewelryCollection}
              </Link>
              <Link href="#customize" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                {t.header.colorCustomization}
              </Link>
              <Link href="#craft" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                {t.header.craftsmanship}
              </Link>
              <Link href="#about" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                {t.header.brandStory}
              </Link>
              {user ? (
                <>
                  <Link href="/orders" className="text-sm font-medium text-[#5a4a3a] hover:text-[#c9a96e]">
                    {t.header.myOrders}
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm font-medium text-red-600 hover:text-red-700 text-left"
                  >
                    {t.header.signOut}
                  </button>
                </>
              ) : (
                <Link href="/auth/login" className="text-sm font-medium text-[#c9a96e]">
                  {t.header.loginRegister}
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
