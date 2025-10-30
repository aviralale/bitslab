import { motion } from "framer-motion";
import React from "react";
import {
  FileText,
  Scale,
  UserCheck,
  Shield,
  AlertTriangle,
  Ban,
  RefreshCw,
  Globe,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

type ContentItem = {
  subtitle?: string;
  text?: string;
  list?: string[];
  contact?: {
    email: string;
    website: string;
    address: string;
  };
};

type Section = {
  icon: React.ReactNode;
  title: string;
  id: string;
  content: ContentItem[];
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 30, 2025";
  const effectiveDate = "October 30, 2025";
  const navigate = useNavigate();

  const sections: Section[] = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Acceptance of Terms",
      id: "acceptance",
      content: [
        {
          text: "By accessing and using BitsLab (labs.ctrlbits.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms of Service, please do not use this service.",
        },
        {
          text: "These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current service shall be subject to the Terms of Service.",
        },
        {
          text: "Your continued use of the service following the posting of any changes to the Terms of Service constitutes acceptance of those changes. We encourage you to review these terms periodically to stay informed of any updates.",
        },
      ],
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Description of Service",
      id: "service",
      content: [
        {
          subtitle: "Free Online Tools",
          text: "BitsLab provides a collection of free online tools for various purposes including but not limited to text conversion, image processing, PDF manipulation, and other utility functions. All tools are provided on an 'as-is' basis.",
        },
        {
          subtitle: "Service Availability",
          text: "We strive to maintain high availability of our services but do not guarantee uninterrupted or error-free operation. We may modify, suspend, or discontinue any aspect of the service at any time, including the availability of any feature, database, or content.",
        },
        {
          subtitle: "No Warranties",
          text: "BitsLab makes no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, or links provided through our tools.",
        },
      ],
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "User Responsibilities",
      id: "responsibilities",
      content: [
        {
          subtitle: "Acceptable Use",
          text: "You agree to use BitsLab only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the service. You must not use our services to store, host, or send unsolicited email (spam) or use the service to transmit any malicious code.",
        },
        {
          subtitle: "Content Responsibility",
          text: "You are solely responsible for all files, data, and content you upload, process, or transmit through our services. You represent and warrant that you own or have the necessary rights to use all content you submit to our tools.",
        },
        {
          subtitle: "Account Security",
          text: "If we provide you with an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not use our services to engage in any illegal activities, violate any laws in your jurisdiction, infringe on intellectual property rights, transmit viruses or malicious code, attempt to gain unauthorized access to our systems, or interfere with the proper functioning of our services.",
        },
      ],
    },
    {
      icon: <Ban className="w-5 h-5" />,
      title: "Prohibited Content",
      id: "prohibited",
      content: [
        {
          text: "You agree not to upload, process, or transmit through our services any content that:",
        },
        {
          list: [
            "Is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable",
            "Infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party",
            "Contains software viruses or any other computer code designed to interrupt, destroy, or limit functionality",
            "Impersonates any person or entity or misrepresents your affiliation with a person or entity",
            "Violates the privacy or publicity rights of others",
            "Contains unsolicited or unauthorized advertising or promotional materials",
            "Is designed to harass, abuse, or harm another person",
            "Exploits or harms minors in any way",
          ],
        },
      ],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Intellectual Property Rights",
      id: "intellectual-property",
      content: [
        {
          subtitle: "Our Content",
          text: "The service and its original content (excluding user-generated content), features, and functionality are and will remain the exclusive property of BitsLab and its licensors. Our trademarks, logos, and service marks displayed on the service are our property or the property of other third parties.",
        },
        {
          subtitle: "Your Content",
          text: "You retain all rights to any content you submit, upload, or process through our services. By using our services, you grant us a limited, non-exclusive license to process your content solely for the purpose of providing the requested service.",
        },
        {
          subtitle: "License to Use Service",
          text: "We grant you a limited, non-exclusive, non-transferable, and revocable license to use our services for personal or commercial purposes in accordance with these Terms of Service.",
        },
        {
          subtitle: "DMCA Compliance",
          text: "We respect the intellectual property rights of others and expect users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us with detailed information about the alleged infringement.",
        },
      ],
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Disclaimers and Limitations of Liability",
      id: "disclaimers",
      content: [
        {
          subtitle: "Service Disclaimer",
          text: "BitsLab is provided 'as is' and 'as available' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
        },
        {
          subtitle: "No Guarantee of Results",
          text: "We do not warrant that the service will meet your requirements, that the service will be uninterrupted, timely, secure, or error-free, or that the results obtained from the use of the service will be accurate or reliable.",
        },
        {
          subtitle: "Data Loss",
          text: "We are not responsible for any loss, corruption, or damage to your files or data. You should maintain backups of all important files before using our services. We automatically delete processed files as described in our Privacy Policy.",
        },
        {
          subtitle: "Limitation of Liability",
          text: "In no event shall BitsLab, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.",
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for all damages, losses, and causes of action shall not exceed the amount you have paid to us in the past twelve months, or one hundred dollars ($100), whichever is greater.",
        },
      ],
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Indemnification",
      id: "indemnification",
      content: [
        {
          text: "You agree to defend, indemnify, and hold harmless BitsLab and its licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:",
        },
        {
          list: [
            "Your use of and access to the service",
            "Your violation of any term of these Terms of Service",
            "Your violation of any third-party right, including without limitation any copyright, property, or privacy right",
            "Any claim that your content caused damage to a third party",
            "Any content you upload, process, or transmit through our services",
          ],
        },
      ],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Third-Party Services and Links",
      id: "third-party",
      content: [
        {
          subtitle: "External Links",
          text: "Our service may contain links to third-party websites or services that are not owned or controlled by BitsLab. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
        },
        {
          subtitle: "Third-Party Tools",
          text: "We may use third-party services and tools to provide certain features of our service. Your use of such features is governed by the terms and conditions of those third-party providers.",
        },
        {
          subtitle: "No Endorsement",
          text: "The inclusion of any link does not imply endorsement by BitsLab of the linked site. Use of any such linked website is at your own risk.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Modifications to Service",
      id: "modifications",
      content: [
        {
          subtitle: "Right to Modify",
          text: "We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice at any time. We may also impose limits on certain features or restrict your access to parts or all of the service without notice or liability.",
        },
        {
          subtitle: "Updates and Changes",
          text: "We continuously work to improve our services and may add, change, or remove features without prior notice. We will make reasonable efforts to notify users of significant changes to the service.",
        },
        {
          subtitle: "No Liability for Modifications",
          text: "You agree that BitsLab shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.",
        },
      ],
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "Termination",
      id: "termination",
      content: [
        {
          subtitle: "Termination by You",
          text: "You may stop using our services at any time. If you have an account, you may close it by contacting us or through your account settings.",
        },
        {
          subtitle: "Termination by Us",
          text: "We reserve the right to suspend or terminate your access to the service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Service.",
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
        },
      ],
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Governing Law and Dispute Resolution",
      id: "governing-law",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
        },
        {
          subtitle: "Dispute Resolution",
          text: "Any disputes arising out of or relating to these Terms or the service shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the rules of arbitration in Nepal.",
        },
        {
          subtitle: "Jurisdiction",
          text: "You agree to submit to the personal and exclusive jurisdiction of the courts located in Kathmandu, Nepal, for any actions for which the parties retain the right to seek injunctive or other equitable relief.",
        },
      ],
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "General Provisions",
      id: "general",
      content: [
        {
          subtitle: "Entire Agreement",
          text: "These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and BitsLab regarding the use of the service, superseding any prior agreements between you and BitsLab relating to your use of the service.",
        },
        {
          subtitle: "Severability",
          text: "If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. The invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision.",
        },
        {
          subtitle: "Waiver",
          text: "Our failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision will be effective only if in writing and signed by an authorized representative of BitsLab.",
        },
        {
          subtitle: "Assignment",
          text: "You may not assign or transfer these Terms or your rights hereunder, in whole or in part, without our prior written consent. We may assign these Terms at any time without notice to you.",
        },
        {
          subtitle: "Force Majeure",
          text: "BitsLab shall not be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.",
        },
      ],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Contact Information",
      id: "contact",
      content: [
        {
          text: "If you have any questions about these Terms of Service, please contact us at:",
        },
        {
          contact: {
            email: "legal@ctrlbits.com",
            website: "labs.ctrlbits.com",
            address: "Kathmandu, Nepal",
          },
        },
      ],
    },
  ];

  const keyPoints = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />,
      text: "Free online tools for personal and commercial use",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />,
      text: "You retain all rights to your uploaded content",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />,
      text: "We automatically delete your files after processing",
    },
    {
      icon: (
        <XCircle className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
      ),
      text: "No guarantees of uninterrupted service",
    },
    {
      icon: (
        <XCircle className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
      ),
      text: "Not liable for data loss or service interruptions",
    },
    {
      icon: (
        <XCircle className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
      ),
      text: "Prohibited to use for illegal or harmful purposes",
    },
  ];

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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Legal
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black dark:text-white">
              Terms of Service
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Please read these terms carefully before using BitsLab. By
              accessing or using our services, you agree to be bound by these
              terms and conditions.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-4">
            <h2 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Key Points
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{point.icon}</div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-3">
            <h2 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Quick Navigation
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors py-1"
                >
                  <ArrowRight className="w-3 h-3" />
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="scroll-mt-8"
            >
              <div className="space-y-6">
                {/* Section Header */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                    {section.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <h2 className="text-2xl font-medium text-black dark:text-white mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="space-y-6 pl-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-3">
                      {item.subtitle && (
                        <h3 className="text-lg font-medium text-black dark:text-white">
                          {item.subtitle}
                        </h3>
                      )}
                      {item.text && (
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {item.text}
                        </p>
                      )}
                      {item.list && (
                        <ul className="space-y-2 ml-4">
                          {item.list.map((listItem, listIndex) => (
                            <li
                              key={listIndex}
                              className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                            >
                              <span className="text-neutral-400 dark:text-neutral-600 mt-1.5">
                                •
                              </span>
                              <span className="leading-relaxed">
                                {listItem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.contact && (
                        <div className="space-y-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4">
                          <div className="flex items-start gap-3 text-sm">
                            <span className="text-neutral-500 dark:text-neutral-500 min-w-20">
                              Email:
                            </span>
                            <a
                              href={`mailto:${item.contact.email}`}
                              className="text-black dark:text-white hover:underline"
                            >
                              {item.contact.email}
                            </a>
                          </div>
                          <div className="flex items-start gap-3 text-sm">
                            <span className="text-neutral-500 dark:text-neutral-500 min-w-20">
                              Website:
                            </span>
                            <a
                              href={`https://${item.contact.website}`}
                              className="text-black dark:text-white hover:underline"
                            >
                              {item.contact.website}
                            </a>
                          </div>
                          <div className="flex items-start gap-3 text-sm">
                            <span className="text-neutral-500 dark:text-neutral-500 min-w-20">
                              Location:
                            </span>
                            <span className="text-neutral-600 dark:text-neutral-400">
                              {item.contact.address}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {sectionIndex < sections.length - 1 && (
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 mt-12" />
              )}
            </motion.section>
          ))}
        </div>

        {/* Agreement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-12"
        >
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white dark:bg-black rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />
              </div>
              <h2 className="text-2xl font-medium">Agreement Acknowledgment</h2>
            </div>
            <p className="leading-relaxed opacity-90">
              By using BitsLab, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service and our Privacy
              Policy. If you do not agree to these terms, please do not use our
              services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
                onClick={() => navigate("/privacy-policy")}
              >
                View Privacy Policy
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-8 h-12 text-base text-white dark:text-black border border-white/20 dark:border-black/20 hover:bg-white/10 dark:hover:bg-black/10"
                onClick={() =>
                  (window.location.href = "mailto:legal@ctrlbits.com")
                }
              >
                Contact Legal Team
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            These terms were last updated on {lastUpdated} and are effective
            immediately.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            © {new Date().getFullYear()} BitsLab. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
