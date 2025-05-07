import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SystemSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações do Sistema</CardTitle>
        <CardDescription>Ajustes técnicos e de funcionamento</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Sensores</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sensor-interval">Intervalo de Leitura</Label>
              <p className="text-xs text-muted-foreground">Frequência de leitura dos sensores</p>
            </div>
            <Select defaultValue="5">
              <SelectTrigger id="sensor-interval" className="w-[180px]">
                <SelectValue placeholder="Selecione o intervalo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 minuto</SelectItem>
                <SelectItem value="5">5 minutos</SelectItem>
                <SelectItem value="15">15 minutos</SelectItem>
                <SelectItem value="30">30 minutos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="calibration">Calibração Automática</Label>
              <p className="text-xs text-muted-foreground">Calibra sensores periodicamente</p>
            </div>
            <Switch id="calibration" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Conectividade</h3>

          <div className="space-y-2">
            <Label htmlFor="wifi-name">Rede Wi-Fi</Label>
            <div className="flex items-center space-x-2">
              <Input id="wifi-name" defaultValue="Rede_Principal" className="flex-1" />
              <Button variant="outline">Conectar</Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="cloud-sync">Sincronização com a Nuvem</Label>
              <p className="text-xs text-muted-foreground">Sincroniza dados com servidores remotos</p>
            </div>
            <Switch id="cloud-sync" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Segurança</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">Autenticação em Dois Fatores</Label>
              <p className="text-xs text-muted-foreground">Adiciona uma camada extra de segurança</p>
            </div>
            <Switch id="two-factor" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="access-log">Registro de Acesso</Label>
              <p className="text-xs text-muted-foreground">Mantém histórico de acessos ao sistema</p>
            </div>
            <Switch id="access-log" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
