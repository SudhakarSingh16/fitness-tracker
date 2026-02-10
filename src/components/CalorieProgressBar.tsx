import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { MealTime } from "@/data/goalPlans";

interface CalorieProgressBarProps {
  meals: MealTime[];
  dailyTarget: number;
}

const MEAL_COLORS = [
  "hsl(187 80% 48%)",
  "hsl(82 85% 52%)",
  "hsl(38 92% 55%)",
  "hsl(280 60% 55%)",
];

export function CalorieProgressBar({ meals, dailyTarget }: CalorieProgressBarProps) {
  const mealCalories = meals.map((meal) =>
    meal.meals.reduce((sum, m) => sum + m.calories, 0)
  );
  const totalConsumed = mealCalories.reduce((sum, c) => sum + c, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card variant="glass" className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Calorie Breakdown
          </h3>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{totalConsumed.toLocaleString()}</span>
            {" / "}
            {dailyTarget.toLocaleString()} kcal
          </p>
        </div>

        {/* Stacked bar */}
        <div className="w-full h-4 rounded-full bg-secondary overflow-hidden flex">
          {mealCalories.map((cal, i) => {
            const widthPct = (cal / dailyTarget) * 100;
            return (
              <motion.div
                key={meals[i].time}
                initial={{ width: 0 }}
                animate={{ width: `${widthPct}%` }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="h-full"
                style={{ backgroundColor: MEAL_COLORS[i % MEAL_COLORS.length] }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4">
          {meals.map((meal, i) => (
            <div key={meal.time} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: MEAL_COLORS[i % MEAL_COLORS.length] }}
              />
              <span className="text-xs text-muted-foreground">
                {meal.time}{" "}
                <span className="font-medium text-foreground">
                  {mealCalories[i]} cal
                </span>
              </span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
