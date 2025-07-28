import { Search, Activity, Bell, BarChart3 } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl mb-4">
            Fonctionnalités principales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GIR & Go combine une recherche initiale d'établissements avec un suivi post-admission, offrant une valeur
            ajoutée par rapport aux outils existants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="elegant-card p-8">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Recherche adaptée</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trouvez des EHPAD privés adaptés au niveau de dépendance (GIR) avec des filtres de localisation et de
              budget.
            </p>
          </div>

          <div className="elegant-card p-8">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Suivi quotidien</h3>
            <p className="text-muted-foreground leading-relaxed">
              Saisie quotidienne par les soignants des activités et des soins pour un suivi détaillé.
            </p>
          </div>

          <div className="elegant-card p-8">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Prédiction d'évolution</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prédiction de l'évolution du GIR basée sur les tendances observées au fil du temps.
            </p>
          </div>

          <div className="elegant-card p-8">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Bell size={28} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Notifications</h3>
            <p className="text-muted-foreground leading-relaxed">
              Alertes automatiques pour l'EHPAD, les soignants et la famille en cas de changement significatif.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
