import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBuilderStore } from "@/store/builderStore";
import { useAuth } from "@/context/AuthContext";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Crown,
  ExternalLink,
  Globe,
  LogOut,
  Pencil,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import type { SiteRole } from "@/types";

const ROLE_VARIANT: Record<SiteRole, "default" | "secondary" | "outline"> = {
  owner: "default",
  admin: "secondary",
  editor: "secondary",
  viewer: "outline",
};

export default function Dashboard() {
  const websites = useBuilderStore((s) => s.websites);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const siteCount = websites.length;
  const sortedSites = useMemo(
    () => [...websites].sort((a, b) => b.createdAt - a.createdAt),
    [websites],
  );

  const handleLogout = async () => {
    await logout();
    toast.success("Signed out");
    navigate("/login");
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Dashboard
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              {user?.email ? `Welcome, ${user.email.split("@")[0]}` : "Your sites"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {siteCount === 0
                ? "You don't have any sites yet."
                : `Managing ${siteCount} site${siteCount === 1 ? "" : "s"}.`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {user && (
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1.5" /> Sign out
              </Button>
            )}
            <Button asChild>
              <Link to="/templates">
                <Plus className="w-4 h-4 mr-1.5" /> Create New Site
              </Link>
            </Button>
          </div>
        </header>

        {sortedSites.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent grid place-items-center mx-auto">
                <Globe className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="font-semibold text-lg">No websites yet</h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
                  Pick a template to spin up your first site. You'll be the
                  owner and can invite collaborators later.
                </p>
              </div>
              <Button asChild>
                <Link to="/templates">
                  <Plus className="w-4 h-4 mr-1.5" /> Browse templates
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedSites.map((site) => {
              const role: SiteRole = site.role ?? "owner";
              const firstPage = site.pages[0];
              return (
                <Card key={site.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight truncate">
                        {site.name}
                      </CardTitle>
                      <Badge
                        variant={ROLE_VARIANT[role]}
                        className="capitalize shrink-0"
                      >
                        {role === "owner" && (
                          <Crown className="w-3 h-3 mr-1 -ml-0.5" />
                        )}
                        {role}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          site.published ? "bg-emerald-500" : "bg-muted-foreground/40"
                        }`}
                      />
                      {site.published ? "Published" : "Draft"}
                      <span className="text-muted-foreground/60">·</span>
                      <span>
                        {site.pages.length} page
                        {site.pages.length === 1 ? "" : "s"}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end gap-2">
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/sites/${site.id}/pages`}>
                          <Pencil className="w-3.5 h-3.5 mr-1.5" /> Open Site
                        </Link>
                      </Button>
                      {site.published && firstPage && (
                        <Button asChild size="sm" variant="outline">
                          <Link
                            to={`/site/${site.id}/${firstPage.id}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View live"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
