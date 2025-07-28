import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { MapPin } from "lucide-react"

export default function RechercheLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Recherche par localisation
          </h1>
          <p className="text-lg text-muted-foreground">
            Trouvez les établissements les plus proches de chez vous ou d'une adresse spécifique.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Critères de localisation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Adresse de référence</Label>
              <div className="flex gap-2">
                <Input id="address" placeholder="Entrez une adresse ou un code postal" className="flex-1" />
                <Button variant="outline" className="shrink-0">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ma position
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="distance">Distance maximale</Label>
                <span className="text-sm text-muted-foreground">20 km</span>
              </div>
              <Slider id="distance" min={1} max={100} step={1} defaultValue={[20]} />
            </div>

            <div className="pt-4">
              <Button className="w-full">Rechercher</Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-serif font-medium mb-4">Pourquoi la localisation est importante ?</h2>
          <p className="text-muted-foreground mb-4">
            Choisir un établissement proche du domicile familial ou des proches aidants facilite les visites régulières,
            un facteur essentiel pour le bien-être de la personne âgée.
          </p>
          <p className="text-muted-foreground">
            Notre recherche par localisation vous permet de trouver le meilleur compromis entre proximité et qualité des
            soins, en tenant compte de vos contraintes géographiques.
          </p>
        </div>
      </div>
    </div>
  )
}
