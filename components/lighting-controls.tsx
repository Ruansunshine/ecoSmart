"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LightbulbIcon, Palette, Zap } from "lucide-react"
import { useState } from "react"

export function LightingControls() {
  const [brightness, setBrightness] = useState(70)
  const [isOn, setIsOn] = useState(true)
  const [color, setColor] = useState("#FFFFFF")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Controle de Iluminação</CardTitle>
            <CardDescription>Sala de Estar</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="light-switch" className="sr-only">
              Ligar/Desligar Iluminação
            </Label>
            <Switch id="light-switch" checked={isOn} onCheckedChange={setIsOn} aria-label="Ligar/Desligar Iluminação" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div
            className="flex items-center justify-center rounded-full p-6"
            style={{
              backgroundColor: isOn ? `${color}20` : "#f1f5f9",
              color: isOn ? color : "#94a3b8",
            }}
          >
            <LightbulbIcon className="h-8 w-8" />
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{brightness}%</div>
            <p className="text-sm text-muted-foreground">Intensidade</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="brightness-slider">Intensidade</Label>
            <span className="text-sm text-muted-foreground">{brightness}%</span>
          </div>
          <Slider
            id="brightness-slider"
            value={[brightness]}
            min={5}
            max={100}
            step={5}
            disabled={!isOn}
            onValueChange={(value) => setBrightness(value[0])}
            aria-label="Ajustar intensidade"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="color-picker">Cor</Label>
          <div className="flex items-center space-x-2">
            <Palette className="h-4 w-4 text-muted-foreground" />
            <input
              id="color-picker"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              disabled={!isOn}
              className="h-8 w-8 cursor-pointer rounded-md border-0"
              aria-label="Selecionar cor"
            />
            <span className="text-sm text-muted-foreground">{color.toUpperCase()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="energy-saving">Modo Econômico</Label>
          </div>
          <Switch id="energy-saving" disabled={!isOn} aria-label="Ativar modo econômico" />
        </div>
      </CardContent>
    </Card>
  )
}
