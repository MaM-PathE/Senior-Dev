import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComprendreGIRPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Comprendre le GIR</h1>
          <p className="text-lg text-muted-foreground">
            Guide complet pour comprendre le Groupe Iso-Ressources et son importance dans l'évaluation de la dépendance.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Qu'est-ce que le GIR ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le GIR (Groupe Iso-Ressources) est un indicateur qui permet d'évaluer le degré de perte d'autonomie ou
                de dépendance physique ou psychique d'une personne âgée dans l'accomplissement de ses actes quotidiens.
              </p>
              <p>
                Cette évaluation est réalisée à l'aide de la grille AGGIR (Autonomie Gérontologie Groupes
                Iso-Ressources), qui est l'outil officiel utilisé en France pour déterminer le niveau de dépendance des
                personnes âgées.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Les 6 niveaux de GIR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-1">GIR 1</h3>
                  <p className="text-muted-foreground">
                    Personnes confinées au lit ou au fauteuil, dont les fonctions mentales sont gravement altérées et
                    qui nécessitent une présence indispensable et continue d'intervenants.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GIR 2</h3>
                  <p className="text-muted-foreground">
                    Personnes confinées au lit ou au fauteuil, dont les fonctions intellectuelles ne sont pas totalement
                    altérées et dont l'état exige une prise en charge pour la plupart des activités de la vie courante.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GIR 3</h3>
                  <p className="text-muted-foreground">
                    Personnes qui ont conservé leur autonomie mentale, partiellement leur autonomie locomotrice, mais
                    qui ont besoin quotidiennement et plusieurs fois par jour d'être aidées pour leur autonomie
                    corporelle.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GIR 4</h3>
                  <p className="text-muted-foreground">
                    Personnes qui n'assument pas seules leurs transferts mais qui, une fois levées, peuvent se déplacer
                    à l'intérieur du logement. Elles doivent parfois être aidées pour la toilette et l'habillage.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GIR 5</h3>
                  <p className="text-muted-foreground">
                    Personnes qui assurent seules leurs déplacements à l'intérieur de leur logement, s'alimentent et
                    s'habillent seules mais qui ont besoin d'une aide ponctuelle pour la toilette, la préparation des
                    repas et le ménage.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GIR 6</h3>
                  <p className="text-muted-foreground">
                    Personnes qui n'ont pas perdu leur autonomie pour les actes essentiels de la vie courante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Importance du GIR dans le choix d'un établissement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le niveau de GIR est un critère essentiel dans le choix d'un établissement pour personnes âgées, car il
                détermine :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le type d'établissement adapté (résidence autonomie, EHPAD, unité spécialisée...)</li>
                <li>Le niveau de soins et d'accompagnement nécessaire</li>
                <li>L'éligibilité à certaines aides financières comme l'APA (Allocation Personnalisée d'Autonomie)</li>
                <li>Le coût de la prise en charge</li>
              </ul>
              <p className="mt-4">
                Notre outil d'estimation du GIR vous donne une première indication, mais seule une évaluation officielle
                réalisée par des professionnels (médecin, infirmier, assistant social) peut déterminer le GIR définitif.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
