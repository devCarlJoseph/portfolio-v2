export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack Web" | "SaaS Platform" | "Landing & Platform" | "Enterprise ERP";
  year: string;
  featured: boolean;
  description: string;
  longDescription: string;
  imageUrl: string;
  stack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "tourism-hub",
    title: "Tourism Hub",
    tagline: "Website for Tourism Students",
    category: "Landing & Platform",
    year: "2025",
    featured: true,
    description:
      "A full-stack web platform designed for tourism students to explore destinations, access travel resources, and manage academic tourism-related content.",
    longDescription:
      "Tourism Hub is a comprehensive web application built for tourism students, providing a centralized platform to browse travel destinations, access curated educational resources, and collaborate on tourism-related coursework. It features a modern UI with server-side rendering, a PostgreSQL-backed database with Prisma ORM for structured content management, and a responsive design optimized for both desktop and mobile use.",
    imageUrl: "/projects/tourism.png",
    stack: ["Next.js", "ShadCn", "TypeScript", "PostgreSQL", "PrismaOrm", "Tailwind CSS"],
    features: [
      "Destination catalog with search and filtering",
      "Student resource library for tourism coursework",
      "Responsive layout optimized for all devices",
      "Server-side rendering for fast page loads",
      "PostgreSQL database with Prisma ORM integration",
    ],
    metrics: [
      { label: "Page Speed", value: "99/100" },
      { label: "Checkout Time", value: "< 35s" },
      { label: "Test Coverage", value: "94%" },
    ],
    githubUrl: "https://github.com/devCarlJoseph/tourism-hub.git",
  },
  {
    id: "codego",
    title: "CodeGo",
    tagline: "An Learning Platform for those who wants to learn Web Development.",
    category: "Landing & Platform",
    year: "2025",
    featured: true,
    description:
      "An interactive learning platform that teaches web development fundamentals through structured lessons, hands-on coding exercises, and progress tracking.",
    longDescription:
      "CodeGo is an educational web application designed for aspiring developers who want to learn web development from scratch. It offers structured learning paths covering HTML, CSS, JavaScript, and modern frameworks, with interactive coding exercises and real-time feedback. Built with Next.js and TypeScript, the platform features user authentication, progress tracking, and a clean UI powered by ShadCn and Tailwind CSS.",
    imageUrl: "/projects/codego.png",
    stack: ["Next.js", "ShadCn", "TypeScript", "PrismaOrm", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Structured web development learning paths",
      "Interactive coding exercises with real-time feedback",
      "User progress tracking and completion badges",
      "Beginner-friendly curriculum from HTML to modern frameworks",
      "Clean, accessible UI for focused learning",
    ],
    metrics: [
      { label: "Crash Free Rate", value: "99.8%" },
      { label: "Active Users", value: "12k+" },
      { label: "App Rating", value: "4.9 ★" },
    ],
    liveUrl: "",
    githubUrl: "https://github.com/devCarlJoseph/codego-app.git",
  },
  {
    id: "truenai",
    title: "TrueNai",
    tagline: "An AI-powered learning buddy designed to empower students in their academic journey",
    category: "Landing & Platform",
    year: "2025",
    featured: false,
    description:
      "An award-winning AI study companion that won 3rd Place and Best in Tech Integration, built with Gemini AI to help students learn effectively and excel in their studies.",
    longDescription:
      "TrueNai is an award-winning platform recognized with 3rd Place and Best in Tech Integration at Cordova Public College's IT Days Hackathon. Designed as an intelligent AI study buddy, it guides students through challenging concepts with personalized assistance, interactive explanations, and step-by-step learning support. Powered by Next.js, TypeScript, Gemini AI, Supabase, and Tailwind CSS.",
    imageUrl: "/projects/truenai.png",
    stack: ["Next.js", "TypeScript", "ShadCn", "Gemini AI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Gemini AI-powered intelligent content analysis",
      "Real-time data management with Supabase",
      "Award-winning tech integration architecture",
      "Modern, responsive UI with ShadCn components",
      "PostgreSQL-backed data persistence and querying",
    ],
    metrics: [
      { label: "Events/Day", value: "2.4M" },
      { label: "Query Latency", value: "< 45ms" },
      { label: "Uptime", value: "99.95%" },
    ],
    githubUrl: "https://github.com/devCarlJoseph/truenai-hackathon.git",
  },
  {
    id: "portoflio",
    title: "Portfolio V2",
    tagline: "A New Version of Carl Joseph Sumagang Portfolio",
    category: "Landing & Platform",
    year: "2025",
    featured: false,
    description:
      "A modern, redesigned personal portfolio showcasing projects, skills, and experience with smooth animations and a polished developer-focused design.",
    longDescription:
      "Portfolio V2 is the latest iteration of Carl Joseph Sumagang's personal portfolio website, rebuilt from the ground up with React, TypeScript, and Tailwind CSS. It features fluid page transitions powered by Motion, a curated project showcase, an interactive tech stack section, and a clean, professional layout designed to highlight development expertise and creative work.",
    imageUrl: "/projects/portfolio.png",
    stack: ["React", "TypeScript", "Tailwind CSS", "Motion", "ShadCn"],
    features: [
      "Smooth page transitions and scroll-driven animations",
      "Curated project showcase with detailed case studies",
      "Interactive tech stack and skills display",
      "Responsive design optimized for all screen sizes",
      "Clean, professional developer-focused layout",
    ],
    metrics: [
      { label: "Lead Conv.", value: "+38%" },
      { label: "LCP Score", value: "0.8s" },
      { label: "SEO Score", value: "100" },
    ],
    githubUrl: "https://github.com/devCarlJoseph/portfolio-v2.git",
  },
  {
    id: "hysync ",
    title: "Hysync - Hytale Server",
    tagline: "Hysync Server for the game Hytale",
    category: "Landing & Platform",
    year: "2025",
    featured: true,
    description:
      "A landing page and community platform for the Hysync game server, built for the upcoming Hytale game with a sleek, immersive design.",
    longDescription:
      "Hysync is a community-driven web platform built for the Hysync game server in the upcoming Hytale game. It features an immersive landing page with fluid animations, server information, community updates, and a modern design that captures the spirit of the Hytale universe. Built with Next.js, TypeScript, Tailwind CSS, and Motion for smooth interactions.",
    imageUrl: "/projects/hysync.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Immersive landing page with fluid scroll animations",
      "Server information and community updates hub",
      "Modern design inspired by the Hytale universe",
      "Responsive layout for desktop and mobile",
      "Smooth page transitions with Motion animations",
    ],
    metrics: [
      { label: "Performance", value: "100/100" },
      { label: "Bundle Size", value: "< 28kB" },
      { label: "SEO Rank", value: "#1" },
    ],
    liveUrl: "https://www.hysync.org/",
    githubUrl: "https://github.com/arielbatoon09/hysync-web.git",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack Web",
  "SaaS Platform",
  "Landing & Platform",
  "Enterprise ERP",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
