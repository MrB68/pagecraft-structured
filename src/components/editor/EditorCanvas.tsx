import { useEffect, useRef } from "react";
import { Section } from "@/types";
import { SECTION_MAP, FieldDef } from "@/core/sectionRegistry";
import { useEditorStore } from "@/store/editorStore";
import {
  DeviceContext,
  flattenResponsiveProps,
  isVisibleOnDevice,
} from "@/core/responsive";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  Copy,
  Pencil,
  Trash2,
} from "lucide-react";

interface SectionFrameProps {
  section: Section;
  children: React.ReactNode;
  onSelect: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
  onInlineEdit: (fieldKey: string, value: string) => void;
}

const TEXT_FIELD_TYPES = new Set<FieldDef["type"]>(["text", "textarea"]);

function SectionFrame({
  section,
  children,
  onSelect,
  onDuplicate,
  onDelete,
  onMove,
  onInlineEdit,
}: SectionFrameProps) {
  const { selectedSectionId, hoveredSectionId, setHovered, inlineEditingKey, setInlineEditing } =
    useEditorStore();
  const selected = selectedSectionId === section.id;
  const hovered = hoveredSectionId === section.id;
  const ref = useRef<HTMLDivElement>(null);

  // Inline editing wiring: find any [data-edit-key] elements and make them editable when selected.
  useEffect(() => {
    if (!ref.current || !selected) return;
    const meta = SECTION_MAP[section.type];
    if (!meta) return;

    const editableKeys = new Set(
      meta.fields
        .filter((f) => TEXT_FIELD_TYPES.has(f.type))
        .map((f) => f.key)
    );

    const nodes = ref.current.querySelectorAll<HTMLElement>("[data-edit-key]");
    const cleanups: (() => void)[] = [];

    nodes.forEach((node) => {
      const key = node.dataset.editKey ?? "";
      if (!editableKeys.has(key)) return;

      const editingId = `${section.id}:${key}`;
      const isEditing = inlineEditingKey === editingId;

      node.style.cursor = "text";
      node.style.outline = isEditing ? "1px dashed hsl(var(--primary))" : "";
      node.style.outlineOffset = "2px";
      node.contentEditable = isEditing ? "true" : "false";

      const handleDbl = (e: Event) => {
        e.stopPropagation();
        setInlineEditing(editingId);
        setTimeout(() => {
          node.focus();
          const range = document.createRange();
          range.selectNodeContents(node);
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
        }, 0);
      };
      const handleBlur = () => {
        const text = node.innerText;
        onInlineEdit(key, text);
        setInlineEditing(null);
      };
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
        if (e.key === "Escape") {
          (e.currentTarget as HTMLElement).blur();
        }
      };

      node.addEventListener("dblclick", handleDbl);
      node.addEventListener("blur", handleBlur);
      node.addEventListener("keydown", handleKey);
      cleanups.push(() => {
        node.removeEventListener("dblclick", handleDbl);
        node.removeEventListener("blur", handleBlur);
        node.removeEventListener("keydown", handleKey);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [selected, inlineEditingKey, section.id, section.type, onInlineEdit, setInlineEditing]);

  return (
    <div
      ref={ref}
      className="relative group/section"
      onMouseEnter={() => setHovered(section.id)}
      onMouseLeave={() => {
        if (useEditorStore.getState().hoveredSectionId === section.id) {
          setHovered(null);
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <div className="relative">{children}</div>

      {/* outline */}
      <div
        className={`pointer-events-none absolute inset-0 transition-colors ${
          selected
            ? "ring-2 ring-primary ring-inset"
            : hovered
              ? "ring-2 ring-primary/40 ring-inset"
              : ""
        }`}
      />

      {/* toolbar */}
      {(selected || hovered) && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-0.5 bg-background/95 backdrop-blur border border-border rounded-md shadow-elev-md p-0.5">
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onMove(-1);
            }}
            title="Move up"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onMove(1);
            }}
            title="Move down"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
            title="Duplicate"
          >
            <Copy className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            title="Edit"
          >
            <Pencil className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 text-destructive hover:text-destructive"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Delete"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      )}

      {selected && (
        <div className="absolute -top-3 left-2 z-10 px-1.5 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
          {SECTION_MAP[section.type]?.label}
        </div>
      )}
    </div>
  );
}

interface CanvasProps {
  sections: Section[];
  onSelect: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onMove: (id: string, dir: -1 | 1) => void;
  onInlineEdit: (id: string, fieldKey: string, value: string) => void;
}

export default function EditorCanvas({
  sections,
  onSelect,
  onDuplicate,
  onDelete,
  onMove,
  onInlineEdit,
}: CanvasProps) {
  const device = useEditorStore((s) => s.device);
  return (
    <DeviceContext.Provider value={device}>
      <div className="w-full">
        {sections.map((section) => {
          const meta = SECTION_MAP[section.type];
          if (!meta) {
            return (
              <div
                key={section.id}
                className="p-6 bg-destructive/10 text-destructive text-sm"
              >
                Unknown section type: {section.type}
              </div>
            );
          }
          const Component = meta.component;
          const visible = isVisibleOnDevice((section.props as any)?.visibility, device);
          const flatProps = flattenResponsiveProps(section.props, device);
          return (
            <SectionFrame
              key={section.id}
              section={section}
              onSelect={() => onSelect(section.id)}
              onDuplicate={() => onDuplicate(section.id)}
              onDelete={() => onDelete(section.id)}
              onMove={(dir) => onMove(section.id, dir)}
              onInlineEdit={(key, value) => onInlineEdit(section.id, key, value)}
            >
              {visible ? (
                <Component {...flatProps} />
              ) : (
                <div className="p-6 bg-muted/40 border-y border-dashed border-border text-xs text-muted-foreground text-center">
                  Hidden on {device}
                </div>
              )}
            </SectionFrame>
          );
        })}
        {sections.length === 0 && (
          <div className="p-20 text-center text-muted-foreground">
            <p className="text-sm">This page has no sections yet.</p>
            <p className="text-xs mt-1">Drag a section from the left panel to get started.</p>
          </div>
        )}
      </div>
    </DeviceContext.Provider>
  );
}
