import { Template } from "@/types";
import { GENERATED_TEMPLATES } from "./generated";

const BASE_TEMPLATES: Template[] = [
  {
    id: "tpl-clo",
    name: "CLO Streetwear",
    description: "Dark, minimal storefront with cinematic hero, auto-scrolling product and collection carousels.",
    category: "E-commerce",
    allowedSections: ["navbar", "clo-hero", "philosophy", "clo-product-grid", "collections", "value-grid", "newsletter", "clo-footer"],
    pages: [
      {
        id: "p-home",
        name: "Home",
        slug: "home",
        sections: [
          {
            id: "clo-nav",
            type: "navbar",
            props: {
              brand: "{{store.name}}",
              sticky: true,
              showIcons: true,
              animate: true,
              links: [
                { label: "Shop", href: "#shop" },
                { label: "About", href: "#about" },
                { label: "Collections", href: "#collections" },
                { label: "Sale", href: "#sale" },
              ],
            },
          },
          {
            id: "clo-hero",
            type: "clo-hero",
            props: {
              image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
              title: "clo",
              tagline: "Minimal · Original · Design",
              buttonText: "Explore Collections",
              buttonHref: "#collections",
              animate: true,
              fullHeight: true,
            },
          },
          {
            id: "clo-philosophy",
            type: "philosophy",
            props: {
              title: "Less is More",
              body: "We believe in the power of simplicity. Each piece is thoughtfully designed to transcend trends, focusing on clean lines, quality materials, and timeless aesthetics.",
              animate: true,
            },
          },
          {
            id: "clo-picks",
            type: "clo-product-grid",
            props: {
              title: "Minimal Picks",
              ctaLabel: "View All",
              ctaHref: "#shop",
              autoScroll: true,
              animate: true,
              products: [
                { name: "Linen Shirt", price: "$59", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80" },
                { name: "Wool Coat", price: "$189", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80" },
                { name: "Knit Sweater", price: "$89", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80" },
                { name: "Leather Bag", price: "$129", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80" },
                { name: "Tee", price: "$39", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
                { name: "Cap", price: "$29", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80" },
              ],
            },
          },
          {
            id: "clo-collections",
            type: "collections",
            props: {
              title: "Collections",
              ctaLabel: "View All Collections",
              ctaHref: "#collections",
              autoScroll: true,
              animate: true,
              collections: [
                { name: "Outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80", href: "#" },
                { name: "Knitwear", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80", href: "#" },
                { name: "Accessories", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80", href: "#" },
                { name: "Essentials", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80", href: "#" },
              ],
            },
          },
          {
            id: "clo-values",
            type: "value-grid",
            props: {
              title: "",
              animate: true,
              values: [
                { title: "Minimal", description: "Clean lines and refined silhouettes that stand the test of time." },
                { title: "Original", description: "Unique designs that reflect authentic creative vision." },
                { title: "Quality", description: "Premium materials and meticulous attention to detail." },
              ],
            },
          },
          {
            id: "clo-newsletter",
            type: "newsletter",
            props: {
              title: "Stay Updated",
              subtitle: "Join our community for exclusive releases and design insights.",
              placeholder: "Enter your email",
              buttonText: "Subscribe",
            },
          },
          {
            id: "clo-footer",
            type: "clo-footer",
            props: {
              brand: "clo",
              tagline: "Minimal · Original · Design",
              copyright: "© 2025 clo. All rights reserved.",
              socials: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "TikTok", href: "https://tiktok.com" },
              ],
              columns: [
                {
                  heading: "Shop",
                  links: [
                    { label: "All Products", href: "#" },
                    { label: "New Arrivals", href: "#" },
                    { label: "Collections", href: "#" },
                    { label: "Sale", href: "#" },
                  ],
                },
                {
                  heading: "Help",
                  links: [
                    { label: "Customer Service", href: "#" },
                    { label: "Shipping & Returns", href: "#" },
                    { label: "Size Guide", href: "#" },
                    { label: "Contact Us", href: "#" },
                  ],
                },
                {
                  heading: "Company",
                  links: [
                    { label: "About", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Press", href: "#" },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "tpl-clothing",
    name: "Clothing Boutique",
    description: "A modern storefront template for fashion brands.",
    category: "E-commerce",
    allowedSections: ["hero", "product-grid", "cta", "about", "contact", "footer"],
    pages: [
      {
        id: "p-home",
        name: "Home",
        slug: "home",
        sections: [
          {
            id: "s1",
            type: "hero",
            props: {
              eyebrow: "Spring Collection",
              title: "Wear the season.",
              subtitle: "Discover handpicked essentials, made to last and styled for everyday.",
              buttonText: "Shop Now",
              buttonHref: "#products",
              image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
            },
          },
          {
            id: "s2",
            type: "product-grid",
            props: {
              title: "New arrivals",
              products: [
                { name: "Linen Shirt", price: "$59", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80" },
                { name: "Wool Coat", price: "$189", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" },
                { name: "Leather Bag", price: "$129", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
                { name: "Knit Sweater", price: "$89", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" },
              ],
            },
          },
          {
            id: "s3",
            type: "cta",
            props: {
              title: "Join the club",
              subtitle: "Get 10% off your first order and early access to drops.",
              buttonText: "Subscribe",
              buttonHref: "#",
            },
          },
          {
            id: "s4",
            type: "footer",
            props: {
              brand: "Atelier",
              tagline: "Crafted in small batches.",
              links: [
                { label: "Shop", href: "#" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
          },
        ],
      },
      {
        id: "p-about",
        name: "About",
        slug: "about",
        sections: [
          { id: "a1", type: "about", props: { title: "Our story", body: "Founded in 2021, we believe clothing should last.\n\nEvery piece is made with care in small batches.", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80" } },
          { id: "a2", type: "footer", props: { brand: "Atelier", tagline: "Crafted in small batches.", links: [{ label: "Shop", href: "#" }] } },
        ],
      },
      {
        id: "p-contact",
        name: "Contact",
        slug: "contact",
        sections: [
          { id: "c1", type: "contact", props: { title: "Get in touch", subtitle: "Questions? We're happy to help.", email: "hello@atelier.com" } },
          { id: "c2", type: "footer", props: { brand: "Atelier", tagline: "Crafted in small batches.", links: [{ label: "Shop", href: "#" }] } },
        ],
      },
    ],
  },
  {
    id: "tpl-business",
    name: "SaaS Business",
    description: "A polished landing page for software companies.",
    category: "Business",
    allowedSections: ["hero", "features", "cta", "about", "contact", "footer"],
    pages: [
      {
        id: "p-home",
        name: "Home",
        slug: "home",
        sections: [
          {
            id: "b1",
            type: "hero",
            props: {
              eyebrow: "Now in beta",
              title: "Ship faster with confidence.",
              subtitle: "The all-in-one platform for modern teams to plan, build, and launch.",
              buttonText: "Start free trial",
              buttonHref: "#",
              image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
            },
          },
          {
            id: "b2",
            type: "features",
            props: {
              title: "Built for teams that ship",
              subtitle: "All the tools you need in one place.",
              items: [
                { title: "Lightning fast", description: "Optimized for speed at every layer of the stack." },
                { title: "Secure by default", description: "Enterprise-grade security baked in from day one." },
                { title: "Plays nice", description: "Integrates with the tools your team already uses." },
              ],
            },
          },
          {
            id: "b3",
            type: "cta",
            props: {
              title: "Ready to ship?",
              subtitle: "Start your free 14-day trial. No credit card required.",
              buttonText: "Get started",
              buttonHref: "#",
            },
          },
          {
            id: "b4",
            type: "footer",
            props: { brand: "Northwind", tagline: "© 2025 Northwind Inc.", links: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
          },
        ],
      },
    ],
  },
];

// Mark a curated subset as premium. Heuristic: every 3rd generated template
// plus the showcase CLO template are premium. Stable & deterministic.
const PREMIUM_BUILTIN_IDS = new Set<string>(["tpl-clo"]);

const withMeta = (t: Template, i: number, base: number): Template => ({
  ...t,
  isPremium: t.isPremium ?? (PREMIUM_BUILTIN_IDS.has(t.id) || (base + i) % 3 === 0),
  createdAt: t.createdAt ?? Date.now() - (base + i) * 1000 * 60 * 60,
});

export const TEMPLATES: Template[] = [
  ...BASE_TEMPLATES.map((t, i) => withMeta(t, i, 0)),
  ...GENERATED_TEMPLATES.map((t, i) => withMeta(t, i, BASE_TEMPLATES.length)),
];

