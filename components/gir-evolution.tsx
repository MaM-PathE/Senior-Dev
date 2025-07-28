"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function GirEvolution() {
  // Données fictives pour l'évolution du GIR
  const data = [
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution du GIR</CardTitle>
        <CardDescription>Suivi de l'évolution du niveau de dépendance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
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
        <div className="mt-4 p-3 bg-muted rounded-md">
          <h4 className="text-sm font-medium mb-1">Prédiction</h4>
          <p className="text-xs text-muted-foreground">
            Basé sur l'évolution actuelle, un passage au GIR 2 est prévu dans les 3 prochains mois. Une réévaluation des
            soins pourrait être nécessaire.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
