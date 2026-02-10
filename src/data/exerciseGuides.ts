import benchPressImg from "@/assets/exercises/bench-press.jpg";
import shoulderPressImg from "@/assets/exercises/shoulder-press.jpg";
import pullUpsImg from "@/assets/exercises/pull-ups.jpg";
import bicepCurlsImg from "@/assets/exercises/bicep-curls.jpg";
import squatsImg from "@/assets/exercises/squats.jpg";
import romanianDeadliftsImg from "@/assets/exercises/romanian-deadlifts.jpg";
import legPressImg from "@/assets/exercises/leg-press.jpg";
import calfRaisesImg from "@/assets/exercises/calf-raises.jpg";
import lightYogaImg from "@/assets/exercises/light-yoga.jpg";
import stretchingImg from "@/assets/exercises/stretching.jpg";
import walkingImg from "@/assets/exercises/walking.jpg";
import inclineBenchImg from "@/assets/exercises/incline-bench.jpg";
import tricepDipsImg from "@/assets/exercises/tricep-dips.jpg";
import lateralRaisesImg from "@/assets/exercises/lateral-raises.jpg";
import cableFlysImg from "@/assets/exercises/cable-flys.jpg";

export interface ExerciseGuide {
  image: string;
  youtubeId: string;
  tips: string[];
  description: string;
}

export const exerciseGuides: Record<string, ExerciseGuide> = {
  "Bench Press": {
    image: benchPressImg,
    youtubeId: "rT7DgCr-3pg",
    description: "The bench press is a compound exercise that primarily targets the chest, shoulders, and triceps.",
    tips: [
      "Keep your feet flat on the floor",
      "Arch your back slightly and retract shoulder blades",
      "Lower the bar to mid-chest level",
      "Push through your palms, not your wrists",
    ],
  },
  "Shoulder Press": {
    image: shoulderPressImg,
    youtubeId: "qEwKCR5JCog",
    description: "The shoulder press targets the deltoids and triceps, building upper body pressing strength.",
    tips: [
      "Keep your core tight throughout the movement",
      "Press the weight directly overhead",
      "Avoid arching your lower back excessively",
      "Lower the dumbbells to ear level",
    ],
  },
  "Pull-ups": {
    image: pullUpsImg,
    youtubeId: "eGo4IYlbE5g",
    description: "Pull-ups are a bodyweight exercise that targets the lats, biceps, and upper back muscles.",
    tips: [
      "Start from a dead hang with arms fully extended",
      "Pull your chin above the bar",
      "Engage your lats by squeezing shoulder blades together",
      "Control the descent — don't just drop",
    ],
  },
  "Bicep Curls": {
    image: bicepCurlsImg,
    youtubeId: "ykJmrZ5v0Oo",
    description: "Bicep curls isolate the biceps brachii for arm size and strength.",
    tips: [
      "Keep your elbows pinned to your sides",
      "Avoid swinging the weight — use strict form",
      "Squeeze at the top of the movement",
      "Control the negative portion",
    ],
  },
  "Squats": {
    image: squatsImg,
    youtubeId: "ultWZbUMPL8",
    description: "The barbell squat is the king of lower body exercises, targeting quads, glutes, and hamstrings.",
    tips: [
      "Keep your chest up and core braced",
      "Push your knees out over your toes",
      "Go at least parallel or below",
      "Drive up through your heels",
    ],
  },
  "Romanian Deadlifts": {
    image: romanianDeadliftsImg,
    youtubeId: "7j-2w4-P14I",
    description: "Romanian deadlifts primarily target the hamstrings and glutes with a hip-hinge pattern.",
    tips: [
      "Keep a slight bend in your knees",
      "Hinge at the hips, pushing them back",
      "Keep the bar close to your body",
      "Feel the stretch in your hamstrings",
    ],
  },
  "Leg Press": {
    image: legPressImg,
    youtubeId: "IZxyjW7MPJQ",
    description: "The leg press is a machine-based compound exercise for building quad and glute strength.",
    tips: [
      "Place feet shoulder-width apart on the platform",
      "Don't lock out your knees at the top",
      "Lower until knees are at 90 degrees",
      "Push through your full foot",
    ],
  },
  "Calf Raises": {
    image: calfRaisesImg,
    youtubeId: "gwLzBJYoWlI",
    description: "Calf raises isolate the gastrocnemius and soleus muscles of the lower leg.",
    tips: [
      "Rise up onto the balls of your feet",
      "Pause at the top for a full squeeze",
      "Lower slowly for a deep stretch",
      "Keep your knees straight but not locked",
    ],
  },
  "Light Yoga": {
    image: lightYogaImg,
    youtubeId: "v7AYKMP6rOE",
    description: "Light yoga improves flexibility, balance, and mental clarity through gentle poses and breathing.",
    tips: [
      "Focus on your breathing throughout",
      "Don't force any stretch beyond comfort",
      "Hold each pose for 15-30 seconds",
      "Stay mindful and present",
    ],
  },
  "Stretching": {
    image: stretchingImg,
    youtubeId: "SsT_go-gSQo",
    description: "Full body stretching helps improve flexibility, reduce soreness, and prevent injuries.",
    tips: [
      "Warm up before deep stretching",
      "Hold each stretch for at least 20 seconds",
      "Breathe deeply and relax into each stretch",
      "Never bounce while stretching",
    ],
  },
  "Walking": {
    image: walkingImg,
    youtubeId: "brFHyOtTwH4",
    description: "Brisk walking is a low-impact cardio exercise that aids recovery and burns calories.",
    tips: [
      "Maintain an upright posture",
      "Swing your arms naturally",
      "Aim for a brisk, purposeful pace",
      "Focus on heel-to-toe foot strikes",
    ],
  },
  "Incline Bench": {
    image: inclineBenchImg,
    youtubeId: "SrqOu55lrYU",
    description: "The incline bench press targets the upper portion of the chest and front deltoids.",
    tips: [
      "Set the bench to 30-45 degree angle",
      "Lower the bar to upper chest",
      "Keep your shoulder blades retracted",
      "Don't flare your elbows too wide",
    ],
  },
  "Tricep Dips": {
    image: tricepDipsImg,
    youtubeId: "0326dy_-CzM",
    description: "Tricep dips are a bodyweight exercise that builds tricep and chest strength.",
    tips: [
      "Keep your body upright for tricep focus",
      "Lower until elbows are at 90 degrees",
      "Don't shrug your shoulders up",
      "Push through your palms to lock out",
    ],
  },
  "Lateral Raises": {
    image: lateralRaisesImg,
    youtubeId: "3VcKaXpzqRo",
    description: "Lateral raises isolate the medial deltoids for wider-looking shoulders.",
    tips: [
      "Use lighter weight with strict form",
      "Raise arms to shoulder height",
      "Lead with your elbows, not your hands",
      "Control the descent slowly",
    ],
  },
  "Cable Flys": {
    image: cableFlysImg,
    youtubeId: "Iwe6AmxVf7o",
    description: "Cable flys provide constant tension on the chest muscles through the full range of motion.",
    tips: [
      "Keep a slight bend in your elbows",
      "Bring your hands together in front of your chest",
      "Squeeze your chest at the peak contraction",
      "Use a controlled, smooth motion",
    ],
  },
};
