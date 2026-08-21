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
    issuer: "Cordova Public College / IT Days",
    issuerShort: "IT DAYS 2025",
    event: "IT Days Hackathon Competition — Cordova Public College",
    date: "MARCH 2024",
    badge: "3rd Place Podium",
    badgeType: "bronze",
    iconType: "trophy",
    summary:
      "Awarded 3rd Place overall for developing TrueNai — an intelligent AI study companion built to guide and empower students in their academic journey, ensuring no learner is left behind.",
    description:
      "Engineered TrueNai during the IT Days Mini Hackathon at Cordova Public College — an AI-powered learning buddy designed to help students overcome academic challenges, master difficult concepts, and build confidence so that every learner has the personalized support needed to succeed.",
    projectTitle: "TrueNai — AI Student Learning Companion",
    evaluationPillars: [
      "AI-Powered Student Learning Guidance",
      "Concept Mastery & Personalized Study Support",
      "Rapid Full-Stack Prototyping (Next.js & Gemini AI)",
      "Live Software Demonstration & Impact Pitch",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCn",
      "Git Collaboration",
      "Gemini AI"
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
    issuer: "Cordova Public College / IT Days",
    issuerShort: "IT DAYS 2025",
    event: "IT Days Software Engineering & Project Showcase — Cordova Public College",
    date: "2024",
    badge: "Best Technical Design",
    badgeType: "tech",
    iconType: "code",
    summary:
      "Awarded Best in Tech Implementation for TrueNai, recognized for outstanding technical architecture in creating an AI buddy that empowers students to learn and thrive.",
    description:
      "Recognized for technical excellence in architecting TrueNai with Next.js, TypeScript, Gemini AI, and Supabase. Engineered clean AI prompt pipelines, type-safe data flows, and sub-second response times to deliver an AI study companion that ensures every student has the tools and confidence to excel in their education.",
    projectTitle: "TrueNai — AI-Powered Learning Architecture",
    evaluationPillars: [
      "Gemini AI Integration & Prompt Engineering",
      "Strict TypeScript Architecture & Code Quality",
      "Sub-Second Response Latency & Student UX",
      "Real-Time Database Schema with Supabase",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCn",
      "Git Collaboration",
      "Gemini AI"
    ],
    impactMetrics: [
      { label: "Distinction", value: "Top Tech Score" },
      { label: "Adjudication", value: "Faculty & Panel Evaluated" },
      { label: "Code Quality", value: "Strict TypeScript" },
    ],
  },
  {
    id: "ai-cloud-foundations",
    credentialId: "CISCO-AI-2026",
    title: "AI Fundamentals: Foundations for Understanding AI",
    categoryId: "ai-cloud",
    category: "AI & Cloud Infrastructure",
    issuer: "Cisco Networking Academy in collaboration with IBM SkillsBuild",
    issuerShort: "CISCO / IBM SKILLSBUILD",
    event: "AI Fundamentals: Foundations for Understanding AI",
    date: "AUGUST 2026",
    badge: "Verified Badge",
    badgeType: "cloud",
    iconType: "cloud",
    summary:
      "Cisco, in collaboration with IBM SkillsBuild, verifies that the earner of this badge successfully completed AI Fundamentals: Foundations for Understanding AI.",
    description:
      "The holder of this student-level credential has foundational knowledge of artificial intelligence, including AI forms, data, AI ethics, prompt writing, applications of AI, bias detection and mitigation, computer vision AI, critical thinking, generative AI, and machine learning.",
    evaluationPillars: [
      "AI Forms and Uses",
      "AI Ethics & Bias Detection and Mitigation",
      "AI Prompt Writing & Generative AI",
      "Computer Vision AI & Machine Learning",
    ],
    skills: [
      "AI Ethics",
      "AI Forms and Uses",
      "AI Prompt Writing",
      "Applications of AI",
      "Artificial Intelligence (AI)",
      "Bias Detection and Mitigation",
      "Computer Vision AI",
      "Critical Thinking",
      "Generative AI",
      "Machine Learning",
    ],
    impactMetrics: [
      { label: "Issued To", value: "Carl Joseph Sumagang" },
      { label: "Date Issued", value: "August 19, 2026" },
      { label: "Issued By", value: "Cisco" },
    ],
  },
];
