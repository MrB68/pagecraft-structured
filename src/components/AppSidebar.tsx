import {
  BarChart3,
  ChevronLeft,
  FileText,
  Folder,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  LayoutTemplate,
  Megaphone,
  Pencil,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Star,
  Tag,
  Users,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useBuilderStore } from "@/store/builderStore";
import { useParams } from "react-router-dom";

interface Item {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  end?: boolean;
}

const mainItems: Item[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, end: true },
  { title: "Websites", url: "/websites", icon: Globe },
  { title: "Templates", url: "/templates", icon: LayoutTemplate },
];

const builderItems = (siteId: string, firstPageId?: string): Item[] => [
  { title: "Pages", url: `/sites/${siteId}/pages`, icon: FileText },
  {
    title: "Editor",
    url: firstPageId ? `/editor/${siteId}/${firstPageId}` : `/sites/${siteId}/pages`,
    icon: Pencil,
  },
  { title: "Media", url: `/sites/${siteId}/media`, icon: ImageIcon },
];

const commerceItems = (siteId: string): Item[] => [
  { title: "Products", url: `/sites/${siteId}/products`, icon: ShoppingBag },
  { title: "Categories", url: `/sites/${siteId}/categories`, icon: Folder },
  { title: "Brands", url: `/sites/${siteId}/brands`, icon: Tag },
  { title: "Orders", url: `/sites/${siteId}/orders`, icon: ShoppingCart },
  { title: "POS", url: `/sites/${siteId}/pos`, icon: Store },
  { title: "Customers", url: `/sites/${siteId}/customers`, icon: Users },
  { title: "Reviews", url: `/sites/${siteId}/reviews`, icon: Star },
];

const analyticsItems = (siteId: string): Item[] => [
  { title: "Traffic overview", url: `/sites/${siteId}/analytics`, icon: BarChart3 },
  { title: "Basic stats", url: `/sites/${siteId}/analytics/stats`, icon: Megaphone },
];

const settingsItems = (siteId?: string): Item[] =>
  siteId
    ? [
        { title: "Website Settings", url: `/sites/${siteId}/settings`, icon: Settings },
        { title: "Domain & Publish", url: `/sites/${siteId}/domain`, icon: Globe },
      ]
    : [{ title: "Settings", url: "/settings", icon: Settings }];

function Group({ label, items }: { label: string; items: Item[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] uppercase tracking-wider font-semibold">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url + item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink
                  to={item.url}
                  end={item.end}
                  className="flex items-center gap-2"
                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const { siteId } = useParams();
  const site = useBuilderStore((s) =>
    siteId ? s.websites.find((w) => w.id === siteId) : undefined
  );
  const inSiteContext = Boolean(site);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow shrink-0">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="font-semibold tracking-tight">Sitewise</div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {inSiteContext && site && (
          <SidebarGroup>
            <SidebarGroupContent>
              <NavLink
                to="/websites"
                className="mx-2 mt-1 flex items-center gap-2 rounded-md px-2 py-2 text-xs text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider opacity-70">Editing</div>
                  <div className="truncate font-medium text-sidebar-foreground">{site.name}</div>
                </div>
              </NavLink>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <Group label="Main" items={mainItems} />

        {inSiteContext && site && (
          <>
            <Group label="Builder" items={builderItems(site.id, site.pages[0]?.id)} />
            <Group label="Commerce" items={commerceItems(site.id)} />
            <Group label="Analytics" items={analyticsItems(site.id)} />
          </>
        )}

        <Group label="Settings" items={settingsItems(site?.id)} />
      </SidebarContent>
    </Sidebar>
  );
}
