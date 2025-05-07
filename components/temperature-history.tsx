"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function TemperatureHistory() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { time: "00:00", temperatura: 22, meta: 22 },
    { time: "04:00", temperatura: 21, meta: 22 },
    { time: "08:00", temperatura: 23, meta: 23 },
    { time: "12:00", temperatura: 25, meta: 23 },
    { time: "16:00", temperatura: 24, meta: 23 },
    { time: "20:00", temperatura: 23, meta: 22 },
    { time: "Agora", temperatura: 23, meta: 23 },
  ]

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Temperatura</CardTitle>
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
        <CardTitle>Histórico de Temperatura</CardTitle>
        <CardDescription>Últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke={textColor} tick={{ fontSize: 12 }} />
            <YAxis
              stroke={textColor}
              domain={[16, 30]}
              ticks={[16, 20, 24, 28, 30]}
              tick={{ fontSize: 12 }}
              unit="°C"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1e293b" : "#ffffff",
                color: textColor,
                border: `1px solid ${gridColor}`,
              }}
              labelStyle={{ color: textColor }}
            />
            <Line
              type="monotone"
              dataKey="temperatura"
              name="Temperatura"
              stroke="#34D399"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="meta"
              name="Temperatura Alvo"
              stroke="#3B82F6"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
