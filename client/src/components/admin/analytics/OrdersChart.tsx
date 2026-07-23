"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const data = [
    { day: "Mon", orders: 34 },
    { day: "Tue", orders: 52 },
    { day: "Wed", orders: 41 },
    { day: "Thu", orders: 67 },
    { day: "Fri", orders: 74 },
    { day: "Sat", orders: 98 },
    { day: "Sun", orders: 81 },
];

export default function OrdersChart() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Weekly Orders</h2>

                <p className="mt-1 text-zinc-500">Orders received this week</p>
            </div>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="day"
                            tick={{ fill: "#71717a" }}
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip
                            cursor={{
                                fill: "#18181b",
                            }}
                            contentStyle={{
                                background: "#18181b",
                                border: "1px solid #27272a",
                                borderRadius: "16px",
                                color: "#fff",
                            }}
                        />

                        <Bar
                            dataKey="orders"
                            fill="#f97316"
                            radius={[8, 8, 0, 0]}
                            barSize={34}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}
