import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Droplets } from "lucide-react";

const TOTAL_GLASSES = 8;

export function WaterIntakeTracker() {
  const [filled, setFilled] = useState(0);

  const toggle = (index: number) => {
    setFilled(index + 1 === filled ? index : index + 1);
  };

  const percentage = Math.round((filled / TOTAL_GLASSES) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card variant="glass" className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Water Intake
          </h3>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{filled}</span> / {TOTAL_GLASSES} glasses
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 rounded-full bg-secondary overflow-hidden mb-5">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(200 85% 55%), hsl(187 80% 48%))",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Glasses grid */}
        <div className="flex justify-center gap-2 flex-wrap">
          {Array.from({ length: TOTAL_GLASSES }).map((_, i) => {
            const isFilled = i < filled;
            return (
              <motion.button
                key={i}
                onClick={() => toggle(i)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  isFilled
                    ? "bg-sky-500/20 text-sky-400"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <Droplets className="w-5 h-5" />
              </motion.button>
            );
          })}
        </div>

        {percentage === 100 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-sky-400 mt-3 font-medium"
          >
            🎉 Great job! You've hit your hydration goal!
          </motion.p>
        )}
      </Card>
    </motion.div>
  );
}
