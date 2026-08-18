export interface CertificationCategory {
  id: string;
  label: string;
  description: string;
}

export interface Certification {
  id: string;
  credentialId: string;
  title: string;
  categoryId: "hackathons" | "engineering" | "ai-cloud" | "security-devops" | "management";
  category: string;
  issuer: string;
  issuerShort: string;
  event: string;
  date: string;
  badge: string;
  badgeType: "bronze" | "tech" | "meta" | "code" | "cloud";
  iconType: "trophy" | "code" | "layers" | "frontend" | "cloud";
  summary: string;
  description: string;
  evaluationPillars: string[];
  skills: string[];
  projectTitle?: string;
  impactMetrics?: { label: string; value: string }[];
}

export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  {
    id: "hackathons",
    label: "HACKATHONS & COMPETITIONS",
    description: "Honors and podium finishes from competitive software hackathons.",
  },
  {
    id: "engineering",
    label: "SOFTWARE ENGINEERING & ARCHITECTURE",
    description: "Professional full-stack systems, frontend engineering, and clean architecture.",
  },
  {
    id: "ai-cloud",
    label: "AI & CLOUD INFRASTRUCTURE",
    description: "Cloud computing pipelines, LLM prompt engineering, and generative systems.",
  },
  {
    id: "security-devops",
    label: "SECURITY & DEVOPS",
    description: "Containerization, CI/CD automation, cloud infrastructure hardening, and observability.",
  },
  {
    id: "management",
    label: "PROJECT MANAGEMENT & LEADERSHIP",
    description: "Agile methodologies, sprint coordination, and product delivery management.",
  },
];

