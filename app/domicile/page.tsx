import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Users, Wrench, Phone, Brain, Calendar } from "lucide-react"

export default function DomicilePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(209,213,219,0.2),transparent_40%)]"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
                  <span>Nouvelle solution pour l'autonomie</span>
                </div>
                <h1 className="text-4xl font-serif font-medium tracking-tight sm:text-5xl md:text-6xl">
                  Maintien à domicile en toute sérénité
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GIR & Go vous accompagne pour favoriser l'autonomie des personnes âgées à domicile. Évaluation
                personnalisée, services adaptés et technologies innovantes pour un maintien à domicile sécurisé et
                serein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-md">
                  <Link href="/domicile/evaluation">Évaluation à domicile</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link href="/domicile/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-xl opacity-30 -z-10"></div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl elegant-shadow">
                <Image
                  src="/senior-at-home.jpg"
                  alt="Personne âgée à domicile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl mb-4">
              Nos solutions pour le maintien à domicile
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GIR & Go propose une approche globale pour favoriser l'autonomie des personnes âgées tout en assurant leur
              sécurité et leur bien-être à domicile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Évaluation à domicile</CardTitle>
                <CardDescription>Analyse personnalisée des besoins et de l'environnement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Notre équipe évalue le niveau d'autonomie (GIR) directement au domicile et identifie les adaptations
                  nécessaires pour un maintien à domicile sécurisé.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/evaluation">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Services d'aide</CardTitle>
                <CardDescription>Accompagnement quotidien personnalisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mise en relation avec des services d'aide à domicile qualifiés : auxiliaires de vie, aides ménagères,
                  portage de repas, soins infirmiers.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/services">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Adaptation du logement</CardTitle>
                <CardDescription>Solutions pour un habitat sécurisé</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Recommandations et mise en relation avec des professionnels pour adapter le logement : barres d'appui,
                  rampes d'accès, éclairage automatique.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/logement">Explorer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Téléassistance</CardTitle>
                <CardDescription>Sécurité et assistance 24h/24</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Solutions de téléassistance moderne : bouton d'alerte, détecteurs de chute, capteurs de mouvement et
                  surveillance bienveillante.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/teleassistance">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Stimulation et prévention</CardTitle>
                <CardDescription>Maintien des capacités physiques et cognitives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Programmes d'activités adaptés pour maintenir l'autonomie : exercices physiques doux, stimulation
                  cognitive, nutrition équilibrée.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/prevention">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Espace aidants</CardTitle>
                <CardDescription>Soutien et ressources pour les proches</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Outils de coordination, ressources pédagogiques et communauté d'entraide pour les aidants familiaux.
                  Services de répit pour prévenir l'épuisement.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/domicile/aidants">Accéder</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-10 mix-blend-overlay"></div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl mb-6">
                Besoin d'une évaluation personnalisée ?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
                Nos experts peuvent se déplacer à domicile pour évaluer les besoins spécifiques et proposer des
                solutions adaptées pour favoriser l'autonomie et la sécurité.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="rounded-md">
                  <Link href="/domicile/evaluation">Demander une évaluation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
