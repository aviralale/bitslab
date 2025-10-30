import { Route, Routes } from "react-router-dom";
import UnicodePreetiConverterPage from "./pages/unicode-preeti-converter";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/shared/layout";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Layout>
        <Routes>
          <Route
            path="/unicode-preeti-converter"
            element={<UnicodePreetiConverterPage />}
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
