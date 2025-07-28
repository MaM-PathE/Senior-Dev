import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">À propos de GIR & Go</h1>
          <p className="text-lg text-muted-foreground">
            Notre mission est de simplifier la recherche et le suivi des personnes âgées en France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
            <p className="text-muted-foreground mb-4">
              GIR & Go est né d'un constat simple : trouver un EHPAD adapté pour un proche âgé est souvent un parcours
              complexe et stressant pour les familles.
            </p>
            <p className="text-muted-foreground mb-4">
              Notre équipe a développé cette application en avril 2025 pour combiner la recherche d'établissements avec
              un suivi post-admission, offrant ainsi une solution complète que les outils existants ne proposaient pas.
            </p>
            <p className="text-muted-foreground">
              Nous nous engageons à faciliter cette transition importante dans la vie des personnes âgées et de leurs
              familles, en mettant l'accent sur la transparence et la qualité des soins.
            </p>
          </div>
          <div className="relative h-[300px] w-full">
            <Image
              src="/intergenerational-care-planning.png"
              alt="L'équipe GIR & Go"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Notre innovation</CardTitle>
            <CardDescription>Ce qui nous différencie des autres solutions</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Estimation rapide du GIR</h3>
                  <p className="text-sm text-muted-foreground">
                    Notre questionnaire interactif permet d'estimer rapidement le niveau de dépendance (GIR) avant même
                    de commencer la recherche d'établissements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Recherche personnalisée</h3>
                  <p className="text-sm text-muted-foreground">
                    Notre moteur de recherche prend en compte le GIR, la localisation et le budget pour trouver les
                    établissements les plus adaptés.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Suivi post-admission</h3>
                  <p className="text-sm text-muted-foreground">
                    Contrairement aux outils existants, nous offrons un suivi détaillé après l'admission, avec des mises
                    à jour quotidiennes pour les familles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Prédictions d'évolution</h3>
                  <p className="text-sm text-muted-foreground">
                    Notre algorithme analyse les tendances pour prédire l'évolution du GIR, permettant d'anticiper les
                    changements de soins nécessaires.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl mb-6">Notre équipe</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            GIR & Go est développé par un expert en data science et développement web, passionné par l'amélioration des
            services pour les personnes âgées.
          </p>
        </div>

        <div className="elegant-card overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] md:h-full w-full">
                <Image
                  src="/images/cheikh-gueye.avif"
                  alt="Cheikh GUEYE - Fondateur de GIR & Go"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
              <div className="max-w-lg">
                <h3 className="text-2xl font-serif font-medium mb-2">Cheikh GUEYE</h3>
                <div className="h-0.5 w-16 bg-primary mb-6"></div>
                <p className="text-primary font-medium mb-6 text-lg">Fondateur, Data Scientist / Dev Full Stack</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Passionné par l'innovation technologique au service des personnes âgées, Cheikh combine son expertise
                  en data science et en développement web pour créer des solutions qui améliorent concrètement la vie
                  des seniors et de leurs familles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Avec GIR & Go, il a développé une plateforme complète qui répond aux besoins réels des familles
                  cherchant un EHPAD adapté, tout en offrant un suivi post-admission innovant basé sur l'analyse de
                  données.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter, nous serons ravis d'échanger
            avec vous.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email :</strong> contact@girandgo.fr
            </p>
            <p>
              <strong>Téléphone :</strong> 01 23 45 67 89
            </p>
            <p>
              <strong>Adresse :</strong> 123 Avenue des Seniors, 75000 Paris
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
