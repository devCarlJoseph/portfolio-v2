import type { IconName } from "tech-stack-icons";
import {
  Code2,
  Server,
  Cloud,
  Bot,
  Wrench,
} from "lucide-react";

export interface TechItem {
  name: string;
  category:
    | "Front End"
    | "Back End"
    | "Devops & Cloud"
    | "AI & Machine Learning"
    | "Developer Tools";
  level: "Expert" | "Advanced" | "Proficient";
  iconName: IconName;
  variant?: "light" | "dark" | "grayscale";
  description: string;
  highlight?: boolean;
}

export const CATEGORIES = [
  { id: "Front End", label: "Front End", icon: Code2 },
  { id: "Back End", label: "Back End", icon: Server },
  { id: "Devops & Cloud", label: "Devops & Cloud", icon: Cloud },
  { id: "AI & Machine Learning", label: "AI & Machine Learning", icon: Bot },
  { id: "Developer Tools", label: "Developer Tools", icon: Wrench },
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number]["id"];

export const ALL_TECH_STACK: TechItem[] = [
  // Front End
  {
    name: "JavaScript",
    category: "Front End",
    level: "Expert",
    iconName: "js",
    description:
      "ES6+ syntax, asynchronous programming, DOM APIs, and modern client-side scripting.",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Front End",
    level: "Advanced",
    iconName: "typescript",
    description:
      "Strict static typing, interfaces, generics, and type-safe frontend workflows.",
    highlight: true,
  },
  {
    name: "React",
    category: "Front End",
    level: "Expert",
    iconName: "react",
    description:
      "Component architecture, custom hooks, state management, and modern UI rendering.",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Front End",
    level: "Advanced",
    iconName: "nextjs2",
    description:
      "Fullstack React framework, App Router, SSR, SSG, and edge performance optimization.",
    highlight: true,
  },
  {
    name: "Tailwind CSS",
    category: "Front End",
    level: "Expert",
    iconName: "tailwindcss",
    description:
      "Utility-first CSS styling, responsive layout design, and design token customization.",
    highlight: true,
  },
  {
    name: "Bootstrap",
    category: "Front End",
    level: "Advanced",
    iconName: "bootstrap5",
    description:
      "Responsive grid layout systems, pre-styled components, and rapid UI prototyping.",
  },
  {
    name: "Vite",
    category: "Front End",
    level: "Advanced",
    iconName: "vitejs",
    description:
      "Lightning-fast frontend build tooling, instant HMR, and Rollup production bundling.",
  },
  {
    name: "Styled Components",
    category: "Front End",
    level: "Advanced",
    iconName: "styledcomponents",
    description:
      "CSS-in-JS component styling, dynamic theme support, and scoped style isolation.",
  },
  {
    name: "ESLint",
    category: "Front End",
    level: "Advanced",
    iconName: "eslint",
    description:
      "Static code analysis, syntax error detection, and code consistency enforcement.",
  },
  {
    name: "Prettier",
    category: "Front End",
    level: "Advanced",
    iconName: "prettier",
    description:
      "Opinionated code formatting, consistent indentation, and uniform codebase style.",
  },

  // Back End
  {
    name: "Node.js",
    category: "Back End",
    level: "Advanced",
    iconName: "nodejs",
    description:
      "Event-driven asynchronous JavaScript runtime for high-concurrency backend services.",
    highlight: true,
  },
  {
    name: "Express.js",
    category: "Back End",
    level: "Advanced",
    iconName: "expressjs",
    description:
      "Fast, unopinionated, minimalist web framework for building robust Node.js REST APIs.",
    highlight: true,
  },
  {
    name: "Laravel",
    category: "Back End",
    level: "Advanced",
    iconName: "laravel",
    description:
      "Robust PHP framework with Eloquent ORM, MVC architecture, routing, and queue workers.",
    highlight: true,
  },
  {
    name: "PHP",
    category: "Back End",
    level: "Advanced",
    iconName: "php",
    description:
      "Server-side scripting language for dynamic web development and backend business logic.",
  },
  {
    name: "PostgreSQL",
    category: "Back End",
    level: "Advanced",
    iconName: "postgresql",
    description:
      "Enterprise relational database with ACID compliance, JSONB support, and complex querying.",
    highlight: true,
  },
  {
    name: "MySQL",
    category: "Back End",
    level: "Advanced",
    iconName: "mysql",
    description:
      "Open-source relational database management system for structured data storage.",
  },
  {
    name: "Supabase",
    category: "Back End",
    level: "Advanced",
    iconName: "supabase",
    description:
      "Open-source Firebase alternative featuring Postgres database, Auth tokens, and real-time APIs.",
    highlight: true,
  },
  {
    name: "Prisma ORM",
    category: "Back End",
    level: "Advanced",
    iconName: "prisma",
    description:
      "Next-generation Node.js and TypeScript ORM for type-safe database access, relations, and schema migrations.",
    highlight: true,
  },
  {
    name: "REST APIs",
    category: "Back End",
    level: "Expert",
    iconName: "openapi",
    description:
      "RESTful API architecture design, stateless endpoints, error handling, and JSON payloads.",
    highlight: true,
  },
  {
    name: "OAuth",
    category: "Back End",
    level: "Advanced",
    iconName: "oauth",
    description:
      "Industry-standard authorization protocol for secure third-party login and delegated access.",
  },
  {
    name: "JWT",
    category: "Back End",
    level: "Advanced",
    iconName: "json",
    description:
      "JSON Web Tokens for stateless authentication, session security, and token verification.",
  },

  // Devops & Cloud
  {
    name: "Docker",
    category: "Devops & Cloud",
    level: "Proficient",
    iconName: "docker",
    description:
      "Containerization, multi-stage Dockerfiles, Docker Compose networking, and isolated environments.",
    highlight: true,
  },
  {
    name: "GitHub Actions",
    category: "Devops & Cloud",
    level: "Advanced",
    iconName: "github",
    description:
      "Automated CI/CD workflows, continuous integration, test execution, and deployment pipelines.",
    highlight: true,
  },
  {
    name: "Railway",
    category: "Devops & Cloud",
    level: "Advanced",
    iconName: "railway",
    description:
      "Infrastructure platform with zero-configuration deployments, automated provisioning, and environments.",
    highlight: true,
  },
  {
    name: "Vercel",
    category: "Devops & Cloud",
    level: "Advanced",
    iconName: "vercel",
    description:
      "Frontend cloud platform for seamless Next.js hosting, serverless functions, and global edge network.",
    highlight: true,
  },

  // AI & Machine Learning
  {
    name: "OpenAI",
    category: "AI & Machine Learning",
    level: "Advanced",
    iconName: "openai",
    description:
      "GPT models integration, prompt engineering, structured outputs, embeddings, and Function Calling.",
    highlight: true,
  },
  {
    name: "Gemini",
    category: "AI & Machine Learning",
    level: "Advanced",
    iconName: "gemini",
    description:
      "Google multimodal AI integration, long-context reasoning, structured outputs, and API tooling.",
    highlight: true,
  },
  {
    name: "Gemma Opensource",
    category: "AI & Machine Learning",
    level: "Proficient",
    iconName: "gemma",
    description:
      "Lightweight, state-of-the-art open models from Google for local inference and specialized fine-tuning.",
    highlight: true,
  },
  {
    name: "Codex",
    category: "AI & Machine Learning",
    level: "Advanced",
    iconName: "openai",
    description:
      "AI-assisted code generation, automated refactoring, pattern recognition, and semantic analysis.",
  },

  // Developer Tools
  {
    name: "Git",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "git",
    description:
      "Distributed version control, branch management, merge conflict resolution, and commit history.",
    highlight: true,
  },
  {
    name: "GitHub",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "github",
    description:
      "Code repository hosting, pull request code reviews, issue tracking, and collaborative development.",
    highlight: true,
  },
  {
    name: "VS Code",
    category: "Developer Tools",
    level: "Expert",
    iconName: "vscode",
    description:
      "Primary code editor with rich extensions ecosystem, debugger configuration, and productivity tooling.",
    highlight: true,
  },
  {
    name: "Postman",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "postman",
    description:
      "API platform for building, testing, documenting, and automating REST API endpoints.",
    highlight: true,
  },
  {
    name: "Antigravity IDE",
    category: "Developer Tools",
    level: "Expert",
    iconName: "antigravity",
    description:
      "Agentic AI development environment for pairs programming, advanced coding tasks, and automation.",
    highlight: true,
  },
  {
    name: "Cursor",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "cursor",
    description:
      "AI-native code editor with inline code generation, contextual repository indexing, and chat.",
    highlight: true,
  },
  {
    name: "Figma",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "figma",
    description:
      "Collaborative interface design, interactive UI prototyping, wireframing, and design system tokens.",
    highlight: true,
  },
  {
    name: "Photoshop",
    category: "Developer Tools",
    level: "Advanced",
    iconName: "photoshop",
    description:
      "Raster graphics editing, photo manipulation, visual asset preparation, and graphic design.",
  },
  {
    name: "Canva",
    category: "Developer Tools",
    level: "Expert",
    iconName: "canva",
    description:
      "Visual content creation, marketing graphic design, social media assets, and presentation layouts.",
  },
  {
    name: "Discord",
    category: "Developer Tools",
    level: "Proficient",
    iconName: "slack",
    description:
      "Developer community engagement, real-time team communication, and webhook integrations.",
  },
];
