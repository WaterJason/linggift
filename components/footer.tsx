import Link from "next/link"
import Image from "next/image"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
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
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-md">
              聆花珐琅，专注于珐琅首饰的设计与定制。我们传承千年珐琅工艺，融合现代美学，为您打造独一无二的珐琅艺术品。
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              每一件作品都可定制专属配色，让您的首饰与众不同。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4 text-white/80">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#collection" className="text-white/60 hover:text-white text-sm transition-colors">
                  首饰系列
                </Link>
              </li>
              <li>
                <Link href="#customize" className="text-white/60 hover:text-white text-sm transition-colors">
                  配色定制
                </Link>
              </li>
              <li>
                <Link href="#craft" className="text-white/60 hover:text-white text-sm transition-colors">
                  匠心工艺
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white text-sm transition-colors">
                  品牌故事
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4 text-white/80">联系我们</h3>
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
                <span>北京市朝阳区艺术区</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-[#c9a96e] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1 text-white/90">品质保障</h4>
              <p className="text-white/60 text-sm">
                所有作品均提供品质保证，如有任何质量问题，我们承诺免费维修或更换。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">©2025 聆花珐琅 LINGHUA CLOISONNE</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              隐私政策
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
