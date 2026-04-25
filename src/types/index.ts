export type SectionType =
  | "hero"
  | "features"
  | "product-grid"
  | "cta"
  | "about"
  | "contact"
  | "footer"
  | "navbar"
  | "clo-hero"
  | "philosophy"
  | "clo-product-grid"
  | "collections"
  | "value-grid"
  | "newsletter"
  | "clo-footer";

export interface Section<T = Record<string, any>> {
  id: string;
  type: SectionType;
  props: T;
}

export interface Page {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
  seo?: {
    title?: string;
    description?: string;
  };
  sections: Section[];
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  addedAt: number;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  categoryId?: string;
  brandId?: string;
  image?: string;
  stock: number;
}

export interface Category { id: string; name: string; slug: string }
export interface Brand { id: string; name: string }

export interface Order {
  id: string;
  customerId: string;
  total: string;
  status: "pending" | "fulfilled" | "refunded";
  createdAt: number;
}

export interface Customer { id: string; name: string; email: string; createdAt: number }
export interface Review { id: string; productId: string; author: string; rating: number; body: string }

export interface Website {
  id: string;
  name: string;
  templateId: string;
  pages: Page[];
  published: boolean;
  createdAt: number;
  domain?: string;
  theme?: { accent?: string };
  media: MediaItem[];
  products: Product[];
  categories: Category[];
  brands: Brand[];
  orders: Order[];
  customers: Customer[];
  reviews: Review[];
  allowedSections?: SectionType[];
}

export interface RuntimeData {
  store?: {
    name?: string;
    tagline?: string;
    brand?: string;
  };
  products?: Record<string, any>[];
  categories?: Record<string, any>[];
  collections?: Record<string, any>[];
  brands?: Record<string, any>[];
  [key: string]: any;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  pages: Page[];
  allowedSections: SectionType[];
}

