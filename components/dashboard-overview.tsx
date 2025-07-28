import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bath, Utensils, Moon, Activity } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Hygiène",
      icon: Bath,
      value: "Douche prise à 9h30",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      title: "Alimentation",
      icon: Utensils,
      value: "3 repas complets",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-950",
    },
    {
      title: "Sommeil",
      icon: Moon,
      value: "7h30 de repos",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-950",
    },
    {
      title: "Activités",
      icon: Activity,
      value: "Atelier mémoire",
      color: "text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-950",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`${stat.bgColor} ${stat.color} p-2 rounded-full`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">Aujourd'hui</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
