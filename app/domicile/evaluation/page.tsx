import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EvaluationDomicilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Évaluation à domicile</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une analyse personnalisée des besoins et de l'environnement pour un maintien à domicile sécurisé et adapté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[300px] w-full">
            <Image src="/home-evaluation.jpg" alt="Évaluation à domicile" fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-medium mb-4">Pourquoi une évaluation à domicile ?</h2>
            <p className="text-muted-foreground mb-4">
              L'évaluation à domicile permet d'analyser précisément le niveau d'autonomie de la personne dans son
              environnement quotidien et d'identifier les adaptations nécessaires pour favoriser son maintien à domicile
              en toute sécurité.
            </p>
            <p className="text-muted-foreground">
              Notre approche globale prend en compte à la fois les capacités de la personne, son environnement et ses
              besoins spécifiques pour proposer des solutions personnalisées.
            </p>
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Notre processus d'évaluation</CardTitle>
            <CardDescription>Une démarche complète en plusieurs étapes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-2">Pré-évaluation téléphonique</h3>
                  <p className="text-sm text-muted-foreground">
                    Un premier échange pour comprendre la situation et préparer la visite à domicile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-2">Visite à domicile</h3>
                  <p className="text-sm text-muted-foreground">
                    Un expert se déplace pour évaluer le niveau d'autonomie (GIR) et analyser l'environnement de vie.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-2">Rapport détaillé</h3>
                  <p className="text-sm text-muted-foreground">
                    Remise d'un rapport complet avec évaluation du GIR, analyse des risques et recommandations
                    personnalisées.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-2">Plan d'action personnalisé</h3>
                  <p className="text-sm text-muted-foreground">
                    Proposition de solutions adaptées : services d'aide, adaptations du logement, téléassistance, etc.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-medium mb-2">Suivi régulier</h3>
                  <p className="text-sm text-muted-foreground">
                    Réévaluations périodiques pour adapter les solutions à l'évolution des besoins.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Éléments évalués</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Autonomie fonctionnelle</h3>
                  <p className="text-sm text-muted-foreground">
                    Capacité à réaliser les activités de la vie quotidienne : se laver, s'habiller, se nourrir, se
                    déplacer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Sécurité du logement</h3>
                  <p className="text-sm text-muted-foreground">
                    Identification des risques de chute et d'accident : escaliers, salle de bain, éclairage, etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">État cognitif</h3>
                  <p className="text-sm text-muted-foreground">
                    Évaluation de la mémoire, de l'orientation et des capacités de jugement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Situation sociale</h3>
                  <p className="text-sm text-muted-foreground">
                    Présence d'aidants, réseau familial, isolement, participation sociale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nos recommandations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Services d'aide à domicile</h3>
                  <p className="text-sm text-muted-foreground">
                    Sélection de prestataires qualifiés selon les besoins identifiés.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Adaptations du logement</h3>
                  <p className="text-sm text-muted-foreground">
                    Solutions concrètes pour sécuriser et adapter l'habitat aux besoins spécifiques de la personne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Solutions de téléassistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Dispositifs adaptés pour assurer la sécurité et permettre une intervention rapide si nécessaire.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Aides financières</h3>
                  <p className="text-sm text-muted-foreground">
                    Information sur les dispositifs d'aide disponibles : APA, crédit d'impôt, aides des caisses de
                    retraite.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-serif font-medium mb-4">Demander une évaluation à domicile</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos experts se déplacent dans toute la France pour réaliser des évaluations personnalisées. Le premier
            rendez-vous d'évaluation est sans engagement.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Témoignages</CardTitle>
            <CardDescription>Ce que disent nos clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="italic text-muted-foreground mb-2">
                  "L'évaluation à domicile a été une révélation pour nous. Les recommandations étaient précises et
                  adaptées à la situation de ma mère. Grâce aux adaptations mises en place, elle peut continuer à vivre
                  chez elle en toute sécurité."
                </p>
                <p className="text-sm font-medium">Marie L., fille d'une personne accompagnée</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="italic text-muted-foreground mb-2">
                  "Je craignais de devoir quitter mon domicile, mais l'évaluation m'a permis de comprendre que des
                  solutions existaient. Aujourd'hui, avec les aides mises en place et les adaptations de mon logement,
                  je me sens en sécurité chez moi."
                </p>
                <p className="text-sm font-medium">Jean P., 82 ans, bénéficiaire</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
