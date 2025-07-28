import { SearchForm } from "@/components/search-form"
import { SearchResults } from "@/components/search-results"

export default function RecherchePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Rechercher un établissement
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Trouvez l'EHPAD ou la résidence idéale pour votre proche en fonction de sa localisation, de son budget et de
          son niveau de dépendance (GIR).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <SearchForm />
        </div>
        <div className="lg:col-span-2">
          <SearchResults />
        </div>
      </div>
    </div>
  )
}
