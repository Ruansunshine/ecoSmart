"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Thermometer, LightbulbIcon, Droplets, Battery } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function DashboardOverview() {
  return (
    <Tabs defaultValue="resumo" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-4">
        <TabsTrigger value="resumo" className="text-base">
          Resumo
        </TabsTrigger>
        <TabsTrigger value="climatizacao" className="text-base">
          Climatização
        </TabsTrigger>
        <TabsTrigger value="iluminacao" className="text-base">
          Iluminação
        </TabsTrigger>
        <TabsTrigger value="energia" className="text-base">
          Energia
        </TabsTrigger>
      </TabsList>

      <TabsContent value="resumo" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperatura Média</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23°C</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">-2°C</span> em relação à semana passada
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Luzes Ativas</CardTitle>
              <LightbulbIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4/12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">33%</span> de luzes ligadas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Umidade</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-info">Ideal</span> para conforto
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consumo de Energia</CardTitle>
              <Battery className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2 kWh</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">-12%</span> em relação à média
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
            <CardDescription>Visão geral do funcionamento dos sistemas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">Climatização</span>
                  </div>
                  <span className="text-sm text-success">Operacional</span>
                </div>
                <Progress value={92} className="h-2" aria-label="Status da climatização" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LightbulbIcon className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">Iluminação</span>
                  </div>
                  <span className="text-sm text-success">Operacional</span>
                </div>
                <Progress value={98} className="h-2" aria-label="Status da iluminação" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-warning" />
                    <span className="text-sm font-medium">Energia</span>
                  </div>
                  <span className="text-sm text-warning">Atenção</span>
                </div>
                <Progress value={78} className="h-2" aria-label="Status da energia" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="climatizacao" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Climatização por Ambiente</CardTitle>
            <CardDescription>Status atual dos sistemas de climatização</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Sala de Estar", "Quarto Principal", "Cozinha", "Escritório"].map((room) => (
                <div key={room} className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h4 className="font-medium">{room}</h4>
                    <p className="text-sm text-muted-foreground">{room === "Escritório" ? "Desligado" : "Ligado"}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        {room === "Escritório" ? "--" : `${20 + Math.floor(Math.random() * 5)}°C`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {room === "Escritório" ? "Desligado" : "Temperatura atual"}
                      </p>
                    </div>
                    <div className={`h-3 w-3 rounded-full ${room === "Escritório" ? "bg-muted" : "bg-success"}`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="iluminacao" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Iluminação por Ambiente</CardTitle>
            <CardDescription>Status atual dos sistemas de iluminação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Sala de Estar", "Quarto Principal", "Cozinha", "Escritório", "Banheiro"].map((room, index) => (
                <div key={room} className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h4 className="font-medium">{room}</h4>
                    <p className="text-sm text-muted-foreground">{index % 2 === 0 ? "Ligado" : "Desligado"}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        {index % 2 === 0 ? `${50 + Math.floor(Math.random() * 50)}%` : "0%"}
                      </p>
                      <p className="text-xs text-muted-foreground">{index % 2 === 0 ? "Intensidade" : "Desligado"}</p>
                    </div>
                    <div className={`h-3 w-3 rounded-full ${index % 2 === 0 ? "bg-success" : "bg-muted"}`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="energia" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Consumo de Energia</CardTitle>
            <CardDescription>Consumo atual e histórico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Consumo Total Hoje</h4>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">3.2 kWh</div>
                  <div className="text-sm text-success">-12% em relação à média</div>
                </div>
                <Progress value={32} className="h-2" aria-label="Consumo de energia" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Climatização</h4>
                  <div className="text-xl font-bold">1.8 kWh</div>
                  <p className="text-xs text-muted-foreground">56% do total</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Iluminação</h4>
                  <div className="text-xl font-bold">0.7 kWh</div>
                  <p className="text-xs text-muted-foreground">22% do total</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Outros</h4>
                  <div className="text-xl font-bold">0.7 kWh</div>
                  <p className="text-xs text-muted-foreground">22% do total</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
