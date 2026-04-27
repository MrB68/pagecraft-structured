import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Websites from "./pages/Websites.tsx";
import Templates from "./pages/Templates.tsx";
import Settings from "./pages/Settings.tsx";
import Editor from "./pages/Editor.tsx";
import PublicSite from "./pages/PublicSite.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import SitePages from "./pages/site/SitePages.tsx";
import SiteMedia from "./pages/site/SiteMedia.tsx";
import SiteProducts from "./pages/site/SiteProducts.tsx";
import { SiteCategories, SiteBrands } from "./pages/site/SiteCatalog.tsx";
import SiteOrders from "./pages/site/SiteOrders.tsx";
import SiteCustomers from "./pages/site/SiteCustomers.tsx";
import SiteReviews from "./pages/site/SiteReviews.tsx";
import SiteAnalytics from "./pages/site/SiteAnalytics.tsx";
import SiteSettings from "./pages/site/SiteSettings.tsx";
import SiteDomain from "./pages/site/SiteDomain.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Authenticated dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Main */}
            <Route path="/" element={<Index />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/settings" element={<Settings />} />

            {/* Editor (full-screen) */}
            <Route path="/editor/:siteId/:pageId" element={<Editor />} />

            {/* Site context — admin pages */}
            <Route path="/sites/:siteId" element={<Navigate to="pages" replace />} />
            <Route path="/sites/:siteId/pages" element={<SitePages />} />
            <Route path="/sites/:siteId/media" element={<SiteMedia />} />
            <Route path="/sites/:siteId/products" element={<SiteProducts />} />
            <Route path="/sites/:siteId/categories" element={<SiteCategories />} />
            <Route path="/sites/:siteId/brands" element={<SiteBrands />} />
            <Route path="/sites/:siteId/orders" element={<SiteOrders />} />
            <Route path="/sites/:siteId/customers" element={<SiteCustomers />} />
            <Route path="/sites/:siteId/reviews" element={<SiteReviews />} />
            <Route path="/sites/:siteId/analytics" element={<SiteAnalytics />} />
            <Route path="/sites/:siteId/analytics/stats" element={<SiteAnalytics />} />
            <Route path="/sites/:siteId/settings" element={<SiteSettings />} />
            <Route path="/sites/:siteId/domain" element={<SiteDomain />} />

            {/* Public */}
            <Route path="/site/:siteId" element={<PublicSite />} />
            <Route path="/site/:siteId/:pageId" element={<PublicSite />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
