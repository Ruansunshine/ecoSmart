import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function AccessibilitySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acessibilidade</CardTitle>
        <CardDescription>Torne a interface mais acessível</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Visualização</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="font-size">Tamanho da Fonte</Label>
              <p className="text-xs text-muted-foreground">Ajuste o tamanho do texto</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">A</span>
              <Slider id="font-size" defaultValue={[16]} max={24} min={12} step={1} className="w-24" />
              <span className="text-lg font-bold">A</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="high-contrast">Alto Contraste</Label>
              <p className="text-xs text-muted-foreground">Aumenta o contraste para melhor visualização</p>
            </div>
            <Switch id="high-contrast" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Interação</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="keyboard-nav">Navegação por Teclado</Label>
              <p className="text-xs text-muted-foreground">Melhora a navegação usando apenas o teclado</p>
            </div>
            <Switch id="keyboard-nav" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animation-reduce">Reduzir Animações</Label>
              <p className="text-xs text-muted-foreground">Diminui ou remove animações da interface</p>
            </div>
            <Switch id="animation-reduce" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Assistência</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="screen-reader">Compatibilidade com Leitor de Tela</Label>
              <p className="text-xs text-muted-foreground">Otimiza a interface para leitores de tela</p>
            </div>
            <Switch id="screen-reader" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="text-speech">Texto para Fala</Label>
              <p className="text-xs text-muted-foreground">Lê informações importantes em voz alta</p>
            </div>
            <Switch id="text-speech" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
