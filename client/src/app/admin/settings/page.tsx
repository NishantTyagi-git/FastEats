import SettingsHeader from "@/components/admin/settings/SettingsHeader";
import SettingsGrid from "@/components/admin/settings/SettingsGrid";

export default function SettingsPage() {
    return (
        <main className="space-y-8">

            <SettingsHeader />

            <SettingsGrid />

        </main>
    );
}