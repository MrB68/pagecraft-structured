import AppLayout from "@/components/AppLayout";

export default function Settings() {
  return (
    <AppLayout title="Settings">
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-elev-sm">
          <h3 className="font-semibold mb-1">Workspace</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your data is stored locally in your browser for this MVP.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Plan</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Storage</span>
              <span className="font-medium">Local</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Version</span>
              <span className="font-medium">MVP 1.0</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
