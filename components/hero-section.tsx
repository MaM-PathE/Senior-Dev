import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(209,213,219,0.2),transparent_40%)]"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
                <span>Solution innovante pour les personnes âgées</span>
              </div>
              <h1 className="text-4xl font-serif font-medium tracking-tight sm:text-5xl md:text-6xl">
                Simplifiez la recherche et le suivi des personnes âgées
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GIR & Go vous aide à trouver l'EHPAD idéal en fonction du niveau de dépendance (GIR) et à suivre
              l'évolution de vos proches après leur admission, pour une tranquillité d'esprit totale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-md">
                <Link href="/questionnaire">Estimer le GIR</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <Link href="/recherche">Rechercher un EHPAD</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-xl opacity-30 -z-10"></div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl elegant-shadow">
              <Image
                src="/connected-care-seniors.png"
                alt="Illustration de soins aux personnes âgées"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
