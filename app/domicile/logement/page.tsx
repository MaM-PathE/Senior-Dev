import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bath, Bed, Utensils, StepBackIcon as Stairs, Lightbulb, DoorOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LogementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Adaptation du logement</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des solutions pour rendre le domicile plus sûr et adapté aux besoins spécifiques des personnes âgées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[300px] w-full">
            <Image src="/home-adaptation.jpg" alt="Adaptation du logement" fill className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-medium mb-4">Pourquoi adapter son logement ?</h2>
            <p className="text-muted-foreground mb-4">
              L'adaptation du logement est essentielle pour prévenir les accidents domestiques et favoriser l'autonomie
              des personnes âgées. Des aménagements simples peuvent considérablement améliorer la sécurité et le confort
              au quotidien.
            </p>
            <p className="text-muted-foreground">
              Notre approche personnalisée tient compte des besoins spécifiques de chaque personne, de son niveau
              d'autonomie et des caractéristiques de son logement pour proposer des solutions adaptées et efficaces.
            </p>
          </div>
        </div>

        <Tabs defaultValue="salle-de-bain" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-medium mb-4">Solutions par pièce</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos recommandations d'aménagement pour chaque pièce de votre domicile.
            </p>
          </div>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="salle-de-bain" className="flex flex-col gap-2 py-3">
              <Bath className="h-5 w-5" />
              <span className="text-xs">Salle de bain</span>
            </TabsTrigger>
            <TabsTrigger value="chambre" className="flex flex-col gap-2 py-3">
              <Bed className="h-5 w-5" />
              <span className="text-xs">Chambre</span>
            </TabsTrigger>
            <TabsTrigger value="cuisine" className="flex flex-col gap-2 py-3">
              <Utensils className="h-5 w-5" />
              <span className="text-xs">Cuisine</span>
            </TabsTrigger>
            <TabsTrigger value="escaliers" className="flex flex-col gap-2 py-3">
              <Stairs className="h-5 w-5" />
              <span className="text-xs">Escaliers</span>
            </TabsTrigger>
            <TabsTrigger value="eclairage" className="flex flex-col gap-2 py-3">
              <Lightbulb className="h-5 w-5" />
              <span className="text-xs">Éclairage</span>
            </TabsTrigger>
            <TabsTrigger value="acces" className="flex flex-col gap-2 py-3">
              <DoorOpen className="h-5 w-5" />
              <span className="text-xs">Accès</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="salle-de-bain">
            <Card>
              <CardHeader>
                <CardTitle>Salle de bain sécurisée</CardTitle>
                <CardDescription>Solutions pour réduire les risques de chute</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Installation de barres d'appui près des toilettes et dans la douche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Remplacement de la baignoire par une douche de plain-pied avec siège</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Pose de revêtements de sol antidérapants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Installation d'un rehausseur de toilettes avec accoudoirs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Mise en place d'un système d'appel d'urgence étanche</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Réduction significative des risques de chute</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Maintien de l'autonomie pour l'hygiène personnelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Confort accru lors de la toilette</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sécurité renforcée dans une zone à haut risque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Possibilité d'aides financières pour ces aménagements</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chambre">
            <Card>
              <CardHeader>
                <CardTitle>Chambre adaptée</CardTitle>
                <CardDescription>Aménagements pour faciliter le repos et les déplacements</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Lit médicalisé électrique avec hauteur réglable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Barre de redressement au lit pour faciliter les transferts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Chemin lumineux automatique pour les déplacements nocturnes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Télécommande centralisée pour l'éclairage et les volets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Aménagement des rangements à hauteur accessible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Amélioration de la qualité du sommeil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Facilitation des transferts lit/fauteuil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Prévention des chutes nocturnes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Autonomie renforcée pour les gestes quotidiens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Confort accru pour les périodes de repos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cuisine">
            <Card>
              <CardHeader>
                <CardTitle>Cuisine fonctionnelle</CardTitle>
                <CardDescription>Adaptations pour cuisiner en toute sécurité</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Plans de travail à hauteur ajustable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Placards et rangements accessibles sans escabeau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Plaque de cuisson à induction avec sécurité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Robinetterie à levier ou détecteur de mouvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Ustensiles ergonomiques adaptés</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Maintien de l'autonomie pour la préparation des repas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Réduction des risques d'accidents domestiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Diminution de la fatigue lors des tâches culinaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Meilleure accessibilité aux ustensiles et aliments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Préservation du plaisir de cuisiner</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="escaliers">
            <Card>
              <CardHeader>
                <CardTitle>Escaliers sécurisés</CardTitle>
                <CardDescription>Solutions pour faciliter les déplacements verticaux</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Installation de rampes des deux côtés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Pose de bandes antidérapantes sur les marches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Éclairage automatique avec détecteur de présence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Installation d'un monte-escalier électrique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Marquage contrasté des premières et dernières marches</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Prévention des chutes dans les escaliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Maintien de l'accès à tous les niveaux du logement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Réduction de la fatigue lors des déplacements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sécurisation d'une zone à haut risque d'accident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Conservation de l'indépendance dans un logement à étages</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eclairage">
            <Card>
              <CardHeader>
                <CardTitle>Éclairage optimisé</CardTitle>
                <CardDescription>Solutions pour améliorer la visibilité et la sécurité</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Éclairage automatique avec détecteurs de mouvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Chemins lumineux pour les déplacements nocturnes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Interrupteurs lumineux et faciles d'accès</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Éclairage renforcé dans les zones à risque (escaliers, salle de bain)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Système de commande vocale ou à distance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Réduction significative des risques de chute</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Meilleure visibilité pour les déplacements nocturnes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Facilitation des activités quotidiennes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Économies d'énergie grâce à l'automatisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Confort visuel adapté aux besoins des seniors</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="acces">
            <Card>
              <CardHeader>
                <CardTitle>Accès facilités</CardTitle>
                <CardDescription>Solutions pour entrer et sortir du logement en toute sécurité</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Aménagements recommandés</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Installation d'une rampe d'accès</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Élargissement des portes pour passage de fauteuil roulant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Poignées de porte ergonomiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Système de vidéophonie et d'ouverture à distance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Suppression des seuils de porte</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Avantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Maintien du lien social et des sorties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Accessibilité pour les personnes à mobilité réduite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sécurisation des entrées et sorties du domicile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Facilitation des livraisons et visites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Prévention des chutes aux points d'entrée</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Notre accompagnement</CardTitle>
            <CardDescription>Une approche globale pour adapter votre logement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-2">Diagnostic complet</h3>
                  <p className="text-sm text-muted-foreground">
                    Évaluation détaillée du logement et des besoins spécifiques de la personne par un ergothérapeute.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recommandations personnalisées</h3>
                  <p className="text-sm text-muted-foreground">
                    Proposition d'aménagements adaptés avec différentes options et niveaux de priorité.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-2">Accompagnement administratif</h3>
                  <p className="text-sm text-muted-foreground">
                    Aide pour les demandes de financement (APA, caisses de retraite, crédit d'impôt, etc.).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-2">Mise en relation avec des artisans qualifiés</h3>
                  <p className="text-sm text-muted-foreground">
                    Sélection de professionnels spécialisés dans l'adaptation des logements pour personnes âgées.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-medium mb-2">Suivi des travaux</h3>
                  <p className="text-sm text-muted-foreground">
                    Coordination et contrôle de la bonne exécution des aménagements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Besoin de conseils pour adapter votre logement ?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos experts peuvent réaliser un diagnostic personnalisé de votre domicile et vous proposer des solutions
            adaptées à vos besoins spécifiques.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Demander un diagnostic</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
