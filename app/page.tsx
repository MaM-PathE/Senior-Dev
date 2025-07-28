import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { HowItWorks } from "@/components/how-it-works"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <CTASection />
    </div>
  )
}
