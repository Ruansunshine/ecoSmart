"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function EnergyConsumptionReport() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dailyData = [
    { name: "Seg", climatizacao: 3.2, iluminacao: 1.5, outros: 1.8 },
    { name: "Ter", climatizacao: 3.0, iluminacao: 1.4, outros: 1.7 },
    { name: "Qua", climatizacao: 3.1, iluminacao: 1.3, outros: 1.6 },
    { name: "Qui", climatizacao: 3.3, iluminacao: 1.6, outros: 1.9 },
    { name: "Sex", climatizacao: 3.5, iluminacao: 1.8, outros: 2.0 },
    { name: "Sáb", climatizacao: 2.8, iluminacao: 2.0, outros: 1.5 },
    { name: "Dom", climatizacao: 2.5, iluminacao: 1.9, outros: 1.4 },
  ]

  const weeklyData = [
    { name: "Semana 1", climatizacao: 22.5, iluminacao: 11.2, outros: 12.8 },
    { name: "Semana 2", climatizacao: 21.0, iluminacao: 10.8, outros: 12.0 },
    { name: "Semana 3", climatizacao: 23.2, iluminacao: 11.5, outros: 13.0 },
    { name: "Semana 4", climatizacao: 20.8, iluminacao: 10.5, outros: 11.8 },
  ]

  const monthlyData = [
    { name: "Jan", climatizacao: 95, iluminacao: 45, outros: 50 },
    { name: "Fev", climatizacao: 85, iluminacao: 40, outros: 45 },
    { name: "Mar", climatizacao: 75, iluminacao: 35, outros: 40 },
    { name: "Abr", climatizacao: 65, iluminacao: 30, outros: 35 },
    { name: "Mai", climatizacao: 70, iluminacao: 32, outros: 38 },
    { name: "Jun", climatizacao: 80, iluminacao: 38, outros: 42 },
  ]

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Consumo de Energia</CardTitle>
          <CardDescription>Carregando dados...</CardDescription>
        </CardHeader>
        <CardContent className="h-80" />
      </Card>
    )
  }

  const isDark = theme === "dark"
  const textColor = isDark ? "#f8fafc" : "#0f172a"
  const gridColor = isDark ? "#334155" : "#e2e8f0"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Consumo de Energia</CardTitle>
        <CardDescription>Análise detalhada do consumo por período</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="diario" className="space-y-4">
          <TabsList>
            <TabsTrigger value="diario">Diário</TabsTrigger>
            <TabsTrigger value="semanal">Semanal</TabsTrigger>
            <TabsTrigger value="mensal">Mensal</TabsTrigger>
          </TabsList>

          <TabsContent value="diario" className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" stroke={textColor} />
                <YAxis stroke={textColor} unit=" kWh" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1e293b" : "#ffffff",
                    color: textColor,
                    border: `1px solid ${gridColor}`,
                  }}
                  labelStyle={{ color: textColor }}
                />
                <Legend />
                <Bar dataKey="climatizacao" name="Climatização" fill="#34D399" radius={[4, 4, 0, 0]} />
                <Bar dataKey="iluminacao" name="Iluminação" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outros" name="Outros" fill="#FACC15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="semanal" className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" stroke={textColor} />
                <YAxis stroke={textColor} unit=" kWh" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1e293b" : "#ffffff",
                    color: textColor,
                    border: `1px solid ${gridColor}`,
                  }}
                  labelStyle={{ color: textColor }}
                />
                <Legend />
                <Bar dataKey="climatizacao" name="Climatização" fill="#34D399" radius={[4, 4, 0, 0]} />
                <Bar dataKey="iluminacao" name="Iluminação" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outros" name="Outros" fill="#FACC15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="mensal" className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" stroke={textColor} />
                <YAxis stroke={textColor} unit=" kWh" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1e293b" : "#ffffff",
                    color: textColor,
                    border: `1px solid ${gridColor}`,
                  }}
                  labelStyle={{ color: textColor }}
                />
                <Legend />
                <Bar dataKey="climatizacao" name="Climatização" fill="#34D399" radius={[4, 4, 0, 0]} />
                <Bar dataKey="iluminacao" name="Iluminação" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outros" name="Outros" fill="#FACC15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
