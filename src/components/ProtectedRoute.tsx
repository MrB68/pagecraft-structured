import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  /** Optional override; defaults to AuthContext.enforceAuth. */
  enforce?: boolean;
}

/**
 * Redirects to /login if auth is enforced and there's no user.
 * While `enforceAuth` is false (stub mode), this component lets every
 * request through so existing pages keep working without a backend.
 */
export default function ProtectedRoute({ children, enforce }: ProtectedRouteProps) {
  const { user, loading, enforceAuth } = useAuth();
  const location = useLocation();
  const shouldEnforce = enforce ?? enforceAuth;

  if (!shouldEnforce) return <>{children}</>;
  if (loading) return null;
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}
