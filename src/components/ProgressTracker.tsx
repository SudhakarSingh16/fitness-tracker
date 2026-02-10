import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Calendar } from "lucide-react";

const stats = [
  {
    label: "Workouts Completed",
    value: "24",
    change: "+8 this week",
    icon: Target,
    color: "text-primary",
  },
  {
    label: "Calories Burned",
    value: "12,450",
    change: "+2,100 this week",
    icon: TrendingUp,
    color: "text-destructive",
  },
  {
    label: "Current Streak",
    value: "7 days",
    change: "Personal best!",
    icon: Award,
    color: "text-accent",
  },
  {
    label: "Plan Adherence",
    value: "94%",
    change: "+5% from last week",
    icon: Calendar,
    color: "text-primary",
  },
];

const weekProgress = [
  { day: "Mon", completed: true, intensity: 85 },
  { day: "Tue", completed: true, intensity: 70 },
  { day: "Wed", completed: true, intensity: 40 },
  { day: "Thu", completed: true, intensity: 90 },
  { day: "Fri", completed: true, intensity: 75 },
  { day: "Sat", completed: true, intensity: 60 },
  { day: "Sun", completed: true, intensity: 55 },
];

export function ProgressTracker() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            Real Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Progress You Can<span className="gradient-text">Trust</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Track your workouts, improvements, and milestones with
            data that actually means something.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="glass" className="h-full">
                <CardContent className="p-5">
                  <div className={`p-2 rounded-lg bg-secondary inline-block mb-3 ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-primary">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card variant="glow" className="p-6">
            <h3 className="font-bold mb-6 text-center">This Week's Activity</h3>
            <div className="flex justify-between gap-2 max-w-2xl mx-auto">
              {weekProgress.map((day, index) => (
                <div key={day.day} className="flex flex-col items-center gap-2">
                  <div className="relative h-24 w-8 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${day.intensity}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className={`absolute bottom-0 w-full rounded-full ${
                        day.completed 
                          ? "bg-gradient-to-t from-primary to-primary/60" 
                          : "bg-muted"
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    day.completed ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
