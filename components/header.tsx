"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  const menuItems = [
    {
      title: "Accueil",
      path: "/",
      submenu: [],
    },
    {
      title: "Estimer le GIR",
      path: "/questionnaire",
      submenu: [
        { title: "Questionnaire complet", path: "/questionnaire" },
        { title: "Estimation rapide", path: "/questionnaire/rapide" },
        { title: "Comprendre le GIR", path: "/questionnaire/guide" },
      ],
    },
    {
      title: "Rechercher un établissement",
      path: "/recherche",
      submenu: [
        { title: "Par localisation", path: "/recherche?filter=location" },
        { title: "Par budget", path: "/recherche?filter=budget" },
        { title: "Par niveau de GIR", path: "/recherche?filter=gir" },
        { title: "Établissements partenaires", path: "/recherche/partenaires" },
      ],
    },
    {
      title: "Maintien à domicile",
      path: "/domicile",
      submenu: [
        { title: "Évaluation à domicile", path: "/domicile/evaluation" },
        { title: "Services d'aide", path: "/domicile/services" },
        { title: "Adaptation du logement", path: "/domicile/logement" },
        { title: "Téléassistance", path: "/domicile/teleassistance" },
        { title: "Espace aidants", path: "/domicile/aidants" },
      ],
    },
    {
      title: "Suivi familial",
      path: "/suivi",
      submenu: [
        { title: "Tableau de bord", path: "/suivi" },
        { title: "Activités quotidiennes", path: "/suivi/activites" },
        { title: "Évolution du GIR", path: "/suivi/evolution" },
        { title: "Notifications", path: "/suivi/notifications" },
      ],
    },
    {
      title: "À propos",
      path: "/a-propos",
      submenu: [
        { title: "Notre histoire", path: "/a-propos" },
        { title: "Notre équipe", path: "/a-propos#equipe" },
        { title: "Nos valeurs", path: "/a-propos#valeurs" },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
      submenu: [
        { title: "Formulaire de contact", path: "/contact" },
        { title: "Assistance téléphonique", path: "/contact#telephone" },
        { title: "Nos bureaux", path: "/contact#bureaux" },
      ],
    },
  ]

  return (
    <header
      className={`border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif font-medium tracking-tight">
              GIR <span className="text-primary">&</span> Go
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleSection(item.title)}
                  className={`group flex items-center py-2 px-1 ${isActive(item.path) ? "text-primary" : ""}`}
                >
                  <span className="font-serif text-base tracking-wide transition-colors hover:text-primary">
                    {item.title}
                  </span>
                  {item.submenu.length > 0 &&
                    (activeSection === item.title ? (
                      <ChevronUp className="h-4 w-4 ml-1 text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1 group-hover:text-primary transition-transform duration-200" />
                    ))}
                </button>

                {activeSection === item.title && item.submenu.length > 0 && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border border-border/40 rounded-md shadow-lg py-2 z-50 animate-in fade-in-50 slide-in-from-top-5 duration-200">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        href={subitem.path}
                        className={`block px-4 py-2 font-serif text-sm tracking-wide hover:bg-muted transition-colors ${
                          pathname === subitem.path ? "text-primary bg-muted/50" : ""
                        }`}
                        onClick={() => setActiveSection(null)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              asChild
              variant="outline"
              className="hidden md:flex border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-serif tracking-wide"
            >
              <Link href="/connexion">Connexion</Link>
            </Button>

            <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 animate-in slide-in-from-top-5 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-border/20 pb-2 last:border-0 last:pb-0">
                <button
                  onClick={() => toggleSection(item.title)}
                  className={`flex justify-between items-center w-full py-2 ${isActive(item.path) ? "text-primary" : ""}`}
                >
                  <span className="font-serif text-base tracking-wide">{item.title}</span>
                  {item.submenu.length > 0 &&
                    (activeSection === item.title ? (
                      <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    ))}
                </button>

                {activeSection === item.title && item.submenu.length > 0 && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-muted animate-in fade-in-50 slide-in-from-left-5 duration-200">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        href={subitem.path}
                        className={`block py-1 font-serif text-sm tracking-wide hover:text-foreground transition-colors ${
                          pathname === subitem.path ? "text-primary" : "text-muted-foreground"
                        }`}
                        onClick={toggleMenu}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button asChild className="w-full mt-4 font-serif tracking-wide" variant="outline">
              <Link href="/connexion" onClick={toggleMenu}>
                Connexion
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
