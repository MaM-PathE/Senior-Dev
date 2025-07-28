import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Euro, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function PartenairesPage() {
  const partenaires = [
    {
      id: 1,
      name: "Résidence Les Oliviers",
      address: "15 rue des Lilas, 75013 Paris",
      price: "2800€ - 3500€",
      gir: "1-6",
      phone: "01 23 45 67 89",
      description:
        "Établissement moderne situé dans un quartier calme avec jardin et terrasse. Personnel qualifié et attentionné.",
      image: "/serene-living.png",
      avantages: [
        "Visite virtuelle disponible",
        "Réduction de 5% pour les membres GIR & Go",
        "Priorité sur liste d'attente",
      ],
    },
    {
      id: 2,
      name: "EHPAD Saint-Joseph",
      address: "8 avenue du Parc, 75014 Paris",
      price: "2400€ - 3200€",
      gir: "1-4",
      phone: "01 23 45 67 90",
      description:
        "Établissement à taille humaine offrant un accompagnement personnalisé. Animations quotidiennes et restauration de qualité.",
      image: "/cozy-nursing-home-exterior.png",
      avantages: ["Premier mois à -10%", "Bilan médical offert", "Accompagnement administratif complet"],
    },
    {
      id: 3,
      name: "Les Jardins de Montmartre",
      address: "25 rue Lamarck, 75018 Paris",
      price: "3200€ - 4500€",
      gir: "3-6",
      phone: "01 23 45 67 91",
      description: "Résidence haut de gamme avec vue panoramique. Chambres spacieuses et services premium inclus.",
      image: "/panoramic-vista-residence.png",
      avantages: [
        "Chambre d'essai gratuite pendant 3 jours",
        "Service de conciergerie",
        "Activités culturelles exclusives",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Nos établissements partenaires
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Découvrez notre sélection d'établissements partenaires qui offrent des avantages exclusifs aux utilisateurs de
          GIR & Go.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partenaires.map((partenaire) => (
          <Card key={partenaire.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image src={partenaire.image || "/placeholder.svg"} alt={partenaire.name} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary text-primary-foreground">Partenaire</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{partenaire.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {partenaire.address}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Euro className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{partenaire.price}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{partenaire.phone}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{partenaire.description}</p>
              <div className="bg-muted p-3 rounded-md">
                <h4 className="text-sm font-medium flex items-center mb-2">
                  <Star className="h-4 w-4 mr-1 text-primary" />
                  Avantages exclusifs
                </h4>
                <ul className="text-xs space-y-1">
                  {partenaire.avantages.map((avantage, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                      {avantage}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Demander une visite</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
