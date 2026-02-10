import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { GoalSelector } from "@/components/GoalSelector";
import { WorkoutPlan } from "@/components/WorkoutPlan";
import { DietPlan } from "@/components/DietPlan";
import { BmiCalculator } from "@/components/BmiCalculator";
import { ProgressTracker } from "@/components/ProgressTracker";

const Index = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GoalSelector onSelect={setSelectedGoal} selected={selectedGoal} />
      <WorkoutPlan goal={selectedGoal} />
      <DietPlan goal={selectedGoal} />
      <BmiCalculator />
      <ProgressTracker />
      
      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 FitAI. Your AI-Powered Fitness Partner.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
