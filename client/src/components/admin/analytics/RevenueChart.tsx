"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
    { month: "Jan", revenue: 18000 },
    { month: "Feb", revenue: 22000 },
    { month: "Mar", revenue: 28000 },
    { month: "Apr", revenue: 24000 },
    { month: "May", revenue: 35000 },
    { month: "Jun", revenue: 42000 },
    { month: "Jul", revenue: 39000 },
];

export default function RevenueChart() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Revenue Overview</h2>

                <p className="mt-1 text-zinc-500">Monthly revenue performance</p>
            </div>

            <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="0%"
                                    stopColor="#f97316"
                                    stopOpacity={0.6}
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#f97316"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="month"
                            tick={{ fill: "#71717a" }}
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#18181b",
                                border: "1px solid #27272a",
                                borderRadius: "16px",
                                color: "#fff",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f97316"
                            strokeWidth={3}
                            fill="url(#revenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}