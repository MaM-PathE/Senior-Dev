import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DailyActivities() {
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
    <Card>
      <CardHeader>
        <CardTitle>Activités quotidiennes</CardTitle>
        <CardDescription>Suivi des activités de la journée</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today">
          <TabsList className="mb-4">
            <TabsTrigger value="today">Aujourd'hui</TabsTrigger>
            <TabsTrigger value="yesterday">Hier</TabsTrigger>
            <TabsTrigger value="week">Cette semaine</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="space-y-0">
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
          </TabsContent>
          <TabsContent value="yesterday">
            <div className="flex items-center justify-center h-40">
              <p className="text-muted-foreground">
                Les données d'hier sont disponibles pour les utilisateurs connectés.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="week">
            <div className="flex items-center justify-center h-40">
              <p className="text-muted-foreground">
                L'historique hebdomadaire est disponible pour les utilisateurs connectés.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
