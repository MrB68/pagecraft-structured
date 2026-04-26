import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Brand,
  Category,
  Customer,
  MediaItem,
  Order,
  Product,
  Review,
  Section,
  Website,
} from "@/types";
import { TEMPLATES as BUILTIN_TEMPLATES } from "@/templates";
import { clone, slugify, uid } from "@/core/utils";
import { SECTION_MAP } from "@/core/sectionRegistry";
import type { Template } from "@/types";

interface BuilderState {
  websites: Website[];
  customTemplates: Template[];
  userPlan: "free" | "pro";
  setUserPlan: (plan: "free" | "pro") => void;
  createWebsiteFromTemplate: (templateId: string, name: string) => string;
  deleteWebsite: (id: string) => void;
  duplicateWebsite: (id: string) => string;
  togglePublish: (id: string) => void;
  renameWebsite: (id: string, name: string) => void;
  setDomain: (id: string, domain: string) => void;

  addPage: (siteId: string, name: string) => void;
  deletePage: (siteId: string, pageId: string) => void;
  resetPageToTemplate: (siteId: string, pageId: string) => void;

  updateSectionProps: (siteId: string, pageId: string, sectionId: string, props: Record<string, any>) => void;
  addSection: (siteId: string, pageId: string, type: Section["type"], index?: number) => string;
  removeSection: (siteId: string, pageId: string, sectionId: string) => void;
  moveSection: (siteId: string, pageId: string, sectionId: string, dir: -1 | 1) => void;
  reorderSections: (siteId: string, pageId: string, fromIndex: number, toIndex: number) => void;
  duplicateSection: (siteId: string, pageId: string, sectionId: string) => string;

  saveSiteAsTemplate: (siteId: string, name: string, description?: string) => string;
  deleteCustomTemplate: (id: string) => void;
  getAllTemplates: () => Template[];

  createWebsiteFromTemplateObject: (template: Template, name: string) => string;

  addMedia: (siteId: string, item: Omit<MediaItem, "id" | "addedAt">) => void;
  removeMedia: (siteId: string, id: string) => void;

  upsertProduct: (siteId: string, product: Omit<Product, "id"> & { id?: string }) => void;
  removeProduct: (siteId: string, id: string) => void;

  upsertCategory: (siteId: string, c: Omit<Category, "id" | "slug"> & { id?: string }) => void;
  removeCategory: (siteId: string, id: string) => void;

  upsertBrand: (siteId: string, b: Omit<Brand, "id"> & { id?: string }) => void;
  removeBrand: (siteId: string, id: string) => void;

  addOrder: (siteId: string, o: Omit<Order, "id" | "createdAt">) => void;
  setOrderStatus: (siteId: string, id: string, status: Order["status"]) => void;

  upsertCustomer: (siteId: string, c: Omit<Customer, "id" | "createdAt"> & { id?: string }) => void;
  removeCustomer: (siteId: string, id: string) => void;

  upsertReview: (siteId: string, r: Omit<Review, "id"> & { id?: string }) => void;
  removeReview: (siteId: string, id: string) => void;
}

const emptyCommerce = () => ({
  media: [] as MediaItem[],
  products: [] as Product[],
  categories: [] as Category[],
  brands: [] as Brand[],
  orders: [] as Order[],
  customers: [] as Customer[],
  reviews: [] as Review[],
});

const updateSite = (
  state: { websites: Website[] },
  siteId: string,
  fn: (w: Website) => Website
) => ({ websites: state.websites.map((w) => (w.id === siteId ? fn(w) : w)) });

