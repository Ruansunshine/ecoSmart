"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export function ScheduleSettings() {
  const [schedules, setSchedules] = useState([
    { id: 1, day: "weekdays", time: "08:00", temperature: 23, enabled: true },
    { id: 2, day: "weekdays", time: "18:00", temperature: 22, enabled: true },
    { id: 3, day: "weekend", time: "10:00", temperature: 24, enabled: true },
  ])

  const addSchedule = (day: string) => {
    const newSchedule = {
      id: Date.now(),
      day,
      time: "12:00",
      temperature: 22,
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
        <CardTitle>Programação</CardTitle>
        <CardDescription>Configure horários para ajuste automático de temperatura</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekdays" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekdays">Dias de Semana</TabsTrigger>
            <TabsTrigger value="weekend">Fim de Semana</TabsTrigger>
          </TabsList>

          <TabsContent value="weekdays" className="space-y-4">
            {schedules
              .filter((schedule) => schedule.day === "weekdays")
              .map((schedule) => (
                <div key={schedule.id} className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor={`time-${schedule.id}`} className="sr-only">
                        Horário
                      </Label>
                      <Input
                        id={`time-${schedule.id}`}
                        type="time"
                        value={schedule.time}
                        onChange={(e) => updateSchedule(schedule.id, "time", e.target.value)}
                        className="w-24"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <Label htmlFor={`temp-${schedule.id}`} className="text-sm">
                      Temperatura
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id={`temp-${schedule.id}`}
                        type="number"
                        min="16"
                        max="30"
                        value={schedule.temperature}
                        onChange={(e) => updateSchedule(schedule.id, "temperature", Number.parseInt(e.target.value))}
                        className="w-16"
                      />
                      <span className="text-sm">°C</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
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

            <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => addSchedule("weekdays")}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Programação
            </Button>
          </TabsContent>

          <TabsContent value="weekend" className="space-y-4">
            {schedules
              .filter((schedule) => schedule.day === "weekend")
              .map((schedule) => (
                <div key={schedule.id} className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor={`time-${schedule.id}`} className="sr-only">
                        Horário
                      </Label>
                      <Input
                        id={`time-${schedule.id}`}
                        type="time"
                        value={schedule.time}
                        onChange={(e) => updateSchedule(schedule.id, "time", e.target.value)}
                        className="w-24"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <Label htmlFor={`temp-${schedule.id}`} className="text-sm">
                      Temperatura
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id={`temp-${schedule.id}`}
                        type="number"
                        min="16"
                        max="30"
                        value={schedule.temperature}
                        onChange={(e) => updateSchedule(schedule.id, "temperature", Number.parseInt(e.target.value))}
                        className="w-16"
                      />
                      <span className="text-sm">°C</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
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

            <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => addSchedule("weekend")}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Programação
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
