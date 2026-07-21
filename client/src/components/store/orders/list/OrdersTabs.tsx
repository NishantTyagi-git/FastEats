"use client";

import { useState } from "react";

import ActiveOrderCard from "./ActiveOrderCard";
import OrderCard from "./OrderCard";

const tabs = [
    {
        id: "active",
        label: "Active",
    },
    {
        id: "completed",
        label: "Completed",
    },
    {
        id: "cancelled",
        label: "Cancelled",
    },
];

export default function OrdersTabs() {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <section>
            <div className="inline-flex rounded-full border border-white/10 bg-[#151515] p-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? "bg-orange-500 text-white shadow-lg"
                                : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 space-y-6">
                {activeTab === "active" && (
                    <>
                        <ActiveOrderCard />

                        <ActiveOrderCard />
                    </>
                )}

                {activeTab === "completed" && (
                    <>
                        <OrderCard status="Delivered" color="green"/>

                        <OrderCard status="Delivered" color="green"/>

                        <OrderCard status="Delivered" color="green"/>

                        <OrderCard status="Delivered" color="green"/>
                    </>
                )}

                {activeTab === "cancelled" && (
                    <>
                        <OrderCard status="Cancelled" color="red"/>
                    </>
                )}
            </div>
        </section>
    );
}