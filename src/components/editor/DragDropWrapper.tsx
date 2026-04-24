import { ReactNode, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { Section, SectionType } from "@/types";
import { SECTION_MAP } from "@/core/sectionRegistry";
import SortableSectionItem from "./SortableSectionItem";

interface Props {
  sections: Section[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onAddFromPalette: (type: SectionType, atIndex: number) => void;
  paletteSlot: ReactNode;
}

export default function DragDropWrapper({
  sections,
  selectedId,
  onSelect,
  onReorder,
  onDuplicate,
  onDelete,
  onAddFromPalette,
  paletteSlot,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activePaletteType, setActivePaletteType] = useState<SectionType | null>(null);

  const ids = sections.map((s) => s.id);
  const activeSection = sections.find((s) => s.id === activeId);

  const handleStart = (e: DragStartEvent) => {
    const data = e.active.data.current as any;
    if (data?.source === "palette") {
      setActivePaletteType(data.type);
    } else {
      setActiveId(String(e.active.id));
    }
  };

  const handleEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    const data = active.data.current as any;
    setActiveId(null);
    setActivePaletteType(null);

    if (!over) return;

    if (data?.source === "palette") {
      let targetIndex = sections.length;
      if (over.id !== "drop-zone-end") {
        const overIdx = sections.findIndex((s) => s.id === over.id);
        if (overIdx >= 0) targetIndex = overIdx;
      }
      onAddFromPalette(data.type as SectionType, targetIndex);
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      if (oldIndex >= 0 && newIndex >= 0) {
        onReorder(oldIndex, newIndex);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragStart={handleStart}
      onDragEnd={handleEnd}
      onDragCancel={() => {
        setActiveId(null);
        setActivePaletteType(null);
      }}
    >
      <div className="space-y-1.5">
        <SortableContext items={ids} strategy={verticalListSortingStrategy}>
          {sections.map((s, i) => (
            <SortableSectionItem
              key={s.id}
              section={s}
              index={i}
              active={s.id === selectedId}
              onSelect={() => onSelect(s.id)}
              onDuplicate={() => onDuplicate(s.id)}
              onDelete={() => onDelete(s.id)}
            />
          ))}
        </SortableContext>
        {sections.length === 0 && (
          <div className="text-xs text-muted-foreground italic p-3 border border-dashed border-border rounded-md text-center">
            Drag a section here
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border">{paletteSlot}</div>

      <DragOverlay dropAnimation={{ duration: 180 }}>
        {activeSection && (
          <div className="rounded-md border border-primary bg-background px-3 py-2 text-sm shadow-elev-md">
            {SECTION_MAP[activeSection.type]?.label ?? activeSection.type}
          </div>
        )}
        {activePaletteType && (
          <div className="rounded-md border border-primary bg-background px-3 py-2 text-sm shadow-elev-md">
            + {SECTION_MAP[activePaletteType]?.label ?? activePaletteType}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}
