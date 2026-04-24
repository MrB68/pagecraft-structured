import { useDraggable } from "@dnd-kit/core";
import { SECTION_MAP, SECTION_TYPES } from "@/core/sectionRegistry";
import { SectionType } from "@/types";
import { GripVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaletteItemProps {
  type: SectionType;
  onAdd: (type: SectionType) => void;
}

function PaletteItem({ type, onAdd }: PaletteItemProps) {
  const meta = SECTION_MAP[type];
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette:${type}`,
    data: { source: "palette", type },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`group flex items-center justify-between gap-2 rounded-md border border-border bg-background px-2.5 py-2 text-sm cursor-grab active:cursor-grabbing transition-shadow hover:shadow-elev-sm ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <GripVertical className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        <span className="truncate">{meta.label}</span>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="h-6 w-6 opacity-0 group-hover:opacity-100"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onAdd(type);
        }}
      >
        <Plus className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}

export default function SectionPalette({
  onAdd,
  allowedTypes,
}: {
  onAdd: (type: SectionType) => void;
  allowedTypes?: SectionType[];
}) {
  const types = allowedTypes ?? SECTION_TYPES;
  return (
    <div className="space-y-1.5">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-1 mb-1">
        Drag to add
      </div>
      {types.map((t) => (
        <PaletteItem key={t} type={t} onAdd={onAdd} />
      ))}
    </div>
  );
}
