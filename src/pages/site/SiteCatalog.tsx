import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Plus, Trash2 } from "lucide-react";

interface SimpleListProps {
  title: string;
  emptyLabel: string;
  promptLabel: string;
  data: { id: string; name: string; meta?: string }[];
  onAdd: (name: string) => void;
  onRemove: (id: string) => void;
}

function SimpleList({ title, emptyLabel, promptLabel, data, onAdd, onRemove }: SimpleListProps) {
  const handleAdd = () => {
    const name = prompt(promptLabel)?.trim();
    if (!name) return;
    onAdd(name);
  };
  return (
    <SiteShell
      title={title}
      actions={
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-1" /> Add {title.toLowerCase()}
        </Button>
      }
    >
      <div className="max-w-2xl">
        {data.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <p className="text-muted-foreground mb-4">{emptyLabel}</p>
            <Button onClick={handleAdd}>Add now</Button>
          </div>
        ) : (
          <ul className="rounded-xl border border-border bg-card divide-y divide-border shadow-elev-sm overflow-hidden">
            {data.map((item) => (
              <li key={item.id} className="flex items-center justify-between px-5 py-3 hover:bg-surface/50">
                <div>
                  <div className="font-medium text-sm">{item.name}</div>
                  {item.meta && <div className="text-xs text-muted-foreground">{item.meta}</div>}
                </div>
                <Button size="icon" variant="ghost" onClick={() => onRemove(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SiteShell>
  );
}

export function SiteCategories() {
  const { siteId, site } = useCurrentSite();
  const { upsertCategory, removeCategory } = useBuilderStore();
  if (!site) return <SiteShell title="Categories">{null}</SiteShell>;
  return (
    <SimpleList
      title="Categories"
      emptyLabel="No categories yet."
      promptLabel="Category name"
      data={site.categories.map((c) => ({ id: c.id, name: c.name, meta: `/${c.slug}` }))}
      onAdd={(name) => upsertCategory(siteId, { name })}
      onRemove={(id) => removeCategory(siteId, id)}
    />
  );
}

export function SiteBrands() {
  const { siteId, site } = useCurrentSite();
  const { upsertBrand, removeBrand } = useBuilderStore();
  if (!site) return <SiteShell title="Brands">{null}</SiteShell>;
  return (
    <SimpleList
      title="Brands"
      emptyLabel="No brands yet."
      promptLabel="Brand name"
      data={site.brands.map((b) => ({ id: b.id, name: b.name }))}
      onAdd={(name) => upsertBrand(siteId, { name })}
      onRemove={(id) => removeBrand(siteId, id)}
    />
  );
}
