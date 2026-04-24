import { Section } from "@/types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const PRESETS = [
  { value: "fade", label: "Fade" },
  { value: "slide-up", label: "Slide up" },
  { value: "slide-down", label: "Slide down" },
  { value: "zoom", label: "Zoom" },
];

interface Props {
  section: Section;
  onChange: (props: Record<string, any>) => void;
}

export default function AnimationControls({ section, onChange }: Props) {
  const props = section.props ?? {};
  const animate = !!props.animate;
  const preset = props.animationPreset ?? "fade";
  const duration = props.animationDuration ?? 0.8;

  const update = (patch: Record<string, any>) => onChange({ ...props, ...patch });

  return (
    <div className="rounded-lg border border-border bg-surface p-3 space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Animations</Label>
        <Switch
          checked={animate}
          onCheckedChange={(v) => update({ animate: v })}
        />
      </div>
      {animate && (
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label className="text-[11px] text-muted-foreground">Preset</Label>
            <Select
              value={preset}
              onValueChange={(v) => update({ animationPreset: v })}
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PRESETS.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-[11px] text-muted-foreground">
              Duration (s)
            </Label>
            <Input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={duration}
              onChange={(e) =>
                update({ animationDuration: parseFloat(e.target.value) || 0 })
              }
              className="h-8 text-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
}
