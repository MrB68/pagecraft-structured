import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Section } from "@/types";
import { SECTION_MAP } from "@/core/sectionRegistry";
import { Button } from "@/components/ui/button";
import { Copy, GripVertical, Trash2 } from "lucide-react";

interface Props {
  section: Section;
  index: number;
  active: boolean;
  onSelect: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export default function SortableSectionItem({
  section,
  index,
  active,
  onSelect,
  onDuplicate,
  onDelete,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: section.id, data: { source: "list" } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as React.CSSProperties;

  const meta = SECTION_MAP[section.type];

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group rounded-md border text-sm flex items-stretch transition-colors ${
        active
          ? "border-primary bg-accent text-accent-foreground"
          : "border-border bg-background hover:bg-muted"
      } ${isDragging ? "shadow-elev-md opacity-80" : ""}`}
    >
      <button
        type="button"
        className="flex items-center px-1.5 cursor-grab active:cursor-grabbing text-muted-foreground touch-none"
        {...attributes}
        {...listeners}
        aria-label="Drag to reorder"
      >
        <GripVertical className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={onSelect}
        className="flex-1 text-left py-2 pr-1 min-w-0"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-medium">{meta?.label ?? section.type}</span>
          <span className="text-[10px] text-muted-foreground">{index + 1}</span>
        </div>
      </button>
      <div className="flex items-center pr-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6"
          onClick={(e) => {
            e.stopPropagation();
            onDuplicate();
          }}
          title="Duplicate"
        >
          <Copy className="w-3 h-3" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6 text-destructive hover:text-destructive"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          title="Delete"
        >
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
