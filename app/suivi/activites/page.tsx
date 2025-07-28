import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"

export default function ActivitesPage() {
  // Données fictives pour la démonstration
  const activities = [
    {
      time: "07:30",
      activity: "Réveil et prise des médicaments",
      category: "Soins",
      details: "Médicaments pour l'hypertension et le diabète administrés",
    },
    {
      time: "08:15",
      activity: "Petit-déjeuner",
      category: "Repas",
      details: "A mangé un yaourt, des tartines et bu un café",
    },
    {
      time: "09:30",
      activity: "Toilette et habillage",
      category: "Hygiène",
      details: "Douche prise avec aide partielle, habillage avec aide",
    },
    {
      time: "10:30",
      activity: "Atelier mémoire en groupe",
      category: "Animation",
      details: "A participé activement aux jeux de mémoire",
    },
    {
      time: "12:00",
      activity: "Déjeuner",
      category: "Repas",
      details: "Repas complet pris en salle commune",
    },
    {
      time: "14:00",
      activity: "Sieste",
      category: "Repos",
      details: "A dormi pendant 1h30",
    },
    {
      time: "16:00",
      activity: "Visite du kinésithérapeute",
      category: "Soins",
      details: "Séance de mobilité des membres inférieurs",
    },
    {
      time: "18:30",
      activity: "Dîner",
      category: "Repas",
      details: "A mangé la moitié de son repas",
    },
    {
      time: "20:00",
      activity: "Préparation au coucher",
      category: "Hygiène",
      details: "Toilette du soir et mise en pyjama",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Soins":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Repas":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Hygiène":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Animation":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Repos":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Activités quotidiennes</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Suivez en détail les activités quotidiennes de votre proche pour rester informé de son bien-être.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
              <CardDescription>Sélectionnez une date pour voir les activités</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="rounded-md border" />

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Filtrer par catégorie</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 cursor-pointer">
                    Soins
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 cursor-pointer">
                    Repas
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 cursor-pointer">
                    Hygiène
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 cursor-pointer">
                    Animation
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 cursor-pointer">
                    Repos
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Journal d'activités</CardTitle>
              <CardDescription>Activités du 23 avril 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="chronologique">
                <TabsList className="mb-4">
                  <TabsTrigger value="chronologique">Chronologique</TabsTrigger>
                  <TabsTrigger value="categorie">Par catégorie</TabsTrigger>
                </TabsList>

                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-[39px] w-px bg-border"></div>
                  {activities.map((activity, index) => (
                    <div key={index} className="flex gap-4 mb-4 relative">
                      <div className="w-20 text-sm font-medium text-right pt-0.5">{activity.time}</div>
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 z-10"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{activity.activity}</h4>
                          <Badge className={getCategoryColor(activity.category)}>{activity.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
