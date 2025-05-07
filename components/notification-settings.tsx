import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Configure como deseja ser notificado</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Alertas</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="temp-alerts">Alertas de Temperatura</Label>
              <p className="text-xs text-muted-foreground">Notifica sobre temperaturas fora do ideal</p>
            </div>
            <Switch id="temp-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="energy-alerts">Alertas de Consumo</Label>
              <p className="text-xs text-muted-foreground">Notifica sobre consumo elevado de energia</p>
            </div>
            <Switch id="energy-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="system-alerts">Alertas do Sistema</Label>
              <p className="text-xs text-muted-foreground">Notifica sobre problemas técnicos</p>
            </div>
            <Switch id="system-alerts" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Métodos de Notificação</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-notifications">Notificações no Aplicativo</Label>
              <p className="text-xs text-muted-foreground">Exibe notificações na interface</p>
            </div>
            <Switch id="app-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Notificações por E-mail</Label>
              <p className="text-xs text-muted-foreground">Envia alertas para seu e-mail</p>
            </div>
            <Switch id="email-notifications" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications">Notificações por SMS</Label>
              <p className="text-xs text-muted-foreground">Envia alertas por mensagem de texto</p>
            </div>
            <Switch id="sms-notifications" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Frequência</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notification-frequency">Frequência de Notificações</Label>
              <p className="text-xs text-muted-foreground">Com que frequência deseja receber alertas</p>
            </div>
            <Select defaultValue="immediate">
              <SelectTrigger id="notification-frequency" className="w-[180px]">
                <SelectValue placeholder="Selecione a frequência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Imediatamente</SelectItem>
                <SelectItem value="hourly">A cada hora</SelectItem>
                <SelectItem value="daily">Diariamente</SelectItem>
                <SelectItem value="weekly">Semanalmente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="quiet-hours">Horário de Silêncio</Label>
              <p className="text-xs text-muted-foreground">Não receber notificações durante este período</p>
            </div>
            <Switch id="quiet-hours" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
