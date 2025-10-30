import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Users,
  Heart,
  Zap,
  Globe,
  Shield,
  Code,
  Lightbulb,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function AboutBitsLabPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-black">
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

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  About BitsLab
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black dark:text-white">
                  Building Tools
                  <br />
                  <span className="text-neutral-400 dark:text-neutral-600">
                    That Matter
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  BitsLab is more than just a collection of tools — it's a
                  mission to make technology accessible, practical, and useful
                  for everyone in Nepal and beyond.
                </p>
              </div>

              {/* Floating Icon Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pt-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full">
                  <Heart className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                Why We Built BitsLab
              </h2>

              <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  In 2024, we noticed a gap in the market. While there were
                  countless online tools available globally, very few were
                  designed with Nepali users in mind. Simple tasks like
                  converting between Nepali fonts or generating invoices in
                  Nepali format required expensive software or complicated
                  workarounds.
                </p>
                <p>
                  That's when we decided to build{" "}
                  <span className="font-medium text-black dark:text-white">
                    BitsLab
                  </span>{" "}
                  — a free, accessible, and privacy-focused toolkit that anyone
                  can use. No downloads, no sign-ups, no hassle. Just simple
                  tools that work instantly in your browser.
                </p>
                <p>
                  Today, BitsLab serves thousands of users — from students
                  working on assignments to businesses creating professional
                  documents. And we're just getting started.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full">
                  <Target className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
                <h3 className="text-3xl font-medium text-black dark:text-white">
                  Our Mission
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  To empower individuals and businesses with simple, powerful,
                  and accessible digital tools that solve real problems —
                  without the complexity or cost of traditional software.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full">
                  <Lightbulb className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
                <h3 className="text-3xl font-medium text-black dark:text-white">
                  Our Vision
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  To become the go-to platform for everyday digital tasks in
                  Nepal and South Asia — building tools that are as beautiful as
                  they are functional, and as simple as they are powerful.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-16"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Our Values
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Zap className="w-5 h-5" />}
                title="Simplicity First"
                description="We believe the best tools are the ones you don't need a manual to use."
              />
              <ValueCard
                icon={<Shield className="w-5 h-5" />}
                title="Privacy Matters"
                description="Your data stays on your device. We never store, track, or share your information."
              />
              <ValueCard
                icon={<Users className="w-5 h-5" />}
                title="User-Focused"
                description="Every feature we build starts with a real user need, not a business goal."
              />
              <ValueCard
                icon={<Globe className="w-5 h-5" />}
                title="Made in Nepal"
                description="Built by Nepalis, for Nepalis — with a deep understanding of local needs."
              />
            </div>
          </div>
        </section>

        {/* Ctrl Bits Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full">
                <Code className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                  Powered by Ctrl Bits
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  BitsLab is a project by{" "}
                  <span className="font-medium text-black dark:text-white">
                    Ctrl Bits
                  </span>
                  , a Nepali technology company focused on building practical
                  digital products. We specialize in web development, design,
                  and creating tools that solve everyday problems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 text-base group"
                  onClick={() => window.open("https://ctrlbits.com", "_blank")}
                >
                  Visit Ctrl Bits
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-16"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  The Team
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                Built by Creators, For Creators
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                We're a small team of developers, designers, and dreamers based
                in Kathmandu, passionate about building tools that make a
                difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <TeamMember
                name="Development Team"
                role="Building the future"
                description="Creating fast, reliable tools with modern technology."
              />
              <TeamMember
                name="Design Team"
                role="Crafting experiences"
                description="Making every interaction beautiful and intuitive."
              />
              <TeamMember
                name="Community"
                role="Our biggest asset"
                description="Users who give feedback and help us improve."
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                Let's Build Together
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Have questions, suggestions, or just want to say hi? We'd love
                to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 text-base group"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 pt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full hover:border-black dark:hover:border-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Github className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full hover:border-black dark:hover:border-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full hover:border-black dark:hover:border-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Value Card Component
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Team Member Component
function TeamMember({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full">
        <Users className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-black dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
          {role}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
