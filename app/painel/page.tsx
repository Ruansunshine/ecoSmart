import { DashboardOverview } from "@/components/dashboard-overview"
import { EnergyConsumptionChart } from "@/components/energy-consumption-chart"
import { QuickActions } from "@/components/quick-actions"
import { RecentAlerts } from "@/components/recent-alerts"
import { SavingsTips } from "@/components/savings-tips"

export default function PainelPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold md:text-3xl">Painel de Controle</h1>
      <p className="text-muted-foreground">
        Bem-vindo à sua plataforma de automação inteligente. Monitore e controle seus sistemas de climatização e
        iluminação.
      </p>

      <DashboardOverview />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QuickActions />
        <RecentAlerts />
        <SavingsTips />
      </div>

      <EnergyConsumptionChart />
    </div>
  )
}
