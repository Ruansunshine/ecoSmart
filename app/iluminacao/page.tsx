import { LightingControls } from "@/components/lighting-controls"
import { RoomSelector } from "@/components/room-selector"
import { LightingSchedule } from "@/components/lighting-schedule"
import { LightingScenes } from "@/components/lighting-scenes"

export default function IluminacaoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Iluminação</h1>
          <p className="text-muted-foreground">Controle a iluminação dos ambientes</p>
        </div>
        <RoomSelector />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LightingControls />
        <LightingScenes />
      </div>

      <LightingSchedule />
    </div>
  )
}
