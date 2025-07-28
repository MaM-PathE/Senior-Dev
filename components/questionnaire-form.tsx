"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

type Question = {
  id: number
  text: string
  options: {
    value: string
    label: string
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "La personne peut-elle se déplacer seule à l'intérieur ?",
    options: [
      { value: "0", label: "Non, elle a besoin d'une aide totale" },
      { value: "1", label: "Oui, mais avec une aide partielle ou surveillance" },
      { value: "2", label: "Oui, totalement seule" },
    ],
  },
  {
    id: 2,
    text: "La personne peut-elle s'habiller seule ?",
    options: [
      { value: "0", label: "Non, elle a besoin d'une aide totale" },
      { value: "1", label: "Oui, mais avec une aide partielle ou surveillance" },
      { value: "2", label: "Oui, totalement seule" },
    ],
  },
  {
    id: 3,
    text: "La personne peut-elle faire sa toilette seule ?",
    options: [
      { value: "0", label: "Non, elle a besoin d'une aide totale" },
      { value: "1", label: "Oui, mais avec une aide partielle ou surveillance" },
      { value: "2", label: "Oui, totalement seule" },
    ],
  },
  {
    id: 4,
    text: "La personne peut-elle s'alimenter seule ?",
    options: [
      { value: "0", label: "Non, elle a besoin d'une aide totale" },
      { value: "1", label: "Oui, mais avec une aide partielle ou surveillance" },
      { value: "2", label: "Oui, totalement seule" },
    ],
  },
  {
    id: 5,
    text: "La personne est-elle continente ?",
    options: [
      { value: "0", label: "Non, incontinence totale" },
      { value: "1", label: "Partiellement, incontinence occasionnelle" },
      { value: "2", label: "Oui, totalement continente" },
    ],
  },
  {
    id: 6,
    text: "La personne peut-elle utiliser les moyens de communication (téléphone, alarme) ?",
    options: [
      { value: "0", label: "Non, elle en est incapable" },
      { value: "1", label: "Oui, mais avec une aide partielle ou surveillance" },
      { value: "2", label: "Oui, totalement seule" },
    ],
  },
]

export function QuestionnaireForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<number | null>(null)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateGIR()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateGIR = () => {
    // Calcul simplifié du GIR basé sur les réponses
    const total = Object.values(answers).reduce((sum, value) => sum + Number.parseInt(value), 0)

    // Logique simplifiée pour l'estimation du GIR
    if (total <= 2) {
      setResult(1) // GIR 1 - dépendance totale
    } else if (total <= 5) {
      setResult(2) // GIR 2
    } else if (total <= 8) {
      setResult(3) // GIR 3
    } else if (total <= 10) {
      setResult(4) // GIR 4
    } else if (total <= 12) {
      setResult(5) // GIR 5
    } else {
      setResult(6) // GIR 6 - autonomie
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (result !== null) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Résultat de l'estimation</CardTitle>
          <CardDescription>Voici l'estimation du niveau de dépendance (GIR) basée sur vos réponses.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary text-primary-foreground text-4xl font-bold mb-4">
              {result}
            </div>
            <h3 className="text-2xl font-bold mb-2">GIR estimé : {result}</h3>
            <p className="text-muted-foreground">
              {result <= 2
                ? "Dépendance très élevée, nécessite une prise en charge complète."
                : result <= 4
                  ? "Dépendance partielle, nécessite une aide régulière."
                  : "Autonomie relative, nécessite peu d'aide au quotidien."}
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Que signifie ce résultat ?</h4>
            <p className="text-sm">
              Le GIR (Groupe Iso-Ressources) est une échelle d'évaluation de la perte d'autonomie, allant de 1
              (dépendance totale) à 6 (autonomie). Cette estimation vous donne une indication, mais seule une évaluation
              par un professionnel de santé peut déterminer le GIR officiel.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => setResult(null)} variant="outline" className="w-full sm:w-auto">
            Recommencer le questionnaire
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/recherche">Rechercher un EHPAD adapté</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} sur {questions.length}
        </CardTitle>
        <CardDescription>Évaluez le niveau d'autonomie de la personne concernée</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Progress value={progress} className="h-2" />

        <div className="py-4">
          <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].text}</h3>
          <RadioGroup value={answers[questions[currentQuestion].id] || ""} onValueChange={handleAnswer}>
            {questions[currentQuestion].options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 py-2">
                <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                <Label htmlFor={`option-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} variant="outline" disabled={currentQuestion === 0}>
          Précédent
        </Button>
        <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
          {currentQuestion < questions.length - 1 ? "Suivant" : "Voir le résultat"}
        </Button>
      </CardFooter>
    </Card>
  )
}
