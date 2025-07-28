import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ConnexionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Espace personnel</h1>
          <p className="text-muted-foreground">
            Connectez-vous pour accéder à votre espace personnel et suivre vos proches.
          </p>
        </div>

        <Card>
          <Tabs defaultValue="connexion" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="connexion">Connexion</TabsTrigger>
                <TabsTrigger value="inscription">Inscription</TabsTrigger>
              </TabsList>
            </CardHeader>
            <TabsContent value="connexion">
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link href="/mot-de-passe-oublie" className="text-xs text-primary hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full mb-4">Se connecter</Button>
                <p className="text-sm text-center text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <Link href="#" className="text-primary hover:underline">
                    S'inscrire
                  </Link>
                </p>
              </CardFooter>
            </TabsContent>
            <TabsContent value="inscription">
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input id="nom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-inscription">Email</Label>
                  <Input id="email-inscription" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input id="telephone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-inscription">Mot de passe</Label>
                  <Input id="password-inscription" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-confirmation">Confirmer le mot de passe</Label>
                  <Input id="password-confirmation" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">S'inscrire</Button>
              </CardFooter>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
