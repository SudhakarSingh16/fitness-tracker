import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";
import type { DailyMacros } from "@/data/goalPlans";

interface MacroPieChartProps {
  macros: DailyMacros;
}

const COLORS = [
  "hsl(187 80% 48%)",  // accent - protein
  "hsl(82 85% 52%)",   // green - carbs
  "hsl(38 92% 55%)",   // warm - fat
];

const parseGrams = (val: string) => parseInt(val.replace("g", ""), 10) || 0;

export function MacroPieChart({ macros }: MacroPieChartProps) {
  const data = [
    { name: "Protein", value: parseGrams(macros.protein), unit: macros.protein },
    { name: "Carbs", value: parseGrams(macros.carbs), unit: macros.carbs },
    { name: "Fat", value: parseGrams(macros.fat), unit: macros.fat },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="glass" className="p-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center uppercase tracking-wider">
          Macro Breakdown
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-[180px] h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(220 20% 12%)",
                    border: "1px solid hsl(220 15% 25%)",
                    borderRadius: "8px",
                    color: "hsl(0 0% 98%)",
                    fontSize: "13px",
                  }}
                  formatter={(value: number, name: string) => [
                    `${value}g (${Math.round((value / total) * 100)}%)`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3">
            {data.map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[i] }}
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.unit} · {Math.round((item.value / total) * 100)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
