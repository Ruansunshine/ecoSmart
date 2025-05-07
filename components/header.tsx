"use client"

import { Bell, HelpCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useMobile()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    // Disparar um evento personalizado para que o Sidebar possa reagir
    const event = new CustomEvent("toggle-sidebar", { detail: { isOpen: !sidebarOpen } })
    window.dispatchEvent(event)
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      {isMobile && (
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar} aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      )}

      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-lg font-bold">EcoSmart</span>
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Notificações">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notificações</span>
        </Button>

        <Button variant="ghost" size="icon" aria-label="Ajuda">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Ajuda</span>
        </Button>

        <ModeToggle />
      </div>
    </header>
  )
}