export const useBuilderStore = create<BuilderState>()(
  persist(
    (set, get) => ({
      websites: [],
      customTemplates: [],

      createWebsiteFromTemplate: (templateId, name) => {
        const all = [...BUILTIN_TEMPLATES, ...get().customTemplates];
        const tpl = all.find((t) => t.id === templateId);
        if (!tpl) return "";
        const id = uid();
        const site: Website = {
          id,
          name,
          templateId,
          published: false,
          createdAt: Date.now(),
          pages: clone(tpl.pages).map((p) => ({
            ...p,
            id: uid(),
            sections: p.sections.map((s) => ({ ...s, id: uid() })),
          })),
          allowedSections: clone(tpl.allowedSections),
          ...emptyCommerce(),
        };
        set((state) => ({ websites: [site, ...state.websites] }));
        return id;
      },

      deleteWebsite: (id) =>
        set((state) => ({ websites: state.websites.filter((w) => w.id !== id) })),

      duplicateWebsite: (id) => {
        const src = get().websites.find((w) => w.id === id);
        if (!src) return "";
        const newId = uid();
        const copy: Website = {
          ...clone(src),
          id: newId,
          name: `${src.name} (copy)`,
          published: false,
          createdAt: Date.now(),
          pages: clone(src.pages).map((p) => ({
            ...p,
            id: uid(),
            sections: p.sections.map((s) => ({ ...s, id: uid() })),
          })),
          allowedSections: clone(src.allowedSections),
        };
        set((state) => ({ websites: [copy, ...state.websites] }));
        return newId;
      },

      togglePublish: (id) =>
        set((state) => updateSite(state, id, (w) => ({ ...w, published: !w.published }))),

      renameWebsite: (id, name) =>
        set((state) => updateSite(state, id, (w) => ({ ...w, name }))),

      setDomain: (id, domain) =>
        set((state) => updateSite(state, id, (w) => ({ ...w, domain }))),

      addPage: (siteId, name) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: [
              ...w.pages,
              {
                id: uid(),
                name,
                slug: slugify(name),
                sections: [
                  { id: uid(), type: "hero", props: clone(SECTION_MAP.hero.defaults) },
                  { id: uid(), type: "footer", props: clone(SECTION_MAP.footer.defaults) },
                ],
              },
            ],
          }))
        ),

      deletePage: (siteId, pageId) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.filter((p) => p.id !== pageId),
          }))
        ),

      resetPageToTemplate: (siteId, pageId) => {
        const site = get().websites.find((w) => w.id === siteId);
        if (!site) return;
        const all = [...BUILTIN_TEMPLATES, ...get().customTemplates];
        const tpl = all.find((t) => t.id === site.templateId);
        const targetPage = site.pages.find((p) => p.id === pageId);
        if (!tpl || !targetPage) return;
        const tplPage =
          tpl.pages.find((p) => p.slug === targetPage.slug) ?? tpl.pages[0];
        if (!tplPage) return;
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) =>
              p.id !== pageId
                ? p
                : {
                    ...p,
                    sections: clone(tplPage.sections).map((s) => ({
                      ...s,
                      id: uid(),
                    })),
                  }
            ),
          }))
        );
      },

      updateSectionProps: (siteId, pageId, sectionId, props) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) =>
              p.id !== pageId
                ? p
                : {
                    ...p,
                    sections: p.sections.map((s) =>
                      s.id === sectionId ? { ...s, props } : s
                    ),
                  }
            ),
          }))
        ),

      addSection: (siteId, pageId, type, index) => {
        const newId = uid();
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) => {
              if (p.id !== pageId) return p;
              const sections = [...p.sections];
              const newSection: Section = {
                id: newId,
                type,
                props: clone(SECTION_MAP[type].defaults),
              };
              const at = index === undefined ? sections.length : Math.max(0, Math.min(index, sections.length));
              sections.splice(at, 0, newSection);
              return { ...p, sections };
            }),
          }))
        );
        return newId;
      },

      removeSection: (siteId, pageId, sectionId) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) =>
              p.id !== pageId
                ? p
                : { ...p, sections: p.sections.filter((s) => s.id !== sectionId) }
            ),
          }))
        ),

      duplicateSection: (siteId, pageId, sectionId) => {
        const newId = uid();
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) => {
              if (p.id !== pageId) return p;
              const idx = p.sections.findIndex((s) => s.id === sectionId);
              if (idx < 0) return p;
              const original = p.sections[idx];
              const copy: Section = { ...clone(original), id: newId };
              const sections = [...p.sections];
              sections.splice(idx + 1, 0, copy);
              return { ...p, sections };
            }),
          }))
        );
        return newId;
      },

      reorderSections: (siteId, pageId, fromIndex, toIndex) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) => {
              if (p.id !== pageId) return p;
              if (fromIndex === toIndex) return p;
              const sections = [...p.sections];
              if (fromIndex < 0 || fromIndex >= sections.length) return p;
              const [item] = sections.splice(fromIndex, 1);
              const at = Math.max(0, Math.min(toIndex, sections.length));
              sections.splice(at, 0, item);
              return { ...p, sections };
            }),
          }))
        ),

      moveSection: (siteId, pageId, sectionId, dir) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            pages: w.pages.map((p) => {
              if (p.id !== pageId) return p;
              const idx = p.sections.findIndex((s) => s.id === sectionId);
              const newIdx = idx + dir;
              if (idx < 0 || newIdx < 0 || newIdx >= p.sections.length) return p;
              const sections = [...p.sections];
              const [item] = sections.splice(idx, 1);
              sections.splice(newIdx, 0, item);
              return { ...p, sections };
            }),
          }))
        ),

      // Templates
      saveSiteAsTemplate: (siteId, name, description = "") => {
        const site = get().websites.find((w) => w.id === siteId);
        if (!site) return "";
        const newId = `tpl-custom-${uid()}`;
        const usedTypes = new Set<string>();
        site.pages.forEach((p) => p.sections.forEach((s) => usedTypes.add(s.type)));
        const tpl: Template = {
          id: newId,
          name,
          description,
          category: "Custom",
          pages: clone(site.pages).map((p) => ({
            ...p,
            id: `p-${uid()}`,
            sections: p.sections.map((s) => ({ ...s, id: `s-${uid()}` })),
          })),
          allowedSections: Array.from(usedTypes) as Section["type"][],
        };
        set((state) => ({ customTemplates: [tpl, ...state.customTemplates] }));
        return newId;
      },

      deleteCustomTemplate: (id) =>
        set((state) => ({
          customTemplates: state.customTemplates.filter((t) => t.id !== id),
        })),

      getAllTemplates: () => [...BUILTIN_TEMPLATES, ...get().customTemplates],

      createWebsiteFromTemplateObject: (template, name) => {
        const id = uid();
        const usedTypes = new Set<string>();
        template.pages.forEach((p) => p.sections.forEach((s) => usedTypes.add(s.type)));
        const site: Website = {
          id,
          name,
          templateId: template.id,
          published: false,
          createdAt: Date.now(),
          pages: clone(template.pages).map((p) => ({
            ...p,
            id: uid(),
            sections: p.sections.map((s) => ({ ...s, id: uid() })),
          })),
          allowedSections: Array.from(usedTypes) as Section["type"][],
          ...emptyCommerce(),
        };
        set((state) => ({ websites: [site, ...state.websites] }));
        return id;
      },

      // Media
      addMedia: (siteId, item) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            media: [{ ...item, id: uid(), addedAt: Date.now() }, ...w.media],
          }))
        ),
      removeMedia: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            media: w.media.filter((m) => m.id !== id),
          }))
        ),

      // Products
      upsertProduct: (siteId, product) =>
        set((state) =>
          updateSite(state, siteId, (w) => {
            if (product.id && w.products.some((p) => p.id === product.id)) {
              return {
                ...w,
                products: w.products.map((p) =>
                  p.id === product.id ? { ...p, ...product, id: p.id } : p
                ),
              };
            }
            return { ...w, products: [{ ...product, id: product.id ?? uid() } as Product, ...w.products] };
          })
        ),
      removeProduct: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            products: w.products.filter((p) => p.id !== id),
          }))
        ),

      // Categories
      upsertCategory: (siteId, c) =>
        set((state) =>
          updateSite(state, siteId, (w) => {
            const slug = slugify(c.name);
            if (c.id && w.categories.some((x) => x.id === c.id)) {
              return {
                ...w,
                categories: w.categories.map((x) =>
                  x.id === c.id ? { ...x, name: c.name, slug } : x
                ),
              };
            }
            return {
              ...w,
              categories: [{ id: c.id ?? uid(), name: c.name, slug }, ...w.categories],
            };
          })
        ),
      removeCategory: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            categories: w.categories.filter((x) => x.id !== id),
          }))
        ),

      // Brands
      upsertBrand: (siteId, b) =>
        set((state) =>
          updateSite(state, siteId, (w) => {
            if (b.id && w.brands.some((x) => x.id === b.id)) {
              return {
                ...w,
                brands: w.brands.map((x) => (x.id === b.id ? { ...x, name: b.name } : x)),
              };
            }
            return { ...w, brands: [{ id: b.id ?? uid(), name: b.name }, ...w.brands] };
          })
        ),
      removeBrand: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            brands: w.brands.filter((x) => x.id !== id),
          }))
        ),

      // Orders
      addOrder: (siteId, o) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            orders: [{ ...o, id: uid(), createdAt: Date.now() }, ...w.orders],
          }))
        ),
      setOrderStatus: (siteId, id, status) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            orders: w.orders.map((o) => (o.id === id ? { ...o, status } : o)),
          }))
        ),

      // Customers
      upsertCustomer: (siteId, c) =>
        set((state) =>
          updateSite(state, siteId, (w) => {
            if (c.id && w.customers.some((x) => x.id === c.id)) {
              return {
                ...w,
                customers: w.customers.map((x) =>
                  x.id === c.id ? { ...x, name: c.name, email: c.email } : x
                ),
              };
            }
            return {
              ...w,
              customers: [
                { id: c.id ?? uid(), name: c.name, email: c.email, createdAt: Date.now() },
                ...w.customers,
              ],
            };
          })
        ),
      removeCustomer: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            customers: w.customers.filter((x) => x.id !== id),
          }))
        ),

      // Reviews
      upsertReview: (siteId, r) =>
        set((state) =>
          updateSite(state, siteId, (w) => {
            if (r.id && w.reviews.some((x) => x.id === r.id)) {
              return {
                ...w,
                reviews: w.reviews.map((x) => (x.id === r.id ? { ...x, ...r, id: x.id } : x)),
              };
            }
            return { ...w, reviews: [{ ...r, id: r.id ?? uid() } as Review, ...w.reviews] };
          })
        ),
      removeReview: (siteId, id) =>
        set((state) =>
          updateSite(state, siteId, (w) => ({
            ...w,
            reviews: w.reviews.filter((x) => x.id !== id),
          }))
        ),
    }),
    {
      name: "sitewise-builder-v2",
      version: 3,
      migrate: (persisted: any) => {
        if (!persisted) return persisted;
        if (Array.isArray(persisted.websites)) {
          persisted.websites = persisted.websites.map((w: any) => ({
            ...emptyCommerce(),
            ...w,
          }));
        }
        if (!Array.isArray(persisted.customTemplates)) {
          persisted.customTemplates = [];
        }
        return persisted;
      },
    }
  )
);
