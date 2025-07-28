import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RechercheGirPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Recherche par niveau de GIR
          </h1>
          <p className="text-lg text-muted-foreground">
            Trouvez des établissements adaptés au niveau de dépendance de votre proche.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Critères de GIR</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="gir">Niveau de GIR</Label>
              <Select>
                <SelectTrigger id="gir">
                  <SelectValue placeholder="Sélectionner un GIR" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">GIR 1-2 (dépendance totale)</SelectItem>
                  <SelectItem value="3-4">GIR 3-4 (dépendance partielle)</SelectItem>
                  <SelectItem value="5-6">GIR 5-6 (autonomie relative)</SelectItem>
                  <SelectItem value="all">Tous les niveaux</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Services spécifiques</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="alzheimer" />
                  <Label htmlFor="alzheimer" className="text-sm">
                    Unité Alzheimer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="handicap" />
                  <Label htmlFor="handicap" className="text-sm">
                    Accueil handicap
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="psycho" />
                  <Label htmlFor="psycho" className="text-sm">
                    Suivi psychologique
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="physio" />
                  <Label htmlFor="physio" className="text-sm">
                    Physiothérapie
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="palliative" />
                  <Label htmlFor="palliative" className="text-sm">
                    Soins palliatifs
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="nutrition" />
                  <Label htmlFor="nutrition" className="text-sm">
                    Suivi nutritionnel
                  </Label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full">Rechercher</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprendre les niveaux de GIR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border/40 rounded-md p-4">
                    <h3 className="font-medium mb-2">GIR 1-2</h3>
                    <p className="text-sm text-muted-foreground">
                      Personnes confinées au lit ou au fauteuil, dont les fonctions mentales sont gravement altérées ou
                      qui nécessitent une présence indispensable et continue.
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Besoin d'établissements avec personnel qualifié 24h/24 et soins médicaux constants.
                    </p>
                  </div>
                  <div className="border border-border/40 rounded-md p-4">
                    <h3 className="font-medium mb-2">GIR 3-4</h3>
                    <p className="text-sm text-muted-foreground">
                      Personnes ayant conservé partiellement leur autonomie motrice mais qui nécessitent quotidiennement
                      des aides pour leur autonomie corporelle.
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Besoin d'établissements avec aide régulière et surveillance quotidienne.
                    </p>
                  </div>
                  <div className="border border-border/40 rounded-md p-4">
                    <h3 className="font-medium mb-2">GIR 5-6</h3>
                    <p className="text-sm text-muted-foreground">
                      Personnes relativement autonomes dans les actes de la vie quotidienne, nécessitant des aides
                      ponctuelles.
                    </p>
                    <p className="text-sm font-medium mt-2">
                      Adaptés aux résidences autonomie ou EHPAD avec services à la carte.
                    </p>
                  </div>
                  <div className="border border-border/40 rounded-md p-4">
                    <h3 className="font-medium mb-2">Évolution du GIR</h3>
                    <p className="text-sm text-muted-foreground">
                      Le niveau de dépendance peut évoluer avec le temps. Certains établissements proposent différentes
                      unités pour accompagner cette évolution sans changement d'établissement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
