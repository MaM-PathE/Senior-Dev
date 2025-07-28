import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, Calendar, Users } from "lucide-react"

export default function ContactTelephonePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Assistance téléphonique</h1>
          <p className="text-lg text-muted-foreground">
            Notre équipe est à votre disposition pour répondre à toutes vos questions par téléphone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Numéro principal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-medium mb-2">01 23 45 67 89</p>
              <p className="text-sm text-primary-foreground/80">
                Pour toutes vos questions concernant nos services, l'estimation du GIR ou la recherche d'établissements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horaires d'ouverture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>9h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>9h00 - 12h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-medium text-center mb-6">Nos services d'assistance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Assistance familiale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Accompagnement des familles dans la recherche d'un établissement adapté et le suivi de leurs proches.
                </p>
                <p className="text-sm font-medium mt-4">01 23 45 67 90</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Prise de rendez-vous
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Organisation de visites d'établissements et de rendez-vous avec nos conseillers spécialisés.
                </p>
                <p className="text-sm font-medium mt-4">01 23 45 67 91</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Support technique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assistance pour l'utilisation de notre plateforme et résolution des problèmes techniques.
                </p>
                <p className="text-sm font-medium mt-4">01 23 45 67 92</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg text-center mt-8">
            <h3 className="text-xl font-medium mb-2">Besoin d'un rappel ?</h3>
            <p className="text-muted-foreground mb-4">
              Laissez-nous votre numéro via notre formulaire de contact et nous vous rappellerons dans les plus brefs
              délais.
            </p>
            <Button asChild>
              <Link href="/contact">Demander un rappel</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
