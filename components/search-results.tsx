"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Euro, Phone, Clock, Info } from "lucide-react"
import Image from "next/image"

// Données fictives d'EHPAD pour la démonstration
const ehpadData = [
  {
    id: 1,
    name: "Résidence Les Oliviers",
    address: "15 rue des Lilas, 75013 Paris",
    distance: 3.2,
    price: 2800,
    gir: "1-6",
    phone: "01 23 45 67 89",
    availability: "Immédiate",
    description:
      "Établissement moderne situé dans un quartier calme avec jardin et terrasse. Personnel qualifié et attentionné.",
    image: "/serene-living.png",
  },
  {
    id: 2,
    name: "EHPAD Saint-Joseph",
    address: "8 avenue du Parc, 75014 Paris",
    distance: 5.7,
    price: 2400,
    gir: "1-4",
    phone: "01 23 45 67 90",
    availability: "Liste d'attente (2 mois)",
    description:
      "Établissement à taille humaine offrant un accompagnement personnalisé. Animations quotidiennes et restauration de qualité.",
    image: "/cozy-nursing-home-exterior.png",
  },
  {
    id: 3,
    name: "Les Jardins de Montmartre",
    address: "25 rue Lamarck, 75018 Paris",
    distance: 8.1,
    price: 3200,
    gir: "3-6",
    phone: "01 23 45 67 91",
    availability: "Liste d'attente (1 mois)",
    description: "Résidence haut de gamme avec vue panoramique. Chambres spacieuses et services premium inclus.",
    image: "/panoramic-vista-residence.png",
  },
]

export function SearchResults() {
  const [view, setView] = useState("list")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Résultats ({ehpadData.length})</h2>
        <Tabs defaultValue="list" value={view} onValueChange={setView}>
          <TabsList>
            <TabsTrigger value="list">Liste</TabsTrigger>
            <TabsTrigger value="map">Carte</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Utilisation d'un rendu conditionnel au lieu de TabsContent */}
      {view === "list" ? (
        <div className="space-y-6">
          {ehpadData.map((ehpad) => (
            <Card key={ehpad.id}>
              <div className="md:flex">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src={ehpad.image || "/placeholder.svg"}
                    alt={ehpad.name}
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{ehpad.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {ehpad.address} ({ehpad.distance} km)
                        </CardDescription>
                      </div>
                      <Badge>{ehpad.gir}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <Euro className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{ehpad.price} € / mois</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{ehpad.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Disponibilité : {ehpad.availability}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{ehpad.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Voir les détails</Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="relative h-[500px] w-full bg-muted flex items-center justify-center">
              <div className="text-center p-6">
                <Info className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Carte interactive</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  La carte afficherait normalement les {ehpadData.length} établissements trouvés selon vos critères.
                </p>
                <p className="text-xs text-muted-foreground">
                  (Fonctionnalité nécessitant l'intégration de Google Maps API pour localiser les établissements)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
