import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Dumbbell, Clock, Flame, Check, PlayCircle } from "lucide-react";
import { exerciseGuides } from "@/data/exerciseGuides";
import { ExerciseGuideModal } from "@/components/ExerciseGuideModal";
import { goalPlans } from "@/data/goalPlans";
import type { WorkoutDay } from "@/data/goalPlans";

interface CompletedExercise {
  completed: boolean;
  actualSets: string;
}

type CompletedState = {
  [dayIndex: number]: {
    [exerciseIndex: number]: CompletedExercise;
  };
};

interface WorkoutPlanProps {
  goal?: string;
}

export function WorkoutPlan({ goal }: WorkoutPlanProps) {
  const [completed, setCompleted] = useState<CompletedState>({});
  const [guideModal, setGuideModal] = useState<{ name: string; muscle: string } | null>(null);

  const activeGoal = goal || "maintenance";
  const workoutDays: WorkoutDay[] = goalPlans[activeGoal]?.workouts || goalPlans.maintenance.workouts;

  // Reset completion state when goal changes
  useEffect(() => {
    setCompleted({});
  }, [activeGoal]);

  const getExerciseState = (dayIndex: number, exerciseIndex: number): CompletedExercise => {
    return completed[dayIndex]?.[exerciseIndex] || { completed: false, actualSets: "" };
  };

  const toggleExercise = (dayIndex: number, exerciseIndex: number) => {
    setCompleted((prev) => ({
      ...prev,
      [dayIndex]: {
        ...prev[dayIndex],
        [exerciseIndex]: {
          ...getExerciseState(dayIndex, exerciseIndex),
          completed: !getExerciseState(dayIndex, exerciseIndex).completed,
        },
      },
    }));
  };

  const updateActualSets = (dayIndex: number, exerciseIndex: number, value: string) => {
    setCompleted((prev) => ({
      ...prev,
      [dayIndex]: {
        ...prev[dayIndex],
        [exerciseIndex]: {
          ...getExerciseState(dayIndex, exerciseIndex),
          actualSets: value,
        },
      },
    }));
  };

  const getCompletedCount = (dayIndex: number): number => {
    const dayExercises = completed[dayIndex];
    if (!dayExercises) return 0;
    return Object.values(dayExercises).filter((e) => e.completed).length;
  };

  return (
    <section id="workout-section" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Dumbbell className="w-3 h-3 mr-1" />
            Your Workout Plan
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Weekly <span className="gradient-text">Training Schedule</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {goal
              ? "Plan tailored to your selected goal. Check off exercises as you complete them!"
              : "Select a goal above to get a personalized plan. Showing the default plan."}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {workoutDays.map((workout, dayIndex) => {
              const completedCount = getCompletedCount(dayIndex);
              const totalExercises = workout.exercises.length;
              const allCompleted = completedCount === totalExercises;

              return (
                <motion.div
                  key={workout.day + workout.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.1, duration: 0.5 }}
                >
                  <Card
                    variant="glass"
                    className={`h-full transition-all duration-300 ${
                      allCompleted
                        ? "border-primary/50 bg-primary/5"
                        : "hover:border-primary/30"
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-primary border-primary/30">
                            {workout.day}
                          </Badge>
                          {allCompleted && (
                            <Badge className="bg-primary text-primary-foreground">
                              <Check className="w-3 h-3 mr-1" />
                              Complete
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {workout.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame className="w-4 h-4 text-destructive" />
                            {workout.calories} cal
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle>{workout.name}</CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {completedCount}/{totalExercises}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-lime-light rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(completedCount / totalExercises) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {workout.exercises.map((exercise, exerciseIndex) => {
                          const state = getExerciseState(dayIndex, exerciseIndex);
                          return (
                            <div
                              key={exerciseIndex}
                              className={`flex items-center justify-between py-2 px-2 rounded-lg border transition-all duration-200 ${
                                state.completed
                                  ? "border-primary/30 bg-primary/10"
                                  : "border-border/50 hover:border-border"
                              }`}
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <Checkbox
                                  checked={state.completed}
                                  onCheckedChange={() => toggleExercise(dayIndex, exerciseIndex)}
                                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                />
                                <div
                                  className="cursor-pointer group/name flex-1 min-w-0"
                                  onClick={() => setGuideModal({ name: exercise.name, muscle: exercise.muscle })}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <p
                                      className={`font-medium text-sm transition-all group-hover/name:text-primary ${
                                        state.completed ? "line-through text-muted-foreground" : ""
                                      }`}
                                    >
                                      {exercise.name}
                                    </p>
                                    {exerciseGuides[exercise.name] && (
                                      <PlayCircle className="w-3.5 h-3.5 text-muted-foreground group-hover/name:text-primary transition-colors shrink-0" />
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground">{exercise.muscle}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Input
                                  type="text"
                                  placeholder={exercise.sets}
                                  value={state.actualSets}
                                  onChange={(e) =>
                                    updateActualSets(dayIndex, exerciseIndex, e.target.value)
                                  }
                                  className="w-20 h-8 text-xs text-center bg-secondary/50 border-border/50"
                                />
                                <Badge
                                  variant="secondary"
                                  className={`text-xs min-w-[50px] justify-center ${
                                    state.actualSets ? "bg-primary/20 text-primary" : ""
                                  }`}
                                >
                                  {state.actualSets || exercise.sets}
                                </Badge>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <ExerciseGuideModal
        open={!!guideModal}
        onOpenChange={(open) => !open && setGuideModal(null)}
        exerciseName={guideModal?.name || ""}
        guide={guideModal ? exerciseGuides[guideModal.name] : undefined}
        muscle={guideModal?.muscle || ""}
      />
    </section>
  );
}
