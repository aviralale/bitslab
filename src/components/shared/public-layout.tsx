import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Transform navbar based on scroll
  const navbarY = useTransform(scrollY, [0, 100], [0, -10]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [1, 0.95]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Floating Navbar */}
      <FloatingNavbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navbarY={navbarY}
        navbarOpacity={navbarOpacity}
      />

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

// Floating Navbar Component
function FloatingNavbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  navbarY,
  navbarOpacity,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navbarY: any;
  navbarOpacity: any;
}) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore-tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.nav
        style={{ y: navbarY, opacity: navbarOpacity }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 transition-all duration-300",
              scrolled ? "rounded-full shadow-lg" : "rounded-3xl shadow-md"
            )}
          >
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative h-10 w-10 border border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors overflow-hidden"
                >
                  <img
                    src={theme === "dark" ? "/logo.png" : "/logo-b.png"}
                    alt="BitsLab Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div className="hidden sm:flex flex-col">
                  <span className="font-medium text-base text-black dark:text-white">
                    BitsLab
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                    By Ctrl Bits
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "rounded-full px-6 text-sm",
                        location.pathname === link.href
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                      )}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full h-10 w-10"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-50 lg:hidden"
        >
          <div className="bg-white/95 dark:bg-black/95 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-base rounded-2xl h-12",
                      location.pathname === link.href
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : "text-neutral-600 dark:text-neutral-400"
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/explore-tools", label: "All Tools" },
      { href: "/unicode-preeti-converter", label: "Font Converter" },
      { href: "#", label: "Roadmap" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "#", label: "Blog" },
    ],
    legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  };

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 border border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors">
                <img src="/logo.png" alt="BitsLab Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg text-black dark:text-white">
                  BitsLab
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                  By Ctrl Bits
                </span>
              </div>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Building simple, powerful, and accessible digital tools for
              everyday tasks. Made in Nepal with ❤️
            </p>
            <div className="flex gap-3">
              <SocialLink
                href="https://github.com/ctrlbits"
                icon={<Github className="w-4 h-4" />}
              />
              <SocialLink
                href="https://x.com/ctrl_bits"
                icon={<Twitter className="w-4 h-4" />}
              />
              <SocialLink
                href="https://linkedin.com/company/ctrlbits"
                icon={<Linkedin className="w-4 h-4" />}
              />
              <SocialLink
                href="mailto:info@ctrlbits.com"
                icon={<Mail className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} BitsLab by Ctrl Bits. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-black dark:bg-white"
                />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <span className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Link Component
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
    >
      {icon}
    </a>
  );
}
