import { Template } from "@/types";

export const GENERATED_TEMPLATES: Template[] = [
  {
    "id": "tpl-saas-1",
    "name": "Flowbase — SaaS",
    "description": "All-in-one workspace for modern product teams.",
    "category": "SaaS",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-saas-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s1-1",
            "type": "navbar",
            "props": {
              "brand": "Flowbase",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s1-2",
            "type": "hero",
            "props": {
              "eyebrow": "New · v4.0",
              "title": "Ship products your customers love.",
              "subtitle": "Plan, build, and launch faster with the workspace built for product teams.",
              "buttonText": "Start Free Trial",
              "buttonHref": "/signup",
              "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
            }
          },
          {
            "id": "s1-3",
            "type": "features",
            "props": {
              "title": "Everything you need to ship",
              "subtitle": "From roadmap to release, in one place.",
              "items": [
                {
                  "title": "Realtime collaboration",
                  "description": "Work side by side with your team in shared documents and boards."
                },
                {
                  "title": "Smart automations",
                  "description": "Trigger workflows from any event without writing a line of code."
                },
                {
                  "title": "Insightful analytics",
                  "description": "Track usage, retention, and revenue with built-in dashboards."
                }
              ]
            }
          },
          {
            "id": "s1-4",
            "type": "value-grid",
            "props": {
              "title": "Why teams choose Flowbase",
              "animate": true,
              "values": [
                {
                  "title": "Fast",
                  "description": "Sub-100ms interactions across every page and view."
                },
                {
                  "title": "Secure",
                  "description": "SOC 2 Type II, SSO, and granular permissions."
                },
                {
                  "title": "Open",
                  "description": "A rich API and 200+ native integrations."
                }
              ]
            }
          },
          {
            "id": "s1-5",
            "type": "cta",
            "props": {
              "title": "Start shipping in minutes",
              "subtitle": "Free for up to 10 users. No credit card required.",
              "buttonText": "Get started free",
              "buttonHref": "#"
            }
          },
          {
            "id": "s1-6",
            "type": "newsletter",
            "props": {
              "title": "Product updates",
              "subtitle": "Monthly digest of new features and case studies.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s1-7",
            "type": "footer",
            "props": {
              "brand": "Flowbase",
              "tagline": "All-in-one workspace for modern product teams.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-saas-2",
    "name": "Helio — SaaS",
    "description": "Customer support inbox that scales with your team.",
    "category": "SaaS",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-saas-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s2-1",
            "type": "navbar",
            "props": {
              "brand": "Helio",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s2-2",
            "type": "hero",
            "props": {
              "eyebrow": "Support, reimagined",
              "title": "Reply 3x faster with AI-assisted support.",
              "subtitle": "Helio routes, drafts, and resolves customer requests so your team can focus on what matters.",
              "buttonText": "Try Helio Free",
              "buttonHref": "/start",
              "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
            }
          },
          {
            "id": "s2-4",
            "type": "value-grid",
            "props": {
              "title": "Loved by support leaders",
              "animate": true,
              "values": [
                {
                  "title": "Onboarding in a day",
                  "description": "Import macros, contacts, and tickets in minutes."
                },
                {
                  "title": "Measurable impact",
                  "description": "Average 42% drop in first response time."
                },
                {
                  "title": "Human-first AI",
                  "description": "AI assists agents, never replaces them."
                }
              ]
            }
          },
          {
            "id": "s2-3",
            "type": "features",
            "props": {
              "title": "Built for support that delights",
              "subtitle": "Tools that turn customers into fans.",
              "items": [
                {
                  "title": "Unified inbox",
                  "description": "Email, chat, social, and SMS in one shared queue."
                },
                {
                  "title": "AI replies",
                  "description": "Suggested responses tuned to your brand voice."
                },
                {
                  "title": "SLA tracking",
                  "description": "Never miss a response window with smart alerts."
                }
              ]
            }
          },
          {
            "id": "s2-5",
            "type": "cta",
            "props": {
              "title": "Ready to delight your customers?",
              "subtitle": "Join 5,000+ teams using Helio every day.",
              "buttonText": "Start 14-day trial",
              "buttonHref": "#"
            }
          },
          {
            "id": "s2-6",
            "type": "footer",
            "props": {
              "brand": "Helio",
              "tagline": "Customer support inbox that scales with your team.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-saas-3",
    "name": "Cobalt — SaaS",
    "description": "Cloud cost monitoring for engineering teams.",
    "category": "SaaS",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-saas-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s3-1",
            "type": "navbar",
            "props": {
              "brand": "Cobalt",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s3-2",
            "type": "hero",
            "props": {
              "eyebrow": "FinOps made simple",
              "title": "Cut your cloud bill by 30% in 30 days.",
              "subtitle": "Cobalt finds wasted spend across AWS, GCP, and Azure with zero engineering lift.",
              "buttonText": "See live demo",
              "buttonHref": "/demo",
              "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            }
          },
          {
            "id": "s3-4",
            "type": "value-grid",
            "props": {
              "title": "The Cobalt difference",
              "animate": true,
              "values": [
                {
                  "title": "Read-only",
                  "description": "Connect in 5 minutes with zero security risk."
                },
                {
                  "title": "Multi-cloud",
                  "description": "One pane of glass across every provider."
                },
                {
                  "title": "Actionable",
                  "description": "Every insight comes with a one-click fix."
                }
              ]
            }
          },
          {
            "id": "s3-3",
            "type": "features",
            "props": {
              "title": "Visibility into every dollar",
              "subtitle": "Granular insights without the spreadsheets.",
              "items": [
                {
                  "title": "Anomaly detection",
                  "description": "Spot unusual spend before it hits your bill."
                },
                {
                  "title": "Right-sizing",
                  "description": "AI recommendations tailored to your workloads."
                },
                {
                  "title": "Team budgets",
                  "description": "Set guardrails and alerts per project or team."
                }
              ]
            }
          },
          {
            "id": "s3-5",
            "type": "cta",
            "props": {
              "title": "Find savings today",
              "subtitle": "Connect your cloud account and see results in under an hour.",
              "buttonText": "Book a demo",
              "buttonHref": "#"
            }
          },
          {
            "id": "s3-6",
            "type": "footer",
            "props": {
              "brand": "Cobalt",
              "tagline": "Cloud cost monitoring for engineering teams.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-saas-4",
    "name": "Runlane — SaaS",
    "description": "CI/CD platform engineered for developer happiness.",
    "category": "SaaS",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-saas-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s4-1",
            "type": "navbar",
            "props": {
              "brand": "Runlane",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s4-2",
            "type": "hero",
            "props": {
              "eyebrow": "Faster pipelines",
              "title": "Deploy in seconds. Ship with confidence.",
              "subtitle": "Runlane gives every team blazing fast builds, parallel testing, and one-click rollbacks.",
              "buttonText": "Start building",
              "buttonHref": "/signup",
              "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
            }
          },
          {
            "id": "s4-3",
            "type": "features",
            "props": {
              "title": "A pipeline that flies",
              "subtitle": "Modern infrastructure for modern engineering teams.",
              "items": [
                {
                  "title": "Parallel testing",
                  "description": "Split test suites automatically across hundreds of containers."
                },
                {
                  "title": "Preview deploys",
                  "description": "Every PR gets a unique preview URL."
                },
                {
                  "title": "Audit logs",
                  "description": "Compliance-grade history for every action."
                }
              ]
            }
          },
          {
            "id": "s4-4",
            "type": "value-grid",
            "props": {
              "title": "Built for scale",
              "animate": true,
              "values": [
                {
                  "title": "10x faster",
                  "description": "Average build time cut from 28 to under 3 minutes."
                },
                {
                  "title": "Cloud or self-hosted",
                  "description": "Run Runlane wherever your code lives."
                },
                {
                  "title": "Predictable pricing",
                  "description": "Flat per-seat with unlimited build minutes."
                }
              ]
            }
          },
          {
            "id": "s4-5",
            "type": "cta",
            "props": {
              "title": "Your pipeline deserves better",
              "subtitle": "Migrate from Jenkins or CircleCI in under an hour.",
              "buttonText": "Talk to sales",
              "buttonHref": "#"
            }
          },
          {
            "id": "s4-6",
            "type": "footer",
            "props": {
              "brand": "Runlane",
              "tagline": "CI/CD platform engineered for developer happiness.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-saas-5",
    "name": "Notewave — SaaS",
    "description": "AI knowledge base that actually answers questions.",
    "category": "SaaS",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-saas-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s5-1",
            "type": "navbar",
            "props": {
              "brand": "Notewave",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s5-2",
            "type": "hero",
            "props": {
              "eyebrow": "Smarter knowledge",
              "title": "Turn your docs into instant answers.",
              "subtitle": "Notewave indexes everything your team writes and answers questions like a senior engineer.",
              "buttonText": "Try Notewave Free",
              "buttonHref": "/start",
              "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
            }
          },
          {
            "id": "s5-3",
            "type": "features",
            "props": {
              "title": "Knowledge that compounds",
              "subtitle": "Stop digging through Slack and Notion.",
              "items": [
                {
                  "title": "Universal search",
                  "description": "Search across Notion, Slack, Drive, GitHub and more."
                },
                {
                  "title": "Cited answers",
                  "description": "Every response links to its source for trust."
                },
                {
                  "title": "Stale doc detector",
                  "description": "Surface outdated content automatically."
                }
              ]
            }
          },
          {
            "id": "s5-4",
            "type": "value-grid",
            "props": {
              "title": "Trusted by leading teams",
              "animate": true,
              "values": [
                {
                  "title": "Private by default",
                  "description": "Your data never trains shared models."
                },
                {
                  "title": "Setup in minutes",
                  "description": "Connect a workspace and start searching."
                },
                {
                  "title": "Speak any language",
                  "description": "Native answers in 40+ languages."
                }
              ]
            }
          },
          {
            "id": "s5-5",
            "type": "cta",
            "props": {
              "title": "Make every answer instant",
              "subtitle": "Free for teams up to 25. Upgrade anytime.",
              "buttonText": "Start free",
              "buttonHref": "#"
            }
          },
          {
            "id": "s5-6",
            "type": "footer",
            "props": {
              "brand": "Notewave",
              "tagline": "AI knowledge base that actually answers questions.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-ecommerce-1",
    "name": "Maison Verde — Ecommerce",
    "description": "Sustainable home goods for the conscious modern home.",
    "category": "Ecommerce",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-ecommerce-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s6-1",
            "type": "navbar",
            "props": {
              "brand": "Maison Verde",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s6-2",
            "type": "hero",
            "props": {
              "eyebrow": "Spring drop · 2026",
              "title": "Objects designed to last a lifetime.",
              "subtitle": "Hand-crafted home essentials made from natural, traceable materials.",
              "buttonText": "Shop the collection",
              "buttonHref": "/shop",
              "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1400&q=80"
            }
          },
          {
            "id": "s6-3",
            "type": "features",
            "props": {
              "title": "A different kind of home brand",
              "subtitle": "Built around longevity, not seasons.",
              "items": [
                {
                  "title": "Natural materials",
                  "description": "Solid oak, organic linen, and unglazed stoneware."
                },
                {
                  "title": "Lifetime repair",
                  "description": "Free repairs on every purchase, forever."
                },
                {
                  "title": "Carbon negative",
                  "description": "We remove 2x the carbon we emit."
                }
              ]
            }
          },
          {
            "id": "s6-4",
            "type": "product-grid",
            "props": {
              "title": "Maison Verde highlights",
              "products": [
                {
                  "name": "Linen Throw",
                  "price": "$89",
                  "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
                },
                {
                  "name": "Oak Side Table",
                  "price": "$320",
                  "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
                },
                {
                  "name": "Stoneware Vase",
                  "price": "$58",
                  "image": "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80"
                },
                {
                  "name": "Wool Rug",
                  "price": "$420",
                  "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s6-5",
            "type": "cta",
            "props": {
              "title": "Free shipping over $75",
              "subtitle": "Plus 30-day no-questions returns.",
              "buttonText": "Shop now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s6-6",
            "type": "newsletter",
            "props": {
              "title": "Be first to new drops",
              "subtitle": "Limited editions sell out in hours. Don't miss the next one.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s6-7",
            "type": "footer",
            "props": {
              "brand": "Maison Verde",
              "tagline": "Sustainable home goods for the conscious modern home.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-ecommerce-2",
    "name": "Northpeak — Ecommerce",
    "description": "Performance outdoor gear for serious adventurers.",
    "category": "Ecommerce",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-ecommerce-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s7-1",
            "type": "navbar",
            "props": {
              "brand": "Northpeak",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s7-2",
            "type": "hero",
            "props": {
              "eyebrow": "Built for the mountains",
              "title": "Gear that goes farther than you do.",
              "subtitle": "Field-tested apparel and equipment for skiers, climbers, and hikers worldwide.",
              "buttonText": "Shop new arrivals",
              "buttonHref": "/new",
              "image": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1400&q=80"
            }
          },
          {
            "id": "s7-4",
            "type": "product-grid",
            "props": {
              "title": "Northpeak highlights",
              "products": [
                {
                  "name": "Alpine Shell",
                  "price": "$420",
                  "image": "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800&q=80"
                },
                {
                  "name": "Down Hood",
                  "price": "$310",
                  "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80"
                },
                {
                  "name": "Trail Pant",
                  "price": "$180",
                  "image": "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
                },
                {
                  "name": "Summit Pack",
                  "price": "$240",
                  "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s7-3",
            "type": "features",
            "props": {
              "title": "Engineered for the wild",
              "subtitle": "Every stitch tested in real conditions.",
              "items": [
                {
                  "title": "Lifetime warranty",
                  "description": "If it breaks, we repair or replace it."
                },
                {
                  "title": "Recycled fabrics",
                  "description": "85% of our line uses post-consumer materials."
                },
                {
                  "title": "Fit guarantee",
                  "description": "Free exchanges on size and color."
                }
              ]
            }
          },
          {
            "id": "s7-5",
            "type": "cta",
            "props": {
              "title": "Join the expedition",
              "subtitle": "Members get early access and trail reports.",
              "buttonText": "Become a member",
              "buttonHref": "#"
            }
          },
          {
            "id": "s7-6",
            "type": "footer",
            "props": {
              "brand": "Northpeak",
              "tagline": "Performance outdoor gear for serious adventurers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-ecommerce-3",
    "name": "Lumen Beauty — Ecommerce",
    "description": "Clinically backed skincare with luxury sensibility.",
    "category": "Ecommerce",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-ecommerce-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s8-1",
            "type": "navbar",
            "props": {
              "brand": "Lumen Beauty",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s8-2",
            "type": "hero",
            "props": {
              "eyebrow": "New: Vitamin Serum",
              "title": "Skincare that works. Beautifully.",
              "subtitle": "Clean, clinical formulas powered by peptides and botanicals.",
              "buttonText": "Shop bestsellers",
              "buttonHref": "/shop",
              "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1400&q=80"
            }
          },
          {
            "id": "s8-4",
            "type": "product-grid",
            "props": {
              "title": "Lumen Beauty highlights",
              "products": [
                {
                  "name": "Vitamin C Serum",
                  "price": "$68",
                  "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
                },
                {
                  "name": "Night Cream",
                  "price": "$92",
                  "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80"
                },
                {
                  "name": "Eye Concentrate",
                  "price": "$54",
                  "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
                },
                {
                  "name": "Daily Cleanser",
                  "price": "$36",
                  "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s8-3",
            "type": "features",
            "props": {
              "title": "Why Lumen",
              "subtitle": "Skincare without the trade-offs.",
              "items": [
                {
                  "title": "Dermatologist tested",
                  "description": "Approved by board-certified specialists."
                },
                {
                  "title": "No fillers",
                  "description": "Every ingredient earns its place."
                },
                {
                  "title": "Recyclable packaging",
                  "description": "Glass and aluminum, never plastic."
                }
              ]
            }
          },
          {
            "id": "s8-5",
            "type": "cta",
            "props": {
              "title": "Glow guarantee",
              "subtitle": "See visible results in 30 days or your money back.",
              "buttonText": "Shop now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s8-6",
            "type": "footer",
            "props": {
              "brand": "Lumen Beauty",
              "tagline": "Clinically backed skincare with luxury sensibility.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-ecommerce-4",
    "name": "Atlas Coffee — Ecommerce",
    "description": "Single-origin specialty coffee delivered fresh.",
    "category": "Ecommerce",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-ecommerce-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s9-1",
            "type": "navbar",
            "props": {
              "brand": "Atlas Coffee",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s9-2",
            "type": "hero",
            "props": {
              "eyebrow": "New harvest",
              "title": "Coffee from the world's best farms.",
              "subtitle": "Roasted to order in small batches and shipped within 48 hours.",
              "buttonText": "Start your subscription",
              "buttonHref": "/subscribe",
              "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80"
            }
          },
          {
            "id": "s9-3",
            "type": "features",
            "props": {
              "title": "Coffee with a story",
              "subtitle": "From farm, to roastery, to your door.",
              "items": [
                {
                  "title": "Direct trade",
                  "description": "We pay farmers 2x the fair-trade minimum."
                },
                {
                  "title": "Roasted to order",
                  "description": "Coffee leaves our roastery within 24 hours."
                },
                {
                  "title": "Always seasonal",
                  "description": "Beans rotate with the harvest, just like wine."
                }
              ]
            }
          },
          {
            "id": "s9-4",
            "type": "product-grid",
            "props": {
              "title": "Atlas Coffee highlights",
              "products": [
                {
                  "name": "Ethiopia Yirgacheffe",
                  "price": "$22",
                  "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                },
                {
                  "name": "Colombia Huila",
                  "price": "$20",
                  "image": "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=80"
                },
                {
                  "name": "Kenya Nyeri",
                  "price": "$24",
                  "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80"
                },
                {
                  "name": "Guatemala Antigua",
                  "price": "$21",
                  "image": "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s9-5",
            "type": "cta",
            "props": {
              "title": "Try your first bag for $1",
              "subtitle": "Skip or cancel anytime. Free shipping always.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s9-6",
            "type": "footer",
            "props": {
              "brand": "Atlas Coffee",
              "tagline": "Single-origin specialty coffee delivered fresh.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-ecommerce-5",
    "name": "Petra Jewelry — Ecommerce",
    "description": "Heirloom-quality fine jewelry, made to be worn daily.",
    "category": "Ecommerce",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-ecommerce-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s10-1",
            "type": "navbar",
            "props": {
              "brand": "Petra Jewelry",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s10-2",
            "type": "hero",
            "props": {
              "eyebrow": "Handcrafted in Italy",
              "title": "Pieces you will pass down.",
              "subtitle": "Solid gold and ethical diamonds, designed for everyday elegance.",
              "buttonText": "Shop the collection",
              "buttonHref": "/shop",
              "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80"
            }
          },
          {
            "id": "s10-3",
            "type": "features",
            "props": {
              "title": "Quality you can feel",
              "subtitle": "Every piece comes with a lifetime warranty.",
              "items": [
                {
                  "title": "Solid 18k gold",
                  "description": "Never plated, never hollow."
                },
                {
                  "title": "Ethical diamonds",
                  "description": "Lab grown and conflict-free."
                },
                {
                  "title": "Free engraving",
                  "description": "Personalize any piece at no extra cost."
                }
              ]
            }
          },
          {
            "id": "s10-4",
            "type": "product-grid",
            "props": {
              "title": "Petra Jewelry highlights",
              "products": [
                {
                  "name": "Petra Hoop",
                  "price": "$680",
                  "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
                },
                {
                  "name": "Eternity Band",
                  "price": "$1,240",
                  "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                },
                {
                  "name": "Solitaire Necklace",
                  "price": "$890",
                  "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                },
                {
                  "name": "Signet Ring",
                  "price": "$540",
                  "image": "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s10-5",
            "type": "cta",
            "props": {
              "title": "Visit our flagship",
              "subtitle": "Book a private appointment in Milan, NY, or Tokyo.",
              "buttonText": "Book appointment",
              "buttonHref": "#"
            }
          },
          {
            "id": "s10-6",
            "type": "footer",
            "props": {
              "brand": "Petra Jewelry",
              "tagline": "Heirloom-quality fine jewelry, made to be worn daily.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-portfolio-1",
    "name": "Aiko Tanaka — Portfolio",
    "description": "Independent product designer working with ambitious teams.",
    "category": "Portfolio",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-portfolio-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s11-1",
            "type": "navbar",
            "props": {
              "brand": "Aiko Tanaka",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s11-2",
            "type": "hero",
            "props": {
              "eyebrow": "Product Designer · Tokyo",
              "title": "Designing software people love to use.",
              "subtitle": "Currently designing at Stripe. Previously at Linear, Figma, and Airbnb.",
              "buttonText": "View selected work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
            }
          },
          {
            "id": "s11-3",
            "type": "features",
            "props": {
              "title": "Selected work",
              "subtitle": "A small selection of recent projects.",
              "items": [
                {
                  "title": "Linear · Cycles",
                  "description": "Reimagining how product teams plan and ship work."
                },
                {
                  "title": "Figma · Variables",
                  "description": "Bringing design tokens to half a million designers."
                },
                {
                  "title": "Airbnb · Trips",
                  "description": "Designing the next generation of host experiences."
                }
              ]
            }
          },
          {
            "id": "s11-4",
            "type": "value-grid",
            "props": {
              "title": "Process",
              "animate": true,
              "values": [
                {
                  "title": "Listen",
                  "description": "I start every project by understanding people and constraints."
                },
                {
                  "title": "Sketch",
                  "description": "I move quickly through low-fi explorations to find the right idea."
                },
                {
                  "title": "Ship",
                  "description": "I work end to end, from research to pixel-perfect handoff."
                }
              ]
            }
          },
          {
            "id": "s11-5",
            "type": "cta",
            "props": {
              "title": "Have a project in mind?",
              "subtitle": "Currently booking engagements for Q3.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s11-6",
            "type": "footer",
            "props": {
              "brand": "Aiko Tanaka",
              "tagline": "Independent product designer working with ambitious teams.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-portfolio-2",
    "name": "Marco Bianchi — Portfolio",
    "description": "Editorial photographer based in Milan and Paris.",
    "category": "Portfolio",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-portfolio-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s12-1",
            "type": "navbar",
            "props": {
              "brand": "Marco Bianchi",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s12-2",
            "type": "hero",
            "props": {
              "eyebrow": "Photographer · Milan",
              "title": "Light, form, and the people in between.",
              "subtitle": "Editorial and commercial photography for Vogue, AnOther, and Aesop.",
              "buttonText": "View portfolio",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1400&q=80"
            }
          },
          {
            "id": "s12-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Vogue Italia · 2025",
                  "price": "Editorial",
                  "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                },
                {
                  "name": "Aesop Campaign",
                  "price": "Commercial",
                  "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                },
                {
                  "name": "AnOther Magazine",
                  "price": "Editorial",
                  "image": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80"
                },
                {
                  "name": "Personal · Tokyo",
                  "price": "Series",
                  "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s12-4",
            "type": "cta",
            "props": {
              "title": "Available for commissions",
              "subtitle": "Editorial, fashion, and brand campaigns worldwide.",
              "buttonText": "Inquire",
              "buttonHref": "#"
            }
          },
          {
            "id": "s12-5",
            "type": "footer",
            "props": {
              "brand": "Marco Bianchi",
              "tagline": "Editorial photographer based in Milan and Paris.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-portfolio-3",
    "name": "Nora Field — Portfolio",
    "description": "Brand designer crafting identities for cultural brands.",
    "category": "Portfolio",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-portfolio-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s13-1",
            "type": "navbar",
            "props": {
              "brand": "Nora Field",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s13-2",
            "type": "hero",
            "props": {
              "eyebrow": "Independent Studio",
              "title": "Identity systems with a point of view.",
              "subtitle": "I help founders and creative directors shape brands that mean something.",
              "buttonText": "See selected projects",
              "buttonHref": "/projects",
              "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
            }
          },
          {
            "id": "s13-4",
            "type": "value-grid",
            "props": {
              "title": "Services",
              "animate": true,
              "values": [
                {
                  "title": "Brand identity",
                  "description": "Naming, logo, type, color, and the system around it."
                },
                {
                  "title": "Art direction",
                  "description": "Photography, packaging, and campaign direction."
                },
                {
                  "title": "Web & motion",
                  "description": "Sites and motion that bring the brand to life."
                }
              ]
            }
          },
          {
            "id": "s13-3",
            "type": "features",
            "props": {
              "title": "Recent work",
              "subtitle": "Quiet brands with loud opinions.",
              "items": [
                {
                  "title": "Maru Coffee",
                  "description": "A new identity system for a third-wave roastery."
                },
                {
                  "title": "Atelier Verde",
                  "description": "Packaging and direction for a sustainable home brand."
                },
                {
                  "title": "Ostro Restaurant",
                  "description": "Brand language for a Michelin-starred destination."
                }
              ]
            }
          },
          {
            "id": "s13-5",
            "type": "cta",
            "props": {
              "title": "Let's build something memorable",
              "subtitle": "Booking new projects starting in spring.",
              "buttonText": "Start a project",
              "buttonHref": "#"
            }
          },
          {
            "id": "s13-6",
            "type": "footer",
            "props": {
              "brand": "Nora Field",
              "tagline": "Brand designer crafting identities for cultural brands.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-portfolio-4",
    "name": "Yuki Sato — Portfolio",
    "description": "Frontend engineer building delightful interfaces.",
    "category": "Portfolio",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-portfolio-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s14-1",
            "type": "navbar",
            "props": {
              "brand": "Yuki Sato",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s14-2",
            "type": "hero",
            "props": {
              "eyebrow": "Engineer · Berlin",
              "title": "I build interfaces that feel alive.",
              "subtitle": "Frontend engineer specializing in design systems, motion, and performance.",
              "buttonText": "See my work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1200&q=80"
            }
          },
          {
            "id": "s14-3",
            "type": "features",
            "props": {
              "title": "What I do",
              "subtitle": "Specializing in the details others overlook.",
              "items": [
                {
                  "title": "Design systems",
                  "description": "Scalable component libraries for product teams."
                },
                {
                  "title": "Motion engineering",
                  "description": "Buttery animations that elevate the experience."
                },
                {
                  "title": "Performance",
                  "description": "Sub-second load times across every device."
                }
              ]
            }
          },
          {
            "id": "s14-4",
            "type": "cta",
            "props": {
              "title": "Open to new opportunities",
              "subtitle": "Senior IC roles at design-led product companies.",
              "buttonText": "Get my resume",
              "buttonHref": "#"
            }
          },
          {
            "id": "s14-5",
            "type": "footer",
            "props": {
              "brand": "Yuki Sato",
              "tagline": "Frontend engineer building delightful interfaces.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-portfolio-5",
    "name": "Ezra Cole — Portfolio",
    "description": "Director and motion designer for brands and music.",
    "category": "Portfolio",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-portfolio-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s15-1",
            "type": "navbar",
            "props": {
              "brand": "Ezra Cole",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s15-2",
            "type": "hero",
            "props": {
              "eyebrow": "Director · Reel 2026",
              "title": "Telling stories in motion.",
              "subtitle": "Director and motion designer working with global brands and recording artists.",
              "buttonText": "Watch the reel",
              "buttonHref": "/reel",
              "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80"
            }
          },
          {
            "id": "s15-3",
            "type": "value-grid",
            "props": {
              "title": "Selected clients",
              "animate": true,
              "values": [
                {
                  "title": "Apple",
                  "description": "Motion identity for the Vision Pro launch."
                },
                {
                  "title": "Universal Music",
                  "description": "Direction for two top-10 music videos."
                },
                {
                  "title": "Nike",
                  "description": "Olympic broadcast package and stadium loops."
                }
              ]
            }
          },
          {
            "id": "s15-4",
            "type": "cta",
            "props": {
              "title": "Have a film in mind?",
              "subtitle": "Currently accepting select projects through agents.",
              "buttonText": "Reach out",
              "buttonHref": "#"
            }
          },
          {
            "id": "s15-5",
            "type": "footer",
            "props": {
              "brand": "Ezra Cole",
              "tagline": "Director and motion designer for brands and music.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-agency-1",
    "name": "North & Co — Agency",
    "description": "Brand and digital agency for ambitious founders.",
    "category": "Agency",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-agency-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s16-1",
            "type": "navbar",
            "props": {
              "brand": "North & Co",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s16-2",
            "type": "hero",
            "props": {
              "eyebrow": "Independent · Est. 2014",
              "title": "Brands built to outlast trends.",
              "subtitle": "We partner with founders to build brands, products, and the systems that scale them.",
              "buttonText": "See our work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
            }
          },
          {
            "id": "s16-3",
            "type": "features",
            "props": {
              "title": "What we do",
              "subtitle": "Strategy. Brand. Product.",
              "items": [
                {
                  "title": "Brand strategy",
                  "description": "Positioning, naming, and narrative that earns attention."
                },
                {
                  "title": "Visual identity",
                  "description": "Identity systems engineered to flex across every channel."
                },
                {
                  "title": "Digital products",
                  "description": "Websites and apps that turn vision into traction."
                }
              ]
            }
          },
          {
            "id": "s16-4",
            "type": "value-grid",
            "props": {
              "title": "Trusted by",
              "animate": true,
              "values": [
                {
                  "title": "Y Combinator",
                  "description": "Brand work for 40+ portfolio companies."
                },
                {
                  "title": "Sequoia",
                  "description": "Identity and product design for select investments."
                },
                {
                  "title": "Fortune 100",
                  "description": "Selected partnerships with global enterprises."
                }
              ]
            }
          },
          {
            "id": "s16-5",
            "type": "cta",
            "props": {
              "title": "Have a brief?",
              "subtitle": "We typically respond within one business day.",
              "buttonText": "Start a project",
              "buttonHref": "#"
            }
          },
          {
            "id": "s16-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the North & Co team directly.",
              "email": "hello@north-co.com"
            }
          },
          {
            "id": "s16-7",
            "type": "footer",
            "props": {
              "brand": "North & Co",
              "tagline": "Brand and digital agency for ambitious founders.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-agency-2",
    "name": "Loom Studio — Agency",
    "description": "Brand-first creative studio in Brooklyn and London.",
    "category": "Agency",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-agency-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s17-1",
            "type": "navbar",
            "props": {
              "brand": "Loom Studio",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s17-2",
            "type": "hero",
            "props": {
              "eyebrow": "Brand · Digital · Film",
              "title": "A studio for brands that mean something.",
              "subtitle": "We craft identities, sites, and films for brands ready to lead their category.",
              "buttonText": "View case studies",
              "buttonHref": "/case-studies",
              "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80"
            }
          },
          {
            "id": "s17-3",
            "type": "features",
            "props": {
              "title": "Disciplines",
              "subtitle": "A focused team across three core practices.",
              "items": [
                {
                  "title": "Identity",
                  "description": "Brand systems and visual languages."
                },
                {
                  "title": "Product",
                  "description": "Sites, apps, and digital experiences."
                },
                {
                  "title": "Film",
                  "description": "Brand films and campaign content."
                }
              ]
            }
          },
          {
            "id": "s17-4",
            "type": "cta",
            "props": {
              "title": "Let's talk",
              "subtitle": "Tell us about your brand and the world you want to build.",
              "buttonText": "Start a conversation",
              "buttonHref": "#"
            }
          },
          {
            "id": "s17-5",
            "type": "newsletter",
            "props": {
              "title": "The Loom dispatch",
              "subtitle": "A monthly note on craft, culture, and the work we love.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s17-6",
            "type": "footer",
            "props": {
              "brand": "Loom Studio",
              "tagline": "Brand-first creative studio in Brooklyn and London.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-agency-3",
    "name": "Hyperdraft — Agency",
    "description": "Performance marketing partner for ecommerce brands.",
    "category": "Agency",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-agency-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s18-1",
            "type": "navbar",
            "props": {
              "brand": "Hyperdraft",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s18-2",
            "type": "hero",
            "props": {
              "eyebrow": "Growth Partners",
              "title": "We grow ecommerce brands. Profitably.",
              "subtitle": "Full-funnel performance marketing for $1M to $100M+ DTC brands.",
              "buttonText": "Get a free audit",
              "buttonHref": "/audit",
              "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
            }
          },
          {
            "id": "s18-4",
            "type": "value-grid",
            "props": {
              "title": "Results we've delivered",
              "animate": true,
              "values": [
                {
                  "title": "+312% ROAS",
                  "description": "Average improvement after 90 days."
                },
                {
                  "title": "$420M",
                  "description": "Tracked revenue generated for clients to date."
                },
                {
                  "title": "94 NPS",
                  "description": "Best-in-class client satisfaction."
                }
              ]
            }
          },
          {
            "id": "s18-3",
            "type": "features",
            "props": {
              "title": "How we drive growth",
              "subtitle": "A modern partner for modern brands.",
              "items": [
                {
                  "title": "Paid social",
                  "description": "Meta, TikTok, and Pinterest creative built for scale."
                },
                {
                  "title": "Lifecycle",
                  "description": "Email and SMS that compound revenue every month."
                },
                {
                  "title": "Creative studio",
                  "description": "High-velocity content tested daily across channels."
                }
              ]
            }
          },
          {
            "id": "s18-5",
            "type": "cta",
            "props": {
              "title": "Free 30-minute audit",
              "subtitle": "We'll find six-figures of upside in your account or you don't pay.",
              "buttonText": "Book my audit",
              "buttonHref": "#"
            }
          },
          {
            "id": "s18-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Hyperdraft team directly.",
              "email": "hello@hyperdraft.com"
            }
          },
          {
            "id": "s18-7",
            "type": "footer",
            "props": {
              "brand": "Hyperdraft",
              "tagline": "Performance marketing partner for ecommerce brands.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-agency-4",
    "name": "Field & Fox — Agency",
    "description": "Independent design agency for cultural brands.",
    "category": "Agency",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-agency-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s19-1",
            "type": "navbar",
            "props": {
              "brand": "Field & Fox",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s19-2",
            "type": "hero",
            "props": {
              "eyebrow": "Selected · 2025",
              "title": "Design that earns attention.",
              "subtitle": "A small studio of senior designers, writers, and engineers.",
              "buttonText": "See selected work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80"
            }
          },
          {
            "id": "s19-3",
            "type": "features",
            "props": {
              "title": "Capabilities",
              "subtitle": "Strategy through to launch.",
              "items": [
                {
                  "title": "Positioning",
                  "description": "Find a sharper way to talk about what you do."
                },
                {
                  "title": "Identity",
                  "description": "Brand systems that flex across every touchpoint."
                },
                {
                  "title": "Web",
                  "description": "Editorial sites that perform like products."
                }
              ]
            }
          },
          {
            "id": "s19-4",
            "type": "cta",
            "props": {
              "title": "Tell us what you're building",
              "subtitle": "We work with 8 clients per year. Currently booking Q4.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s19-5",
            "type": "footer",
            "props": {
              "brand": "Field & Fox",
              "tagline": "Independent design agency for cultural brands.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-agency-5",
    "name": "Outline Agency — Agency",
    "description": "A creative agency for technology brands.",
    "category": "Agency",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-agency-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s20-1",
            "type": "navbar",
            "props": {
              "brand": "Outline Agency",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s20-2",
            "type": "hero",
            "props": {
              "eyebrow": "Tech-first · Est. 2017",
              "title": "The agency tech brands actually want to work with.",
              "subtitle": "Brand, product marketing, and content for the world's most ambitious technology companies.",
              "buttonText": "View clients",
              "buttonHref": "/clients",
              "image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=80"
            }
          },
          {
            "id": "s20-3",
            "type": "features",
            "props": {
              "title": "Why Outline",
              "subtitle": "Built by ex-operators from Stripe, Notion, and Linear.",
              "items": [
                {
                  "title": "Operator DNA",
                  "description": "We've worked in-house at the brands you admire."
                },
                {
                  "title": "Speed",
                  "description": "First drafts in days, not weeks."
                },
                {
                  "title": "Ownership",
                  "description": "Senior partners on every project, every day."
                }
              ]
            }
          },
          {
            "id": "s20-4",
            "type": "cta",
            "props": {
              "title": "Ready when you are",
              "subtitle": "Tell us about your goals and we'll send a tailored proposal.",
              "buttonText": "Start a project",
              "buttonHref": "#"
            }
          },
          {
            "id": "s20-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Outline Agency team directly.",
              "email": "hello@outline-agency.com"
            }
          },
          {
            "id": "s20-6",
            "type": "footer",
            "props": {
              "brand": "Outline Agency",
              "tagline": "A creative agency for technology brands.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-restaurant-1",
    "name": "Ostro — Restaurant",
    "description": "Coastal Italian dining in the heart of the city.",
    "category": "Restaurant",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-restaurant-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s21-1",
            "type": "navbar",
            "props": {
              "brand": "Ostro",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s21-2",
            "type": "hero",
            "props": {
              "eyebrow": "Now reserving · Spring menu",
              "title": "Coastal Italy, in the heart of the city.",
              "subtitle": "A wood-fired kitchen serving handmade pasta and the freshest catch of the day.",
              "buttonText": "Reserve a table",
              "buttonHref": "/reserve",
              "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80"
            }
          },
          {
            "id": "s21-3",
            "type": "features",
            "props": {
              "title": "A taste of the coast",
              "subtitle": "A menu that changes with the tide.",
              "items": [
                {
                  "title": "Handmade pasta",
                  "description": "Rolled and cut every morning by our pasta team."
                },
                {
                  "title": "Wood-fired kitchen",
                  "description": "Olive wood for that unmistakable char."
                },
                {
                  "title": "Natural wines",
                  "description": "A 200-bottle list of small Italian producers."
                }
              ]
            }
          },
          {
            "id": "s21-4",
            "type": "value-grid",
            "props": {
              "title": "Ostro experiences",
              "animate": true,
              "values": [
                {
                  "title": "Tasting menu",
                  "description": "Seven courses paired with wine, $145pp."
                },
                {
                  "title": "Private dining",
                  "description": "Our cellar room seats 14 for special occasions."
                },
                {
                  "title": "Pasta classes",
                  "description": "Saturdays at 11am, hosted by Chef Bianchi."
                }
              ]
            }
          },
          {
            "id": "s21-5",
            "type": "cta",
            "props": {
              "title": "Tonight's menu awaits",
              "subtitle": "Walk-ins welcome at the bar. Reserve for the dining room.",
              "buttonText": "Reserve now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s21-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Ostro team directly.",
              "email": "hello@ostro.com"
            }
          },
          {
            "id": "s21-7",
            "type": "footer",
            "props": {
              "brand": "Ostro",
              "tagline": "Coastal Italian dining in the heart of the city.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-restaurant-2",
    "name": "Kō Ramen — Restaurant",
    "description": "A modern ramen-ya from Osaka, now in your city.",
    "category": "Restaurant",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-restaurant-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s22-1",
            "type": "navbar",
            "props": {
              "brand": "Kō Ramen",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s22-2",
            "type": "hero",
            "props": {
              "eyebrow": "Now open in Brooklyn",
              "title": "Ramen, the way Osaka makes it.",
              "subtitle": "40-hour tonkotsu broth, hand-pulled noodles, and seasonal toppings.",
              "buttonText": "See the menu",
              "buttonHref": "/menu",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1400&q=80"
            }
          },
          {
            "id": "s22-3",
            "type": "features",
            "props": {
              "title": "Crafted with patience",
              "subtitle": "Every bowl, four decades in the making.",
              "items": [
                {
                  "title": "40-hour broth",
                  "description": "Slow-simmered pork bones for unmatched depth."
                },
                {
                  "title": "House noodles",
                  "description": "Pulled in-house every morning by our noodle master."
                },
                {
                  "title": "Seasonal toppings",
                  "description": "Local produce, sourced weekly from our farm partners."
                }
              ]
            }
          },
          {
            "id": "s22-4",
            "type": "cta",
            "props": {
              "title": "No reservations · No wait",
              "subtitle": "Just walk in. We'll get you slurping in 12 minutes.",
              "buttonText": "See hours",
              "buttonHref": "#"
            }
          },
          {
            "id": "s22-5",
            "type": "footer",
            "props": {
              "brand": "Kō Ramen",
              "tagline": "A modern ramen-ya from Osaka, now in your city.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-restaurant-3",
    "name": "Verde Café — Restaurant",
    "description": "Plant-based all-day café and wine bar.",
    "category": "Restaurant",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-restaurant-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s23-1",
            "type": "navbar",
            "props": {
              "brand": "Verde Café",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s23-2",
            "type": "hero",
            "props": {
              "eyebrow": "Plant-based · All day",
              "title": "Plants, wine, and good company.",
              "subtitle": "A neighborhood café serving bright, vegetable-forward food from morning to midnight.",
              "buttonText": "View menu",
              "buttonHref": "/menu",
              "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1400&q=80"
            }
          },
          {
            "id": "s23-3",
            "type": "features",
            "props": {
              "title": "What we serve",
              "subtitle": "Cooking that celebrates vegetables.",
              "items": [
                {
                  "title": "Morning",
                  "description": "Pastries, sourdough toasts, and small-batch coffee."
                },
                {
                  "title": "Lunch",
                  "description": "Grain bowls, seasonal salads, and house-made pastas."
                },
                {
                  "title": "Evening",
                  "description": "Sharing plates and a 60-bottle natural wine list."
                }
              ]
            }
          },
          {
            "id": "s23-4",
            "type": "cta",
            "props": {
              "title": "Reservations recommended",
              "subtitle": "Walk-ins always welcome at the bar.",
              "buttonText": "Book a table",
              "buttonHref": "#"
            }
          },
          {
            "id": "s23-5",
            "type": "newsletter",
            "props": {
              "title": "What's new at Verde",
              "subtitle": "New menus, supper clubs, and quiet announcements.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s23-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Verde Café team directly.",
              "email": "hello@verde-caf.com"
            }
          },
          {
            "id": "s23-7",
            "type": "footer",
            "props": {
              "brand": "Verde Café",
              "tagline": "Plant-based all-day café and wine bar.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-restaurant-4",
    "name": "Brasa Steakhouse — Restaurant",
    "description": "A modern steakhouse in the South American tradition.",
    "category": "Restaurant",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-restaurant-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s24-1",
            "type": "navbar",
            "props": {
              "brand": "Brasa Steakhouse",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s24-2",
            "type": "hero",
            "props": {
              "eyebrow": "Open fire dining",
              "title": "Fire, smoke, and exceptional cuts.",
              "subtitle": "A modern steakhouse cooking dry-aged beef over Argentinian quebracho coals.",
              "buttonText": "Reserve",
              "buttonHref": "/reserve",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80"
            }
          },
          {
            "id": "s24-3",
            "type": "features",
            "props": {
              "title": "A different kind of steakhouse",
              "subtitle": "Old-world technique. Modern hospitality.",
              "items": [
                {
                  "title": "Dry-aged in-house",
                  "description": "A 1,200 sq ft cellar aging beef up to 90 days."
                },
                {
                  "title": "Quebracho coals",
                  "description": "Imported from Patagonia for unmatched flavor."
                },
                {
                  "title": "500-bottle cellar",
                  "description": "A deep list of Malbec, Cabernet, and Rhône wines."
                }
              ]
            }
          },
          {
            "id": "s24-4",
            "type": "cta",
            "props": {
              "title": "Tonight's table awaits",
              "subtitle": "Open Tuesday – Sunday from 5pm.",
              "buttonText": "Book your table",
              "buttonHref": "#"
            }
          },
          {
            "id": "s24-5",
            "type": "footer",
            "props": {
              "brand": "Brasa Steakhouse",
              "tagline": "A modern steakhouse in the South American tradition.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-restaurant-5",
    "name": "Daun Bakery — Restaurant",
    "description": "A neighborhood bakery and bread school.",
    "category": "Restaurant",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-restaurant-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s25-1",
            "type": "navbar",
            "props": {
              "brand": "Daun Bakery",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s25-2",
            "type": "hero",
            "props": {
              "eyebrow": "Bread · Pastry · Coffee",
              "title": "Real bread. Made by hand. Every day.",
              "subtitle": "A neighborhood bakery using stoneground flour, wild yeast, and a 36-hour cold ferment.",
              "buttonText": "See today's bake",
              "buttonHref": "/bake",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80"
            }
          },
          {
            "id": "s25-3",
            "type": "features",
            "props": {
              "title": "Why our bread tastes different",
              "subtitle": "Time, temperature, and care.",
              "items": [
                {
                  "title": "Stoneground flour",
                  "description": "Milled fresh weekly from heirloom grains."
                },
                {
                  "title": "Wild fermentation",
                  "description": "No commercial yeast, only our 12-year sourdough."
                },
                {
                  "title": "Wood-fired oven",
                  "description": "A custom hearth that gives crust like nothing else."
                }
              ]
            }
          },
          {
            "id": "s25-4",
            "type": "cta",
            "props": {
              "title": "Bread classes monthly",
              "subtitle": "Spend a Saturday baking with our head baker.",
              "buttonText": "Reserve a spot",
              "buttonHref": "#"
            }
          },
          {
            "id": "s25-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Daun Bakery team directly.",
              "email": "hello@daun-bakery.com"
            }
          },
          {
            "id": "s25-6",
            "type": "footer",
            "props": {
              "brand": "Daun Bakery",
              "tagline": "A neighborhood bakery and bread school.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-gym-1",
    "name": "Forge Athletic — Gym",
    "description": "Strength-first training club for serious athletes.",
    "category": "Gym",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-gym-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s26-1",
            "type": "navbar",
            "props": {
              "brand": "Forge Athletic",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s26-2",
            "type": "hero",
            "props": {
              "eyebrow": "Open 24/7",
              "title": "Built for the work. Not the mirror.",
              "subtitle": "A strength-first training club with the equipment and coaches to get you stronger.",
              "buttonText": "Start your free week",
              "buttonHref": "/trial",
              "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80"
            }
          },
          {
            "id": "s26-3",
            "type": "features",
            "props": {
              "title": "Why Forge",
              "subtitle": "Serious tools for serious training.",
              "items": [
                {
                  "title": "40 lifting platforms",
                  "description": "No waiting. No nonsense. Just lift."
                },
                {
                  "title": "Coached programs",
                  "description": "Strength, hypertrophy, and powerbuilding tracks."
                },
                {
                  "title": "Recovery suite",
                  "description": "Sauna, ice bath, and contrast showers included."
                }
              ]
            }
          },
          {
            "id": "s26-4",
            "type": "cta",
            "props": {
              "title": "Train one week. On us.",
              "subtitle": "Full access. No card required.",
              "buttonText": "Claim free week",
              "buttonHref": "#"
            }
          },
          {
            "id": "s26-5",
            "type": "footer",
            "props": {
              "brand": "Forge Athletic",
              "tagline": "Strength-first training club for serious athletes.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-gym-2",
    "name": "Rise Yoga — Gym",
    "description": "A modern studio for movement, breath, and stillness.",
    "category": "Gym",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-gym-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s27-1",
            "type": "navbar",
            "props": {
              "brand": "Rise Yoga",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s27-2",
            "type": "hero",
            "props": {
              "eyebrow": "Vinyasa · Yin · Hot",
              "title": "Find strength in stillness.",
              "subtitle": "A modern yoga studio offering 60+ weekly classes for every level.",
              "buttonText": "See class schedule",
              "buttonHref": "/schedule",
              "image": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=80"
            }
          },
          {
            "id": "s27-3",
            "type": "features",
            "props": {
              "title": "Practice with us",
              "subtitle": "Welcoming, intentional, and grounded.",
              "items": [
                {
                  "title": "Daily classes",
                  "description": "From sunrise vinyasa to candle-lit yin."
                },
                {
                  "title": "Workshops",
                  "description": "Monthly deep dives with renowned guest teachers."
                },
                {
                  "title": "Teacher training",
                  "description": "200hr and 500hr Yoga Alliance certifications."
                }
              ]
            }
          },
          {
            "id": "s27-4",
            "type": "cta",
            "props": {
              "title": "New student offer",
              "subtitle": "Two weeks of unlimited yoga for $39.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s27-5",
            "type": "footer",
            "props": {
              "brand": "Rise Yoga",
              "tagline": "A modern studio for movement, breath, and stillness.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-gym-3",
    "name": "Pace CrossTrain — Gym",
    "description": "Group training built around community and progress.",
    "category": "Gym",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-gym-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s28-1",
            "type": "navbar",
            "props": {
              "brand": "Pace CrossTrain",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s28-2",
            "type": "hero",
            "props": {
              "eyebrow": "Group training · Real coaches",
              "title": "Train hard. Together.",
              "subtitle": "Coach-led group classes that combine strength, conditioning, and community.",
              "buttonText": "Try a free class",
              "buttonHref": "/trial",
              "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80"
            }
          },
          {
            "id": "s28-3",
            "type": "value-grid",
            "props": {
              "title": "Why Pace works",
              "animate": true,
              "values": [
                {
                  "title": "Smart programming",
                  "description": "A 12-week cycle that gets results, not injuries."
                },
                {
                  "title": "Real coaches",
                  "description": "Every class is led by a certified strength coach."
                },
                {
                  "title": "Real community",
                  "description": "Members who hold each other accountable."
                }
              ]
            }
          },
          {
            "id": "s28-4",
            "type": "cta",
            "props": {
              "title": "First class on us",
              "subtitle": "Book online and just show up.",
              "buttonText": "Book a class",
              "buttonHref": "#"
            }
          },
          {
            "id": "s28-5",
            "type": "footer",
            "props": {
              "brand": "Pace CrossTrain",
              "tagline": "Group training built around community and progress.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-gym-4",
    "name": "Apex Boxing — Gym",
    "description": "A modern boxing club for fitness and fight prep.",
    "category": "Gym",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-gym-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s29-1",
            "type": "navbar",
            "props": {
              "brand": "Apex Boxing",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s29-2",
            "type": "hero",
            "props": {
              "eyebrow": "Beginners welcome",
              "title": "Box like a fighter. Train like an athlete.",
              "subtitle": "A modern boxing gym offering technical, conditioning, and sparring classes.",
              "buttonText": "Try a free class",
              "buttonHref": "/trial",
              "image": "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1400&q=80"
            }
          },
          {
            "id": "s29-3",
            "type": "features",
            "props": {
              "title": "Train at every level",
              "subtitle": "From your first jab to your first fight.",
              "items": [
                {
                  "title": "Fundamentals",
                  "description": "Footwork, stance, and the six basic punches."
                },
                {
                  "title": "Conditioning",
                  "description": "Bag, mitt, and rope work to build the engine."
                },
                {
                  "title": "Sparring",
                  "description": "Coached, controlled, and only when you're ready."
                }
              ]
            }
          },
          {
            "id": "s29-4",
            "type": "cta",
            "props": {
              "title": "Step in the ring",
              "subtitle": "Your first class is on us. No experience required.",
              "buttonText": "Book free class",
              "buttonHref": "#"
            }
          },
          {
            "id": "s29-5",
            "type": "footer",
            "props": {
              "brand": "Apex Boxing",
              "tagline": "A modern boxing club for fitness and fight prep.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-gym-5",
    "name": "Loop Cycling — Gym",
    "description": "A premium indoor cycling experience.",
    "category": "Gym",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-gym-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s30-1",
            "type": "navbar",
            "props": {
              "brand": "Loop Cycling",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s30-2",
            "type": "hero",
            "props": {
              "eyebrow": "Ride · Sweat · Repeat",
              "title": "The hardest 45 minutes of your day.",
              "subtitle": "High-energy indoor cycling classes set to a soundtrack you'll want to hear again.",
              "buttonText": "Book a ride",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=1400&q=80"
            }
          },
          {
            "id": "s30-3",
            "type": "features",
            "props": {
              "title": "A different kind of class",
              "subtitle": "Where music meets training.",
              "items": [
                {
                  "title": "Real instructors",
                  "description": "Coaches who care about your form and your progress."
                },
                {
                  "title": "Custom soundtracks",
                  "description": "Each class scored to push you through every climb."
                },
                {
                  "title": "Performance metrics",
                  "description": "Track every ride with stats sent to your phone."
                }
              ]
            }
          },
          {
            "id": "s30-4",
            "type": "cta",
            "props": {
              "title": "First ride free",
              "subtitle": "Saddle up. We'll take care of the rest.",
              "buttonText": "Reserve your bike",
              "buttonHref": "#"
            }
          },
          {
            "id": "s30-5",
            "type": "footer",
            "props": {
              "brand": "Loop Cycling",
              "tagline": "A premium indoor cycling experience.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-real-estate-1",
    "name": "Marin Estates — Real Estate",
    "description": "A boutique real estate firm specializing in coastal homes.",
    "category": "Real Estate",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-real-estate-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s31-1",
            "type": "navbar",
            "props": {
              "brand": "Marin Estates",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s31-2",
            "type": "hero",
            "props": {
              "eyebrow": "Boutique · By referral",
              "title": "Coastal homes. Considered representation.",
              "subtitle": "A boutique team of agents helping discerning buyers and sellers along the California coast.",
              "buttonText": "View listings",
              "buttonHref": "/listings",
              "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
            }
          },
          {
            "id": "s31-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Cliffside Modern",
                  "price": "$8.4M",
                  "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                },
                {
                  "name": "Hillside Estate",
                  "price": "$6.2M",
                  "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                },
                {
                  "name": "Marin Beach House",
                  "price": "$4.9M",
                  "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                },
                {
                  "name": "Sausalito Cottage",
                  "price": "$2.8M",
                  "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s31-4",
            "type": "cta",
            "props": {
              "title": "Selling soon?",
              "subtitle": "Get a private valuation from a senior partner.",
              "buttonText": "Request valuation",
              "buttonHref": "#"
            }
          },
          {
            "id": "s31-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Marin Estates team directly.",
              "email": "hello@marin-estates.com"
            }
          },
          {
            "id": "s31-6",
            "type": "footer",
            "props": {
              "brand": "Marin Estates",
              "tagline": "A boutique real estate firm specializing in coastal homes.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-real-estate-2",
    "name": "Nordhaus — Real Estate",
    "description": "Modern architectural homes in the Pacific Northwest.",
    "category": "Real Estate",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-real-estate-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s32-1",
            "type": "navbar",
            "props": {
              "brand": "Nordhaus",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s32-2",
            "type": "hero",
            "props": {
              "eyebrow": "Architectural homes",
              "title": "Where design meets place.",
              "subtitle": "A specialty brokerage representing modern and architecturally significant homes.",
              "buttonText": "Browse architectural listings",
              "buttonHref": "/architecture",
              "image": "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?w=1400&q=80"
            }
          },
          {
            "id": "s32-3",
            "type": "features",
            "props": {
              "title": "Specialized representation",
              "subtitle": "Architecture-first marketing for one-of-a-kind properties.",
              "items": [
                {
                  "title": "Architectural photography",
                  "description": "Every listing photographed by a published professional."
                },
                {
                  "title": "Editorial marketing",
                  "description": "Listings featured in Dwell, ArchDaily, and our journal."
                },
                {
                  "title": "Curated buyer network",
                  "description": "Direct relationships with collectors of design."
                }
              ]
            }
          },
          {
            "id": "s32-4",
            "type": "cta",
            "props": {
              "title": "Considering selling?",
              "subtitle": "Schedule a private consultation with a senior advisor.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s32-5",
            "type": "footer",
            "props": {
              "brand": "Nordhaus",
              "tagline": "Modern architectural homes in the Pacific Northwest.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-real-estate-3",
    "name": "Atlas Property — Real Estate",
    "description": "Commercial real estate advisory for ambitious tenants.",
    "category": "Real Estate",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-real-estate-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s33-1",
            "type": "navbar",
            "props": {
              "brand": "Atlas Property",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s33-2",
            "type": "hero",
            "props": {
              "eyebrow": "Tenant representation",
              "title": "The right office. On the right terms.",
              "subtitle": "A commercial brokerage advising growing companies through every move and renewal.",
              "buttonText": "Find your next office",
              "buttonHref": "/search",
              "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
            }
          },
          {
            "id": "s33-3",
            "type": "features",
            "props": {
              "title": "How we help",
              "subtitle": "A full-service partner for fast-growing teams.",
              "items": [
                {
                  "title": "Market intel",
                  "description": "Live data on every neighborhood, every building."
                },
                {
                  "title": "Negotiation",
                  "description": "Average 14% off asking rent over the last 200 deals."
                },
                {
                  "title": "Project management",
                  "description": "From letter of intent to keys in the door."
                }
              ]
            }
          },
          {
            "id": "s33-4",
            "type": "cta",
            "props": {
              "title": "Outgrowing your space?",
              "subtitle": "Talk to an advisor and get a free market briefing.",
              "buttonText": "Book consultation",
              "buttonHref": "#"
            }
          },
          {
            "id": "s33-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Atlas Property team directly.",
              "email": "hello@atlas-property.com"
            }
          },
          {
            "id": "s33-6",
            "type": "footer",
            "props": {
              "brand": "Atlas Property",
              "tagline": "Commercial real estate advisory for ambitious tenants.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-real-estate-4",
    "name": "Vita Living — Real Estate",
    "description": "Luxury rental residences with hotel-grade service.",
    "category": "Real Estate",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-real-estate-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s34-1",
            "type": "navbar",
            "props": {
              "brand": "Vita Living",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s34-2",
            "type": "hero",
            "props": {
              "eyebrow": "Luxury rentals · No commission",
              "title": "Live where the city begins.",
              "subtitle": "Furnished and unfurnished luxury residences with hotel-grade service in 12 cities.",
              "buttonText": "Browse residences",
              "buttonHref": "/residences",
              "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80"
            }
          },
          {
            "id": "s34-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "SoHo Penthouse",
                  "price": "$12,400/mo",
                  "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                },
                {
                  "name": "Kensington Townhouse",
                  "price": "£8,200/mo",
                  "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                },
                {
                  "name": "Marais Loft",
                  "price": "€6,800/mo",
                  "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                },
                {
                  "name": "Aoyama Residence",
                  "price": "¥980,000/mo",
                  "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s34-4",
            "type": "cta",
            "props": {
              "title": "Move-in ready",
              "subtitle": "No broker fees. No surprise charges.",
              "buttonText": "Schedule a tour",
              "buttonHref": "#"
            }
          },
          {
            "id": "s34-5",
            "type": "footer",
            "props": {
              "brand": "Vita Living",
              "tagline": "Luxury rental residences with hotel-grade service.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-real-estate-5",
    "name": "Coastline Realty — Real Estate",
    "description": "Local agents for the homes you actually want.",
    "category": "Real Estate",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-real-estate-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s35-1",
            "type": "navbar",
            "props": {
              "brand": "Coastline Realty",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s35-2",
            "type": "hero",
            "props": {
              "eyebrow": "Local · Independent",
              "title": "Local expertise. Real results.",
              "subtitle": "A community-rooted brokerage with the largest market share in our zip code for 12 years running.",
              "buttonText": "See current listings",
              "buttonHref": "/listings",
              "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80"
            }
          },
          {
            "id": "s35-3",
            "type": "value-grid",
            "props": {
              "title": "Why our clients refer us",
              "animate": true,
              "values": [
                {
                  "title": "#1 in market share",
                  "description": "More homes sold here than any other firm."
                },
                {
                  "title": "4.9 star average",
                  "description": "From over 800 verified reviews."
                },
                {
                  "title": "Local for 30 years",
                  "description": "We know every street and every story."
                }
              ]
            }
          },
          {
            "id": "s35-4",
            "type": "cta",
            "props": {
              "title": "Thinking of moving?",
              "subtitle": "Free home valuation in 60 seconds.",
              "buttonText": "Get my home value",
              "buttonHref": "#"
            }
          },
          {
            "id": "s35-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Coastline Realty team directly.",
              "email": "hello@coastline-realty.com"
            }
          },
          {
            "id": "s35-6",
            "type": "footer",
            "props": {
              "brand": "Coastline Realty",
              "tagline": "Local agents for the homes you actually want.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-beauty-1",
    "name": "Lume Skincare — Beauty",
    "description": "Clean, clinical skincare for radiant skin.",
    "category": "Beauty",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-beauty-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s36-1",
            "type": "navbar",
            "props": {
              "brand": "Lume Skincare",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s36-2",
            "type": "hero",
            "props": {
              "eyebrow": "Clean · Clinical · Effective",
              "title": "Skincare that performs. Beautifully.",
              "subtitle": "Clinically proven formulas with luxurious textures and recyclable packaging.",
              "buttonText": "Shop bestsellers",
              "buttonHref": "/bestsellers",
              "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1400&q=80"
            }
          },
          {
            "id": "s36-3",
            "type": "features",
            "props": {
              "title": "The Lume difference",
              "subtitle": "Skincare without the trade-offs.",
              "items": [
                {
                  "title": "Clinically tested",
                  "description": "Independent trials show measurable results in 28 days."
                },
                {
                  "title": "Clean ingredients",
                  "description": "1,300+ ingredients banned from our formulas."
                },
                {
                  "title": "Refillable",
                  "description": "Every primary container is refillable forever."
                }
              ]
            }
          },
          {
            "id": "s36-4",
            "type": "product-grid",
            "props": {
              "title": "Lume Skincare highlights",
              "products": [
                {
                  "name": "Glow Serum",
                  "price": "$72",
                  "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
                },
                {
                  "name": "Night Cream",
                  "price": "$98",
                  "image": "https://images.unsplash.com/photo-1571781418606-d9c7e1be8a96?w=800&q=80"
                },
                {
                  "name": "Eye Renewal",
                  "price": "$58",
                  "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
                },
                {
                  "name": "Daily Cleanser",
                  "price": "$36",
                  "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s36-5",
            "type": "cta",
            "props": {
              "title": "Try us risk-free",
              "subtitle": "30-day money back, no questions asked.",
              "buttonText": "Shop now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s36-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Lume Skincare team directly.",
              "email": "hello@lume-skincare.com"
            }
          },
          {
            "id": "s36-7",
            "type": "footer",
            "props": {
              "brand": "Lume Skincare",
              "tagline": "Clean, clinical skincare for radiant skin.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-beauty-2",
    "name": "Salon Bisou — Beauty",
    "description": "A modern hair salon and color studio.",
    "category": "Beauty",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-beauty-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s37-1",
            "type": "navbar",
            "props": {
              "brand": "Salon Bisou",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s37-2",
            "type": "hero",
            "props": {
              "eyebrow": "Hair · Color · Care",
              "title": "Hair that turns heads. Color that lasts.",
              "subtitle": "A modern salon specializing in lived-in color, low-maintenance cuts, and gentle care.",
              "buttonText": "Book your appointment",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
            }
          },
          {
            "id": "s37-3",
            "type": "value-grid",
            "props": {
              "title": "What sets us apart",
              "animate": true,
              "values": [
                {
                  "title": "Color specialists",
                  "description": "Every colorist trained in balayage and lived-in color."
                },
                {
                  "title": "Clean haircare",
                  "description": "Ammonia-free color and clean product line throughout."
                },
                {
                  "title": "No upselling",
                  "description": "Honest recommendations, transparent pricing."
                }
              ]
            }
          },
          {
            "id": "s37-4",
            "type": "cta",
            "props": {
              "title": "New client offer",
              "subtitle": "20% off your first color service this month.",
              "buttonText": "Book now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s37-5",
            "type": "footer",
            "props": {
              "brand": "Salon Bisou",
              "tagline": "A modern hair salon and color studio.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-beauty-3",
    "name": "Atelier Nails — Beauty",
    "description": "A luxury nail studio with a clean menu.",
    "category": "Beauty",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-beauty-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s38-1",
            "type": "navbar",
            "props": {
              "brand": "Atelier Nails",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s38-2",
            "type": "hero",
            "props": {
              "eyebrow": "Clean · Considered",
              "title": "Nails that feel as good as they look.",
              "subtitle": "A luxury nail studio using only 10-free, vegan, and cruelty-free polishes.",
              "buttonText": "Book a service",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1400&q=80"
            }
          },
          {
            "id": "s38-3",
            "type": "features",
            "props": {
              "title": "A new standard",
              "subtitle": "Beautiful nails, without the chemicals.",
              "items": [
                {
                  "title": "Clean polish menu",
                  "description": "10-free, vegan, and cruelty-free brands only."
                },
                {
                  "title": "Hospital-grade sterilization",
                  "description": "Tools sterilized to medical standards between every guest."
                },
                {
                  "title": "Trained technicians",
                  "description": "Senior nail artists with 5+ years of experience."
                }
              ]
            }
          },
          {
            "id": "s38-4",
            "type": "cta",
            "props": {
              "title": "Reserve your seat",
              "subtitle": "Same-day appointments available daily.",
              "buttonText": "Book your service",
              "buttonHref": "#"
            }
          },
          {
            "id": "s38-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Atelier Nails team directly.",
              "email": "hello@atelier-nails.com"
            }
          },
          {
            "id": "s38-6",
            "type": "footer",
            "props": {
              "brand": "Atelier Nails",
              "tagline": "A luxury nail studio with a clean menu.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-beauty-4",
    "name": "Parure Cosmetics — Beauty",
    "description": "High-performance, refillable color cosmetics.",
    "category": "Beauty",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-beauty-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s39-1",
            "type": "navbar",
            "props": {
              "brand": "Parure Cosmetics",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s39-2",
            "type": "hero",
            "props": {
              "eyebrow": "Refillable color",
              "title": "Color cosmetics, reimagined.",
              "subtitle": "Pigment-rich formulas in refillable cases, designed to last and to flatter.",
              "buttonText": "Shop the line",
              "buttonHref": "/shop",
              "image": "https://images.unsplash.com/photo-1522335789203-aaa39ad1ee71?w=1400&q=80"
            }
          },
          {
            "id": "s39-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Velvet Lipstick",
                  "price": "$32",
                  "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80"
                },
                {
                  "name": "Soft Focus Foundation",
                  "price": "$48",
                  "image": "https://images.unsplash.com/photo-1631214499843-b9745f2c63d2?w=800&q=80"
                },
                {
                  "name": "Mineral Blush",
                  "price": "$28",
                  "image": "https://images.unsplash.com/photo-1607602132700-068258431c6c?w=800&q=80"
                },
                {
                  "name": "Brow Pomade",
                  "price": "$24",
                  "image": "https://images.unsplash.com/photo-1599733589046-833caccbbd03?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s39-4",
            "type": "cta",
            "props": {
              "title": "Refills are 30% off",
              "subtitle": "Better for your skin. Better for the planet.",
              "buttonText": "Shop refills",
              "buttonHref": "#"
            }
          },
          {
            "id": "s39-5",
            "type": "footer",
            "props": {
              "brand": "Parure Cosmetics",
              "tagline": "High-performance, refillable color cosmetics.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-beauty-5",
    "name": "Maison Spa — Beauty",
    "description": "A modern day spa for restorative treatments.",
    "category": "Beauty",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-beauty-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s40-1",
            "type": "navbar",
            "props": {
              "brand": "Maison Spa",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s40-2",
            "type": "hero",
            "props": {
              "eyebrow": "Day spa · By appointment",
              "title": "A quiet escape, in the middle of the city.",
              "subtitle": "Restorative facials, massage, and body treatments in a calm, modern setting.",
              "buttonText": "Book a treatment",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80"
            }
          },
          {
            "id": "s40-3",
            "type": "features",
            "props": {
              "title": "Treatments",
              "subtitle": "Curated by our master estheticians.",
              "items": [
                {
                  "title": "Signature facials",
                  "description": "60 to 90 minutes of skin transformation."
                },
                {
                  "title": "Therapeutic massage",
                  "description": "Swedish, deep tissue, and prenatal options."
                },
                {
                  "title": "Body rituals",
                  "description": "Scrubs, wraps, and full-body restoration."
                }
              ]
            }
          },
          {
            "id": "s40-4",
            "type": "cta",
            "props": {
              "title": "Gift a moment of calm",
              "subtitle": "Spa gift cards delivered instantly.",
              "buttonText": "Send a gift",
              "buttonHref": "#"
            }
          },
          {
            "id": "s40-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Maison Spa team directly.",
              "email": "hello@maison-spa.com"
            }
          },
          {
            "id": "s40-6",
            "type": "footer",
            "props": {
              "brand": "Maison Spa",
              "tagline": "A modern day spa for restorative treatments.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-medical-1",
    "name": "Northside Health — Medical",
    "description": "Modern primary care, on your schedule.",
    "category": "Medical",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-medical-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s41-1",
            "type": "navbar",
            "props": {
              "brand": "Northside Health",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s41-2",
            "type": "hero",
            "props": {
              "eyebrow": "Primary care, modernized",
              "title": "Healthcare that respects your time.",
              "subtitle": "Same-day visits, dedicated doctors, and a real relationship with your care team.",
              "buttonText": "Become a member",
              "buttonHref": "/join",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
            }
          },
          {
            "id": "s41-3",
            "type": "features",
            "props": {
              "title": "A modern model of care",
              "subtitle": "Time, technology, and trust.",
              "items": [
                {
                  "title": "Same-day visits",
                  "description": "Get an appointment the day you need it."
                },
                {
                  "title": "24/7 messaging",
                  "description": "Reach your care team anytime, day or night."
                },
                {
                  "title": "Longer visits",
                  "description": "45-minute appointments, never 7-minute drive-throughs."
                }
              ]
            }
          },
          {
            "id": "s41-4",
            "type": "cta",
            "props": {
              "title": "Care that's actually convenient",
              "subtitle": "Most major insurance accepted. Membership from $49/month.",
              "buttonText": "Find your doctor",
              "buttonHref": "#"
            }
          },
          {
            "id": "s41-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Northside Health team directly.",
              "email": "hello@northside-health.com"
            }
          },
          {
            "id": "s41-6",
            "type": "footer",
            "props": {
              "brand": "Northside Health",
              "tagline": "Modern primary care, on your schedule.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-medical-2",
    "name": "Bright Smile Dental — Medical",
    "description": "Modern, gentle dental care for the whole family.",
    "category": "Medical",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-medical-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s42-1",
            "type": "navbar",
            "props": {
              "brand": "Bright Smile Dental",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s42-2",
            "type": "hero",
            "props": {
              "eyebrow": "Now welcoming new patients",
              "title": "Dentistry, done differently.",
              "subtitle": "Gentle, modern dental care for adults and children, with no-pressure recommendations.",
              "buttonText": "Book your visit",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1400&q=80"
            }
          },
          {
            "id": "s42-3",
            "type": "features",
            "props": {
              "title": "A new dental experience",
              "subtitle": "Calm, transparent, and patient-first.",
              "items": [
                {
                  "title": "Same-day crowns",
                  "description": "In and out in a single appointment."
                },
                {
                  "title": "Sedation options",
                  "description": "Comfort options for anxious patients."
                },
                {
                  "title": "Transparent pricing",
                  "description": "You'll always know the cost before we begin."
                }
              ]
            }
          },
          {
            "id": "s42-4",
            "type": "cta",
            "props": {
              "title": "New patient special",
              "subtitle": "Cleaning, exam, and x-rays for $99.",
              "buttonText": "Schedule online",
              "buttonHref": "#"
            }
          },
          {
            "id": "s42-5",
            "type": "footer",
            "props": {
              "brand": "Bright Smile Dental",
              "tagline": "Modern, gentle dental care for the whole family.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-medical-3",
    "name": "Aurora Mental Health — Medical",
    "description": "Online therapy that fits your life.",
    "category": "Medical",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-medical-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s43-1",
            "type": "navbar",
            "props": {
              "brand": "Aurora Mental Health",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s43-2",
            "type": "hero",
            "props": {
              "eyebrow": "Therapy · Online · Covered",
              "title": "Therapy that meets you where you are.",
              "subtitle": "Match with a licensed therapist in 48 hours and meet on your schedule.",
              "buttonText": "Get matched",
              "buttonHref": "/match",
              "image": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&q=80"
            }
          },
          {
            "id": "s43-3",
            "type": "value-grid",
            "props": {
              "title": "How Aurora works",
              "animate": true,
              "values": [
                {
                  "title": "Match in 48 hours",
                  "description": "A care advisor matches you to a licensed therapist."
                },
                {
                  "title": "See your therapist online",
                  "description": "Video sessions on your phone or laptop."
                },
                {
                  "title": "Most insurance accepted",
                  "description": "Most members pay $0 to $30 per session."
                }
              ]
            }
          },
          {
            "id": "s43-4",
            "type": "cta",
            "props": {
              "title": "Take the first step",
              "subtitle": "Confidential matching takes about 5 minutes.",
              "buttonText": "Start now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s43-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Aurora Mental Health team directly.",
              "email": "hello@aurora-mental-health.com"
            }
          },
          {
            "id": "s43-6",
            "type": "footer",
            "props": {
              "brand": "Aurora Mental Health",
              "tagline": "Online therapy that fits your life.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-medical-4",
    "name": "Vital Pediatrics — Medical",
    "description": "Pediatric care for growing families.",
    "category": "Medical",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-medical-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s44-1",
            "type": "navbar",
            "props": {
              "brand": "Vital Pediatrics",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s44-2",
            "type": "hero",
            "props": {
              "eyebrow": "Pediatrics · Newborn to teen",
              "title": "Care your kids actually like.",
              "subtitle": "A pediatric practice for the whole journey, from your first ultrasound to your last checkup at 18.",
              "buttonText": "Meet our doctors",
              "buttonHref": "/doctors",
              "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1400&q=80"
            }
          },
          {
            "id": "s44-3",
            "type": "features",
            "props": {
              "title": "Why families choose Vital",
              "subtitle": "A different kind of pediatric experience.",
              "items": [
                {
                  "title": "Same-day sick visits",
                  "description": "When your child is sick, we see them today."
                },
                {
                  "title": "Lactation support",
                  "description": "In-house IBCLCs for new parents."
                },
                {
                  "title": "Adolescent care",
                  "description": "Specialists trained in teen and tween health."
                }
              ]
            }
          },
          {
            "id": "s44-4",
            "type": "cta",
            "props": {
              "title": "Schedule your first visit",
              "subtitle": "Most major insurance accepted.",
              "buttonText": "Book online",
              "buttonHref": "#"
            }
          },
          {
            "id": "s44-5",
            "type": "footer",
            "props": {
              "brand": "Vital Pediatrics",
              "tagline": "Pediatric care for growing families.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-medical-5",
    "name": "Helix Diagnostics — Medical",
    "description": "Advanced preventive health for serious longevity.",
    "category": "Medical",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-medical-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s45-1",
            "type": "navbar",
            "props": {
              "brand": "Helix Diagnostics",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s45-2",
            "type": "hero",
            "props": {
              "eyebrow": "Preventive health · By membership",
              "title": "See what's happening inside.",
              "subtitle": "A whole-body diagnostic membership combining MRI, blood, and AI insights.",
              "buttonText": "Apply for membership",
              "buttonHref": "/apply",
              "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80"
            }
          },
          {
            "id": "s45-3",
            "type": "features",
            "props": {
              "title": "A different standard of care",
              "subtitle": "Annual whole-body scans, in 90 minutes.",
              "items": [
                {
                  "title": "Whole-body MRI",
                  "description": "Screen for 500+ conditions including 13 cancers."
                },
                {
                  "title": "Comprehensive labs",
                  "description": "120+ biomarkers tracked annually."
                },
                {
                  "title": "Personal physician",
                  "description": "A dedicated MD partnering with you year-round."
                }
              ]
            }
          },
          {
            "id": "s45-4",
            "type": "cta",
            "props": {
              "title": "Membership is limited",
              "subtitle": "Apply for our Q4 cohort. Spaces fill quickly.",
              "buttonText": "Apply now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s45-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Helix Diagnostics team directly.",
              "email": "hello@helix-diagnostics.com"
            }
          },
          {
            "id": "s45-6",
            "type": "footer",
            "props": {
              "brand": "Helix Diagnostics",
              "tagline": "Advanced preventive health for serious longevity.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-education-1",
    "name": "Bright Academy — Education",
    "description": "A modern K-12 microschool for curious kids.",
    "category": "Education",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-education-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s46-1",
            "type": "navbar",
            "props": {
              "brand": "Bright Academy",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s46-2",
            "type": "hero",
            "props": {
              "eyebrow": "Now enrolling · 2026",
              "title": "A school that meets your child where they are.",
              "subtitle": "Mixed-age classrooms, low ratios, and project-based learning that lights kids up.",
              "buttonText": "Schedule a tour",
              "buttonHref": "/tour",
              "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80"
            }
          },
          {
            "id": "s46-3",
            "type": "features",
            "props": {
              "title": "How we teach",
              "subtitle": "Project-based, child-led, deeply joyful.",
              "items": [
                {
                  "title": "Mixed-age classrooms",
                  "description": "Kids learn from and teach each other."
                },
                {
                  "title": "Low ratios",
                  "description": "One teacher for every 8 students, never more."
                },
                {
                  "title": "Outside every day",
                  "description": "Two hours of outdoor learning, rain or shine."
                }
              ]
            }
          },
          {
            "id": "s46-4",
            "type": "cta",
            "props": {
              "title": "Tours every Friday",
              "subtitle": "Meet the teachers. See the classrooms.",
              "buttonText": "Book a tour",
              "buttonHref": "#"
            }
          },
          {
            "id": "s46-5",
            "type": "footer",
            "props": {
              "brand": "Bright Academy",
              "tagline": "A modern K-12 microschool for curious kids.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-education-2",
    "name": "Codepath — Education",
    "description": "Online software engineering bootcamps that work.",
    "category": "Education",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-education-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s47-1",
            "type": "navbar",
            "props": {
              "brand": "Codepath",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s47-2",
            "type": "hero",
            "props": {
              "eyebrow": "Bootcamp · Income share",
              "title": "Become an engineer in 9 months.",
              "subtitle": "A part-time online bootcamp with a job guarantee. Pay nothing until you're hired.",
              "buttonText": "Apply now",
              "buttonHref": "/apply",
              "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=80"
            }
          },
          {
            "id": "s47-4",
            "type": "value-grid",
            "props": {
              "title": "Outcomes",
              "animate": true,
              "values": [
                {
                  "title": "94% placement",
                  "description": "Of graduates land their first dev job within 6 months."
                },
                {
                  "title": "$92K avg salary",
                  "description": "Median first-job offer, US graduates."
                },
                {
                  "title": "4.9 star rating",
                  "description": "From over 1,200 verified reviews."
                }
              ]
            }
          },
          {
            "id": "s47-3",
            "type": "features",
            "props": {
              "title": "A bootcamp that respects your life",
              "subtitle": "Part-time, online, and outcome-driven.",
              "items": [
                {
                  "title": "9-month curriculum",
                  "description": "Modern frontend, backend, and systems engineering."
                },
                {
                  "title": "1:1 mentorship",
                  "description": "Weekly calls with a senior engineer at a top company."
                },
                {
                  "title": "Job guarantee",
                  "description": "Get hired or pay nothing. Period."
                }
              ]
            }
          },
          {
            "id": "s47-5",
            "type": "cta",
            "props": {
              "title": "Apply for the next cohort",
              "subtitle": "Cohorts start every 8 weeks. Limited seats.",
              "buttonText": "Start application",
              "buttonHref": "#"
            }
          },
          {
            "id": "s47-6",
            "type": "footer",
            "props": {
              "brand": "Codepath",
              "tagline": "Online software engineering bootcamps that work.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-education-3",
    "name": "Lingva — Education",
    "description": "Live online language classes with native teachers.",
    "category": "Education",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-education-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s48-1",
            "type": "navbar",
            "props": {
              "brand": "Lingva",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s48-2",
            "type": "hero",
            "props": {
              "eyebrow": "Spanish · French · German · Japanese",
              "title": "Learn a language. With a real human.",
              "subtitle": "Live, small-group classes with native speakers. Speak from the first lesson.",
              "buttonText": "Book a free trial",
              "buttonHref": "/trial",
              "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80"
            }
          },
          {
            "id": "s48-3",
            "type": "features",
            "props": {
              "title": "Why Lingva works",
              "subtitle": "Real conversation. Real progress.",
              "items": [
                {
                  "title": "Native teachers",
                  "description": "Every class taught by a vetted native speaker."
                },
                {
                  "title": "Small groups",
                  "description": "Maximum 4 students per class for real practice."
                },
                {
                  "title": "Speak from day one",
                  "description": "Conversation-first method, not endless grammar."
                }
              ]
            }
          },
          {
            "id": "s48-4",
            "type": "cta",
            "props": {
              "title": "Try a free class",
              "subtitle": "Meet a teacher. Speak some words. No card required.",
              "buttonText": "Reserve your spot",
              "buttonHref": "#"
            }
          },
          {
            "id": "s48-5",
            "type": "footer",
            "props": {
              "brand": "Lingva",
              "tagline": "Live online language classes with native teachers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-education-4",
    "name": "Studio Workshop — Education",
    "description": "Online creative classes from the world's best teachers.",
    "category": "Education",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-education-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s49-1",
            "type": "navbar",
            "props": {
              "brand": "Studio Workshop",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s49-2",
            "type": "hero",
            "props": {
              "eyebrow": "300+ creative classes",
              "title": "Learn from the people you admire.",
              "subtitle": "Online creative classes taught by award-winning designers, writers, and filmmakers.",
              "buttonText": "Start your free trial",
              "buttonHref": "/trial",
              "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80"
            }
          },
          {
            "id": "s49-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Brand Identity",
                  "price": "Aaron Draplin",
                  "image": "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80"
                },
                {
                  "name": "Storytelling",
                  "price": "Roxane Gay",
                  "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                },
                {
                  "name": "Cinematography",
                  "price": "Roger Deakins",
                  "image": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80"
                },
                {
                  "name": "Modern Pottery",
                  "price": "Florian Gadsby",
                  "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s49-4",
            "type": "cta",
            "props": {
              "title": "7 days free, then $14/month",
              "subtitle": "Cancel anytime. All classes included.",
              "buttonText": "Start free trial",
              "buttonHref": "#"
            }
          },
          {
            "id": "s49-5",
            "type": "footer",
            "props": {
              "brand": "Studio Workshop",
              "tagline": "Online creative classes from the world's best teachers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-education-5",
    "name": "Northwood Tutoring — Education",
    "description": "Premium 1-on-1 academic tutoring for ambitious students.",
    "category": "Education",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-education-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s50-1",
            "type": "navbar",
            "props": {
              "brand": "Northwood Tutoring",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s50-2",
            "type": "hero",
            "props": {
              "eyebrow": "K-12 · Test prep · Admissions",
              "title": "Tutoring that moves the needle.",
              "subtitle": "Private 1-on-1 tutoring with Ivy League educators and guaranteed score gains.",
              "buttonText": "Match with a tutor",
              "buttonHref": "/match",
              "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80"
            }
          },
          {
            "id": "s50-3",
            "type": "value-grid",
            "props": {
              "title": "Why families trust us",
              "animate": true,
              "values": [
                {
                  "title": "+220 SAT average",
                  "description": "Average score gain across our SAT prep students."
                },
                {
                  "title": "Ivy League tutors",
                  "description": "Every tutor graduated from a top-20 university."
                },
                {
                  "title": "Score guarantee",
                  "description": "We guarantee your improvement or refund the difference."
                }
              ]
            }
          },
          {
            "id": "s50-4",
            "type": "cta",
            "props": {
              "title": "Book a free consultation",
              "subtitle": "Speak with our admissions team to find the right tutor.",
              "buttonText": "Schedule call",
              "buttonHref": "#"
            }
          },
          {
            "id": "s50-5",
            "type": "footer",
            "props": {
              "brand": "Northwood Tutoring",
              "tagline": "Premium 1-on-1 academic tutoring for ambitious students.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-finance-1",
    "name": "Northpoint Capital — Finance",
    "description": "Independent wealth management for busy professionals.",
    "category": "Finance",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-finance-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s51-1",
            "type": "navbar",
            "props": {
              "brand": "Northpoint Capital",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s51-2",
            "type": "hero",
            "props": {
              "eyebrow": "Fee-only · Fiduciary",
              "title": "Wealth management without the conflicts.",
              "subtitle": "Independent, fee-only financial planning and investment management for high-earning professionals.",
              "buttonText": "Book a discovery call",
              "buttonHref": "/discovery",
              "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80"
            }
          },
          {
            "id": "s51-3",
            "type": "features",
            "props": {
              "title": "How we're different",
              "subtitle": "A model built for you, not for us.",
              "items": [
                {
                  "title": "Fee-only",
                  "description": "We never earn commissions on the products we recommend."
                },
                {
                  "title": "CFP® certified",
                  "description": "Every advisor holds the gold standard credential."
                },
                {
                  "title": "Holistic planning",
                  "description": "Tax, estate, insurance, and investment in one plan."
                }
              ]
            }
          },
          {
            "id": "s51-4",
            "type": "cta",
            "props": {
              "title": "See if we're a fit",
              "subtitle": "A 30-minute call to learn about your goals.",
              "buttonText": "Schedule call",
              "buttonHref": "#"
            }
          },
          {
            "id": "s51-5",
            "type": "footer",
            "props": {
              "brand": "Northpoint Capital",
              "tagline": "Independent wealth management for busy professionals.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-finance-2",
    "name": "Ledger — Finance",
    "description": "Bookkeeping and tax for ambitious small businesses.",
    "category": "Finance",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-finance-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s52-1",
            "type": "navbar",
            "props": {
              "brand": "Ledger",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s52-2",
            "type": "hero",
            "props": {
              "eyebrow": "Bookkeeping · Tax · CFO",
              "title": "Finally, a finance team for your business.",
              "subtitle": "Real bookkeepers, on-call CFOs, and tax pros that handle the numbers so you don't have to.",
              "buttonText": "Get pricing",
              "buttonHref": "/pricing",
              "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80"
            }
          },
          {
            "id": "s52-3",
            "type": "features",
            "props": {
              "title": "Everything in one place",
              "subtitle": "From the first invoice to year-end taxes.",
              "items": [
                {
                  "title": "Monthly bookkeeping",
                  "description": "Books closed by the 15th, every month, guaranteed."
                },
                {
                  "title": "Tax filing included",
                  "description": "Federal and state filings handled annually."
                },
                {
                  "title": "Fractional CFO",
                  "description": "On-call strategic finance from real CFOs."
                }
              ]
            }
          },
          {
            "id": "s52-4",
            "type": "cta",
            "props": {
              "title": "Stop chasing your books",
              "subtitle": "Switch in a week, with zero downtime.",
              "buttonText": "Talk to sales",
              "buttonHref": "#"
            }
          },
          {
            "id": "s52-5",
            "type": "footer",
            "props": {
              "brand": "Ledger",
              "tagline": "Bookkeeping and tax for ambitious small businesses.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-finance-3",
    "name": "Vault Banking — Finance",
    "description": "A modern business bank that treats founders like founders.",
    "category": "Finance",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-finance-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s53-1",
            "type": "navbar",
            "props": {
              "brand": "Vault Banking",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s53-2",
            "type": "hero",
            "props": {
              "eyebrow": "Banking for builders",
              "title": "Banking that ships as fast as you do.",
              "subtitle": "A modern business bank with no fees, instant cards, and 4.5% APY on every dollar.",
              "buttonText": "Open an account",
              "buttonHref": "/signup",
              "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
            }
          },
          {
            "id": "s53-3",
            "type": "value-grid",
            "props": {
              "title": "Why founders pick Vault",
              "animate": true,
              "values": [
                {
                  "title": "No monthly fees",
                  "description": "No minimums. No surprises. Ever."
                },
                {
                  "title": "4.5% APY",
                  "description": "Earn interest on every dollar in your account."
                },
                {
                  "title": "Instant cards",
                  "description": "Issue physical and virtual cards in seconds."
                }
              ]
            }
          },
          {
            "id": "s53-4",
            "type": "cta",
            "props": {
              "title": "Open in 8 minutes",
              "subtitle": "No credit check. No paper forms.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s53-5",
            "type": "footer",
            "props": {
              "brand": "Vault Banking",
              "tagline": "A modern business bank that treats founders like founders.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-finance-4",
    "name": "Acorn Investing — Finance",
    "description": "Investment guidance for the next generation.",
    "category": "Finance",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-finance-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s54-1",
            "type": "navbar",
            "props": {
              "brand": "Acorn Investing",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s54-2",
            "type": "hero",
            "props": {
              "eyebrow": "Smart money for new investors",
              "title": "Investing that finally makes sense.",
              "subtitle": "Hands-on investment coaching and a beautifully designed app to grow your money confidently.",
              "buttonText": "Start investing",
              "buttonHref": "/start",
              "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80"
            }
          },
          {
            "id": "s54-3",
            "type": "features",
            "props": {
              "title": "Why Acorn",
              "subtitle": "A modern way to grow your wealth.",
              "items": [
                {
                  "title": "Personalized portfolios",
                  "description": "Built around your goals and risk tolerance."
                },
                {
                  "title": "Real coaches",
                  "description": "Talk to a human anytime in the app."
                },
                {
                  "title": "Tax-smart",
                  "description": "Tax-loss harvesting included on every account."
                }
              ]
            }
          },
          {
            "id": "s54-4",
            "type": "cta",
            "props": {
              "title": "Start with $5",
              "subtitle": "No minimum balance. No commission fees.",
              "buttonText": "Open account",
              "buttonHref": "#"
            }
          },
          {
            "id": "s54-5",
            "type": "footer",
            "props": {
              "brand": "Acorn Investing",
              "tagline": "Investment guidance for the next generation.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-finance-5",
    "name": "Meridian Lending — Finance",
    "description": "A modern mortgage lender for modern homebuyers.",
    "category": "Finance",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-finance-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s55-1",
            "type": "navbar",
            "props": {
              "brand": "Meridian Lending",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s55-2",
            "type": "hero",
            "props": {
              "eyebrow": "Mortgages · Refis · HELOCs",
              "title": "A mortgage in days, not months.",
              "subtitle": "Get pre-approved in minutes and close your home loan in as little as 14 days.",
              "buttonText": "Get pre-approved",
              "buttonHref": "/preapproval",
              "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80"
            }
          },
          {
            "id": "s55-3",
            "type": "features",
            "props": {
              "title": "Mortgage, modernized",
              "subtitle": "Built for speed, transparency, and savings.",
              "items": [
                {
                  "title": "Lower rates",
                  "description": "No commissioned officers, so we pass the savings to you."
                },
                {
                  "title": "14-day close",
                  "description": "The fastest closes in the industry, on average."
                },
                {
                  "title": "Real-time updates",
                  "description": "See exactly where your loan is, 24/7."
                }
              ]
            }
          },
          {
            "id": "s55-4",
            "type": "cta",
            "props": {
              "title": "Check your rate in 3 minutes",
              "subtitle": "Soft credit pull. Won't affect your score.",
              "buttonText": "Check my rate",
              "buttonHref": "#"
            }
          },
          {
            "id": "s55-5",
            "type": "footer",
            "props": {
              "brand": "Meridian Lending",
              "tagline": "A modern mortgage lender for modern homebuyers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-travel-1",
    "name": "Vista Voyages — Travel",
    "description": "Tailor-made luxury travel for once-in-a-lifetime trips.",
    "category": "Travel",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-travel-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s56-1",
            "type": "navbar",
            "props": {
              "brand": "Vista Voyages",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s56-2",
            "type": "hero",
            "props": {
              "eyebrow": "Bespoke travel · Worldwide",
              "title": "Travel made for you. Down to the day.",
              "subtitle": "A team of travel designers crafting bespoke itineraries to the world's most extraordinary places.",
              "buttonText": "Plan your journey",
              "buttonHref": "/plan",
              "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&q=80"
            }
          },
          {
            "id": "s56-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Patagonia · 14 days",
                  "price": "from $9,800",
                  "image": "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=800&q=80"
                },
                {
                  "name": "Japan · 12 days",
                  "price": "from $11,400",
                  "image": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80"
                },
                {
                  "name": "Morocco · 10 days",
                  "price": "from $7,200",
                  "image": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80"
                },
                {
                  "name": "Kenya · 9 days",
                  "price": "from $14,900",
                  "image": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s56-4",
            "type": "cta",
            "props": {
              "title": "Start designing",
              "subtitle": "Speak with a travel designer in your time zone.",
              "buttonText": "Book a call",
              "buttonHref": "#"
            }
          },
          {
            "id": "s56-5",
            "type": "footer",
            "props": {
              "brand": "Vista Voyages",
              "tagline": "Tailor-made luxury travel for once-in-a-lifetime trips.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-travel-2",
    "name": "Frontier Tours — Travel",
    "description": "Small group adventure tours for curious travelers.",
    "category": "Travel",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-travel-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s57-1",
            "type": "navbar",
            "props": {
              "brand": "Frontier Tours",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s57-2",
            "type": "hero",
            "props": {
              "eyebrow": "Small group · Big adventure",
              "title": "Real adventure. Small groups. No tour buses.",
              "subtitle": "Hand-crafted small group tours led by local guides in 30+ countries.",
              "buttonText": "Browse trips",
              "buttonHref": "/trips",
              "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80"
            }
          },
          {
            "id": "s57-3",
            "type": "features",
            "props": {
              "title": "Why our travelers come back",
              "subtitle": "Real travel. Done right.",
              "items": [
                {
                  "title": "Small groups",
                  "description": "Never more than 12 travelers per tour."
                },
                {
                  "title": "Local guides",
                  "description": "Born and raised where they guide."
                },
                {
                  "title": "Lifetime guarantee",
                  "description": "Don't love it? We'll book you another trip free."
                }
              ]
            }
          },
          {
            "id": "s57-4",
            "type": "cta",
            "props": {
              "title": "Book your next adventure",
              "subtitle": "Trips depart year-round. Book early to save 10%.",
              "buttonText": "See departures",
              "buttonHref": "#"
            }
          },
          {
            "id": "s57-5",
            "type": "newsletter",
            "props": {
              "title": "Travel inspiration",
              "subtitle": "Stories from the road, monthly.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s57-6",
            "type": "footer",
            "props": {
              "brand": "Frontier Tours",
              "tagline": "Small group adventure tours for curious travelers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-travel-3",
    "name": "Lodge & Lake — Travel",
    "description": "Curated cabin and lake-house rentals across North America.",
    "category": "Travel",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-travel-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s58-1",
            "type": "navbar",
            "props": {
              "brand": "Lodge & Lake",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s58-2",
            "type": "hero",
            "props": {
              "eyebrow": "Cabins · Lake houses · Off-grid",
              "title": "Slow down. Look up.",
              "subtitle": "A handpicked collection of cabins and lake houses, each chosen for its setting.",
              "buttonText": "Browse stays",
              "buttonHref": "/stays",
              "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1400&q=80"
            }
          },
          {
            "id": "s58-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Lake Tahoe Cabin",
                  "price": "$320/night",
                  "image": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80"
                },
                {
                  "name": "Catskills A-frame",
                  "price": "$280/night",
                  "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
                },
                {
                  "name": "Maine Cottage",
                  "price": "$240/night",
                  "image": "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80"
                },
                {
                  "name": "Banff Chalet",
                  "price": "$420/night",
                  "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s58-4",
            "type": "cta",
            "props": {
              "title": "Find your retreat",
              "subtitle": "Last-minute weekends and seasonal rates available.",
              "buttonText": "Browse all stays",
              "buttonHref": "#"
            }
          },
          {
            "id": "s58-5",
            "type": "footer",
            "props": {
              "brand": "Lodge & Lake",
              "tagline": "Curated cabin and lake-house rentals across North America.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-travel-4",
    "name": "Itinerary Co — Travel",
    "description": "Self-guided trip plans created by destination experts.",
    "category": "Travel",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-travel-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s59-1",
            "type": "navbar",
            "props": {
              "brand": "Itinerary Co",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s59-2",
            "type": "hero",
            "props": {
              "eyebrow": "Self-guided itineraries",
              "title": "Travel like a local. With a plan.",
              "subtitle": "Detailed trip plans created by destination experts, delivered to your phone.",
              "buttonText": "Browse itineraries",
              "buttonHref": "/itineraries",
              "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80"
            }
          },
          {
            "id": "s59-3",
            "type": "features",
            "props": {
              "title": "Why our trips work",
              "subtitle": "Real recommendations. Real expertise.",
              "items": [
                {
                  "title": "Local experts",
                  "description": "Itineraries written by people who actually live there."
                },
                {
                  "title": "Day-by-day plans",
                  "description": "Restaurants, neighborhoods, and timing all mapped."
                },
                {
                  "title": "Always offline",
                  "description": "Download to your phone and use anywhere."
                }
              ]
            }
          },
          {
            "id": "s59-4",
            "type": "cta",
            "props": {
              "title": "Find your next trip",
              "subtitle": "Itineraries from $29. Money-back guarantee.",
              "buttonText": "Browse trips",
              "buttonHref": "#"
            }
          },
          {
            "id": "s59-5",
            "type": "footer",
            "props": {
              "brand": "Itinerary Co",
              "tagline": "Self-guided trip plans created by destination experts.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-travel-5",
    "name": "Asana Hotels — Travel",
    "description": "A small collection of design-led boutique hotels.",
    "category": "Travel",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-travel-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s60-1",
            "type": "navbar",
            "props": {
              "brand": "Asana Hotels",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s60-2",
            "type": "hero",
            "props": {
              "eyebrow": "Boutique · Design-led",
              "title": "A small collection. Beautifully run.",
              "subtitle": "14 boutique hotels in design capitals around the world. Each one one-of-a-kind.",
              "buttonText": "Browse hotels",
              "buttonHref": "/hotels",
              "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
            }
          },
          {
            "id": "s60-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Asana Tokyo",
                  "price": "Aoyama",
                  "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80"
                },
                {
                  "name": "Asana Mexico City",
                  "price": "Roma Norte",
                  "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
                },
                {
                  "name": "Asana Lisbon",
                  "price": "Príncipe Real",
                  "image": "https://images.unsplash.com/photo-1513735492246-483525079686?w=800&q=80"
                },
                {
                  "name": "Asana Marrakech",
                  "price": "Medina",
                  "image": "https://images.unsplash.com/photo-1539020140153-e479b8c5b556?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s60-4",
            "type": "cta",
            "props": {
              "title": "Sign up for member rates",
              "subtitle": "Save 10% on every booking, every property.",
              "buttonText": "Become a member",
              "buttonHref": "#"
            }
          },
          {
            "id": "s60-5",
            "type": "footer",
            "props": {
              "brand": "Asana Hotels",
              "tagline": "A small collection of design-led boutique hotels.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-photography-1",
    "name": "Helena Voss — Photography",
    "description": "Wedding photographer for couples who care about story.",
    "category": "Photography",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-photography-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s61-1",
            "type": "navbar",
            "props": {
              "brand": "Helena Voss",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s61-2",
            "type": "hero",
            "props": {
              "eyebrow": "Wedding photographer · Worldwide",
              "title": "Wedding photographs that feel like memories.",
              "subtitle": "A wedding and elopement photographer for couples who want their day documented honestly.",
              "buttonText": "Inquire about your date",
              "buttonHref": "/inquire",
              "image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80"
            }
          },
          {
            "id": "s61-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Tuscany · Villa Wedding",
                  "price": "2025",
                  "image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                },
                {
                  "name": "Iceland · Elopement",
                  "price": "2025",
                  "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80"
                },
                {
                  "name": "Brooklyn Loft",
                  "price": "2024",
                  "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                },
                {
                  "name": "Big Sur Coast",
                  "price": "2024",
                  "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s61-4",
            "type": "cta",
            "props": {
              "title": "Book your date",
              "subtitle": "Limited weddings booked per year.",
              "buttonText": "Inquire",
              "buttonHref": "#"
            }
          },
          {
            "id": "s61-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Helena Voss team directly.",
              "email": "hello@helena-voss.com"
            }
          },
          {
            "id": "s61-6",
            "type": "footer",
            "props": {
              "brand": "Helena Voss",
              "tagline": "Wedding photographer for couples who care about story.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-photography-2",
    "name": "Sam Holloway — Photography",
    "description": "Commercial photographer for product and lifestyle.",
    "category": "Photography",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-photography-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s62-1",
            "type": "navbar",
            "props": {
              "brand": "Sam Holloway",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s62-2",
            "type": "hero",
            "props": {
              "eyebrow": "Product · Lifestyle · Brand",
              "title": "Photography that sells the story.",
              "subtitle": "A commercial photographer for ambitious brands and product teams.",
              "buttonText": "View portfolio",
              "buttonHref": "/portfolio",
              "image": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1400&q=80"
            }
          },
          {
            "id": "s62-3",
            "type": "features",
            "props": {
              "title": "Services",
              "subtitle": "In-studio, on-location, or in your warehouse.",
              "items": [
                {
                  "title": "Product",
                  "description": "Clean, considered product photography."
                },
                {
                  "title": "Lifestyle",
                  "description": "Models, locations, and storytelling."
                },
                {
                  "title": "Brand campaigns",
                  "description": "Full creative direction and production."
                }
              ]
            }
          },
          {
            "id": "s62-4",
            "type": "cta",
            "props": {
              "title": "Available for projects",
              "subtitle": "Booking new clients for the next quarter.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s62-5",
            "type": "footer",
            "props": {
              "brand": "Sam Holloway",
              "tagline": "Commercial photographer for product and lifestyle.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-photography-3",
    "name": "Field Studio — Photography",
    "description": "A photography and film studio in the city.",
    "category": "Photography",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-photography-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s63-1",
            "type": "navbar",
            "props": {
              "brand": "Field Studio",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s63-2",
            "type": "hero",
            "props": {
              "eyebrow": "Studio · Editorial · Commercial",
              "title": "A studio for the work that matters.",
              "subtitle": "A photography and film studio working with magazines, fashion brands, and cultural institutions.",
              "buttonText": "See our work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1400&q=80"
            }
          },
          {
            "id": "s63-3",
            "type": "value-grid",
            "props": {
              "title": "Selected clients",
              "animate": true,
              "values": [
                {
                  "title": "AnOther Magazine",
                  "description": "Editorial features and covers."
                },
                {
                  "title": "Aesop",
                  "description": "Global campaign photography."
                },
                {
                  "title": "The Met",
                  "description": "Permanent collection imaging."
                }
              ]
            }
          },
          {
            "id": "s63-4",
            "type": "cta",
            "props": {
              "title": "Start a project",
              "subtitle": "Tell us about your brief and timing.",
              "buttonText": "Reach out",
              "buttonHref": "#"
            }
          },
          {
            "id": "s63-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Field Studio team directly.",
              "email": "hello@field-studio.com"
            }
          },
          {
            "id": "s63-6",
            "type": "footer",
            "props": {
              "brand": "Field Studio",
              "tagline": "A photography and film studio in the city.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-photography-4",
    "name": "June Lee — Photography",
    "description": "Documentary and portrait photographer.",
    "category": "Photography",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-photography-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s64-1",
            "type": "navbar",
            "props": {
              "brand": "June Lee",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s64-2",
            "type": "hero",
            "props": {
              "eyebrow": "Documentary · Portrait · Editorial",
              "title": "Quiet pictures of loud lives.",
              "subtitle": "A documentary photographer based in Seoul and Los Angeles.",
              "buttonText": "View series",
              "buttonHref": "/series",
              "image": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1400&q=80"
            }
          },
          {
            "id": "s64-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "After Midnight · Seoul",
                  "price": "2025",
                  "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                },
                {
                  "name": "Edge of the City",
                  "price": "2024",
                  "image": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80"
                },
                {
                  "name": "Returning Home",
                  "price": "2023",
                  "image": "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80"
                },
                {
                  "name": "Light Studies",
                  "price": "2022",
                  "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s64-4",
            "type": "cta",
            "props": {
              "title": "For inquiries and prints",
              "subtitle": "Represented globally for editorial and personal work.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s64-5",
            "type": "footer",
            "props": {
              "brand": "June Lee",
              "tagline": "Documentary and portrait photographer.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-photography-5",
    "name": "Ava Park — Photography",
    "description": "Family and newborn photographer with a soft, natural style.",
    "category": "Photography",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-photography-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s65-1",
            "type": "navbar",
            "props": {
              "brand": "Ava Park",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s65-2",
            "type": "hero",
            "props": {
              "eyebrow": "Family · Newborn · Maternity",
              "title": "The little moments. Made to last.",
              "subtitle": "A family and newborn photographer creating heirloom albums for growing families.",
              "buttonText": "Book your session",
              "buttonHref": "/book",
              "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1400&q=80"
            }
          },
          {
            "id": "s65-3",
            "type": "features",
            "props": {
              "title": "Sessions",
              "subtitle": "Designed for the way families really are.",
              "items": [
                {
                  "title": "Maternity",
                  "description": "Soft, natural portraits in your home or a chosen location."
                },
                {
                  "title": "Newborn",
                  "description": "In-home sessions in your baby's first 14 days."
                },
                {
                  "title": "Family",
                  "description": "A relaxed, candid hour that captures who you are."
                }
              ]
            }
          },
          {
            "id": "s65-4",
            "type": "cta",
            "props": {
              "title": "Booking spring sessions",
              "subtitle": "In-home, outdoor, and studio options available.",
              "buttonText": "Reserve your spot",
              "buttonHref": "#"
            }
          },
          {
            "id": "s65-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Ava Park team directly.",
              "email": "hello@ava-park.com"
            }
          },
          {
            "id": "s65-6",
            "type": "footer",
            "props": {
              "brand": "Ava Park",
              "tagline": "Family and newborn photographer with a soft, natural style.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-blog-1",
    "name": "The Cadence — Blog",
    "description": "A weekly publication on design, technology, and craft.",
    "category": "Blog",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-blog-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s66-1",
            "type": "navbar",
            "props": {
              "brand": "The Cadence",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s66-2",
            "type": "hero",
            "props": {
              "eyebrow": "A weekly publication",
              "title": "Slow reading on design, tech, and craft.",
              "subtitle": "One thoughtful essay every Sunday morning. No noise. No newsletters about newsletters.",
              "buttonText": "Read latest issue",
              "buttonHref": "/latest",
              "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=80"
            }
          },
          {
            "id": "s66-3",
            "type": "features",
            "props": {
              "title": "What you'll read",
              "subtitle": "Long-form essays from working practitioners.",
              "items": [
                {
                  "title": "On design",
                  "description": "Essays from working designers, not influencers."
                },
                {
                  "title": "On technology",
                  "description": "Considered takes on the tools shaping our world."
                },
                {
                  "title": "On craft",
                  "description": "Notes on making things with care."
                }
              ]
            }
          },
          {
            "id": "s66-4",
            "type": "cta",
            "props": {
              "title": "Become a member",
              "subtitle": "Members get the archive, audio essays, and quarterly print.",
              "buttonText": "Join · $7/month",
              "buttonHref": "#"
            }
          },
          {
            "id": "s66-5",
            "type": "newsletter",
            "props": {
              "title": "Sunday morning, in your inbox",
              "subtitle": "Free, forever. Unsubscribe with one click.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s66-6",
            "type": "footer",
            "props": {
              "brand": "The Cadence",
              "tagline": "A weekly publication on design, technology, and craft.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-blog-2",
    "name": "Field Notes Journal — Blog",
    "description": "A travel and writing journal from the road.",
    "category": "Blog",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-blog-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s67-1",
            "type": "navbar",
            "props": {
              "brand": "Field Notes Journal",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s67-2",
            "type": "hero",
            "props": {
              "eyebrow": "Dispatches from the road",
              "title": "Notes from places worth slowing down for.",
              "subtitle": "A travel journal from one writer, two cameras, and a small van.",
              "buttonText": "Read the journal",
              "buttonHref": "/journal",
              "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80"
            }
          },
          {
            "id": "s67-3",
            "type": "cta",
            "props": {
              "title": "Subscribe for free",
              "subtitle": "New posts about once a week. Unsubscribe anytime.",
              "buttonText": "Subscribe",
              "buttonHref": "#"
            }
          },
          {
            "id": "s67-4",
            "type": "newsletter",
            "props": {
              "title": "Get the journal in your inbox",
              "subtitle": "Stories, photographs, and the occasional map.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s67-5",
            "type": "footer",
            "props": {
              "brand": "Field Notes Journal",
              "tagline": "A travel and writing journal from the road.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-blog-3",
    "name": "Compose — Blog",
    "description": "A blog and podcast on the craft of writing.",
    "category": "Blog",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-blog-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s68-1",
            "type": "navbar",
            "props": {
              "brand": "Compose",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s68-2",
            "type": "hero",
            "props": {
              "eyebrow": "Essays · Interviews · Podcast",
              "title": "For people who take writing seriously.",
              "subtitle": "A blog and podcast on the craft of writing, by working writers.",
              "buttonText": "Read latest essay",
              "buttonHref": "/essays",
              "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=80"
            }
          },
          {
            "id": "s68-3",
            "type": "features",
            "props": {
              "title": "What you'll find here",
              "subtitle": "Three things, done well.",
              "items": [
                {
                  "title": "Long essays",
                  "description": "Twice a month, on craft, structure, and discipline."
                },
                {
                  "title": "Interviews",
                  "description": "Conversations with writers you actually want to read."
                },
                {
                  "title": "The podcast",
                  "description": "Weekly conversations, free in any podcast app."
                }
              ]
            }
          },
          {
            "id": "s68-4",
            "type": "cta",
            "props": {
              "title": "Ready to get started?",
              "subtitle": "Join us today.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s68-5",
            "type": "newsletter",
            "props": {
              "title": "Get every essay first",
              "subtitle": "Members get full access to the archive and bonus episodes.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s68-6",
            "type": "footer",
            "props": {
              "brand": "Compose",
              "tagline": "A blog and podcast on the craft of writing.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-blog-4",
    "name": "Plate Magazine — Blog",
    "description": "A modern food and recipe blog.",
    "category": "Blog",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-blog-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s69-1",
            "type": "navbar",
            "props": {
              "brand": "Plate Magazine",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s69-2",
            "type": "hero",
            "props": {
              "eyebrow": "Recipes · Stories · Travel",
              "title": "Cooking, considered.",
              "subtitle": "Tested recipes, kitchen wisdom, and food stories from around the world.",
              "buttonText": "Browse recipes",
              "buttonHref": "/recipes",
              "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
            }
          },
          {
            "id": "s69-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Slow-Cooked Ragu",
                  "price": "60 min",
                  "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80"
                },
                {
                  "name": "Miso Glazed Salmon",
                  "price": "25 min",
                  "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80"
                },
                {
                  "name": "Tarte Tatin",
                  "price": "90 min",
                  "image": "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80"
                },
                {
                  "name": "Sourdough Loaf",
                  "price": "36 hr",
                  "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s69-4",
            "type": "cta",
            "props": {
              "title": "Get the cookbook",
              "subtitle": "120 of our most-loved recipes, beautifully bound.",
              "buttonText": "Buy the book",
              "buttonHref": "#"
            }
          },
          {
            "id": "s69-5",
            "type": "newsletter",
            "props": {
              "title": "A new recipe every Tuesday",
              "subtitle": "Free, tested, and ready for your kitchen.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s69-6",
            "type": "footer",
            "props": {
              "brand": "Plate Magazine",
              "tagline": "A modern food and recipe blog.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-blog-5",
    "name": "Mind Atlas — Blog",
    "description": "A blog on psychology, behavior, and decision-making.",
    "category": "Blog",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-blog-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s70-1",
            "type": "navbar",
            "props": {
              "brand": "Mind Atlas",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s70-2",
            "type": "hero",
            "props": {
              "eyebrow": "Behavior · Psychology · Mind",
              "title": "Why we do what we do.",
              "subtitle": "A blog on the science of decision-making, motivation, and the human mind.",
              "buttonText": "Read latest",
              "buttonHref": "/latest",
              "image": "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1400&q=80"
            }
          },
          {
            "id": "s70-3",
            "type": "features",
            "props": {
              "title": "What you'll find here",
              "subtitle": "Three categories, deeply researched.",
              "items": [
                {
                  "title": "Decision-making",
                  "description": "How we choose and how to choose better."
                },
                {
                  "title": "Habits",
                  "description": "How behaviors are formed, broken, and sustained."
                },
                {
                  "title": "Cognition",
                  "description": "How we think, remember, and learn."
                }
              ]
            }
          },
          {
            "id": "s70-4",
            "type": "cta",
            "props": {
              "title": "Ready to get started?",
              "subtitle": "Join us today.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s70-5",
            "type": "newsletter",
            "props": {
              "title": "Weekly · Free · No spam",
              "subtitle": "A 5-minute read every Friday morning.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s70-6",
            "type": "footer",
            "props": {
              "brand": "Mind Atlas",
              "tagline": "A blog on psychology, behavior, and decision-making.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-startup-1",
    "name": "Mosaic — Startup",
    "description": "The new way teams plan and execute together.",
    "category": "Startup",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-startup-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s71-1",
            "type": "navbar",
            "props": {
              "brand": "Mosaic",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s71-2",
            "type": "hero",
            "props": {
              "eyebrow": "Out of beta",
              "title": "A new home for your team's work.",
              "subtitle": "Mosaic is one place to plan, track, and ship. Loved by 5,000 teams in 90 days.",
              "buttonText": "Try free",
              "buttonHref": "/start",
              "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80"
            }
          },
          {
            "id": "s71-3",
            "type": "features",
            "props": {
              "title": "Built for the way teams actually work",
              "subtitle": "Less ceremony. More shipping.",
              "items": [
                {
                  "title": "Lightning fast",
                  "description": "Page loads under 100ms. Every action, instant."
                },
                {
                  "title": "Designed for clarity",
                  "description": "See what matters. Hide what doesn't."
                },
                {
                  "title": "Plays nice",
                  "description": "Two-way sync with GitHub, Linear, Slack, and more."
                }
              ]
            }
          },
          {
            "id": "s71-4",
            "type": "cta",
            "props": {
              "title": "Start your free workspace",
              "subtitle": "Free for teams up to 10. No credit card.",
              "buttonText": "Get started",
              "buttonHref": "#"
            }
          },
          {
            "id": "s71-5",
            "type": "footer",
            "props": {
              "brand": "Mosaic",
              "tagline": "The new way teams plan and execute together.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-startup-2",
    "name": "Keep — Startup",
    "description": "The personal CRM for the relationships that matter.",
    "category": "Startup",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-startup-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s72-1",
            "type": "navbar",
            "props": {
              "brand": "Keep",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s72-2",
            "type": "hero",
            "props": {
              "eyebrow": "Coming to iOS",
              "title": "A personal CRM that finally feels personal.",
              "subtitle": "Keep helps you remember, reach out, and stay close to the people who matter most.",
              "buttonText": "Join the waitlist",
              "buttonHref": "/waitlist",
              "image": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1400&q=80"
            }
          },
          {
            "id": "s72-3",
            "type": "features",
            "props": {
              "title": "How Keep works",
              "subtitle": "Designed to feel like a friend, not a CRM.",
              "items": [
                {
                  "title": "Smart reminders",
                  "description": "Get nudged to reach out at exactly the right moment."
                },
                {
                  "title": "Quiet capture",
                  "description": "Jot a note from your home screen, in 2 seconds."
                },
                {
                  "title": "Private by design",
                  "description": "End-to-end encrypted. We can't see your contacts."
                }
              ]
            }
          },
          {
            "id": "s72-4",
            "type": "cta",
            "props": {
              "title": "Be first in line",
              "subtitle": "iOS launch this spring. Android to follow.",
              "buttonText": "Join waitlist",
              "buttonHref": "#"
            }
          },
          {
            "id": "s72-5",
            "type": "footer",
            "props": {
              "brand": "Keep",
              "tagline": "The personal CRM for the relationships that matter.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-startup-3",
    "name": "Plot — Startup",
    "description": "AI writing assistant for novelists and screenwriters.",
    "category": "Startup",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-startup-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s73-1",
            "type": "navbar",
            "props": {
              "brand": "Plot",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s73-2",
            "type": "hero",
            "props": {
              "eyebrow": "For writers",
              "title": "An AI writing partner. Not a replacement.",
              "subtitle": "Plot helps novelists and screenwriters break, build, and finish their stories.",
              "buttonText": "Start writing free",
              "buttonHref": "/start",
              "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=80"
            }
          },
          {
            "id": "s73-3",
            "type": "features",
            "props": {
              "title": "Built for the long form",
              "subtitle": "Tools that respect the craft.",
              "items": [
                {
                  "title": "Outlines that move",
                  "description": "Drag, restructure, and explore alternate paths."
                },
                {
                  "title": "Character bibles",
                  "description": "Track every detail. Spot every contradiction."
                },
                {
                  "title": "Scene-level AI",
                  "description": "Get suggestions in your voice, never replace it."
                }
              ]
            }
          },
          {
            "id": "s73-4",
            "type": "cta",
            "props": {
              "title": "Free for first 50,000 words",
              "subtitle": "No credit card. Pro plan from $9/mo.",
              "buttonText": "Start free",
              "buttonHref": "#"
            }
          },
          {
            "id": "s73-5",
            "type": "footer",
            "props": {
              "brand": "Plot",
              "tagline": "AI writing assistant for novelists and screenwriters.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-startup-4",
    "name": "Halo Health — Startup",
    "description": "A wearable for cardiovascular longevity.",
    "category": "Startup",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-startup-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s74-1",
            "type": "navbar",
            "props": {
              "brand": "Halo Health",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s74-2",
            "type": "hero",
            "props": {
              "eyebrow": "Reserve yours",
              "title": "See your heart health. Every minute.",
              "subtitle": "Halo is a medical-grade wearable that tracks the metrics that actually predict cardiovascular health.",
              "buttonText": "Reserve · $39 deposit",
              "buttonHref": "/reserve",
              "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=80"
            }
          },
          {
            "id": "s74-3",
            "type": "features",
            "props": {
              "title": "A different kind of wearable",
              "subtitle": "Clinical-grade signals. Beautifully simple app.",
              "items": [
                {
                  "title": "Continuous ECG",
                  "description": "Track heart rhythm 24/7, FDA-cleared accuracy."
                },
                {
                  "title": "BP & arterial stiffness",
                  "description": "The metrics that matter for long-term heart health."
                },
                {
                  "title": "7-day battery",
                  "description": "Charge once a week. Wear it through everything."
                }
              ]
            }
          },
          {
            "id": "s74-4",
            "type": "cta",
            "props": {
              "title": "Ships in Q3",
              "subtitle": "Reserve today. Pay only when it ships.",
              "buttonText": "Reserve mine",
              "buttonHref": "#"
            }
          },
          {
            "id": "s74-5",
            "type": "footer",
            "props": {
              "brand": "Halo Health",
              "tagline": "A wearable for cardiovascular longevity.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-startup-5",
    "name": "Forecast — Startup",
    "description": "AI weather radar for outdoor athletes.",
    "category": "Startup",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-startup-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s75-1",
            "type": "navbar",
            "props": {
              "brand": "Forecast",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s75-2",
            "type": "hero",
            "props": {
              "eyebrow": "Built by climbers and skiers",
              "title": "The weather app for people who live outside.",
              "subtitle": "Hyperlocal, hour-by-hour forecasts for surfers, skiers, climbers, and runners.",
              "buttonText": "Download free",
              "buttonHref": "/app",
              "image": "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1400&q=80"
            }
          },
          {
            "id": "s75-3",
            "type": "value-grid",
            "props": {
              "title": "Made for athletes",
              "animate": true,
              "values": [
                {
                  "title": "Sport-specific",
                  "description": "Pick your sport. Get the metrics that matter."
                },
                {
                  "title": "500m resolution",
                  "description": "Forecasts down to your local trailhead or peak."
                },
                {
                  "title": "No ads. Ever.",
                  "description": "Pro version is $4/month. Free version is honest."
                }
              ]
            }
          },
          {
            "id": "s75-4",
            "type": "cta",
            "props": {
              "title": "Free on iOS and Android",
              "subtitle": "Pro features unlock for $4 a month.",
              "buttonText": "Get the app",
              "buttonHref": "#"
            }
          },
          {
            "id": "s75-5",
            "type": "footer",
            "props": {
              "brand": "Forecast",
              "tagline": "AI weather radar for outdoor athletes.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-event-1",
    "name": "Frame Conference — Event",
    "description": "A 2-day conference for product designers.",
    "category": "Event",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-event-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s76-1",
            "type": "navbar",
            "props": {
              "brand": "Frame Conference",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s76-2",
            "type": "hero",
            "props": {
              "eyebrow": "October 12-13 · Lisbon",
              "title": "A conference for designers shaping software.",
              "subtitle": "Two days. Twelve speakers. One unforgettable city. Tickets are limited to 600.",
              "buttonText": "Get tickets",
              "buttonHref": "/tickets",
              "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80"
            }
          },
          {
            "id": "s76-3",
            "type": "features",
            "props": {
              "title": "What to expect",
              "subtitle": "Talks. Workshops. The best people in the field.",
              "items": [
                {
                  "title": "World-class talks",
                  "description": "Speakers from Apple, Linear, Figma, and Stripe."
                },
                {
                  "title": "Hands-on workshops",
                  "description": "Eight intimate workshops capped at 30 people."
                },
                {
                  "title": "A real community",
                  "description": "Designed for connections that last beyond the event."
                }
              ]
            }
          },
          {
            "id": "s76-4",
            "type": "cta",
            "props": {
              "title": "Tickets are 70% sold out",
              "subtitle": "Don't wait. Last year sold out two months early.",
              "buttonText": "Buy tickets",
              "buttonHref": "#"
            }
          },
          {
            "id": "s76-5",
            "type": "footer",
            "props": {
              "brand": "Frame Conference",
              "tagline": "A 2-day conference for product designers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-event-2",
    "name": "Sunset Festival — Event",
    "description": "A 3-day music and arts festival on the coast.",
    "category": "Event",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-event-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s77-1",
            "type": "navbar",
            "props": {
              "brand": "Sunset Festival",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s77-2",
            "type": "hero",
            "props": {
              "eyebrow": "July 18-20 · Big Sur",
              "title": "Three days. The Pacific. Music after dark.",
              "subtitle": "A boutique music festival on a private cliffside ranch in Big Sur, California.",
              "buttonText": "See the lineup",
              "buttonHref": "/lineup",
              "image": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=80"
            }
          },
          {
            "id": "s77-3",
            "type": "cta",
            "props": {
              "title": "Tickets on sale Friday",
              "subtitle": "Sign up to get the pre-sale link 24 hours early.",
              "buttonText": "Join pre-sale",
              "buttonHref": "#"
            }
          },
          {
            "id": "s77-4",
            "type": "newsletter",
            "props": {
              "title": "Get the pre-sale link",
              "subtitle": "Tickets sold out in 4 hours last year. Don't miss it.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s77-5",
            "type": "footer",
            "props": {
              "brand": "Sunset Festival",
              "tagline": "A 3-day music and arts festival on the coast.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-event-3",
    "name": "Build Summit — Event",
    "description": "A founders-only summit for early-stage builders.",
    "category": "Event",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-event-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s78-1",
            "type": "navbar",
            "props": {
              "brand": "Build Summit",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s78-2",
            "type": "hero",
            "props": {
              "eyebrow": "September · Lisbon",
              "title": "A summit. By founders. For founders.",
              "subtitle": "A 3-day, invite-only gathering of 200 ambitious early-stage founders.",
              "buttonText": "Apply to attend",
              "buttonHref": "/apply",
              "image": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1400&q=80"
            }
          },
          {
            "id": "s78-3",
            "type": "features",
            "props": {
              "title": "Three days, one room",
              "subtitle": "No sales pitches. No press. Just builders.",
              "items": [
                {
                  "title": "Closed-door talks",
                  "description": "Founders sharing what worked, with no PR filter."
                },
                {
                  "title": "Real workshops",
                  "description": "Hands-on sessions with proven operators."
                },
                {
                  "title": "A serious bar",
                  "description": "Curated to under 200 attendees, by application."
                }
              ]
            }
          },
          {
            "id": "s78-4",
            "type": "cta",
            "props": {
              "title": "Application closes June 1",
              "subtitle": "Limited to active founders building venture-scale companies.",
              "buttonText": "Apply now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s78-5",
            "type": "footer",
            "props": {
              "brand": "Build Summit",
              "tagline": "A founders-only summit for early-stage builders.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-event-4",
    "name": "Verde Wedding — Event",
    "description": "A modern wedding planning experience.",
    "category": "Event",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-event-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s79-1",
            "type": "navbar",
            "props": {
              "brand": "Verde Wedding",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s79-2",
            "type": "hero",
            "props": {
              "eyebrow": "Save the date · 09.14.2026",
              "title": "James & Elena.",
              "subtitle": "We're getting married this fall in Tuscany. We can't wait to celebrate with you.",
              "buttonText": "RSVP",
              "buttonHref": "/rsvp",
              "image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80"
            }
          },
          {
            "id": "s79-3",
            "type": "features",
            "props": {
              "title": "The weekend",
              "subtitle": "Three days. Many friends. A lot of food.",
              "items": [
                {
                  "title": "Friday",
                  "description": "Welcome dinner at our villa. Casual and outdoor."
                },
                {
                  "title": "Saturday",
                  "description": "Ceremony at sunset, followed by a long, loud dinner."
                },
                {
                  "title": "Sunday",
                  "description": "A long lunch by the pool before everyone heads home."
                }
              ]
            }
          },
          {
            "id": "s79-4",
            "type": "cta",
            "props": {
              "title": "RSVP by June 30",
              "subtitle": "We can't wait to see you.",
              "buttonText": "Send your RSVP",
              "buttonHref": "#"
            }
          },
          {
            "id": "s79-5",
            "type": "footer",
            "props": {
              "brand": "Verde Wedding",
              "tagline": "A modern wedding planning experience.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-event-5",
    "name": "NorthGala — Event",
    "description": "An annual fundraising gala for ocean conservation.",
    "category": "Event",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-event-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s80-1",
            "type": "navbar",
            "props": {
              "brand": "NorthGala",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s80-2",
            "type": "hero",
            "props": {
              "eyebrow": "Annual gala · November 8",
              "title": "One night. To save the next century of oceans.",
              "subtitle": "Join us for the 12th annual NorthGala, supporting ocean conservation worldwide.",
              "buttonText": "Reserve a table",
              "buttonHref": "/tables",
              "image": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80"
            }
          },
          {
            "id": "s80-3",
            "type": "value-grid",
            "props": {
              "title": "Why this gala matters",
              "animate": true,
              "values": [
                {
                  "title": "$48M raised",
                  "description": "Every dollar spent funding marine conservation."
                },
                {
                  "title": "11 protected areas",
                  "description": "Established as a direct result of your support."
                },
                {
                  "title": "94% to programs",
                  "description": "Industry-leading, with audited financials."
                }
              ]
            }
          },
          {
            "id": "s80-4",
            "type": "cta",
            "props": {
              "title": "Sponsor a table",
              "subtitle": "Tables of 10 from $25,000. Individual seats from $2,500.",
              "buttonText": "Become a sponsor",
              "buttonHref": "#"
            }
          },
          {
            "id": "s80-5",
            "type": "footer",
            "props": {
              "brand": "NorthGala",
              "tagline": "An annual fundraising gala for ocean conservation.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-nonprofit-1",
    "name": "Clear Water Project — Nonprofit",
    "description": "Bringing clean water to communities that need it.",
    "category": "Nonprofit",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-nonprofit-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s81-1",
            "type": "navbar",
            "props": {
              "brand": "Clear Water Project",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s81-2",
            "type": "hero",
            "props": {
              "eyebrow": "Clean water for everyone",
              "title": "Every $40 brings clean water to one person, for life.",
              "subtitle": "We fund and maintain water projects in 28 countries. 100% of donations go to the work.",
              "buttonText": "Donate now",
              "buttonHref": "/donate",
              "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400&q=80"
            }
          },
          {
            "id": "s81-3",
            "type": "features",
            "props": {
              "title": "How we work",
              "subtitle": "Transparent. Local. Long-term.",
              "items": [
                {
                  "title": "100% to the work",
                  "description": "Operations are funded by a separate group of donors."
                },
                {
                  "title": "Local partners",
                  "description": "We fund the people who already know what works."
                },
                {
                  "title": "20-year guarantee",
                  "description": "We monitor and maintain every project for 20 years."
                }
              ]
            }
          },
          {
            "id": "s81-4",
            "type": "cta",
            "props": {
              "title": "Become a monthly donor",
              "subtitle": "Bring clean water to one person every month, for $40.",
              "buttonText": "Donate monthly",
              "buttonHref": "#"
            }
          },
          {
            "id": "s81-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Clear Water Project team directly.",
              "email": "hello@clear-water-project.com"
            }
          },
          {
            "id": "s81-6",
            "type": "footer",
            "props": {
              "brand": "Clear Water Project",
              "tagline": "Bringing clean water to communities that need it.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-nonprofit-2",
    "name": "Open Library — Nonprofit",
    "description": "Free books for kids who need them most.",
    "category": "Nonprofit",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-nonprofit-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s82-1",
            "type": "navbar",
            "props": {
              "brand": "Open Library",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s82-2",
            "type": "hero",
            "props": {
              "eyebrow": "Books for every child",
              "title": "Books change lives. Every kid deserves them.",
              "subtitle": "We send free books to children in under-resourced schools and communities across the country.",
              "buttonText": "Donate books",
              "buttonHref": "/donate",
              "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80"
            }
          },
          {
            "id": "s82-3",
            "type": "value-grid",
            "props": {
              "title": "The impact",
              "animate": true,
              "values": [
                {
                  "title": "4.2M books",
                  "description": "Sent to kids in 11,000 schools to date."
                },
                {
                  "title": "92% read more",
                  "description": "Of kids who get our books read more on their own."
                },
                {
                  "title": "$3 per book",
                  "description": "Your $30 puts ten new books in a kid's hands."
                }
              ]
            }
          },
          {
            "id": "s82-4",
            "type": "cta",
            "props": {
              "title": "Sponsor a classroom",
              "subtitle": "$300 stocks an entire classroom library.",
              "buttonText": "Sponsor now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s82-5",
            "type": "footer",
            "props": {
              "brand": "Open Library",
              "tagline": "Free books for kids who need them most.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-nonprofit-3",
    "name": "Forest Reach — Nonprofit",
    "description": "Reforestation, scaled. With science and care.",
    "category": "Nonprofit",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-nonprofit-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s83-1",
            "type": "navbar",
            "props": {
              "brand": "Forest Reach",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s83-2",
            "type": "hero",
            "props": {
              "eyebrow": "Reforestation, done right",
              "title": "Plant a tree. Restore a forest.",
              "subtitle": "We work with local foresters to plant native trees in deforested areas, scientifically.",
              "buttonText": "Plant trees",
              "buttonHref": "/plant",
              "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80"
            }
          },
          {
            "id": "s83-3",
            "type": "features",
            "props": {
              "title": "Why our trees survive",
              "subtitle": "Science, not stunts.",
              "items": [
                {
                  "title": "Native species only",
                  "description": "Every tree is matched to its ecosystem."
                },
                {
                  "title": "Local stewardship",
                  "description": "Local foresters care for trees for 5 years post-planting."
                },
                {
                  "title": "GPS-verified",
                  "description": "Every planting site is mapped, monitored, and reported."
                }
              ]
            }
          },
          {
            "id": "s83-4",
            "type": "cta",
            "props": {
              "title": "Plant a tree for $1",
              "subtitle": "Or sponsor an acre for $400.",
              "buttonText": "Plant now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s83-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Forest Reach team directly.",
              "email": "hello@forest-reach.com"
            }
          },
          {
            "id": "s83-6",
            "type": "footer",
            "props": {
              "brand": "Forest Reach",
              "tagline": "Reforestation, scaled. With science and care.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-nonprofit-4",
    "name": "Nourish Network — Nonprofit",
    "description": "A food bank network ending food insecurity.",
    "category": "Nonprofit",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-nonprofit-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s84-1",
            "type": "navbar",
            "props": {
              "brand": "Nourish Network",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s84-2",
            "type": "hero",
            "props": {
              "eyebrow": "Food for every neighbor",
              "title": "No one in our city should go hungry.",
              "subtitle": "A network of 32 food banks serving 1.2 million meals a year across our region.",
              "buttonText": "Donate now",
              "buttonHref": "/donate",
              "image": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80"
            }
          },
          {
            "id": "s84-3",
            "type": "value-grid",
            "props": {
              "title": "Where every dollar goes",
              "animate": true,
              "values": [
                {
                  "title": "$1 = 4 meals",
                  "description": "Thanks to bulk sourcing and food rescue."
                },
                {
                  "title": "94% to programs",
                  "description": "Industry-leading efficiency, audited annually."
                },
                {
                  "title": "32 partner banks",
                  "description": "Distributing food across all 14 counties we serve."
                }
              ]
            }
          },
          {
            "id": "s84-4",
            "type": "cta",
            "props": {
              "title": "Volunteer this Saturday",
              "subtitle": "Two-hour shifts. Meaningful impact.",
              "buttonText": "Sign up to volunteer",
              "buttonHref": "#"
            }
          },
          {
            "id": "s84-5",
            "type": "footer",
            "props": {
              "brand": "Nourish Network",
              "tagline": "A food bank network ending food insecurity.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-nonprofit-5",
    "name": "Bright Futures — Nonprofit",
    "description": "After-school mentorship for kids who need a champion.",
    "category": "Nonprofit",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-nonprofit-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s85-1",
            "type": "navbar",
            "props": {
              "brand": "Bright Futures",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s85-2",
            "type": "hero",
            "props": {
              "eyebrow": "Mentorship · After-school",
              "title": "Every kid deserves someone in their corner.",
              "subtitle": "We pair under-served students with trained mentors for weekly 1-on-1 sessions.",
              "buttonText": "Become a mentor",
              "buttonHref": "/mentor",
              "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80"
            }
          },
          {
            "id": "s85-3",
            "type": "features",
            "props": {
              "title": "Why mentorship works",
              "subtitle": "A trusted adult changes everything.",
              "items": [
                {
                  "title": "94% graduation",
                  "description": "Among matched students, vs 71% in our schools overall."
                },
                {
                  "title": "3-year matches",
                  "description": "We commit to long-term, consistent relationships."
                },
                {
                  "title": "Trained mentors",
                  "description": "Every mentor goes through 12 hours of training."
                }
              ]
            }
          },
          {
            "id": "s85-4",
            "type": "cta",
            "props": {
              "title": "Volunteer 1 hour a week",
              "subtitle": "Change a life. Including your own.",
              "buttonText": "Apply to mentor",
              "buttonHref": "#"
            }
          },
          {
            "id": "s85-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Bright Futures team directly.",
              "email": "hello@bright-futures.com"
            }
          },
          {
            "id": "s85-6",
            "type": "footer",
            "props": {
              "brand": "Bright Futures",
              "tagline": "After-school mentorship for kids who need a champion.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-tech-product-1",
    "name": "Aria Headphones — Tech Product",
    "description": "Studio-grade wireless headphones with 60-hour battery.",
    "category": "Tech Product",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-tech-product-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s86-1",
            "type": "navbar",
            "props": {
              "brand": "Aria Headphones",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s86-2",
            "type": "hero",
            "props": {
              "eyebrow": "New · Aria Pro",
              "title": "Studio sound. Everywhere you go.",
              "subtitle": "Reference-grade wireless headphones with 60 hours of battery and adaptive noise cancellation.",
              "buttonText": "Pre-order · $399",
              "buttonHref": "/preorder",
              "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400&q=80"
            }
          },
          {
            "id": "s86-3",
            "type": "features",
            "props": {
              "title": "Engineered for sound",
              "subtitle": "Five years of work in every component.",
              "items": [
                {
                  "title": "Custom 50mm drivers",
                  "description": "Reference response from 5Hz to 40kHz."
                },
                {
                  "title": "Adaptive ANC",
                  "description": "Three modes that adapt to your environment."
                },
                {
                  "title": "60-hour battery",
                  "description": "A week of commutes on a single charge."
                }
              ]
            }
          },
          {
            "id": "s86-4",
            "type": "cta",
            "props": {
              "title": "Reserve yours",
              "subtitle": "Ships in early summer. Free returns for 30 days.",
              "buttonText": "Pre-order",
              "buttonHref": "#"
            }
          },
          {
            "id": "s86-5",
            "type": "footer",
            "props": {
              "brand": "Aria Headphones",
              "tagline": "Studio-grade wireless headphones with 60-hour battery.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-tech-product-2",
    "name": "Neo Camera — Tech Product",
    "description": "A modern compact camera for everyday photographers.",
    "category": "Tech Product",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-tech-product-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s87-1",
            "type": "navbar",
            "props": {
              "brand": "Neo Camera",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s87-2",
            "type": "hero",
            "props": {
              "eyebrow": "Neo · Mark II",
              "title": "Pocket camera. Pro-grade photos.",
              "subtitle": "A compact full-frame camera with the controls of a pro and the size of a phone.",
              "buttonText": "Buy · $1,299",
              "buttonHref": "/buy",
              "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&q=80"
            }
          },
          {
            "id": "s87-3",
            "type": "features",
            "props": {
              "title": "Built for every photographer",
              "subtitle": "Effortless. Powerful. Portable.",
              "items": [
                {
                  "title": "Full-frame sensor",
                  "description": "24MP performance in a body that fits in a coat pocket."
                },
                {
                  "title": "Real controls",
                  "description": "Manual dials for ISO, shutter, and aperture."
                },
                {
                  "title": "Native film looks",
                  "description": "15 in-camera film simulations to shoot finished JPGs."
                }
              ]
            }
          },
          {
            "id": "s87-4",
            "type": "cta",
            "props": {
              "title": "Free engraving included",
              "subtitle": "Personalize the back plate of your camera at no cost.",
              "buttonText": "Order now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s87-5",
            "type": "footer",
            "props": {
              "brand": "Neo Camera",
              "tagline": "A modern compact camera for everyday photographers.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-tech-product-3",
    "name": "Halo Lighting — Tech Product",
    "description": "Smart lighting that knows your day.",
    "category": "Tech Product",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-tech-product-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s88-1",
            "type": "navbar",
            "props": {
              "brand": "Halo Lighting",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s88-2",
            "type": "hero",
            "props": {
              "eyebrow": "Smart · Quiet · Beautiful",
              "title": "Light that knows what time it is.",
              "subtitle": "Smart lighting that mimics natural daylight, automatically.",
              "buttonText": "Shop the system",
              "buttonHref": "/shop",
              "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1400&q=80"
            }
          },
          {
            "id": "s88-3",
            "type": "product-grid",
            "props": {
              "title": "Featured",
              "products": [
                {
                  "name": "Halo Bulb",
                  "price": "$29",
                  "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
                },
                {
                  "name": "Halo Strip",
                  "price": "$59",
                  "image": "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80"
                },
                {
                  "name": "Halo Pendant",
                  "price": "$189",
                  "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
                },
                {
                  "name": "Halo Bridge",
                  "price": "$79",
                  "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80"
                }
              ]
            }
          },
          {
            "id": "s88-4",
            "type": "cta",
            "props": {
              "title": "Build your system",
              "subtitle": "Free shipping on starter kits over $200.",
              "buttonText": "Shop kits",
              "buttonHref": "#"
            }
          },
          {
            "id": "s88-5",
            "type": "footer",
            "props": {
              "brand": "Halo Lighting",
              "tagline": "Smart lighting that knows your day.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-tech-product-4",
    "name": "Nimbus Drone — Tech Product",
    "description": "A pro-grade drone for filmmakers and creators.",
    "category": "Tech Product",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-tech-product-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s89-1",
            "type": "navbar",
            "props": {
              "brand": "Nimbus Drone",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s89-2",
            "type": "hero",
            "props": {
              "eyebrow": "Nimbus · 4K Pro",
              "title": "A drone that works as hard as you do.",
              "subtitle": "A 4K cinema drone with 45-minute flight time and 12km range.",
              "buttonText": "Pre-order · $1,499",
              "buttonHref": "/preorder",
              "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=80"
            }
          },
          {
            "id": "s89-3",
            "type": "features",
            "props": {
              "title": "For filmmakers, by filmmakers",
              "subtitle": "No-compromise tools at a serious price point.",
              "items": [
                {
                  "title": "4K @ 120fps",
                  "description": "Cinema-grade footage in any condition."
                },
                {
                  "title": "45-min flight",
                  "description": "The longest flight time in its class."
                },
                {
                  "title": "Tracking AI",
                  "description": "Subject tracking that actually works in the field."
                }
              ]
            }
          },
          {
            "id": "s89-4",
            "type": "cta",
            "props": {
              "title": "Pre-order today",
              "subtitle": "Free worldwide shipping. Ships in May.",
              "buttonText": "Reserve now",
              "buttonHref": "#"
            }
          },
          {
            "id": "s89-5",
            "type": "footer",
            "props": {
              "brand": "Nimbus Drone",
              "tagline": "A pro-grade drone for filmmakers and creators.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-tech-product-5",
    "name": "Loop Speaker — Tech Product",
    "description": "A wireless speaker built around vinyl.",
    "category": "Tech Product",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-tech-product-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s90-1",
            "type": "navbar",
            "props": {
              "brand": "Loop Speaker",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s90-2",
            "type": "hero",
            "props": {
              "eyebrow": "Loop · Vinyl Edition",
              "title": "A speaker that sounds like a record store.",
              "subtitle": "A premium wireless speaker tuned for vinyl. Beautifully built. Audibly different.",
              "buttonText": "Buy · $599",
              "buttonHref": "/buy",
              "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1400&q=80"
            }
          },
          {
            "id": "s90-3",
            "type": "features",
            "props": {
              "title": "Sound, considered",
              "subtitle": "Designed and built to last decades.",
              "items": [
                {
                  "title": "Walnut cabinet",
                  "description": "Solid walnut, hand-finished in our workshop."
                },
                {
                  "title": "Tube preamp",
                  "description": "A real glass tube for warm, analog character."
                },
                {
                  "title": "50W per channel",
                  "description": "Cleanly fills a large living room."
                }
              ]
            }
          },
          {
            "id": "s90-4",
            "type": "cta",
            "props": {
              "title": "Hear it in person",
              "subtitle": "Visit our showroom or one of 14 partner stores.",
              "buttonText": "Find a dealer",
              "buttonHref": "#"
            }
          },
          {
            "id": "s90-5",
            "type": "footer",
            "props": {
              "brand": "Loop Speaker",
              "tagline": "A wireless speaker built around vinyl.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-personal-brand-1",
    "name": "Ana Park — Personal Brand",
    "description": "Author, speaker, and host of the Make It Real podcast.",
    "category": "Personal Brand",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-personal-brand-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s91-1",
            "type": "navbar",
            "props": {
              "brand": "Ana Park",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s91-2",
            "type": "hero",
            "props": {
              "eyebrow": "Author · Speaker · Host",
              "title": "Hi, I'm Ana.",
              "subtitle": "I write and talk about creativity, ambition, and how to make the work that matters to you.",
              "buttonText": "Read my essays",
              "buttonHref": "/essays",
              "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
            }
          },
          {
            "id": "s91-3",
            "type": "features",
            "props": {
              "title": "What I make",
              "subtitle": "Three things I show up for.",
              "items": [
                {
                  "title": "The book",
                  "description": "Make It Real, out now from Penguin."
                },
                {
                  "title": "The podcast",
                  "description": "Weekly conversations with people doing meaningful work."
                },
                {
                  "title": "The newsletter",
                  "description": "A short essay every Sunday morning. Free."
                }
              ]
            }
          },
          {
            "id": "s91-4",
            "type": "cta",
            "props": {
              "title": "Book me to speak",
              "subtitle": "I do 10 keynotes a year. Currently booking 2026.",
              "buttonText": "Speaking inquiries",
              "buttonHref": "#"
            }
          },
          {
            "id": "s91-5",
            "type": "newsletter",
            "props": {
              "title": "Sunday letters",
              "subtitle": "A short essay every Sunday. Free, forever.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s91-6",
            "type": "footer",
            "props": {
              "brand": "Ana Park",
              "tagline": "Author, speaker, and host of the Make It Real podcast.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-personal-brand-2",
    "name": "Marco Field — Personal Brand",
    "description": "Independent strategist and venture advisor.",
    "category": "Personal Brand",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-personal-brand-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s92-1",
            "type": "navbar",
            "props": {
              "brand": "Marco Field",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s92-2",
            "type": "hero",
            "props": {
              "eyebrow": "Strategy · Advising · Investing",
              "title": "I help founders make their hardest decisions.",
              "subtitle": "I work with a small group of founders as an independent advisor and angel investor.",
              "buttonText": "See my work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
            }
          },
          {
            "id": "s92-3",
            "type": "value-grid",
            "props": {
              "title": "How I work",
              "animate": true,
              "values": [
                {
                  "title": "Long-term",
                  "description": "I take on 4 founders a year. We work together for years, not weeks."
                },
                {
                  "title": "Hands-on",
                  "description": "I don't do decks. I help you make decisions and ship."
                },
                {
                  "title": "Skin in the game",
                  "description": "I invest in every company I work with."
                }
              ]
            }
          },
          {
            "id": "s92-4",
            "type": "cta",
            "props": {
              "title": "Work together",
              "subtitle": "Currently considering 1 engagement for next quarter.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s92-5",
            "type": "footer",
            "props": {
              "brand": "Marco Field",
              "tagline": "Independent strategist and venture advisor.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-personal-brand-3",
    "name": "Lena Ross — Personal Brand",
    "description": "Stylist, author, and founder of the LR atelier.",
    "category": "Personal Brand",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-personal-brand-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s93-1",
            "type": "navbar",
            "props": {
              "brand": "Lena Ross",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s93-2",
            "type": "hero",
            "props": {
              "eyebrow": "Stylist · Author · Designer",
              "title": "I help women dress like themselves.",
              "subtitle": "I'm a stylist and author. I run a small atelier in New York and write a weekly letter.",
              "buttonText": "Visit the atelier",
              "buttonHref": "/atelier",
              "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80"
            }
          },
          {
            "id": "s93-3",
            "type": "cta",
            "props": {
              "title": "Book a styling session",
              "subtitle": "In-person in NYC. Virtual everywhere.",
              "buttonText": "Book session",
              "buttonHref": "#"
            }
          },
          {
            "id": "s93-4",
            "type": "newsletter",
            "props": {
              "title": "The Friday letter",
              "subtitle": "A weekly note on style, craft, and confidence.",
              "placeholder": "Enter your email",
              "buttonText": "Subscribe"
            }
          },
          {
            "id": "s93-5",
            "type": "footer",
            "props": {
              "brand": "Lena Ross",
              "tagline": "Stylist, author, and founder of the LR atelier.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-personal-brand-4",
    "name": "James Lin — Personal Brand",
    "description": "Coach for ambitious founders and operators.",
    "category": "Personal Brand",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-personal-brand-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s94-1",
            "type": "navbar",
            "props": {
              "brand": "James Lin",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s94-2",
            "type": "hero",
            "props": {
              "eyebrow": "Executive coach · 1:1 only",
              "title": "Coaching for the operators behind the company.",
              "subtitle": "I coach founders, executives, and team leads through the work behind the work.",
              "buttonText": "See if we're a fit",
              "buttonHref": "/fit",
              "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
            }
          },
          {
            "id": "s94-3",
            "type": "features",
            "props": {
              "title": "Who I work with",
              "subtitle": "High-context coaching for high-leverage people.",
              "items": [
                {
                  "title": "Founders",
                  "description": "CEO and founder coaching, mostly seed to Series B."
                },
                {
                  "title": "Executives",
                  "description": "C-level and VP coaching at scale-stage companies."
                },
                {
                  "title": "Team leads",
                  "description": "Engineering and design leaders through their first big role."
                }
              ]
            }
          },
          {
            "id": "s94-4",
            "type": "cta",
            "props": {
              "title": "See if we're a fit",
              "subtitle": "A free 30-minute intro call. No commitment.",
              "buttonText": "Book a call",
              "buttonHref": "#"
            }
          },
          {
            "id": "s94-5",
            "type": "footer",
            "props": {
              "brand": "James Lin",
              "tagline": "Coach for ambitious founders and operators.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-personal-brand-5",
    "name": "Sasha Wolfe — Personal Brand",
    "description": "Musician. Performer. Songwriter.",
    "category": "Personal Brand",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-personal-brand-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s95-1",
            "type": "navbar",
            "props": {
              "brand": "Sasha Wolfe",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s95-2",
            "type": "hero",
            "props": {
              "eyebrow": "New album · Out now",
              "title": "Sasha Wolfe.",
              "subtitle": "New album \"Northern Light\" out now. On tour through the fall.",
              "buttonText": "Listen now",
              "buttonHref": "/listen",
              "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1400&q=80"
            }
          },
          {
            "id": "s95-3",
            "type": "features",
            "props": {
              "title": "On the road",
              "subtitle": "Catch the tour.",
              "items": [
                {
                  "title": "May · West Coast",
                  "description": "Los Angeles, San Francisco, Portland, Seattle, Vancouver."
                },
                {
                  "title": "June · Europe",
                  "description": "London, Paris, Berlin, Amsterdam, Stockholm."
                },
                {
                  "title": "August · Festivals",
                  "description": "Coachella, Glastonbury, Primavera Sound."
                }
              ]
            }
          },
          {
            "id": "s95-4",
            "type": "cta",
            "props": {
              "title": "See all tour dates",
              "subtitle": "Pre-sale tickets for newsletter members only.",
              "buttonText": "Tour dates",
              "buttonHref": "#"
            }
          },
          {
            "id": "s95-5",
            "type": "footer",
            "props": {
              "brand": "Sasha Wolfe",
              "tagline": "Musician. Performer. Songwriter.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-consulting-1",
    "name": "Beacon Strategy — Consulting",
    "description": "Strategic consulting for category-defining brands.",
    "category": "Consulting",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-consulting-1-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s96-1",
            "type": "navbar",
            "props": {
              "brand": "Beacon Strategy",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s96-2",
            "type": "hero",
            "props": {
              "eyebrow": "Strategy · Brand · Growth",
              "title": "Strategy for category leaders.",
              "subtitle": "A boutique strategy firm working with the brands that define their categories.",
              "buttonText": "View case studies",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80"
            }
          },
          {
            "id": "s96-3",
            "type": "features",
            "props": {
              "title": "How we work",
              "subtitle": "Senior partners on every engagement.",
              "items": [
                {
                  "title": "Diagnose",
                  "description": "4-week sprints to find the biggest unlocks for your business."
                },
                {
                  "title": "Design",
                  "description": "Strategic roadmaps with clear bets and clear sequencing."
                },
                {
                  "title": "Deliver",
                  "description": "On-the-ground support to actually execute the plan."
                }
              ]
            }
          },
          {
            "id": "s96-4",
            "type": "value-grid",
            "props": {
              "title": "Trusted by",
              "animate": true,
              "values": [
                {
                  "title": "Series A — IPO",
                  "description": "We work with companies between $10M and $1B in revenue."
                },
                {
                  "title": "94% retention",
                  "description": "Of clients re-engage us within 12 months."
                },
                {
                  "title": "Results, not decks",
                  "description": "Every engagement ends with a shipped result."
                }
              ]
            }
          },
          {
            "id": "s96-5",
            "type": "cta",
            "props": {
              "title": "Talk to a partner",
              "subtitle": "A 30-minute call to see if we're a fit.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s96-6",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Beacon Strategy team directly.",
              "email": "hello@beacon-strategy.com"
            }
          },
          {
            "id": "s96-7",
            "type": "footer",
            "props": {
              "brand": "Beacon Strategy",
              "tagline": "Strategic consulting for category-defining brands.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-consulting-2",
    "name": "Operate — Consulting",
    "description": "Operational consulting for high-growth tech companies.",
    "category": "Consulting",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-consulting-2-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s97-1",
            "type": "navbar",
            "props": {
              "brand": "Operate",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s97-2",
            "type": "hero",
            "props": {
              "eyebrow": "Operations · Finance · Talent",
              "title": "Operations consulting for builders.",
              "subtitle": "We help fast-growing tech companies run as well as they ship.",
              "buttonText": "See engagements",
              "buttonHref": "/engagements",
              "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80"
            }
          },
          {
            "id": "s97-3",
            "type": "features",
            "props": {
              "title": "What we do",
              "subtitle": "Three practices, deeply senior.",
              "items": [
                {
                  "title": "Finance & FP&A",
                  "description": "Get the numbers right. Plan with confidence."
                },
                {
                  "title": "Org design",
                  "description": "Build the team your strategy actually needs."
                },
                {
                  "title": "Process & systems",
                  "description": "Make scale feel boring. In a good way."
                }
              ]
            }
          },
          {
            "id": "s97-4",
            "type": "cta",
            "props": {
              "title": "Plan your next quarter",
              "subtitle": "Talk to a partner about your operational priorities.",
              "buttonText": "Schedule call",
              "buttonHref": "#"
            }
          },
          {
            "id": "s97-5",
            "type": "footer",
            "props": {
              "brand": "Operate",
              "tagline": "Operational consulting for high-growth tech companies.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-consulting-3",
    "name": "Cinder Brand — Consulting",
    "description": "Brand strategy for purpose-led companies.",
    "category": "Consulting",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-consulting-3-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s98-1",
            "type": "navbar",
            "props": {
              "brand": "Cinder Brand",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s98-2",
            "type": "hero",
            "props": {
              "eyebrow": "Brand strategy · Story",
              "title": "Brand strategy for purpose-led companies.",
              "subtitle": "We help mission-driven brands find sharper positioning and a stronger story.",
              "buttonText": "Read our work",
              "buttonHref": "/work",
              "image": "https://images.unsplash.com/photo-1494178270175-e96de2971df9?w=1400&q=80"
            }
          },
          {
            "id": "s98-3",
            "type": "value-grid",
            "props": {
              "title": "Why us",
              "animate": true,
              "values": [
                {
                  "title": "Strategy first",
                  "description": "We do positioning, narrative, and architecture."
                },
                {
                  "title": "Cross-discipline",
                  "description": "Strategists, writers, and researchers in one team."
                },
                {
                  "title": "Built to land",
                  "description": "Every output ships with the team that'll use it."
                }
              ]
            }
          },
          {
            "id": "s98-4",
            "type": "cta",
            "props": {
              "title": "Reposition with us",
              "subtitle": "A focused 8-week engagement, end to end.",
              "buttonText": "Start a project",
              "buttonHref": "#"
            }
          },
          {
            "id": "s98-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Cinder Brand team directly.",
              "email": "hello@cinder-brand.com"
            }
          },
          {
            "id": "s98-6",
            "type": "footer",
            "props": {
              "brand": "Cinder Brand",
              "tagline": "Brand strategy for purpose-led companies.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-consulting-4",
    "name": "NorthFork Advisory — Consulting",
    "description": "M&A advisory for founder-led businesses.",
    "category": "Consulting",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-consulting-4-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s99-1",
            "type": "navbar",
            "props": {
              "brand": "NorthFork Advisory",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s99-2",
            "type": "hero",
            "props": {
              "eyebrow": "M&A · Founder representation",
              "title": "A better way to sell your company.",
              "subtitle": "A boutique M&A advisor representing founders through the most important deal of their career.",
              "buttonText": "Speak confidentially",
              "buttonHref": "/inquire",
              "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&q=80"
            }
          },
          {
            "id": "s99-3",
            "type": "features",
            "props": {
              "title": "How we work",
              "subtitle": "Founders first. Always.",
              "items": [
                {
                  "title": "Senior bankers only",
                  "description": "No analysts. No juniors. Real partners on every deal."
                },
                {
                  "title": "Process discipline",
                  "description": "Competitive, structured processes that get the best terms."
                },
                {
                  "title": "Long-term aligned",
                  "description": "We're paid on outcomes, not hours."
                }
              ]
            }
          },
          {
            "id": "s99-4",
            "type": "cta",
            "props": {
              "title": "Considering a sale?",
              "subtitle": "A confidential conversation, with no obligation.",
              "buttonText": "Reach out",
              "buttonHref": "#"
            }
          },
          {
            "id": "s99-5",
            "type": "footer",
            "props": {
              "brand": "NorthFork Advisory",
              "tagline": "M&A advisory for founder-led businesses.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "tpl-consulting-5",
    "name": "Civil Forge — Consulting",
    "description": "Public sector consulting for civic technology teams.",
    "category": "Consulting",
    "allowedSections": [
      "navbar",
      "hero",
      "features",
      "product-grid",
      "cta",
      "footer",
      "contact",
      "newsletter",
      "value-grid"
    ],
    "pages": [
      {
        "id": "tpl-consulting-5-home",
        "name": "Home",
        "slug": "home",
        "sections": [
          {
            "id": "s100-1",
            "type": "navbar",
            "props": {
              "brand": "Civil Forge",
              "sticky": true,
              "showIcons": false,
              "animate": true,
              "links": [
                {
                  "label": "Home",
                  "href": "#"
                },
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Features",
                  "href": "#features"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                }
              ]
            }
          },
          {
            "id": "s100-2",
            "type": "hero",
            "props": {
              "eyebrow": "Public sector · Civic tech",
              "title": "Government services that work for people.",
              "subtitle": "We partner with public sector teams to design and deliver modern digital services.",
              "buttonText": "See our projects",
              "buttonHref": "/projects",
              "image": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1400&q=80"
            }
          },
          {
            "id": "s100-3",
            "type": "features",
            "props": {
              "title": "Where we work",
              "subtitle": "Modernizing public services across three areas.",
              "items": [
                {
                  "title": "Service design",
                  "description": "End-to-end design of citizen-facing services."
                },
                {
                  "title": "Modernization",
                  "description": "Replatforming legacy systems into modern stacks."
                },
                {
                  "title": "Capability building",
                  "description": "Coaching internal teams to keep shipping."
                }
              ]
            }
          },
          {
            "id": "s100-4",
            "type": "cta",
            "props": {
              "title": "Partner with us",
              "subtitle": "We work with federal, state, and local teams worldwide.",
              "buttonText": "Get in touch",
              "buttonHref": "#"
            }
          },
          {
            "id": "s100-5",
            "type": "contact",
            "props": {
              "title": "Get in touch",
              "subtitle": "Reach the Civil Forge team directly.",
              "email": "hello@civil-forge.com"
            }
          },
          {
            "id": "s100-6",
            "type": "footer",
            "props": {
              "brand": "Civil Forge",
              "tagline": "Public sector consulting for civic technology teams.",
              "links": [
                {
                  "label": "About",
                  "href": "#about"
                },
                {
                  "label": "Contact",
                  "href": "#contact"
                },
                {
                  "label": "Privacy",
                  "href": "#privacy"
                },
                {
                  "label": "Terms",
                  "href": "#terms"
                }
              ]
            }
          }
        ]
      }
    ]
  }
];
