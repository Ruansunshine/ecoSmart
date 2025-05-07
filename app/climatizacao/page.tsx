import { TemperatureControls } from "@/components/temperature-controls"
import { RoomSelector } from "@/components/room-selector"
import { TemperatureHistory } from "@/components/temperature-history"
import { ScheduleSettings } from "@/components/schedule-settings"

export default function ClimatizacaoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Climatização</h1>
          <p className="text-muted-foreground">Controle a temperatura e ventilação dos ambientes</p>
        </div>
        <RoomSelector />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TemperatureControls />
        <TemperatureHistory />
      </div>

      <ScheduleSettings />
    </div>
  )
}
