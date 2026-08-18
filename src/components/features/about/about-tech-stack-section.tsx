import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  NodejsIcon,
  PostgresIcon,
  SupabaseIcon,
  PrismaIcon,
  LaravelIcon,
  ReactNativeIcon,
  DockerIcon,
  GitIcon,
  VercelIcon,
  ViteIcon,
  PythonIcon,
  RedisIcon,
  MongoIcon,
  StripeIcon,
  FigmaIcon,
  AstroIcon,
  VueIcon,
  GraphQLIcon,
} from "@/components/common/tech-icons";

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Mobile" | "DevOps & Tools";
  level: "Expert" | "Advanced" | "Proficient";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  highlight?: boolean;
}

const ALL_TECH_STACK: TechItem[] = [
  // Frontend
  {
    name: "React 19",
    category: "Frontend",
    level: "Expert",
    icon: ReactIcon,
    description: "Component architecture, custom hooks, Server Actions, concurrent rendering.",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    icon: NextjsIcon,
    description: "App Router, SSR, SSG, Edge middleware, image & font optimization.",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    icon: TypeScriptIcon,
    description: "Strict typing, generics, schema inference with Zod, end-to-end safety.",
    highlight: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    icon: TailwindIcon,
    description: "Modern utility styling, design token systems, dark/light themes.",
    highlight: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    icon: JavaScriptIcon,
    description: "Modern asynchronous workflows, event loop, DOM APIs, functional methods.",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: "Proficient",
    icon: VueIcon,
    description: "Composition API, reactive stores, modular single-file components.",
  },
  {
    name: "Astro",
    category: "Frontend",
    level: "Proficient",
    icon: AstroIcon,
    description: "Content collections, zero-JS island hydration, markdown architecture.",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    icon: NodejsIcon,
    description: "High-concurrency backend services, streaming IO, runtime worker processes.",
    highlight: true,
  },
  {
    name: "Laravel",
    category: "Backend",
    level: "Advanced",
    icon: LaravelIcon,
    description: "Robust PHP framework, Eloquent ORM, queue workers, MVC architecture.",
    highlight: true,
  },
  {
    name: "Python",
    category: "Backend",
    level: "Proficient",
    icon: PythonIcon,
    description: "Automation scripting, LLM integration, data extraction, fast prototyping.",
  },
  {
    name: "GraphQL",
    category: "Backend",
    level: "Proficient",
    icon: GraphQLIcon,
    description: "Declarative schema modeling, resolvers, query batching & mutations.",
  },
  {
    name: "Stripe APIs",
    category: "Backend",
    level: "Advanced",
    icon: StripeIcon,
    description: "Elements checkout, customer portal, webhook fulfillment, subscriptions.",
    highlight: true,
  },

  // Databases & Storage
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Advanced",
    icon: PostgresIcon,
    description: "ACID compliance, complex relational modeling, indexes, JSONB queries.",
    highlight: true,
  },
  {
    name: "Supabase",
    category: "Databases",
    level: "Advanced",
    icon: SupabaseIcon,
    description: "Postgres database, Row Level Security (RLS), auth tokens, live sync.",
    highlight: true,
  },
  {
    name: "Prisma ORM",
    category: "Databases",
    level: "Advanced",
    icon: PrismaIcon,
    description: "Type-safe database client, schema migrations, relational joins.",
  },
  {
    name: "Redis",
    category: "Databases",
    level: "Proficient",
    icon: RedisIcon,
    description: "In-memory caching, rate limit counters, session stores, low-latency queues.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    level: "Proficient",
    icon: MongoIcon,
    description: "Document storage, aggregation pipelines, flexible unstructured schemas.",
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    level: "Advanced",
    icon: ReactNativeIcon,
    description: "Cross-platform mobile apps for iOS and Android with native performance.",
    highlight: true,
  },
  {
    name: "Expo & EAS",
    category: "Mobile",
    level: "Advanced",
    icon: ReactNativeIcon,
    description: "Managed workflows, OTA updates, custom development clients, EAS builds.",
  },

  // DevOps & Tools
  {
    name: "Docker",
    category: "DevOps & Tools",
    level: "Proficient",
    icon: DockerIcon,
    description: "Containerized environments, multi-stage builds, Docker Compose networks.",
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    level: "Advanced",
    icon: GitIcon,
    description: "Branching strategies, pull request reviews, CI/CD automated actions.",
    highlight: true,
  },
  {
    name: "Vite",
    category: "DevOps & Tools",
    level: "Advanced",
    icon: ViteIcon,
    description: "Lightning-fast HMR, Rollup bundling, plugin ecosystem integration.",
  },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    level: "Advanced",
    icon: VercelIcon,
    description: "Edge networks, serverless functions, automatic preview deployments.",
  },
  {
    name: "Figma",
    category: "DevOps & Tools",
    level: "Expert",
    icon: FigmaIcon,
    description: "UI/UX component systems, token extraction, pixel-perfect translation.",
  },
];

const CATEGORIES = [
  { id: "All", label: "All Tech", icon: Layers },
  { id: "Frontend", label: "Frontend", icon: Code2 },
  { id: "Backend", label: "Backend & APIs", icon: Server },
  { id: "Databases", label: "Databases & Cloud", icon: Database },
  { id: "Mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "DevOps & Tools", label: "DevOps & Tools", icon: Cpu },
] as const;

type CategoryFilter = (typeof CATEGORIES)[number]["id"];

export function AboutTechStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredTech = useMemo(() => {
    if (activeCategory === "All") return ALL_TECH_STACK;
    return ALL_TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              03 — Technical Skillset
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Technical Stack & Ecosystem
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
          A breakdown of languages, frameworks, databases, and development tooling equipped with official logos.
        </p>
      </motion.div>

      {/* Category Filter Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "All"
              ? ALL_TECH_STACK.length
              : ALL_TECH_STACK.filter((t) => t.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-foreground text-background shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                  isActive
                    ? "bg-background/20 text-background"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tech Cards Grid with Genuine Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: (idx % 4) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/40 hover:shadow-md dark:hover:shadow-neutral-950/60"
              >
                <div>
                  {/* Card Header with Logo Icon & Level Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-muted/40 p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-xs">
                      <Icon size={28} className="shrink-0" />
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-semibold text-foreground">
                        {tech.level}
                      </span>
                      {tech.highlight && (
                        <span className="flex items-center gap-1 font-mono text-[9.5px] text-muted-foreground font-semibold">
                          <Sparkles className="h-2.5 w-2.5 text-foreground" />
                          Core
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
                      {tech.name}
                    </h3>
                    <span className="font-mono text-[10.5px] text-muted-foreground">
                      {tech.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
