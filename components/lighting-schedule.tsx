"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export function LightingSchedule() {
  const [schedules, setSchedules] = useState([
    { id: 1, days: "weekdays", timeOn: "18:00", timeOff: "23:00", scene: "normal", enabled: true },
    { id: 2, days: "weekend", timeOn: "19:00", timeOff: "00:00", scene: "movie", enabled: true },
  ])

  const addSchedule = () => {
    const newSchedule = {
      id: Date.now(),
      days: "weekdays",
      timeOn: "18:00",
      timeOff: "22:00",
      scene: "normal",
      enabled: true,
    }
    setSchedules([...schedules, newSchedule])
  }

  const removeSchedule = (id: number) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id))
  }

  const updateSchedule = (id: number, field: string, value: any) => {
    setSchedules(schedules.map((schedule) => (schedule.id === id ? { ...schedule, [field]: value } : schedule)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Programação de Iluminação</CardTitle>
        <CardDescription>Configure horários para ligar e desligar automaticamente</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="grid gap-4 rounded-lg border p-4 md:grid-cols-5">
            <div className="space-y-2">
              <Label htmlFor={`days-${schedule.id}`}>Dias</Label>
              <Select value={schedule.days} onValueChange={(value) => updateSchedule(schedule.id, "days", value)}>
                <SelectTrigger id={`days-${schedule.id}`}>
                  <SelectValue placeholder="Selecione os dias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekdays">Dias de Semana</SelectItem>
                  <SelectItem value="weekend">Fim de Semana</SelectItem>
                  <SelectItem value="everyday">Todos os Dias</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`timeOn-${schedule.id}`}>Ligar às</Label>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <Input
                  id={`timeOn-${schedule.id}`}
                  type="time"
                  value={schedule.timeOn}
                  onChange={(e) => updateSchedule(schedule.id, "timeOn", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`timeOff-${schedule.id}`}>Desligar às</Label>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <Input
                  id={`timeOff-${schedule.id}`}
                  type="time"
                  value={schedule.timeOff}
                  onChange={(e) => updateSchedule(schedule.id, "timeOff", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`scene-${schedule.id}`}>Cena</Label>
              <Select value={schedule.scene} onValueChange={(value) => updateSchedule(schedule.id, "scene", value)}>
                <SelectTrigger id={`scene-${schedule.id}`}>
                  <SelectValue placeholder="Selecione a cena" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="reading">Leitura</SelectItem>
                  <SelectItem value="movie">Filme</SelectItem>
                  <SelectItem value="night">Noturno</SelectItem>
                  <SelectItem value="relax">Relaxar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between space-x-2 md:justify-end">
              <Switch
                id={`enabled-${schedule.id}`}
                checked={schedule.enabled}
                onCheckedChange={(checked) => updateSchedule(schedule.id, "enabled", checked)}
                aria-label="Ativar programação"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSchedule(schedule.id)}
                aria-label="Remover programação"
              >
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" size="sm" className="mt-2 w-full" onClick={addSchedule}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Programação
        </Button>
      </CardContent>
    </Card>
  )
}
