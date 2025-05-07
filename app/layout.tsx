import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { AccessibilityFloatingButton } from "@/components/accessibility-floating-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "EcoSmart - Automação Inteligente",
  description: "Plataforma de automação de climatização e iluminação com foco em eficiência energética",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-col md:flex-row">
              <Sidebar />
              <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
            </div>
            <AccessibilityFloatingButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
