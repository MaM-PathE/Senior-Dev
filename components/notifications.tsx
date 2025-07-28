import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, AlertTriangle, Info, CheckCircle } from "lucide-react"

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "alert",
      icon: AlertTriangle,
      color: "text-red-500",
      message: "Prise de médicament manquée ce matin",
      time: "Il y a 3 heures",
    },
    {
      id: 2,
      type: "info",
      icon: Info,
      color: "text-blue-500",
      message: "Visite du médecin prévue demain à 10h",
      time: "Il y a 5 heures",
    },
    {
      id: 3,
      type: "success",
      icon: CheckCircle,
      color: "text-green-500",
      message: "A participé à l'atelier mémoire avec enthousiasme",
      time: "Il y a 8 heures",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Alertes et informations importantes</CardDescription>
        </div>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <div className={`${notification.color} mt-0.5`}>
                <notification.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
