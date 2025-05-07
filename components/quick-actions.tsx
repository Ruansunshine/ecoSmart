import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Power, Thermometer, LightbulbIcon, Fan } from "lucide-react"

export function QuickActions() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Ações Rápidas</CardTitle>
        <CardDescription>Controle seus dispositivos com um clique</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start gap-2" variant="outline">
          <Power className="h-4 w-4 text-destructive" />
          <span>Desligar Todos os Sistemas</span>
        </Button>

        <Button className="w-full justify-start gap-2" variant="outline">
          <Thermometer className="h-4 w-4 text-primary" />
          <span>Modo Econômico de Climatização</span>
        </Button>

        <Button className="w-full justify-start gap-2" variant="outline">
          <LightbulbIcon className="h-4 w-4 text-warning" />
          <span>Modo Noturno de Iluminação</span>
        </Button>

        <Button className="w-full justify-start gap-2" variant="outline">
          <Fan className="h-4 w-4 text-info" />
          <span>Ventilação Natural</span>
        </Button>
      </CardContent>
    </Card>
  )
}
