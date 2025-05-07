import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, LightbulbIcon, Thermometer, BarChart3, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="container mx-auto space-y-8 py-6">
      {/* Hero Section */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Automação Inteligente para sua Casa
          </h1>
          <p className="text-lg text-muted-foreground">
            Controle sua climatização e iluminação com eficiência energética e facilidade de uso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/painel">
                Acessar Painel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/configuracoes">Configurar Sistema</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dashboard de automação"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Recursos Principais</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Thermometer className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">Climatização Inteligente</h3>
                <p className="text-muted-foreground">
                  Controle a temperatura de cada ambiente com precisão e economia.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <LightbulbIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">Iluminação Adaptativa</h3>
                <p className="text-muted-foreground">
                  Ajuste a iluminação conforme suas necessidades e economize energia.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">Relatórios Detalhados</h3>
                <p className="text-muted-foreground">
                  Acompanhe o consumo e economize com dados precisos e recomendações.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Acesso Rápido</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link href="/painel">
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6">
                <Home className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">Painel</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/climatizacao">
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6">
                <Thermometer className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">Climatização</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/iluminacao">
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6">
                <LightbulbIcon className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">Iluminação</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/configuracoes">
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6">
                <Settings className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">Configurações</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg bg-primary/10 p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Comece a economizar energia hoje mesmo</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Nossa plataforma de automação inteligente ajuda você a reduzir o consumo de energia enquanto mantém o conforto
          em sua casa ou escritório.
        </p>
        <Button size="lg" className="mt-6">
          <Link href="/painel">Começar Agora</Link>
        </Button>
      </section>
    </div>
  )
}
