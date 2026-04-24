import { Navigate, useParams } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { useBuilderStore } from "@/store/builderStore";
import { Link } from "react-router-dom";

interface SiteShellProps {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function useCurrentSite() {
  const { siteId = "" } = useParams();
  const site = useBuilderStore((s) => s.websites.find((w) => w.id === siteId));
  return { siteId, site };
}

export default function SiteShell({ title, actions, children }: SiteShellProps) {
  const { site } = useCurrentSite();

  if (!site) {
    return (
      <AppLayout title="Website not found">
        <div className="rounded-xl border border-dashed border-border p-10 text-center bg-card max-w-lg">
          <p className="text-muted-foreground mb-4">
            This website doesn't exist or has been deleted.
          </p>
          <Button asChild variant="outline">
            <Link to="/websites">Back to websites</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title={title} actions={actions}>
      {children}
    </AppLayout>
  );
}

export function RedirectIfNoSite() {
  const { site } = useCurrentSite();
  if (!site) return <Navigate to="/websites" replace />;
  return null;
}
