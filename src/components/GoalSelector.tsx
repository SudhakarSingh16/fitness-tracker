import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Flame, Zap } from "lucide-react";

const goals = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Burn fat and get lean",
    icon: Flame,
    color: "text-orange-400",
    bgColor: "bg-orange-400/15",
  },
  {
    id: "muscle-gain",
    title: "Muscle Gain",
    description: "Build strength and mass",
    icon: TrendingUp,
    color: "text-lime-400",
    bgColor: "bg-lime-400/15",
  },
  {
    id: "endurance",
    title: "Endurance",
    description: "Boost stamina and cardio",
    icon: Zap,
    color: "text-sky-400",
    bgColor: "bg-sky-400/15",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Stay fit and healthy",
    icon: Target,
    color: "text-violet-400",
    bgColor: "bg-violet-400/15",
  },
];

interface GoalSelectorProps {
  onSelect: (goal: string) => void;
  selected?: string;
}

export function GoalSelector({ onSelect, selected }: GoalSelectorProps) {
  const handleSelect = (goalId: string) => {
    onSelect(goalId);
    setTimeout(() => {
      document.getElementById("workout-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  return (
    <section id="goals-section" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Your <span className="gradient-text">Goal</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your primary fitness objective and we'll create a personalized plan just for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                variant={selected === goal.id ? "glow" : "glass"}
                className={`cursor-pointer hover:scale-[1.02] transition-all duration-300 ${
                  selected === goal.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelect(goal.id)}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${goal.bgColor} ${goal.color}`}>
                    <goal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
