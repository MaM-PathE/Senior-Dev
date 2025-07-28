import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Utensils, Stethoscope, Sparkles, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesDomicilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Services d'aide à domicile
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des prestations personnalisées pour favoriser le maintien à domicile et préserver l'autonomie des personnes
            âgées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-serif font-medium mb-4">Un accompagnement sur mesure</h2>
            <p className="text-muted-foreground mb-4">
              Nos services d'aide à domicile sont conçus pour s'adapter précisément aux besoins de chaque personne, en
              fonction de son niveau d'autonomie, de ses préférences et de son mode de vie.
            </p>
            <p className="text-muted-foreground">
              Nous sélectionnons rigoureusement nos partenaires prestataires pour garantir des services de qualité,
              assurés par des professionnels qualifiés et bienveillants.
            </p>
          </div>
          <div className="relative h-[300px] w-full">
            <Image src="/home-care.jpg" alt="Aide à domicile" fill className="object-cover rounded-lg" />
          </div>
        </div>

        <h2 className="text-2xl font-serif font-medium mb-6 text-center">Nos services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Aide à la personne</CardTitle>
                <CardDescription>Assistance pour les actes essentiels</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Aide à la toilette et à l'habillage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Aide aux transferts et aux déplacements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Aide à la prise des repas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Accompagnement aux toilettes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Présence et soutien moral</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Aide ménagère</CardTitle>
                <CardDescription>Entretien du cadre de vie</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Ménage et entretien courant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Entretien du linge et repassage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Courses alimentaires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Préparation des repas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Petit bricolage et jardinage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Portage de repas</CardTitle>
                <CardDescription>Livraison de repas équilibrés</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Repas équilibrés et adaptés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Régimes spécifiques (diabétique, sans sel...)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Choix de menus variés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Livraison à domicile 7j/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Repas festifs pour occasions spéciales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Soins à domicile</CardTitle>
                <CardDescription>Suivi médical et paramédical</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Soins infirmiers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Kinésithérapie à domicile</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Ergothérapie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Orthophonie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Psychologue à domicile</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Activités et loisirs</CardTitle>
                <CardDescription>Stimulation et bien-être</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Stimulation cognitive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Activités physiques adaptées</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Activités créatives et manuelles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Lecture et jeux de société</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Sorties culturelles accompagnées</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Transport et accompagnement</CardTitle>
                <CardDescription>Mobilité et déplacements</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Accompagnement aux rendez-vous médicaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Essentiel</Badge>
                  <span>Transport pour courses et démarches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Promenades et sorties</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Confort</Badge>
                  <span>Visites à la famille et aux amis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Bien-être</Badge>
                  <span>Accompagnement aux activités de loisirs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Notre processus de mise en place</CardTitle>
            <CardDescription>Un accompagnement personnalisé en 4 étapes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-2">Évaluation des besoins</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyse précise de la situation et des besoins lors d'une visite à domicile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-2">Proposition personnalisée</h3>
                  <p className="text-sm text-muted-foreground">
                    Élaboration d'un plan d'aide sur mesure avec sélection des prestataires adaptés.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-2">Mise en place des services</h3>
                  <p className="text-sm text-muted-foreground">
                    Coordination de l'intervention des différents prestataires et démarches administratives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-2">Suivi et ajustements</h3>
                  <p className="text-sm text-muted-foreground">
                    Contrôle qualité régulier et adaptation des services selon l'évolution des besoins.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Besoin d'informations sur nos services ?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos conseillers sont à votre disposition pour vous présenter nos services d'aide à domicile et vous aider à
            trouver les solutions adaptées à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/domicile/evaluation">Demander une évaluation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
