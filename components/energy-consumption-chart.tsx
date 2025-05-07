"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function EnergyConsumptionChart() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dailyData = [
    { name: "00:00", climatizacao: 0.8, iluminacao: 0.2, outros: 0.3 },
    { name: "04:00", climatizacao: 0.5, iluminacao: 0.1, outros: 0.2 },
    { name: "08:00", climatizacao: 1.2, iluminacao: 0.4, outros: 0.5 },
    { name: "12:00", climatizacao: 1.8, iluminacao: 0.3, outros: 0.6 },
    { name: "16:00", climatizacao: 2.0, iluminacao: 0.5, outros: 0.7 },
    { name: "20:00", climatizacao: 1.5, iluminacao: 0.8, outros: 0.5 },
  ]

  const weeklyData = [
    { name: "Dom", climatizacao: 8.5, iluminacao: 3.2, outros: 2.8 },
    { name: "Seg", climatizacao: 10.2, iluminacao: 4.1, outros: 3.5 },
    { name: "Ter", climatizacao: 9.8, iluminacao: 3.9, outros: 3.2 },
    { name: "Qua", climatizacao: 9.5, iluminacao: 3.8, outros: 3.0 },
    { name: "Qui", climatizacao: 10.0, iluminacao: 4.0, outros: 3.3 },
    { name: "Sex", climatizacao: 11.2, iluminacao: 4.5, outros: 3.8 },
    { name: "Sáb", climatizacao: 9.0, iluminacao: 3.6, outros: 3.0 },
  ]

  const monthlyData = [
    { name: "Jan", climatizacao: 280, iluminacao: 120, outros: 100 },
    { name: "Fev", climatizacao: 250, iluminacao: 110, outros: 90 },
    { name: "Mar", climatizacao: 220, iluminacao: 100, outros: 85 },
    { name: "Abr", climatizacao: 200, iluminacao: 90, outros: 80 },
    { name: "Mai", climatizacao: 180, iluminacao: 85, outros: 75 },
    { name: "Jun", climatizacao: 190, iluminacao: 90, outros: 80 },
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
        <CardDescription>Análise de consumo por período e categoria</CardDescription>
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
