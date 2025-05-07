import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UserPreferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferências do Usuário</CardTitle>
        <CardDescription>Personalize sua experiência</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Climatização</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="temp-default">Temperatura Padrão</Label>
              <p className="text-xs text-muted-foreground">Temperatura padrão para todos os ambientes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">22°C</span>
              <Slider id="temp-default" defaultValue={[22]} max={30} min={16} step={1} className="w-24" />
              <span className="text-sm">24°C</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="eco-mode">Modo Econômico</Label>
              <p className="text-xs text-muted-foreground">Ajusta automaticamente para economizar energia</p>
            </div>
            <Switch id="eco-mode" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Iluminação</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="brightness-default">Brilho Padrão</Label>
              <p className="text-xs text-muted-foreground">Intensidade padrão para todas as luzes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">50%</span>
              <Slider id="brightness-default" defaultValue={[70]} max={100} min={10} step={10} className="w-24" />
              <span className="text-sm">100%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-off">Desligamento Automático</Label>
              <p className="text-xs text-muted-foreground">Desliga luzes quando não há movimento</p>
            </div>
            <Switch id="auto-off" defaultChecked />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Geral</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="language">Idioma</Label>
              <p className="text-xs text-muted-foreground">Idioma da interface</p>
            </div>
            <Select defaultValue="pt-BR">
              <SelectTrigger id="language" className="w-[180px]">
                <SelectValue placeholder="Selecione o idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                <SelectItem value="en-US">English (US)</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Notificações</Label>
              <p className="text-xs text-muted-foreground">Receber alertas e notificações</p>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
