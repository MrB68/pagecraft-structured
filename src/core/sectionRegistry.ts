import { ComponentType } from "react";
import { SectionType } from "@/types";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductGridSection from "@/components/sections/ProductGridSection";
import CtaSection from "@/components/sections/CtaSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import NavbarSection from "@/components/sections/NavbarSection";
import CloHeroSection from "@/components/sections/CloHeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CloProductGridSection from "@/components/sections/CloProductGridSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import ValueGridSection from "@/components/sections/ValueGridSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CloFooterSection from "@/components/sections/CloFooterSection";

export interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "list" | "url" | "boolean" | "select";
  itemFields?: FieldDef[];
  placeholder?: string;
  options?: { label: string; value: string }[];
}

export interface SectionMeta {
  type: SectionType;
  label: string;
  component: ComponentType<any>;
  fields: FieldDef[];
  defaults: Record<string, any>;
}

export const SECTION_MAP: Record<SectionType, SectionMeta> = {
  hero: {
    type: "hero",
    label: "Hero",
    component: HeroSection,
    defaults: {
      eyebrow: "New",
      title: "Welcome to your new site",
      subtitle: "A simple way to launch a beautiful page.",
      buttonText: "Get Started",
      buttonHref: "#",
      image: "",
    },
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "buttonText", label: "Button label", type: "text" },
      { key: "buttonHref", label: "Button link", type: "url" },
      { key: "image", label: "Image URL", type: "image" },
    ],
  },
  features: {
    type: "features",
    label: "Features",
    component: FeaturesSection,
    defaults: {
      title: "Why choose us",
      subtitle: "Everything you need, nothing you don't.",
      items: [
        { title: "Fast", description: "Lightning quick performance." },
        { title: "Reliable", description: "Built to last." },
        { title: "Beautiful", description: "Crafted with care." },
      ],
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      {
        key: "items",
        label: "Features",
        type: "list",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
  },
  "product-grid": {
    type: "product-grid",
    label: "Product Grid",
    component: ProductGridSection,
    defaults: {
      title: "Featured products",
      products: [
        { name: "Product One", price: "$29", image: "" },
        { name: "Product Two", price: "$49", image: "" },
        { name: "Product Three", price: "$79", image: "" },
      ],
    },
    fields: [
      { key: "title", label: "Section title", type: "text" },
      {
        key: "products",
        label: "Products",
        type: "list",
        itemFields: [
          { key: "name", label: "Name", type: "text" },
          { key: "price", label: "Price", type: "text" },
          { key: "image", label: "Image URL", type: "image" },
        ],
      },
    ],
  },
  cta: {
    type: "cta",
    label: "Call to Action",
    component: CtaSection,
    defaults: {
      title: "Ready to get started?",
      subtitle: "Join thousands of happy customers today.",
      buttonText: "Sign up",
      buttonHref: "#",
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "buttonText", label: "Button label", type: "text" },
      { key: "buttonHref", label: "Button link", type: "url" },
    ],
  },
  about: {
    type: "about",
    label: "About",
    component: AboutSection,
    defaults: {
      title: "About us",
      body: "We are a small team passionate about building great products.",
      image: "",
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "image", label: "Image URL", type: "image" },
    ],
  },
  contact: {
    type: "contact",
    label: "Contact",
    component: ContactSection,
    defaults: {
      title: "Get in touch",
      subtitle: "We'd love to hear from you.",
      email: "hello@example.com",
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "email", label: "Email", type: "text" },
    ],
  },
  footer: {
    type: "footer",
    label: "Footer",
    component: FooterSection,
    defaults: {
      brand: "Your Brand",
      tagline: "Built with Sitewise",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
    fields: [
      { key: "brand", label: "Brand name", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      {
        key: "links",
        label: "Links",
        type: "list",
        itemFields: [
          { key: "label", label: "Label", type: "text" },
          { key: "href", label: "URL", type: "url" },
        ],
      },
    ],
  },
  navbar: {
    type: "navbar",
    label: "Navbar",
    component: NavbarSection,
    defaults: {
      brand: "clo",
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
    fields: [
      { key: "brand", label: "Brand", type: "text" },
      {
        key: "links",
        label: "Nav links",
        type: "list",
        itemFields: [
          { key: "label", label: "Label", type: "text" },
          { key: "href", label: "URL", type: "url" },
        ],
      },
    ],
  },
  "clo-hero": {
    type: "clo-hero",
    label: "CLO Hero",
    component: CloHeroSection,
    defaults: {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
      title: "clo",
      tagline: "Minimal · Original · Design",
      buttonText: "Explore Collections",
      buttonHref: "#collections",
      animate: true,
      fullHeight: true,
    },
    fields: [
      { key: "image", label: "Background image", type: "image" },
      { key: "title", label: "Title", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "buttonText", label: "Button label", type: "text" },
      { key: "buttonHref", label: "Button link", type: "url" },
    ],
  },
  philosophy: {
    type: "philosophy",
    label: "Philosophy",
    component: PhilosophySection,
    defaults: {
      title: "Less is More",
      body: "We believe in the power of simplicity. Each piece is thoughtfully designed to transcend trends, focusing on clean lines, quality materials, and timeless aesthetics.",
      animate: true,
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  "clo-product-grid": {
    type: "clo-product-grid",
    label: "CLO Product Carousel",
    component: CloProductGridSection,
    defaults: {
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
      ],
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "ctaLabel", label: "CTA label", type: "text" },
      { key: "ctaHref", label: "CTA link", type: "url" },
      {
        key: "products",
        label: "Products",
        type: "list",
        itemFields: [
          { key: "name", label: "Name", type: "text" },
          { key: "price", label: "Price", type: "text" },
          { key: "image", label: "Image URL", type: "image" },
          { key: "href", label: "Product link", type: "url" },
        ],
      },
    ],
  },
  collections: {
    type: "collections",
    label: "Collections Carousel",
    component: CollectionsSection,
    defaults: {
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
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "ctaLabel", label: "CTA label", type: "text" },
      { key: "ctaHref", label: "CTA link", type: "url" },
      {
        key: "collections",
        label: "Collections",
        type: "list",
        itemFields: [
          { key: "name", label: "Name", type: "text" },
          { key: "image", label: "Image URL", type: "image" },
          { key: "href", label: "Link", type: "url" },
        ],
      },
    ],
  },
  "value-grid": {
    type: "value-grid",
    label: "Value Grid",
    component: ValueGridSection,
    defaults: {
      title: "",
      animate: true,
      values: [
        { title: "Minimal", description: "Clean lines and refined silhouettes that stand the test of time." },
        { title: "Original", description: "Unique designs that reflect authentic creative vision." },
        { title: "Quality", description: "Premium materials and meticulous attention to detail." },
      ],
    },
    fields: [
      { key: "title", label: "Section title", type: "text" },
      {
        key: "values",
        label: "Values",
        type: "list",
        itemFields: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
  },
  newsletter: {
    type: "newsletter",
    label: "Newsletter",
    component: NewsletterSection,
    defaults: {
      title: "Stay Updated",
      subtitle: "Join our community for exclusive releases and design insights.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "placeholder", label: "Input placeholder", type: "text" },
      { key: "buttonText", label: "Button label", type: "text" },
    ],
  },
  "clo-footer": {
    type: "clo-footer",
    label: "CLO Footer",
    component: CloFooterSection,
    defaults: {
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
    fields: [
      { key: "brand", label: "Brand", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "copyright", label: "Copyright", type: "text" },
      {
        key: "socials",
        label: "Social links",
        type: "list",
        itemFields: [
          { key: "label", label: "Label", type: "text" },
          { key: "href", label: "URL", type: "url" },
        ],
      },
      {
        key: "columns",
        label: "Footer columns",
        type: "list",
        itemFields: [
          { key: "heading", label: "Heading", type: "text" },
          {
            key: "links",
            label: "Links",
            type: "list",
            itemFields: [
              { key: "label", label: "Label", type: "text" },
              { key: "href", label: "URL", type: "url" },
            ],
          },
        ],
      },
    ],
  },
};

export const SECTION_TYPES = Object.keys(SECTION_MAP) as SectionType[];
