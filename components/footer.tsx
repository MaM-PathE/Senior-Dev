import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">GIR & Go</h3>
            <p className="text-muted-foreground leading-relaxed">
              Simplifiez la recherche et le suivi des personnes âgées en France, basé sur le niveau de dépendance (GIR).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/questionnaire" className="text-muted-foreground hover:text-foreground transition-colors">
                  Estimer le GIR
                </Link>
              </li>
              <li>
                <Link href="/recherche" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rechercher un EHPAD
                </Link>
              </li>
              <li>
                <Link href="/suivi" className="text-muted-foreground hover:text-foreground transition-colors">
                  Suivi familial
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <address className="not-italic text-muted-foreground leading-relaxed">
              <p>Email: contact@girandgo.fr</p>
              <p>Téléphone: 01 23 45 67 89</p>
              <p>Adresse: 123 Avenue des Seniors, 75000 Paris</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GIR & Go. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
