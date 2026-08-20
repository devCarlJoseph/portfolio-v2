export interface FaqItem {
  id: string;
  category: "all" | "tech" | "process" | "pricing";
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "tech", label: "Tech Stack" },
  { id: "process", label: "Workflow" },
  { id: "pricing", label: "Pricing & Terms" },
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number]["id"];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "tech",
    question: "What tech stack do you primarily use for client projects?",
    answer:
      "I build full-stack web applications with Next.js, React, TypeScript, Node.js, and PostgreSQL or Supabase. For mobile apps (iOS & Android), I use React Native / Expo and SwiftUI. Styling and animations are crafted with Tailwind CSS and Motion for maximum performance and fluid 60fps interactions.",
  },
  {
    id: "faq-2",
    category: "process",
    question: "How does the project process work from start to finish?",
    answer:
      "Every engagement follows a proven 4-stage sprint: 1) Discovery & technical scoping to define core requirements; 2) UI/UX wireframing & prototyping in Figma; 3) Iterative development with live staging previews so you can test weekly builds; 4) Final QA testing, SEO audit, and production deployment.",
  },
  {
    id: "faq-3",
    category: "process",
    question: "How long does a typical project take to build and deploy?",
    answer:
      "A high-converting landing page or campaign website is typically delivered within 1 to 2 weeks. Full-featured SaaS web applications or cross-platform mobile apps generally take 3 to 6 weeks, depending on API integrations, auth requirements, and scope complexity.",
  },
  {
    id: "faq-4",
    category: "pricing",
    question: "How do payments and project milestones work?",
    answer:
      "Projects are structured around transparent milestones — typically 50% upfront to initiate work and 50% upon final delivery and deployment sign-off. For larger multi-phase applications, we can arrange 33/33/34 milestones. Invoices and contracts are provided upfront with zero hidden fees.",
  },
  {
    id: "faq-5",
    category: "process",
    question: "Do you provide post-launch support and warranty?",
    answer:
      "Yes. Every completed project includes a 30-day post-launch warranty covering any bug fixes, technical adjustments, and minor copy updates. For long-term continuous feature development and maintenance, I also offer monthly retainer packages.",
  },
  {
    id: "faq-6",
    category: "tech",
    question: "Do I get full ownership of the source code and assets?",
    answer:
      "100% yes. Upon project completion and final payment, complete ownership of all source code repositories, design files, deployment environments, and documentation is transferred directly to your organization.",
  },
  {
    id: "faq-7",
    category: "tech",
    question: "Can you work with existing Figma designs or legacy codebases?",
    answer:
      "Yes. If you already have design mockups in Figma, I will translate them into pixel-perfect, accessible code. If you have an existing codebase that needs refactoring, Next.js migration, or performance optimization, I can jump in seamlessly.",
  },
];
