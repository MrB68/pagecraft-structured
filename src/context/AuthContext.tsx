import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

/**
 * Stubbed auth provider.
 *
 * This is intentionally backend-free so the rest of the app (dashboard,
 * protected routes, login/signup forms) can be built and wired up before
 * Lovable Cloud is enabled. Swap the body of `login` / `signup` / `logout`
 * with Supabase calls later — the public API stays the same.
 */

export interface AuthUser {
  id: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  /** When false, ProtectedRoute lets every request through (current stub mode). */
  enforceAuth: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "stub-auth-user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore "session" from localStorage on mount (persistence stub).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  const persist = (next: AuthUser | null) => {
    setUser(next);
    if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    else localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      // Currently false → ProtectedRoute is a no-op. Flip to `true` (or
      // make it depend on `user`) once real Supabase auth is wired in.
      enforceAuth: false,
      login: async (email) => {
        if (!email) return { error: "Email is required" };
        persist({ id: `local-${email}`, email });
        return {};
      },
      signup: async (email) => {
        if (!email) return { error: "Email is required" };
        persist({ id: `local-${email}`, email });
        return {};
      },
      logout: async () => {
        persist(null);
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
