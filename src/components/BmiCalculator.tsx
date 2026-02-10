import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator, Activity, Flame, Heart, AlertTriangle } from "lucide-react";

interface BmiResult {
  bmi: number;
  category: string;
  color: string;
  icon: typeof Heart;
  calories: { sedentary: number; moderate: number; active: number };
  tip: string;
}

function calculateBmi(heightCm: number, weightKg: number): BmiResult | null {
  if (heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  // Mifflin-St Jeor base (average for demo — assumes age ~25, male)
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * 25 + 5;
  const sedentary = Math.round(bmr * 1.2);
  const moderate = Math.round(bmr * 1.55);
  const active = Math.round(bmr * 1.725);

  if (bmi < 18.5) {
    return {
      bmi,
      category: "Underweight",
      color: "text-info",
      icon: AlertTriangle,
      calories: { sedentary: sedentary + 300, moderate: moderate + 300, active: active + 300 },
      tip: "Focus on calorie-dense, nutrient-rich foods to reach a healthy weight.",
    };
  } else if (bmi < 25) {
    return {
      bmi,
      category: "Healthy",
      color: "text-success",
      icon: Heart,
      calories: { sedentary, moderate, active },
      tip: "Great shape! Maintain your current lifestyle with balanced nutrition.",
    };
  } else if (bmi < 30) {
    return {
      bmi,
      category: "Overweight",
      color: "text-warning",
      icon: Activity,
      calories: { sedentary: sedentary - 300, moderate: moderate - 200, active: active - 100 },
      tip: "A slight calorie deficit with regular exercise will help you reach your goal.",
    };
  } else {
    return {
      bmi,
      category: "Obese",
      color: "text-destructive",
      icon: AlertTriangle,
      calories: { sedentary: sedentary - 500, moderate: moderate - 400, active: active - 300 },
      tip: "Consult a healthcare professional for a personalized plan. Start with low-impact activity.",
    };
  }
}

const MAX_HEIGHT = 300;
const MAX_WEIGHT = 500;

export function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BmiResult | null>(null);
  const [errors, setErrors] = useState<{ height?: string; weight?: string }>({});

  const validate = (): boolean => {
    const newErrors: { height?: string; weight?: string } = {};
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!height || isNaN(h) || h <= 0) {
      newErrors.height = "Enter a valid height";
    } else if (h > MAX_HEIGHT) {
      newErrors.height = `Max ${MAX_HEIGHT} cm`;
    }

    if (!weight || isNaN(w) || w <= 0) {
      newErrors.weight = "Enter a valid weight";
    } else if (w > MAX_WEIGHT) {
      newErrors.weight = `Max ${MAX_WEIGHT} kg`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (!validate()) return;
    const res = calculateBmi(parseFloat(height), parseFloat(weight));
    setResult(res);
  };

  const bmiPercentage = useMemo(() => {
    if (!result) return 0;
    // Map BMI 10–40 to 0–100%
    return Math.min(100, Math.max(0, ((result.bmi - 10) / 30) * 100));
  }, [result]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Calculator className="w-3 h-3 mr-1" />
            BMI Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Know Your <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter your height and weight to calculate your BMI and get personalized daily calorie recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card variant="glass" className="p-6 md:p-8">
            <CardContent className="p-0">
              {/* Input Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-sm font-medium">
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g. 175"
                    min={1}
                    max={MAX_HEIGHT}
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                      if (errors.height) setErrors((p) => ({ ...p, height: undefined }));
                    }}
                    className={`bg-secondary/50 border-border/50 text-lg ${
                      errors.height ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                  />
                  {errors.height && (
                    <p className="text-xs text-destructive">{errors.height}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm font-medium">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g. 70"
                    min={1}
                    max={MAX_WEIGHT}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                      if (errors.weight) setErrors((p) => ({ ...p, weight: undefined }));
                    }}
                    className={`bg-secondary/50 border-border/50 text-lg ${
                      errors.weight ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                  />
                  {errors.weight && (
                    <p className="text-xs text-destructive">{errors.weight}</p>
                  )}
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate BMI
              </Button>

              {/* Results */}
              <AnimatePresence mode="wait">
                {result && (
                  <motion.div
                    key={result.bmi.toFixed(1)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 space-y-6"
                  >
                    {/* BMI Score */}
                    <div className="text-center">
                      <p className="text-6xl font-bold tracking-tight">
                        {result.bmi.toFixed(1)}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <result.icon className={`w-5 h-5 ${result.color}`} />
                        <p className={`text-lg font-semibold ${result.color}`}>
                          {result.category}
                        </p>
                      </div>
                    </div>

                    {/* BMI Scale Bar */}
                    <div className="space-y-2">
                      <div className="relative w-full h-3 rounded-full overflow-hidden">
                        <div className="absolute inset-0 flex">
                          <div className="flex-1 bg-info/60 rounded-l-full" />
                          <div className="flex-1 bg-success/60" />
                          <div className="flex-1 bg-warning/60" />
                          <div className="flex-1 bg-destructive/60 rounded-r-full" />
                        </div>
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-foreground border-2 border-background shadow-lg"
                          initial={{ left: "0%" }}
                          animate={{ left: `calc(${bmiPercentage}% - 8px)` }}
                          transition={{ duration: 0.6, type: "spring" }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-muted-foreground px-1">
                        <span>Underweight</span>
                        <span>Healthy</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                      </div>
                    </div>

                    {/* Tip */}
                    <p className="text-sm text-muted-foreground text-center bg-secondary/50 rounded-lg p-3">
                      💡 {result.tip}
                    </p>

                    {/* Calorie Recommendations */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-center">
                        Daily Calorie Recommendations
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {([
                          { label: "Sedentary", desc: "Little to no exercise", value: result.calories.sedentary },
                          { label: "Moderate", desc: "3–5 days/week", value: result.calories.moderate },
                          { label: "Active", desc: "6–7 days/week", value: result.calories.active },
                        ] as const).map((level) => (
                          <Card key={level.label} variant="glass" className="text-center p-4">
                            <Flame className="w-5 h-5 mx-auto mb-2 text-destructive" />
                            <p className="text-2xl font-bold text-primary">
                              {level.value.toLocaleString()}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">cal / day</p>
                            <p className="text-sm font-medium mt-2">{level.label}</p>
                            <p className="text-xs text-muted-foreground">{level.desc}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