export const ALL_CERTIFICATIONS: Certification[] = [
  {
    id: "hackathon-3rd-place",
    credentialId: "ITD-2024-HACK-03",
    title: "3rd Place — Mini Hackathon",
    categoryId: "hackathons",
    category: "Hackathons & Sprints",
    issuer: "College of Computer Studies / IT Days",
    issuerShort: "IT DAYS 2024",
    event: "Annual IT Days Hackathon Competition",
    date: "MARCH 2024",
    badge: "3rd Place Podium",
    badgeType: "bronze",
    iconType: "trophy",
    summary:
      "Awarded 3rd Place overall in an intensive, time-constrained hackathon challenge, rapidly conceptualizing and shipping a full-stack functional software prototype.",
    description:
      "Engineered an end-to-end full-stack software application from scratch within a high-pressure sprint. Designed the complete database schema, responsive frontend interface, and server-side logic while collaborating with team members to pitch and demonstrate live software utility to judges.",
    projectTitle: "Rapid Collaboration & Dispatch MVP",
    evaluationPillars: [
      "Rapid Prototyping Under Strict Time Limits",
      "User Experience & Interface Polish",
      "Full-Stack Integration & API Architecture",
      "Live Demo Functionality & Team Pitch",
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "Git Collaboration",
    ],
    impactMetrics: [
      { label: "Sprint Duration", value: "24 Hours" },
      { label: "Final Standing", value: "3rd Place" },
      { label: "Live System Demo", value: "100% Functional" },
    ],
  },
  {
    id: "best-tech-implementation",
    credentialId: "ITD-2024-TECH-01",
    title: "Best in Tech Implementation",
    categoryId: "hackathons",
    category: "Technical Excellence",
    issuer: "IT Days Annual Tech Summit & Adjudication Board",
    issuerShort: "IT DAYS TECH SUMMIT",
    event: "IT Days Software Engineering & Project Showcase",
    date: "2024",
    badge: "Best Technical Design",
    badgeType: "tech",
    iconType: "code",
    summary:
      "Recognized with special distinction for the cleanest code architecture, robust database design, system performance, and modern engineering standards.",
    description:
      "Awarded the highest technical distinction by industry judges and academic panels for demonstrating exemplary software engineering practices — including strict TypeScript typing, modular folder structure, sub-second query performance, responsive UX, and adherence to clean architecture principles.",
    projectTitle: "Enterprise-Grade Scalable Web Platform",
    evaluationPillars: [
      "Code Modularity & TypeScript Strict Standards",
      "Optimized Database Querying & Schema Design",
      "Performance & Sub-Second Latency Benchmarks",
      "Security, Authentication & Error Handling",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Architecture Design",
      "Performance Tuning",
    ],
    impactMetrics: [
      { label: "Distinction", value: "Top Tech Score" },
      { label: "Adjudication", value: "Industry Evaluated" },
      { label: "Code Quality", value: "Strict TypeScript" },
    ],
  },
  {
    id: "fullstack-specialization",
    credentialId: "META-FS-2024-88",
    title: "Full-Stack Software Engineering",
    categoryId: "engineering",
    category: "Software Engineering",
    issuer: "Meta Professional Certification Program",
    issuerShort: "META / COURSERA",
    event: "Full-Stack Developer Professional Track",
    date: "2024",
    badge: "Professional Specialization",
    badgeType: "meta",
    iconType: "layers",
    summary:
      "Comprehensive certification covering modern web architectures, API design, relational databases, security best practices, and automated testing.",
    description:
      "Completed rigorous multi-course specialization focused on end-to-end full-stack software development. Mastered server-side routing, state management, asynchronous data flows, database normalization, CI/CD pipeline automation, and production deployments.",
    projectTitle: "Production Headless Web Platform",
    evaluationPillars: [
      "Full-Stack System Architecture & API Endpoints",
      "Relational Database Design & Query Optimization",
      "Authentication, Security & Session Management",
      "Automated Testing & Deployment Workflows",
    ],
    skills: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "RESTful APIs",
      "CI/CD",
    ],
    impactMetrics: [
      { label: "Curriculum", value: "9 Modules" },
      { label: "Capstone", value: "Full-Stack Project" },
      { label: "Status", value: "Verified Credential" },
    ],
  },
  {
    id: "frontend-architecture",
    credentialId: "FCC-RWD-2023-41",
    title: "Responsive Frontend Architecture",
    categoryId: "engineering",
    category: "Frontend Engineering",
    issuer: "freeCodeCamp Developer Authority",
    issuerShort: "FREECODECAMP",
    event: "Responsive Web & UI Engineering Curriculum",
    date: "2023",
    badge: "Developer Accreditation",
    badgeType: "code",
    iconType: "frontend",
    summary:
      "Accreditation demonstrating advanced mastery of semantic markup, accessible design patterns (WCAG), CSS grid/flexbox layouts, and responsive viewports.",
    description:
      "Successfully built and verified 5 distinct responsive production web applications adhering to strict accessibility guidelines, CSS layout specifications, and cross-browser visual fidelity across mobile, tablet, and ultra-wide displays.",
    projectTitle: "Accessible Multi-Device Layout System",
    evaluationPillars: [
      "Semantic HTML5 & Accessible ARIA Attributes",
      "Advanced CSS3 Layouts & Responsive Fluid Design",
      "Cross-Browser Compatibility & Touch Optimization",
      "Zero Layout Shift (CLS) Performance Benchmarks",
    ],
    skills: [
      "TypeScript",
      "HTML5 / Semantic Web",
      "CSS3 / Tailwind",
      "WCAG a11y",
      "Responsive UX",
    ],
    impactMetrics: [
      { label: "Verified Projects", value: "5 Completed" },
      { label: "Accessibility", value: "WCAG Compliant" },
      { label: "Exam Score", value: "100% Passed" },
    ],
  },
  {
    id: "ai-cloud-foundations",
    credentialId: "GCP-AI-2024-19",
    title: "Foundations of AI & Cloud Systems",
    categoryId: "ai-cloud",
    category: "AI & Cloud Infrastructure",
    issuer: "Google Cloud & DeepLearning.AI",
    issuerShort: "GOOGLE CLOUD",
    event: "Cloud Architecture & Generative AI Workshop",
    date: "2024",
    badge: "Cloud & AI Verified",
    badgeType: "cloud",
    iconType: "cloud",
    summary:
      "Specialized credential in cloud computing fundamentals, LLM prompt orchestration, vector search architectures, and AI-enabled API integrations.",
    description:
      "Trained in cloud infrastructure concepts, serverless deployments, API authentication, and the integration of large language model capabilities into modern web applications using retrieval augmented pipelines and embeddings.",
    projectTitle: "AI-Augmented Knowledge Query Tool",
    evaluationPillars: [
      "Cloud Infrastructure & Serverless Integration",
      "LLM API Integration & Prompt Engineering",
      "Vector Embeddings & Semantic Search Pipelines",
      "Data Privacy, Latency & Token Optimization",
    ],
    skills: [
      "Cloud Computing",
      "Generative AI",
      "Vector Search",
      "Python",
      "REST APIs",
    ],
    impactMetrics: [
      { label: "Focus Track", value: "Generative AI" },
      { label: "Cloud Platform", value: "Google Cloud" },
      { label: "Credential", value: "Verified Source" },
    ],
  },
];
