"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Minus, Plus, Thermometer, Fan, Droplets } from "lucide-react"
import { useState } from "react"

export function TemperatureControls() {
  const [temperature, setTemperature] = useState(23)
  const [isOn, setIsOn] = useState(true)
  const [fanSpeed, setFanSpeed] = useState(2)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Controle de Temperatura</CardTitle>
            <CardDescription>Sala de Estar</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="ac-switch" className="sr-only">
              Ligar/Desligar Ar-condicionado
            </Label>
            <Switch
              id="ac-switch"
              checked={isOn}
              onCheckedChange={setIsOn}
              aria-label="Ligar/Desligar Ar-condicionado"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center rounded-full bg-primary/10 p-6">
            <Thermometer className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{temperature}°C</div>
            <p className="text-sm text-muted-foreground">Temperatura atual</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTemperature(Math.max(16, temperature - 1))}
            disabled={!isOn || temperature <= 16}
            aria-label="Diminuir temperatura"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Slider
            value={[temperature]}
            min={16}
            max={30}
            step={1}
            disabled={!isOn}
            onValueChange={(value) => setTemperature(value[0])}
            aria-label="Ajustar temperatura"
            className="w-full max-w-[200px]"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTemperature(Math.min(30, temperature + 1))}
            disabled={!isOn || temperature >= 30}
            aria-label="Aumentar temperatura"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Fan className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="fan-speed">Velocidade do Ventilador</Label>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((speed) => (
                <Button
                  key={speed}
                  variant={fanSpeed === speed ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setFanSpeed(speed)}
                  disabled={!isOn}
                  aria-label={`Velocidade ${speed}`}
                >
                  {speed}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="dehumidifier">Desumidificador</Label>
            </div>
            <Switch id="dehumidifier" disabled={!isOn} aria-label="Ativar desumidificador" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
