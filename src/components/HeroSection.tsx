import { motion } from "framer-motion";
import { Dumbbell, Salad, Brain, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToGoals = () => {
    const goalsSection = document.getElementById("goals-section");
    goalsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorkout = () => {
    const workoutSection = document.getElementById("workout-section");
    workoutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow effect */}
      <div className="hero-glow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Intelligent Fitness System</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Personal
            <br />
            <span className="gradient-text">Fitness Journey</span>
            <br />
            Starts Here
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Personalized workouts and nutrition plans powered by adaptive AI —
            built to evolve as your strength, stamina and discipline grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" onClick={scrollToGoals}>
              Start Your Plan
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToWorkout}>
              See How It Works
            </Button>
          </div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-primary" />
              <span>Custom Workouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Salad className="w-5 h-5 text-accent" />
              <span>Meal Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span>Smart Progress Tracking</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
