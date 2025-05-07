import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ThermometerSnowflake, LightbulbIcon, AlertCircle } from "lucide-react"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Temperatura Alta",
      description: "Escritório acima de 26°C",
      time: "Há 10 minutos",
      icon: <ThermometerSnowflake className="h-4 w-4 text-warning" />,
      severity: "warning",
    },
    {
      id: 2,
      title: "Luzes Acesas",
      description: "Sala de estar sem ocupação",
      time: "Há 25 minutos",
      icon: <LightbulbIcon className="h-4 w-4 text-info" />,
      severity: "info",
    },
    {
      id: 3,
      title: "Consumo Elevado",
      description: "Pico de consumo detectado",
      time: "Há 1 hora",
      icon: <AlertCircle className="h-4 w-4 text-destructive" />,
      severity: "error",
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Alertas Recentes</CardTitle>
          <CardDescription>Notificações importantes do sistema</CardDescription>
        </div>
        <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          <AlertTriangle className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start gap-4 rounded-lg border p-3">
            <div className="mt-0.5">{alert.icon}</div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">{alert.title}</p>
              <p className="text-xs text-muted-foreground">{alert.description}</p>
              <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
