import { CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(209,213,219,0.2),transparent_40%)]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl md:text-5xl mb-4">
            Comment ça fonctionne
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un processus simple en trois étapes pour trouver et suivre l'EHPAD idéal pour votre proche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-24 left-1/2 h-0.5 w-[calc(66.67%-4rem)] bg-primary/20 hidden lg:block"></div>

          <div className="elegant-card p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-medium elegant-shadow">
              1
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-center">Estimation du GIR</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Répondez à notre mini-questionnaire inspiré de la grille AGGIR pour estimer le niveau de dépendance (GIR
                1 à 6).
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Questions simples et rapides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Résultat immédiat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Recommandations personnalisées</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="elegant-card p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-medium elegant-shadow">
              2
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-center">Recherche d'EHPAD</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Utilisez notre moteur de recherche avec des filtres de localisation, budget et compatibilité GIR.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Carte interactive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Filtres avancés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Comparaison des tarifs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="elegant-card p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-medium elegant-shadow">
              3
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-serif font-medium mb-4 text-center">Suivi post-admission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Accédez à un tableau de bord pour suivre l'évolution de votre proche en temps réel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Suivi quotidien des activités</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Prédictions d'évolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Notifications importantes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
