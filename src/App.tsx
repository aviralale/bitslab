import { Route, Routes, useLocation } from "react-router-dom";
import UnicodePreetiConverterPage from "./pages/unicode-preeti-converter";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/shared/layout";
import { PublicLayout } from "./components/shared/public-layout";
import Homepage from "./pages/HomePage";
import ExploreToolsPage from "./pages/ExploreToolsPage";
import AboutBitsLabPage from "./pages/AboutBitsLabPage";
import ContactPage from "./pages/ContactUsPage";

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Pages that use the public layout (floating navbar + footer)
  const publicPages = ["/", "/explore-tools", "/about", "/contact"];
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
      <ConditionalLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore-tools" element={<ExploreToolsPage />} />
          <Route path="/about" element={<AboutBitsLabPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/unicode-preeti-converter"
            element={<UnicodePreetiConverterPage />}
          />
        </Routes>
      </ConditionalLayout>
    </ThemeProvider>
  );
}
