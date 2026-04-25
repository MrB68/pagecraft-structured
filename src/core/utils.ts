export const uid = () =>
  Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v));

/** Build full nested URL path from a page and all pages (for public routing). */
export function getPagePath(page: { id: string; slug: string; parentId?: string | null }, allPages: { id: string; slug: string; parentId?: string | null }[]): string {
  const segments: string[] = [page.slug];
  let current = page;
  const visited = new Set<string>([page.id]);

  while (current.parentId) {
    if (visited.has(current.parentId)) break; // cycle guard
    const parent = allPages.find((p) => p.id === current.parentId);
    if (!parent) break;
    visited.add(parent.id);
    segments.unshift(parent.slug);
    current = parent;
  }

  return "/" + segments.join("/");
}

/** Normalize a path for comparison: lowercase, no trailing slash. */
export function normalizePath(path: string): string {
  return path.toLowerCase().replace(/\/+$/, "");
}

