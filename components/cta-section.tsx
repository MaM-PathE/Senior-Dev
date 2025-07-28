import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-10 mix-blend-overlay"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl mb-6">
              Prêt à trouver l'EHPAD idéal pour votre proche ?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              Commencez par estimer le niveau de dépendance (GIR) et découvrez les établissements adaptés à ses besoins.
              Notre équipe d'experts vous accompagne à chaque étape du processus.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-md">
                <Link href="/questionnaire">Estimer le GIR</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground"
              >
                <Link href="/a-propos">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
