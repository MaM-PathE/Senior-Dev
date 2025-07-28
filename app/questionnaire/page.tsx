import { QuestionnaireForm } from "@/components/questionnaire-form"

export default function QuestionnairePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Estimation du GIR</h1>
          <p className="text-lg text-muted-foreground">
            Répondez à ce questionnaire pour estimer le niveau de dépendance (GIR) de votre proche.
          </p>
        </div>

        <QuestionnaireForm />
      </div>
    </div>
  )
}
