import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, AlertTriangle, Info, CheckCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      icon: AlertTriangle,
      color: "text-red-500",
      message: "Prise de médicament manquée ce matin",
      time: "Il y a 3 heures",
      date: "23 avril 2025",
    },
    {
      id: 2,
      type: "info",
      icon: Info,
      color: "text-blue-500",
      message: "Visite du médecin prévue demain à 10h",
      time: "Il y a 5 heures",
      date: "23 avril 2025",
    },
    {
      id: 3,
      type: "success",
      icon: CheckCircle,
      color: "text-green-500",
      message: "A participé à l'atelier mémoire avec enthousiasme",
      time: "Il y a 8 heures",
      date: "23 avril 2025",
    },
    {
      id: 4,
      type: "alert",
      icon: AlertTriangle,
      color: "text-red-500",
      message: "Repas du midi peu consommé",
      time: "Il y a 2 jours",
      date: "21 avril 2025",
    },
    {
      id: 5,
      type: "info",
      icon: Info,
      color: "text-blue-500",
      message: "Changement de traitement médical",
      time: "Il y a 3 jours",
      date: "20 avril 2025",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Notifications</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Restez informé des événements importants concernant votre proche.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Centre de notifications
                  </CardTitle>
                  <CardDescription>Alertes et informations importantes</CardDescription>
                </div>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">Toutes</TabsTrigger>
                    <TabsTrigger value="alerts">Alertes</TabsTrigger>
                    <TabsTrigger value="info">Informations</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 border-b border-border/40 last:border-0"
                  >
                    <div className={`${notification.color} mt-0.5`}>
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Marquer comme lu</span>
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Paramètres de notification
              </CardTitle>
              <CardDescription>Personnalisez vos alertes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="alerts">Alertes médicales</Label>
                    <p className="text-xs text-muted-foreground">Notifications urgentes concernant la santé</p>
                  </div>
                  <Switch id="alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="activities">Activités quotidiennes</Label>
                    <p className="text-xs text-muted-foreground">Mises à jour sur les activités journalières</p>
                  </div>
                  <Switch id="activities" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="meals">Repas</Label>
                    <p className="text-xs text-muted-foreground">Informations sur les repas et la nutrition</p>
                  </div>
                  <Switch id="meals" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="visits">Visites médicales</Label>
                    <p className="text-xs text-muted-foreground">Rappels des rendez-vous médicaux</p>
                  </div>
                  <Switch id="visits" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email">Notifications par email</Label>
                    <p className="text-xs text-muted-foreground">Recevoir les notifications par email</p>
                  </div>
                  <Switch id="email" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms">Notifications par SMS</Label>
                    <p className="text-xs text-muted-foreground">Recevoir les notifications par SMS</p>
                  </div>
                  <Switch id="sms" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
