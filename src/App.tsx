import { Route, Routes, useLocation } from "react-router-dom";
import UnicodePreetiConverterPage from "./pages/unicode-preeti-converter";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/shared/layout";
import { PublicLayout } from "./components/shared/public-layout";
import Homepage from "./pages/HomePage";
import ExploreToolsPage from "./pages/ExploreToolsPage";
import AboutBitsLabPage from "./pages/AboutBitsLabPage";
import ContactPage from "./pages/ContactUsPage";
import RoadmapPage from "./pages/RoadMapsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
import TextFormatterPage from "./pages/text-formatter";
import QRBarcodeGeneratorPage from "./pages/qr-barcode-generator";
import InvoiceGeneratorPage from "./pages/invoice-generator";

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // 404 page should not have any layout
  if (location.pathname === "*" || !children) {
    return <>{children}</>;
  }

  // Pages that use the public layout (floating navbar + footer)
  const publicPages = [
    "/",
    "/tools",
    "/about",
    "/contact",
    "/roadmap",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];
  const isPublicPage = publicPages.includes(location.pathname);

  // Public pages get the floating navbar and footer
  if (isPublicPage) {
    return <PublicLayout>{children}</PublicLayout>;
  }

  // Tool pages get the sidebar layout
  return <Layout>{children}</Layout>;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Routes>
        <Route
          path="/"
          element={
            <ConditionalLayout>
              <Homepage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/tools"
          element={
            <ConditionalLayout>
              <ExploreToolsPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/about"
          element={
            <ConditionalLayout>
              <AboutBitsLabPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <ConditionalLayout>
              <ContactPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ConditionalLayout>
              <RoadmapPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <ConditionalLayout>
              <PrivacyPolicyPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <ConditionalLayout>
              <TermsOfServicePage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <ConditionalLayout>
              <CookiePolicyPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/unicode-preeti-converter"
          element={
            <ConditionalLayout>
              <UnicodePreetiConverterPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/text-formatter"
          element={
            <ConditionalLayout>
              <TextFormatterPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/qr-barcode-generator"
          element={
            <ConditionalLayout>
              <QRBarcodeGeneratorPage />
            </ConditionalLayout>
          }
        />
        <Route
          path="/invoice-generator"
          element={
            <ConditionalLayout>
              <InvoiceGeneratorPage />
            </ConditionalLayout>
          }
        />

        {/* 404 Page - No layout */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}
