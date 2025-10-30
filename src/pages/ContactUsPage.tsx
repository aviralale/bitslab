import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                <MessageSquare className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Get in Touch
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black dark:text-white">
                  Let's Talk
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  Have a question, suggestion, or just want to say hi? We're
                  here to help. Drop us a message and we'll get back to you as
                  soon as possible.
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
                  <Mail className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                      Send a Message
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-medium text-black dark:text-white">
                    Tell Us What You're Thinking
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="h-12 rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="h-12 rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="h-12 rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      rows={6}
                      className="rounded-2xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full sm:w-auto rounded-full px-8 h-12 text-base group"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Send className="w-4 h-4 mr-2" />
                        </motion.div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                      Contact Info
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-black dark:text-white">
                    Other Ways to Reach Us
                  </h3>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <ContactInfoCard
                    icon={<Mail className="w-5 h-5" />}
                    title="Email"
                    content="hello@ctrlbits.com"
                    href="mailto:hello@ctrlbits.com"
                  />
                  <ContactInfoCard
                    icon={<MapPin className="w-5 h-5" />}
                    title="Location"
                    content="Kathmandu, Nepal"
                  />
                  <ContactInfoCard
                    icon={<Clock className="w-5 h-5" />}
                    title="Response Time"
                    content="Usually within 24 hours"
                  />
                </div>

                {/* Social Links */}
                <div className="pt-8 space-y-4">
                  <h4 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    <SocialLink
                      href="#"
                      icon={<Github className="w-4 h-4" />}
                      label="GitHub"
                    />
                    <SocialLink
                      href="#"
                      icon={<Twitter className="w-4 h-4" />}
                      label="Twitter"
                    />
                    <SocialLink
                      href="#"
                      icon={<Linkedin className="w-4 h-4" />}
                      label="LinkedIn"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                    Quick Answers
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                <FAQItem
                  question="How do I report a bug or issue?"
                  answer="Use the contact form above with 'Bug Report' in the subject line. Please include details about what happened and which tool you were using."
                />
                <FAQItem
                  question="Can I suggest a new tool?"
                  answer="Absolutely! We love hearing from users. Send us your ideas through the contact form and we'll consider them for future releases."
                />
                <FAQItem
                  question="Do you offer business or enterprise solutions?"
                  answer="Yes! For custom solutions or enterprise needs, email us at hello@ctrlbits.com and we'll discuss how we can help."
                />
                <FAQItem
                  question="How can I contribute to BitsLab?"
                  answer="We're always open to collaboration. Whether you're a developer, designer, or have other skills, reach out and let's talk about how you can contribute."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-medium text-black dark:text-white">
                Prefer Email?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                You can also reach us directly at
              </p>
              <a
                href="mailto:hello@ctrlbits.com"
                className="inline-flex items-center gap-2 text-2xl font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                hello@ctrlbits.com
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Contact Info Card Component
function ContactInfoCard({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) {
  const CardContent = (
    <div className="flex items-start gap-4 p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors">
      <div className="flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-base text-black dark:text-white">{content}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

// Social Link Component
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
    >
      {icon}
    </a>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-3"
    >
      <h3 className="text-lg font-medium text-black dark:text-white">
        {question}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {answer}
      </p>
    </motion.div>
  );
}
