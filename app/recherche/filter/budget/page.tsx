import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Euro, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RechercheBudgetPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Recherche par budget</h1>
          <p className="text-lg text-muted-foreground">
            Trouvez des établissements adaptés à votre budget mensuel et découvrez les aides financières disponibles.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Critères de budget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label>Type de tarification</Label>
              <Tabs defaultValue="mensuel" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mensuel">Tarif mensuel</TabsTrigger>
                  <TabsTrigger value="journalier">Tarif journalier</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="budget">Budget maximum</Label>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Euro className="h-3 w-3 mr-1" />
                  2500 €
                </span>
              </div>
              <Slider id="budget" min={1500} max={5000} step={100} defaultValue={[2500]} />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1500 €</span>
                <span>5000 €</span>
              </div>
            </div>

            <Alert variant="default" className="bg-muted border-muted-foreground/20">
              <Info className="h-4 w-4" />
              <AlertTitle>Bon à savoir</AlertTitle>
              <AlertDescription>
                Le tarif affiché inclut l'hébergement et la dépendance. Des aides comme l'APA peuvent réduire ce
                montant.
              </AlertDescription>
            </Alert>

            <div className="pt-4">
              <Button className="w-full">Rechercher</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Aides financières</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">APA (Allocation Personnalisée d'Autonomie)</h3>
                <p className="text-sm text-muted-foreground">
                  Aide destinée aux personnes âgées en perte d'autonomie, son montant varie selon le GIR et les revenus.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">ASH (Aide Sociale à l'Hébergement)</h3>
                <p className="text-sm text-muted-foreground">
                  Aide pour les personnes aux revenus insuffisants, récupérable sur succession.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">APL (Aide Personnalisée au Logement)</h3>
                <p className="text-sm text-muted-foreground">
                  Aide au logement qui peut être accordée selon les revenus et le statut de l'établissement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Comprendre les tarifs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Tarif hébergement</h3>
                <p className="text-sm text-muted-foreground">
                  Couvre le logement, la restauration, l'entretien et l'animation (60-70% du coût total).
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Tarif dépendance</h3>
                <p className="text-sm text-muted-foreground">
                  Varie selon le GIR et couvre l'aide aux gestes quotidiens (20-30% du coût total).
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Tarif soins</h3>
                <p className="text-sm text-muted-foreground">
                  Pris en charge par l'Assurance Maladie, il n'est pas inclus dans le tarif résident.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
