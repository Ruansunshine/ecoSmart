import { UserPreferences } from "@/components/user-preferences"
import { SystemSettings } from "@/components/system-settings"
import { AccessibilitySettings } from "@/components/accessibility-settings"
import { NotificationSettings } from "@/components/notification-settings"

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold md:text-3xl">Configurações</h1>
      <p className="text-muted-foreground">Personalize sua experiência e configure o sistema</p>

      <div className="grid gap-6 md:grid-cols-2">
        <UserPreferences />
        <NotificationSettings />
        <SystemSettings />
        <AccessibilitySettings />
      </div>
    </div>
  )
}
