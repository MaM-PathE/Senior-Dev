import { DashboardOverview } from "@/components/dashboard-overview"
import { DailyActivities } from "@/components/daily-activities"
import { GirEvolution } from "@/components/gir-evolution"
import { Notifications } from "@/components/notifications"

export default function SuiviPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Suivi familial</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Suivez l'évolution de votre proche en temps réel et restez informé de son quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardOverview />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DailyActivities />
        </div>
        <div className="space-y-6">
          <GirEvolution />
          <Notifications />
        </div>
      </div>
    </div>
  )
}
