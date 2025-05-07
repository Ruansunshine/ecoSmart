"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, LightbulbIcon, Settings, Thermometer } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(!isMobile)

  useEffect(() => {
    // Função para lidar com o evento de toggle do sidebar
    const handleToggleSidebar = (event: CustomEvent) => {
      setIsOpen(event.detail.isOpen)
    }

    // Adicionar listener para o evento personalizado
    window.addEventListener("toggle-sidebar" as any, handleToggleSidebar as EventListener)

    // Limpar listener
    return () => {
      window.removeEventListener("toggle-sidebar" as any, handleToggleSidebar as EventListener)
    }
  }, [])

  // Fechar o sidebar quando mudar de rota em dispositivos móveis
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [pathname, isMobile])

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Painel",
      path: "/painel",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: "Climatização",
      path: "/climatizacao",
      icon: <Thermometer className="h-5 w-5" />,
    },
    {
      name: "Iluminação",
      path: "/iluminacao",
      icon: <LightbulbIcon className="h-5 w-5" />,
    },
    {
      name: "Relatórios",
      path: "/relatorios",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: "Configurações",
      path: "/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  if (isMobile && !isOpen) {
    return null
  }

  return (
    <aside
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        isMobile
          ? "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform" +
              (isOpen ? " translate-x-0" : " -translate-x-full")
          : "w-64",
      )}
    >
      <nav className="flex flex-col gap-2 p-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-base transition-colors",
              pathname === route.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {route.icon}
            <span>{route.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className="rounded-lg bg-muted p-4">
          <h3 className="font-medium">Dica de Economia</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reduza a temperatura do ar-condicionado em 1°C para economizar até 10% de energia.
          </p>
        </div>
      </div>
    </aside>
  )
}
