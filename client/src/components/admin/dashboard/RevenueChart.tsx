"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
    { day: "Mon", revenue: 6200 },
    { day: "Tue", revenue: 8100 },
    { day: "Wed", revenue: 7300 },
    { day: "Thu", revenue: 9800 },
    { day: "Fri", revenue: 12500 },
    { day: "Sat", revenue: 18420 },
    { day: "Sun", revenue: 16100 },
];

export default function RevenueChart() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-zinc-500">Revenue Overview</p>

                    <h2 className="mt-1 text-3xl font-black text-white">₹18,420</h2>
                </div>

                <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                    +12.4%
                </div>
            </div>

            <div className="mt-8 h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">

                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.35} />

                                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />

                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="day"
                            tick={{
                                fill: "#71717a",
                                fontSize: 13,
                            }}
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip
                            cursor={false}
                            contentStyle={{
                                background: "#18181b",
                                border: "1px solid #27272a",
                                borderRadius: 14,
                                color: "#fff",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f97316"
                            strokeWidth={4}
                            fill="url(#revenue)"
                        />

                    </AreaChart>

                </ResponsiveContainer>
            </div>
        </section>
    );
}