export interface Exercise {
  name: string;
  sets: string;
  muscle: string;
}

export interface WorkoutDay {
  day: string;
  name: string;
  duration: string;
  calories: string;
  exercises: Exercise[];
}

export interface Meal {
  name: string;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface MealTime {
  time: string;
  icon: "coffee" | "sun" | "moon" | "utensils";
  timeRange: string;
  meals: Meal[];
}

export interface DailyMacros {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface GoalPlan {
  workouts: WorkoutDay[];
  meals: MealTime[];
  macros: DailyMacros;
}

export const goalPlans: Record<string, GoalPlan> = {
  "weight-loss": {
    workouts: [
      {
        day: "Monday",
        name: "HIIT Cardio Burn",
        duration: "35 min",
        calories: "450",
        exercises: [
          { name: "Walking", sets: "5 min", muscle: "Cardio" },
          { name: "Squats", sets: "4x15", muscle: "Quads" },
          { name: "Lateral Raises", sets: "3x12", muscle: "Shoulders" },
          { name: "Stretching", sets: "5 min", muscle: "Flexibility" },
        ],
      },
      {
        day: "Tuesday",
        name: "Full Body Circuit",
        duration: "40 min",
        calories: "500",
        exercises: [
          { name: "Bench Press", sets: "3x12", muscle: "Chest" },
          { name: "Squats", sets: "3x15", muscle: "Quads" },
          { name: "Pull-ups", sets: "3x10", muscle: "Back" },
          { name: "Calf Raises", sets: "3x20", muscle: "Calves" },
        ],
      },
      {
        day: "Wednesday",
        name: "Active Recovery",
        duration: "30 min",
        calories: "200",
        exercises: [
          { name: "Light Yoga", sets: "15 min", muscle: "Full Body" },
          { name: "Stretching", sets: "10 min", muscle: "Flexibility" },
          { name: "Walking", sets: "5 min", muscle: "Cardio" },
        ],
      },
      {
        day: "Thursday",
        name: "Cardio & Core",
        duration: "40 min",
        calories: "420",
        exercises: [
          { name: "Walking", sets: "10 min", muscle: "Cardio" },
          { name: "Leg Press", sets: "3x15", muscle: "Legs" },
          { name: "Cable Flys", sets: "3x12", muscle: "Chest" },
          { name: "Tricep Dips", sets: "3x15", muscle: "Triceps" },
        ],
      },
    ],
    meals: [
      {
        time: "Breakfast",
        icon: "coffee",
        timeRange: "7:00 AM",
        meals: [
          { name: "Egg White Omelette", calories: 220, protein: "28g", carbs: "5g", fat: "8g" },
          { name: "Green Detox Smoothie", calories: 150, protein: "5g", carbs: "28g", fat: "3g" },
        ],
      },
      {
        time: "Lunch",
        icon: "sun",
        timeRange: "12:30 PM",
        meals: [
          { name: "Grilled Chicken Salad", calories: 350, protein: "38g", carbs: "15g", fat: "14g" },
          { name: "Lentil Soup", calories: 200, protein: "14g", carbs: "30g", fat: "4g" },
        ],
      },
      {
        time: "Dinner",
        icon: "moon",
        timeRange: "6:30 PM",
        meals: [
          { name: "Baked Fish with Veggies", calories: 380, protein: "40g", carbs: "12g", fat: "18g" },
          { name: "Cauliflower Rice", calories: 80, protein: "3g", carbs: "10g", fat: "2g" },
        ],
      },
      {
        time: "Snacks",
        icon: "utensils",
        timeRange: "Anytime",
        meals: [
          { name: "Cucumber & Hummus", calories: 120, protein: "5g", carbs: "12g", fat: "6g" },
          { name: "Apple Slices", calories: 80, protein: "1g", carbs: "20g", fat: "0g" },
        ],
      },
    ],
    macros: { calories: 1580, protein: "134g", carbs: "132g", fat: "55g" },
  },

  "muscle-gain": {
    workouts: [
      {
        day: "Monday",
        name: "Upper Body Power",
        duration: "55 min",
        calories: "380",
        exercises: [
          { name: "Bench Press", sets: "5x5", muscle: "Chest" },
          { name: "Shoulder Press", sets: "4x8", muscle: "Shoulders" },
          { name: "Pull-ups", sets: "4x8", muscle: "Back" },
          { name: "Bicep Curls", sets: "4x10", muscle: "Arms" },
        ],
      },
      {
        day: "Tuesday",
        name: "Leg Day Heavy",
        duration: "60 min",
        calories: "500",
        exercises: [
          { name: "Squats", sets: "5x5", muscle: "Quads" },
          { name: "Romanian Deadlifts", sets: "4x6", muscle: "Hamstrings" },
          { name: "Leg Press", sets: "4x10", muscle: "Legs" },
          { name: "Calf Raises", sets: "5x12", muscle: "Calves" },
        ],
      },
      {
        day: "Wednesday",
        name: "Active Recovery",
        duration: "30 min",
        calories: "150",
        exercises: [
          { name: "Light Yoga", sets: "15 min", muscle: "Full Body" },
          { name: "Stretching", sets: "10 min", muscle: "Flexibility" },
          { name: "Walking", sets: "5 min", muscle: "Cardio" },
        ],
      },
      {
        day: "Thursday",
        name: "Push Hypertrophy",
        duration: "50 min",
        calories: "400",
        exercises: [
          { name: "Incline Bench", sets: "4x10", muscle: "Upper Chest" },
          { name: "Tricep Dips", sets: "4x10", muscle: "Triceps" },
          { name: "Lateral Raises", sets: "4x15", muscle: "Shoulders" },
          { name: "Cable Flys", sets: "4x12", muscle: "Chest" },
        ],
      },
    ],
    meals: [
      {
        time: "Breakfast",
        icon: "coffee",
        timeRange: "7:00 AM",
        meals: [
          { name: "Protein Pancakes", calories: 500, protein: "40g", carbs: "55g", fat: "12g" },
          { name: "Whole Milk + Banana", calories: 280, protein: "12g", carbs: "40g", fat: "10g" },
        ],
      },
      {
        time: "Lunch",
        icon: "sun",
        timeRange: "12:30 PM",
        meals: [
          { name: "Steak & Sweet Potato", calories: 650, protein: "50g", carbs: "45g", fat: "28g" },
          { name: "Brown Rice & Chicken", calories: 550, protein: "42g", carbs: "60g", fat: "12g" },
        ],
      },
      {
        time: "Dinner",
        icon: "moon",
        timeRange: "7:30 PM",
        meals: [
          { name: "Salmon with Pasta", calories: 620, protein: "42g", carbs: "50g", fat: "26g" },
          { name: "Mixed Vegetables", calories: 120, protein: "5g", carbs: "18g", fat: "3g" },
        ],
      },
      {
        time: "Snacks",
        icon: "utensils",
        timeRange: "Anytime",
        meals: [
          { name: "Mass Gainer Shake", calories: 450, protein: "35g", carbs: "60g", fat: "8g" },
          { name: "Trail Mix", calories: 300, protein: "10g", carbs: "30g", fat: "18g" },
        ],
      },
    ],
    macros: { calories: 3470, protein: "236g", carbs: "358g", fat: "117g" },
  },

  endurance: {
    workouts: [
      {
        day: "Monday",
        name: "Tempo Run Prep",
        duration: "45 min",
        calories: "380",
        exercises: [
          { name: "Walking", sets: "10 min", muscle: "Cardio" },
          { name: "Squats", sets: "3x15", muscle: "Quads" },
          { name: "Calf Raises", sets: "4x20", muscle: "Calves" },
          { name: "Stretching", sets: "10 min", muscle: "Flexibility" },
        ],
      },
      {
        day: "Tuesday",
        name: "Strength Endurance",
        duration: "50 min",
        calories: "350",
        exercises: [
          { name: "Bench Press", sets: "3x15", muscle: "Chest" },
          { name: "Pull-ups", sets: "3x12", muscle: "Back" },
          { name: "Shoulder Press", sets: "3x15", muscle: "Shoulders" },
          { name: "Leg Press", sets: "3x20", muscle: "Legs" },
        ],
      },
      {
        day: "Wednesday",
        name: "Flexibility & Mobility",
        duration: "40 min",
        calories: "180",
        exercises: [
          { name: "Light Yoga", sets: "20 min", muscle: "Full Body" },
          { name: "Stretching", sets: "15 min", muscle: "Flexibility" },
          { name: "Walking", sets: "5 min", muscle: "Cardio" },
        ],
      },
      {
        day: "Thursday",
        name: "Circuit Training",
        duration: "45 min",
        calories: "420",
        exercises: [
          { name: "Squats", sets: "3x20", muscle: "Quads" },
          { name: "Tricep Dips", sets: "3x15", muscle: "Triceps" },
          { name: "Bicep Curls", sets: "3x15", muscle: "Arms" },
          { name: "Romanian Deadlifts", sets: "3x12", muscle: "Hamstrings" },
        ],
      },
    ],
    meals: [
      {
        time: "Breakfast",
        icon: "coffee",
        timeRange: "6:30 AM",
        meals: [
          { name: "Oatmeal with Berries", calories: 380, protein: "12g", carbs: "65g", fat: "8g" },
          { name: "Orange Juice & Toast", calories: 250, protein: "6g", carbs: "50g", fat: "3g" },
        ],
      },
      {
        time: "Lunch",
        icon: "sun",
        timeRange: "12:00 PM",
        meals: [
          { name: "Pasta with Chicken", calories: 550, protein: "35g", carbs: "70g", fat: "12g" },
          { name: "Mixed Grain Salad", calories: 350, protein: "14g", carbs: "55g", fat: "8g" },
        ],
      },
      {
        time: "Dinner",
        icon: "moon",
        timeRange: "7:00 PM",
        meals: [
          { name: "Turkey & Rice Bowl", calories: 500, protein: "38g", carbs: "60g", fat: "12g" },
          { name: "Steamed Vegetables", calories: 100, protein: "4g", carbs: "15g", fat: "2g" },
        ],
      },
      {
        time: "Snacks",
        icon: "utensils",
        timeRange: "Anytime",
        meals: [
          { name: "Energy Bars", calories: 250, protein: "10g", carbs: "40g", fat: "6g" },
          { name: "Banana & Peanut Butter", calories: 280, protein: "8g", carbs: "35g", fat: "14g" },
        ],
      },
    ],
    macros: { calories: 2660, protein: "127g", carbs: "390g", fat: "65g" },
  },

  maintenance: {
    workouts: [
      {
        day: "Monday",
        name: "Upper Body Power",
        duration: "45 min",
        calories: "320",
        exercises: [
          { name: "Bench Press", sets: "4x8", muscle: "Chest" },
          { name: "Shoulder Press", sets: "3x10", muscle: "Shoulders" },
          { name: "Pull-ups", sets: "4x8", muscle: "Back" },
          { name: "Bicep Curls", sets: "3x12", muscle: "Arms" },
        ],
      },
      {
        day: "Tuesday",
        name: "Lower Body Strength",
        duration: "50 min",
        calories: "400",
        exercises: [
          { name: "Squats", sets: "4x10", muscle: "Quads" },
          { name: "Romanian Deadlifts", sets: "4x8", muscle: "Hamstrings" },
          { name: "Leg Press", sets: "3x12", muscle: "Legs" },
          { name: "Calf Raises", sets: "4x15", muscle: "Calves" },
        ],
      },
      {
        day: "Wednesday",
        name: "Active Recovery",
        duration: "30 min",
        calories: "150",
        exercises: [
          { name: "Light Yoga", sets: "15 min", muscle: "Full Body" },
          { name: "Stretching", sets: "10 min", muscle: "Flexibility" },
          { name: "Walking", sets: "5 min", muscle: "Cardio" },
        ],
      },
      {
        day: "Thursday",
        name: "Push Day",
        duration: "45 min",
        calories: "350",
        exercises: [
          { name: "Incline Bench", sets: "4x8", muscle: "Upper Chest" },
          { name: "Tricep Dips", sets: "3x12", muscle: "Triceps" },
          { name: "Lateral Raises", sets: "4x12", muscle: "Shoulders" },
          { name: "Cable Flys", sets: "3x15", muscle: "Chest" },
        ],
      },
    ],
    meals: [
      {
        time: "Breakfast",
        icon: "coffee",
        timeRange: "7:00 AM",
        meals: [
          { name: "Greek Yogurt Bowl", calories: 350, protein: "25g", carbs: "35g", fat: "12g" },
          { name: "Green Smoothie", calories: 180, protein: "8g", carbs: "30g", fat: "4g" },
        ],
      },
      {
        time: "Lunch",
        icon: "sun",
        timeRange: "12:30 PM",
        meals: [
          { name: "Grilled Chicken Salad", calories: 450, protein: "40g", carbs: "25g", fat: "22g" },
          { name: "Quinoa Bowl", calories: 380, protein: "18g", carbs: "55g", fat: "10g" },
        ],
      },
      {
        time: "Dinner",
        icon: "moon",
        timeRange: "7:00 PM",
        meals: [
          { name: "Salmon with Vegetables", calories: 520, protein: "42g", carbs: "20g", fat: "28g" },
          { name: "Brown Rice", calories: 150, protein: "4g", carbs: "32g", fat: "2g" },
        ],
      },
      {
        time: "Snacks",
        icon: "utensils",
        timeRange: "Anytime",
        meals: [
          { name: "Mixed Nuts", calories: 200, protein: "6g", carbs: "8g", fat: "18g" },
          { name: "Protein Bar", calories: 220, protein: "20g", carbs: "24g", fat: "8g" },
        ],
      },
    ],
    macros: { calories: 2450, protein: "163g", carbs: "229g", fat: "104g" },
  },
};
