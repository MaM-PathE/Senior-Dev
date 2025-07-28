"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { useState } from "react"

export default function EvolutionPage() {
  const [period, setPeriod] = useState("year")

  // Données fictives pour l'évolution du GIR
  const yearData = [
    { date: "Jan", gir: 4 },
    { date: "Fév", gir: 4 },
    { date: "Mar", gir: 4 },
    { date: "Avr", gir: 3 },
    { date: "Mai", gir: 3 },
    { date: "Juin", gir: 3 },
    { date: "Juil", gir: 3 },
    { date: "Août", gir: 3 },
    { date: "Sept", gir: 3 },
    { date: "Oct", gir: 3 },
    { date: "Nov", gir: 3 },
    { date: "Déc", gir: 2 },
  ]

  const monthData = [
    { date: "1", gir: 3 },
    { date: "5", gir: 3 },
    { date: "10", gir: 3 },
    { date: "15", gir: 3 },
    { date: "20", gir: 2 },
    { date: "25", gir: 2 },
    { date: "30", gir: 2 },
  ]

  // Données pour les métriques associées
  const mobilityData = [
    { date: "Jan", value: 80 },
    { date: "Fév", value: 75 },
    { date: "Mar", value: 70 },
    { date: "Avr", value: 65 },
    { date: "Mai", value: 60 },
    { date: "Juin", value: 55 },
    { date: "Juil", value: 50 },
    { date: "Août", value: 45 },
    { date: "Sept", value: 40 },
    { date: "Oct", value: 35 },
    { date: "Nov", value: 30 },
    { date: "Déc", value: 25 },
  ]

  const nutritionData = [
    { date: "Jan", value: 90 },
    { date: "Fév", value: 85 },
    { date: "Mar", value: 85 },
    { date: "Avr", value: 80 },
    { date: "Mai", value: 80 },
    { date: "Juin", value: 75 },
    { date: "Juil", value: 75 },
    { date: "Août", value: 70 },
    { date: "Sept", value: 70 },
    { date: "Oct", value: 65 },
    { date: "Nov", value: 65 },
    { date: "Déc", value: 60 },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Évolution du GIR</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Suivez l'évolution du niveau de dépendance et des indicateurs associés au fil du temps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Évolution du GIR</CardTitle>
                <CardDescription>Suivi de l'évolution du niveau de dépendance</CardDescription>
              </div>
              <Tabs value={period} onValueChange={setPeriod}>
                <TabsList>
                  <TabsTrigger value="month">Mois</TabsTrigger>
                  <TabsTrigger value="year">Année</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={period === "year" ? yearData : monthData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[1, 6]} reversed ticks={[1, 2, 3, 4, 5, 6]} />
                  <Tooltip />
                  <Line
                    type="stepAfter"
                    dataKey="gir"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h4 className="text-sm font-medium mb-2">Analyse et prédiction</h4>
              <p className="text-sm text-muted-foreground">
                Basé sur l'évolution actuelle, un passage au GIR 2 est prévu dans les 3 prochains mois. Une réévaluation
                des soins pourrait être nécessaire. Nous recommandons de consulter l'équipe médicale pour adapter la
                prise en charge.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mobilité</CardTitle>
              <CardDescription>Évolution de la capacité de déplacement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mobilityData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nutrition</CardTitle>
              <CardDescription>Évolution de l'état nutritionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={nutritionData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
