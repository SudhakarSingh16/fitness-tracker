import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExerciseGuide } from "@/data/exerciseGuides";
import { Play, Lightbulb } from "lucide-react";

interface ExerciseGuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  exerciseName: string;
  guide: ExerciseGuide | undefined;
  muscle: string;
}

export function ExerciseGuideModal({
  open,
  onOpenChange,
  exerciseName,
  guide,
  muscle,
}: ExerciseGuideModalProps) {
  if (!guide) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-secondary border-border/30 text-secondary-foreground">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-primary border-primary/30">
              {muscle}
            </Badge>
          </div>
          <DialogTitle className="text-2xl">{exerciseName}</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
        </DialogHeader>

        {/* Exercise Form Image */}
        <div className="rounded-xl overflow-hidden border border-border/50">
          <AspectRatio ratio={1}>
            <img
              src={guide.image}
              alt={`${exerciseName} form guide`}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>

        {/* Video Guide */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Play className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Video Tutorial</h3>
          </div>
          <div className="rounded-xl overflow-hidden border border-border/50">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${guide.youtubeId}`}
                title={`${exerciseName} tutorial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>

        {/* Form Tips */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Form Tips</h3>
          </div>
          <ul className="space-y-2">
            {guide.tips.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
