import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { JewelryCollection } from "@/components/jewelry-collection"
import { CraftProcess } from "@/components/craft-process"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <JewelryCollection />
      <CraftProcess />
      <ReviewsSection />
      <Footer />
    </main>
  )
}
