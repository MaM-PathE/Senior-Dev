"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchForm() {
  const [location, setLocation] = useState("")
  const [distance, setDistance] = useState([20])
  const [budget, setBudget] = useState([2500])
  const [gir, setGir] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, on pourrait envoyer les données à une API ou mettre à jour l'état global
    console.log({ location, distance: distance[0], budget: budget[0], gir })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Critères de recherche</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">Localisation</Label>
            <Input
              id="location"
              placeholder="Ville ou code postal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="distance">Distance maximale</Label>
              <span className="text-sm text-muted-foreground">{distance[0]} km</span>
            </div>
            <Slider id="distance" min={1} max={100} step={1} value={distance} onValueChange={setDistance} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="budget">Budget mensuel maximum</Label>
              <span className="text-sm text-muted-foreground">{budget[0]} €</span>
            </div>
            <Slider id="budget" min={1500} max={5000} step={100} value={budget} onValueChange={setBudget} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gir">Niveau de GIR</Label>
            <Select value={gir} onValueChange={setGir}>
              <SelectTrigger id="gir">
                <SelectValue placeholder="Sélectionner un GIR" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2">GIR 1-2 (dépendance totale)</SelectItem>
                <SelectItem value="3-4">GIR 3-4 (dépendance partielle)</SelectItem>
                <SelectItem value="5-6">GIR 5-6 (autonomie relative)</SelectItem>
                <SelectItem value="all">Tous les niveaux</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          Rechercher
        </Button>
      </CardFooter>
    </Card>
  )
}
