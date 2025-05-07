"use client"

import { useState } from "react"
import { Accessibility } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { useTheme } from "next-themes"

export function AccessibilityFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const { setTheme, theme } = useTheme()

  const toggleAccessibility = () => {
    setIsOpen(!isOpen)
  }

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0]
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked)
    if (checked) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  const handleReduceMotionChange = (checked: boolean) => {
    setReduceMotion(checked)
    if (checked) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
  }

  const handleDarkModeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg"
        onClick={toggleAccessibility}
        aria-label="Opções de acessibilidade"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-50 w-80 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle>Acessibilidade</CardTitle>
            <CardDescription>Ajuste a interface às suas necessidades</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Modo Escuro</Label>
                <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={handleDarkModeChange} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast">Alto Contraste</Label>
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={handleHighContrastChange} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="reduce-motion">Reduzir Animações</Label>
                <Switch id="reduce-motion" checked={reduceMotion} onCheckedChange={handleReduceMotionChange} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="font-size">Tamanho da Fonte: {fontSize}px</Label>
              <Slider
                id="font-size"
                min={12}
                max={24}
                step={1}
                value={[fontSize]}
                onValueChange={handleFontSizeChange}
              />
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setFontSize(16)
                setHighContrast(false)
                setReduceMotion(false)
                document.documentElement.style.fontSize = "16px"
                document.documentElement.classList.remove("high-contrast", "reduce-motion")
              }}
            >
              Restaurar Padrões
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  )
}
