"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Phone, Mail, MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-[#3a3028] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-e5-ba-95.png"
                alt="聆花珐琅"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert opacity-80"
              />
              <div>
                <span className="font-serif text-lg tracking-wider block">聆花珐琅</span>
                <span className="text-[10px] text-white/50 tracking-widest">LINGHUA CLOISONNE</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-md">{t.footer.brandDescription}</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">{t.footer.brandDescription2}</p>
            {/* </CHANGE> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4 text-white/80">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#collection" className="text-white/60 hover:text-white text-sm transition-colors">
                  {t.header.jewelryCollection}
                </Link>
              </li>
              <li>
                <Link href="#customize" className="text-white/60 hover:text-white text-sm transition-colors">
                  {t.header.colorCustomization}
                </Link>
              </li>
              <li>
                <Link href="#craft" className="text-white/60 hover:text-white text-sm transition-colors">
                  {t.header.craftsmanship}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white text-sm transition-colors">
                  {t.header.brandStory}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4 text-white/80">{t.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="h-4 w-4" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="h-4 w-4" />
                <span>service@linghua.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-[#c9a96e] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1 text-white/90">{t.footer.qualityGuarantee}</h4>
              <p className="text-white/60 text-sm">{t.footer.qualityDescription}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">©2025 聆花珐琅 LINGHUA CLOISONNE</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
