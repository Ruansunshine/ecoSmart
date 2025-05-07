import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Thermometer, Clock, Zap } from "lucide-react"

export function SavingsTips() {
  const tips = [
    {
      id: 1,
      title: "Ajuste a temperatura",
      description: "Cada grau a menos economiza até 10% de energia",
      icon: <Thermometer className="h-4 w-4 text-primary" />,
    },
    {
      id: 2,
      title: "Use luz natural",
      description: "Aproveite a luz do dia sempre que possível",
      icon: <Lightbulb className="h-4 w-4 text-warning" />,
    },
    {
      id: 3,
      title: "Programe horários",
      description: "Defina horários para ligar/desligar automaticamente",
      icon: <Clock className="h-4 w-4 text-info" />,
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Dicas de Economia</CardTitle>
          <CardDescription>Reduza seu consumo de energia</CardDescription>
        </div>
        <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          <Zap className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {tips.map((tip) => (
          <div key={tip.id} className="flex items-start gap-4 rounded-lg border p-3">
            <div className="mt-0.5">{tip.icon}</div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">{tip.title}</p>
              <p className="text-xs text-muted-foreground">{tip.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
