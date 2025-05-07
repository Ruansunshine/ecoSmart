"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function SavingsReport() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { name: "Jan", consumo: 470, economia: 0 },
    { name: "Fev", consumo: 460, economia: 10 },
    { name: "Mar", consumo: 440, economia: 30 },
    { name: "Abr", consumo: 410, economia: 60 },
    { name: "Mai", consumo: 390, economia: 80 },
    { name: "Jun", consumo: 400, economia: 70 },
  ]

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Economia de Energia</CardTitle>
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
        <CardTitle>Economia de Energia</CardTitle>
        <CardDescription>Economia acumulada nos últimos meses</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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
            <Area
              type="monotone"
              dataKey="consumo"
              name="Consumo"
              stroke="#3B82F6"
              fill="#3B82F680"
              activeDot={{ r: 8 }}
            />
            <Area type="monotone" dataKey="economia" name="Economia" stroke="#34D399" fill="#34D39980" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
