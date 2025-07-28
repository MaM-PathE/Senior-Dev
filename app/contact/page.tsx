import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contactez-nous</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans votre démarche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">01 23 45 67 89</p>
              <p className="text-sm mt-2 text-primary-foreground/80">
                Lundi - Vendredi: 9h - 18h
                <br />
                Samedi: 9h - 12h
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">contact@girandgo.fr</p>
              <p className="text-sm mt-2 text-primary-foreground/80">
                Nous répondons généralement
                <br />
                sous 24 heures ouvrées
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">123 Avenue des Seniors</p>
              <p className="text-sm mt-2 text-primary-foreground/80">
                75000 Paris, France
                <br />
                Métro: Ligne 8, Station Daumesnil
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="elegant-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-serif font-medium mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Prénom</Label>
                    <Input id="first-name" className="elegant-input" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Nom</Label>
                    <Input id="last-name" className="elegant-input" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="elegant-input" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" className="elegant-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" className="elegant-input" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} className="elegant-input resize-none" required />
                </div>

                <Button type="submit" className="w-full elegant-button-primary">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="bg-secondary p-8 md:p-10">
              <h2 className="text-2xl font-serif font-medium mb-6">Horaires d'ouverture</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Lundi - Vendredi</h3>
                    <p className="text-sm text-muted-foreground">9h00 - 18h00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Samedi</h3>
                    <p className="text-sm text-muted-foreground">9h00 - 12h00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Dimanche</h3>
                    <p className="text-sm text-muted-foreground">Fermé</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-serif font-medium mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Comment estimer le GIR ?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Utilisez notre questionnaire en ligne pour estimer le niveau de dépendance (GIR) de votre proche.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Les résultats sont-ils fiables ?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Notre estimation est indicative. Seule une évaluation par un professionnel peut déterminer le GIR
                      officiel.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Le service est-il gratuit ?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Oui, l'estimation du GIR et la recherche d'établissements sont des services entièrement gratuits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
