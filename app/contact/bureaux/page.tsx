import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactBureauxPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Nos bureaux</h1>
          <p className="text-lg text-muted-foreground">
            Venez nous rencontrer dans nos locaux pour un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <MapPin className="h-12 w-12 text-muted-foreground/50" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Siège social - Paris</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>123 Avenue des Seniors</p>
                  <p>75000 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>01 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>contact@girandgo.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 9h00 - 12h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-medium text-center mb-6">Comment nous trouver</h2>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">En transports en commun</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                        M
                      </div>
                      <span>Ligne 8, Station Daumesnil (5 min à pied)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                        B
                      </div>
                      <span>Bus 46, Arrêt Daumesnil (2 min à pied)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">En voiture</h3>
                  <p className="text-sm text-muted-foreground">
                    Parking public "Daumesnil" à 200m de nos bureaux. Tarif préférentiel pour nos visiteurs (demandez
                    votre ticket à l'accueil).
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Accessibilité</h3>
                  <p className="text-sm text-muted-foreground">
                    Nos locaux sont entièrement accessibles aux personnes à mobilité réduite. Une rampe d'accès et un
                    ascenseur sont disponibles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <h3 className="text-xl font-medium mb-4">Prendre rendez-vous</h3>
            <p className="text-muted-foreground mb-6">
              Pour un accompagnement personnalisé, nous vous recommandons de prendre rendez-vous avec l'un de nos
              conseillers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Prendre rendez-vous</Button>
              <Button variant="outline">Nous contacter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
