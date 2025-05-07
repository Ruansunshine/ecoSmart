"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export function UsagePatterns() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { name: "Climatização", value: 56, color: "#34D399" },
    { name: "Iluminação", value: 22, color: "#3B82F6" },
    { name: "Outros", value: 22, color: "#FACC15" },
  ]

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Padrões de Uso</CardTitle>
          <CardDescription>Carregando dados...</CardDescription>
        </CardHeader>
        <CardContent className="h-80" />
      </Card>
    )
  }

  const isDark = theme === "dark"
  const textColor = isDark ? "#f8fafc" : "#0f172a"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Padrões de Uso</CardTitle>
        <CardDescription>Distribuição do consumo de energia</CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1e293b" : "#ffffff",
                color: textColor,
                border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
              }}
              formatter={(value) => [`${value}%`, "Consumo"]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
