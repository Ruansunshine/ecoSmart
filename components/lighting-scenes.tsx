"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Coffee, Moon, Palette, PartyPopper, Sun, Tv } from "lucide-react"
import { useState } from "react"

export function LightingScenes() {
  const [activeScene, setActiveScene] = useState<string | null>(null)

  const scenes = [
    { id: "normal", name: "Normal", icon: <Sun className="h-4 w-4" />, color: "#FFFFFF" },
    { id: "reading", name: "Leitura", icon: <Book className="h-4 w-4" />, color: "#FFF9C4" },
    { id: "movie", name: "Filme", icon: <Tv className="h-4 w-4" />, color: "#BBDEFB" },
    { id: "party", name: "Festa", icon: <PartyPopper className="h-4 w-4" />, color: "#E1BEE7" },
    { id: "night", name: "Noturno", icon: <Moon className="h-4 w-4" />, color: "#FFB74D" },
    { id: "relax", name: "Relaxar", icon: <Coffee className="h-4 w-4" />, color: "#FFCCBC" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cenas de Iluminação</CardTitle>
        <CardDescription>Selecione um ambiente predefinido</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {scenes.map((scene) => (
            <Button
              key={scene.id}
              variant={activeScene === scene.id ? "default" : "outline"}
              className="flex h-auto flex-col items-center justify-center gap-2 p-4"
              onClick={() => setActiveScene(scene.id)}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${scene.color}20`,
                  color: activeScene === scene.id ? "white" : scene.color,
                }}
              >
                {scene.icon}
              </div>
              <span>{scene.name}</span>
            </Button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-2">
            <Palette className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Cena Personalizada</p>
              <p className="text-xs text-muted-foreground">Crie sua própria configuração</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Criar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
