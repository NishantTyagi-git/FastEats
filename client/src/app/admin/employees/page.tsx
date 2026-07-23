import EmployeeHeader from "@/components/admin/employees/EmployeeHeader";
import EmployeeGrid from "@/components/admin/employees/EmployeeGrid";

export default function EmployeesPage() {
    return (
        <main className="space-y-8">

            <EmployeeHeader />

            <EmployeeGrid />

        </main>
    );
}