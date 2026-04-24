import { useRef } from "react";
import { FieldDef } from "@/core/sectionRegistry";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  Image as ImageIcon,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface PropsFormProps {
  fields: FieldDef[];
  values: Record<string, any>;
  onChange: (next: Record<string, any>) => void;
}

function ImageField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") onChange(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative rounded-md border border-border bg-surface overflow-hidden group">
          <img src={value} alt="" className="w-full h-32 object-cover" />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-1.5 right-1.5 h-6 w-6 opacity-0 group-hover:opacity-100"
            onClick={() => onChange("")}
          >
            <X className="w-3.5 h-3.5" />
          </Button>
        </div>
      ) : (
        <div
          className="rounded-md border border-dashed border-border bg-surface h-24 flex flex-col items-center justify-center text-xs text-muted-foreground gap-1 cursor-pointer hover:border-primary transition-colors"
          onClick={() => fileRef.current?.click()}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Drop or upload image</span>
        </div>
      )}
      <div className="flex gap-1.5">
        <Input
          type="url"
          value={value?.startsWith("data:") ? "" : value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "Paste image URL"}
          className="flex-1 h-8 text-xs"
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 px-2"
          onClick={() => fileRef.current?.click()}
        >
          <Upload className="w-3.5 h-3.5" />
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
}

function ScalarField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: any;
  onChange: (v: any) => void;
}) {
  if (field.type === "textarea") {
    return (
      <Textarea
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={3}
      />
    );
  }
  if (field.type === "image") {
    return (
      <ImageField
        value={value ?? ""}
        onChange={onChange}
        placeholder={field.placeholder}
      />
    );
  }
  if (field.type === "boolean") {
    return (
      <div className="flex items-center gap-2 h-10">
        <Switch checked={!!value} onCheckedChange={onChange} />
        <span className="text-xs text-muted-foreground">
          {value ? "On" : "Off"}
        </span>
      </div>
    );
  }
  if (field.type === "select") {
    return (
      <Select value={value ?? ""} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={field.placeholder ?? "Select…"} />
        </SelectTrigger>
        <SelectContent>
          {field.options?.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
  return (
    <Input
      type={field.type === "url" ? "url" : "text"}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholder}
    />
  );
}

interface ListItemProps {
  id: string;
  index: number;
  item: Record<string, any>;
  itemFields: FieldDef[];
  onUpdate: (next: Record<string, any>) => void;
  onRemove: () => void;
  onMove: (dir: -1 | 1) => void;
}

function SortableListItem({
  id,
  index,
  item,
  itemFields,
  onUpdate,
  onRemove,
  onMove,
}: ListItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as React.CSSProperties;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-lg border border-border bg-surface p-3 space-y-2 ${
        isDragging ? "shadow-elev-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="text-muted-foreground touch-none cursor-grab active:cursor-grabbing"
            {...attributes}
            {...listeners}
            aria-label="Drag to reorder"
          >
            <GripVertical className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs text-muted-foreground font-medium">
            Item {index + 1}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6"
            onClick={() => onMove(-1)}
          >
            <ChevronUp className="w-3 h-3" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6"
            onClick={() => onMove(1)}
          >
            <ChevronDown className="w-3 h-3" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 text-destructive hover:text-destructive"
            onClick={onRemove}
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>
      {itemFields.map((sub) => (
        <FieldRow
          key={sub.key}
          field={sub}
          value={item[sub.key]}
          onChange={(v) => onUpdate({ ...item, [sub.key]: v })}
        />
      ))}
    </div>
  );
}

function ListField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: any;
  onChange: (v: any) => void;
}) {
  const list: any[] = Array.isArray(value) ? value : [];
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  // stable ids for items based on index (reset when list changes)
  const ids = list.map((_, i) => `${field.key}-${i}`);

  const handleEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const from = ids.indexOf(String(active.id));
    const to = ids.indexOf(String(over.id));
    if (from < 0 || to < 0) return;
    onChange(arrayMove(list, from, to));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{field.label}</Label>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const blank: Record<string, any> = {};
            field.itemFields?.forEach((f) => {
              blank[f.key] = f.type === "boolean" ? false : f.type === "list" ? [] : "";
            });
            onChange([...list, blank]);
          }}
        >
          <Plus className="w-3.5 h-3.5 mr-1" /> Add
        </Button>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleEnd}
      >
        <SortableContext items={ids} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {list.map((item, idx) => (
              <SortableListItem
                key={ids[idx]}
                id={ids[idx]}
                index={idx}
                item={item}
                itemFields={field.itemFields ?? []}
                onUpdate={(next) => {
                  const arr = [...list];
                  arr[idx] = next;
                  onChange(arr);
                }}
                onRemove={() => onChange(list.filter((_, i) => i !== idx))}
                onMove={(dir) => {
                  const newIdx = idx + dir;
                  if (newIdx < 0 || newIdx >= list.length) return;
                  onChange(arrayMove(list, idx, newIdx));
                }}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      {list.length === 0 && (
        <p className="text-xs text-muted-foreground italic">No items yet.</p>
      )}
    </div>
  );
}

function FieldRow({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: any;
  onChange: (v: any) => void;
}) {
  if (field.type === "list") {
    return <ListField field={field} value={value} onChange={onChange} />;
  }
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{field.label}</Label>
      <ScalarField field={field} value={value} onChange={onChange} />
    </div>
  );
}

export default function PropsForm({ fields, values, onChange }: PropsFormProps) {
  const set = (key: string, v: any) => onChange({ ...values, [key]: v });
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <FieldRow
          key={field.key}
          field={field}
          value={values[field.key]}
          onChange={(v) => set(field.key, v)}
        />
      ))}
    </div>
  );
}
