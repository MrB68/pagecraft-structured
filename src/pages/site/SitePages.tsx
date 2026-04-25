import SiteShell, { useCurrentSite } from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { getPagePath } from "@/core/utils";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Plus,
  Trash2,
} from "lucide-react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import NameInputDialog from "@/components/modals/NameInputDialog";
import type { Page, Website } from "@/types";

interface TreeNode {
  page: Page;
  children: TreeNode[];
}

function buildPageTree(pages: Page[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  for (const page of pages) {
    map.set(page.id, { page, children: [] });
  }

  for (const page of pages) {
    const node = map.get(page.id)!;
    if (page.parentId && map.has(page.parentId)) {
      map.get(page.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

interface PageTreeNodeProps {
  node: TreeNode;
  depth: number;
  expandedIds: Set<string>;
  toggleExpand: (id: string) => void;
  activePageId: string | null;
  site: Website;
  siteId: string;
  onNavigate: (pageId: string) => void;
  onAddChild: (parentId: string) => void;
  onDelete: (pageId: string, hasChildren: boolean) => void;
}

function PageTreeNode({
  node,
  depth,
  expandedIds,
  toggleExpand,
  activePageId,
  site,
  siteId,
  onNavigate,
  onAddChild,
  onDelete,
}: PageTreeNodeProps) {
  const isExpanded = expandedIds.has(node.page.id);
  const isActive = activePageId === node.page.id;
  const hasChildren = node.children.length > 0;
  const path = getPagePath(node.page, site.pages);

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 border-b border-border cursor-pointer transition-colors",
          isActive
            ? "bg-primary/10"
            : "hover:bg-surface/50"
        )}
        style={{ paddingLeft: `${16 + depth * 24}px` }}
        onClick={() => onNavigate(node.page.id)}
      >
        {/* Expand / collapse toggle */}
        <button
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded hover:bg-muted transition-colors shrink-0",
            !hasChildren && "invisible"
          )}
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand(node.page.id);
          }}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </button>

        {/* Page info */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm truncate">{node.page.name}</div>
          <div className="text-xs text-muted-foreground truncate">{path}</div>
        </div>

        {/* Section count */}
        <div className="text-xs text-muted-foreground hidden sm:block shrink-0 w-20 text-right">
          {node.page.sections.length} sections
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          {site.published && (
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="h-7 w-7"
              onClick={(e) => e.stopPropagation()}
            >
              <Link to={`/site/${site.id}${path}`} target="_blank">
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </Button>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onAddChild(node.page.id);
            }}
            title="Add child page"
          >
            <Plus className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 text-destructive hover:text-destructive"
            disabled={site.pages.length <= 1}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(node.page.id, hasChildren);
            }}
            title="Delete page"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Recursively render children */}
      {isExpanded &&
        hasChildren &&
        node.children.map((child) => (
          <PageTreeNode
            key={child.page.id}
            node={child}
            depth={depth + 1}
            expandedIds={expandedIds}
            toggleExpand={toggleExpand}
            activePageId={activePageId}
            site={site}
            siteId={siteId}
            onNavigate={onNavigate}
            onAddChild={onAddChild}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
}

export default function SitePages() {
  const { siteId, site } = useCurrentSite();
  const { addPage, deletePage } = useBuilderStore();
  const navigate = useNavigate();
  const activeMatch = useMatch("/editor/:siteId/:pageId");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [childDialogParentId, setChildDialogParentId] = useState<string | null>(
    null
  );
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const activePageId =
    activeMatch?.params.siteId === siteId
      ? activeMatch.params.pageId ?? null
      : null;

  const tree = useMemo(() => {
    if (!site) return [];
    return buildPageTree(site.pages);
  }, [site?.pages]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleNavigate = (pageId: string) => {
    navigate(`/editor/${siteId}/${pageId}`);
  };

  const handleAddChild = (parentId: string) => {
    setChildDialogParentId(parentId);
  };

  const handleDelete = (pageId: string, hasChildren: boolean) => {
    if (hasChildren) {
      toast.error(
        "Cannot delete a page that has child pages. Delete children first."
      );
      return;
    }
    const page = site?.pages.find((p) => p.id === pageId);
    if (!page) return;
    if (confirm(`Delete page "${page.name}"?`)) {
      deletePage(siteId, pageId);
      toast.success("Page deleted");
    }
  };

  if (!site) return <SiteShell title="Pages">{null}</SiteShell>;

  return (
    <SiteShell
      title="Pages"
      actions={
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-1" /> New page
        </Button>
      }
    >
      <div className="max-w-4xl rounded-xl border border-border bg-card overflow-hidden shadow-elev-sm">
        {site.pages.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            No pages yet. Click "New page" to create one.
          </div>
        ) : (
          <div>
            {tree.map((node) => (
              <PageTreeNode
                key={node.page.id}
                node={node}
                depth={0}
                expandedIds={expandedIds}
                toggleExpand={toggleExpand}
                activePageId={activePageId}
                site={site}
                siteId={siteId}
                onNavigate={handleNavigate}
                onAddChild={handleAddChild}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Root-level page dialog */}
      <NameInputDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="New Page"
        placeholder="Page name (e.g. Pricing)"
        onSubmit={(value) => {
          const trimmed = value.trim();
          if (!trimmed) return;
          addPage(siteId, trimmed);
          toast.success("Page added");
        }}
      />

      {/* Child page dialog */}
      <NameInputDialog
        open={childDialogParentId !== null}
        onOpenChange={(open) => {
          if (!open) setChildDialogParentId(null);
        }}
        title="Add Child Page"
        placeholder="Child page name"
        onSubmit={(value) => {
          const trimmed = value.trim();
          if (!trimmed || !childDialogParentId) return;
          addPage(siteId, trimmed, childDialogParentId);
          toast.success("Child page added");
          setExpandedIds((prev) => {
            const next = new Set(prev);
            next.add(childDialogParentId);
            return next;
          });
        }}
      />
    </SiteShell>
  );
}

