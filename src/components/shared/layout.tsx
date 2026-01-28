import { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconMenu2,
  IconX,
  IconLanguage,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PenLine, QrCode, FileText } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "English to Unicode & Preeti Converter",
      href: "/unicode-preeti-converter",
      icon: (
        <IconLanguage className="h-5 w-5 shrink-0 text-black dark:text-white" />
      ),
    },
    {
      label: "Text Formatter",
      href: "/text-formatter",
      icon: <PenLine className="h-5 w-5 shrink-0 text-black dark:text-white" />,
    },
    {
      label: "QR & Barcode Generator",
      href: "/qr-barcode-generator",
      icon: <QrCode className="h-5 w-5 shrink-0 text-black dark:text-white" />,
    },
    {
      label: "Invoice Generator",
      href: "/invoice-generator",
      icon: (
        <FileText className="h-5 w-5 shrink-0 text-black dark:text-white" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div
      className={cn(
        "relative w-full flex flex-col md:flex-row overflow-hidden",
        "h-screen bg-white dark:bg-black",
      )}
    >
      {/* Dot Matrix Background */}
      <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
        <Logo theme={theme} />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconX className="h-6 w-6 text-black dark:text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconMenu2 className="h-6 w-6 text-black dark:text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 bg-white dark:bg-black border-r border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {/* Logo - Hidden on mobile since it's in header */}
            <div className="hidden md:block">
              <Logo theme={theme} />
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 flex flex-col gap-1">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                >
                  <SidebarLink link={link} />
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer Section */}
          <div className="space-y-4">
            {/* Theme Toggle */}
            <div className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 h-10 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors group"
                >
                  <div className="relative h-5 w-5 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {theme === "light" ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute"
                        >
                          <IconSun className="h-5 w-5 text-black dark:text-white" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute"
                        >
                          <IconMoon className="h-5 w-5 text-black dark:text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex flex-col items-start flex-1 overflow-hidden">
                    <span className="text-sm font-medium text-black dark:text-white truncate">
                      {theme === "light" ? "Light Mode" : "Dark Mode"}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 truncate">
                      Appearance
                    </span>
                  </div>
                </Button>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* App Info */}
            <div className="px-3 pb-4">
              <div className="flex items-center gap-3 px-3 py-2">
                {/* Status Indicators */}
                <div className="flex gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-black dark:bg-white"
                  />
                  <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>

                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium text-black dark:text-white truncate">
                    Bit Labs
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 truncate">
                    v1.12.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-auto relative z-10">
        <div className="h-full w-full">{children}</div>
      </main>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export const Logo = ({ theme }: { theme?: "light" | "dark" }) => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center gap-3 py-2 px-1 group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative h-10 w-10 border border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.img
              key="dark-logo"
              src="/logo.png"
              alt="Bit Labs Logo"
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-contain"
            />
          ) : (
            <motion.img
              key="light-logo"
              src="/logo-b.png"
              alt="Bit Labs Logo"
              initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-contain"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col"
      >
        <span className="font-medium text-base text-black dark:text-white">
          Bit Labs
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
          Innovation
        </span>
      </motion.div>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a href="/" className="relative z-20 flex items-center py-1">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="h-8 w-8 shrink-0 border border-black dark:border-white rounded-full flex items-center justify-center"
      >
        <span className="text-xs font-bold text-black dark:text-white">B</span>
      </motion.div>
    </a>
  );
};

export default Layout;
