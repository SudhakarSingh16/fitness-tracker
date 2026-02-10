import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Salad, Coffee, Sun, Moon, Utensils } from "lucide-react";
import { goalPlans } from "@/data/goalPlans";
import type { MealTime } from "@/data/goalPlans";
import { MacroPieChart } from "@/components/MacroPieChart";
import { CalorieProgressBar } from "@/components/CalorieProgressBar";
import { WaterIntakeTracker } from "@/components/WaterIntakeTracker";

const iconMap = {
  coffee: Coffee,
  sun: Sun,
  moon: Moon,
  utensils: Utensils,
};

interface DietPlanProps {
  goal?: string;
}

export function DietPlan({ goal }: DietPlanProps) {
  const activeGoal = goal || "maintenance";
  const plan = goalPlans[activeGoal] || goalPlans.maintenance;
  const mealPlan: MealTime[] = plan.meals;
  const macros = plan.macros;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Salad className="w-3 h-3 mr-1" />
            Your Diet Plan
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Daily <span className="gradient-text">Nutrition Guide</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {goal
              ? "Meals designed to match your fitness goal and fuel your training."
              : "Select a goal above to get a personalized nutrition plan."}
          </p>
        </motion.div>

        {/* Daily summary */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal + "-macros"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Card variant="glow" className="p-6">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">{macros.calories.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Calories</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div>
                  <p className="text-3xl font-bold text-accent">{macros.protein}</p>
                  <p className="text-sm text-muted-foreground">Protein</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div>
                  <p className="text-3xl font-bold">{macros.carbs}</p>
                  <p className="text-sm text-muted-foreground">Carbs</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div>
                  <p className="text-3xl font-bold">{macros.fat}</p>
                  <p className="text-sm text-muted-foreground">Fat</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Macro chart + Calorie bar + Water tracker */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal + "-widgets"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
          >
            <MacroPieChart macros={macros} />
            <CalorieProgressBar meals={mealPlan} dailyTarget={macros.calories} />
            <WaterIntakeTracker />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal + "-meals"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {mealPlan.map((meal, index) => {
              const MealIcon = iconMap[meal.icon];
              return (
                <motion.div
                  key={meal.time}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card variant="glass" className="h-full hover:border-accent/30 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-accent/10">
                            <MealIcon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{meal.time}</CardTitle>
                            <p className="text-xs text-muted-foreground">{meal.timeRange}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {meal.meals.map((item, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium text-sm">{item.name}</p>
                              <Badge variant="secondary" className="text-xs">
                                {item.calories} cal
                              </Badge>
                            </div>
                            <div className="flex gap-3 text-xs text-muted-foreground">
                              <span>P: {item.protein}</span>
                              <span>C: {item.carbs}</span>
                              <span>F: {item.fat}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
