import { DateRangePicker } from "@/components/date-range-picker"
import { EnergyConsumptionReport } from "@/components/energy-consumption-report"
import { UsagePatterns } from "@/components/usage-patterns"
import { SavingsReport } from "@/components/savings-report"

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Relatórios</h1>
          <p className="text-muted-foreground">Acompanhe o consumo e economias de energia</p>
        </div>
        <DateRangePicker />
      </div>

      <EnergyConsumptionReport />

      <div className="grid gap-6 md:grid-cols-2">
        <UsagePatterns />
        <SavingsReport />
      </div>
    </div>
  )
}
