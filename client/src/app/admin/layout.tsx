import type { ReactNode } from "react";

import Sidebar from "@/components/admin/layout/Sidebar";
import Topbar from "@/components/admin/layout/Topbar";

type Props = {
    children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-[#0b0b0b]">
            
            <Sidebar />

            <main className="lg:ml-72">

                <Topbar />

                <div className="p-6 lg:p-8">

                    {children}

                </div>
            </main>
        </div>
    );
}