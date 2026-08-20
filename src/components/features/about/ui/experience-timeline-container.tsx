import { motion } from "motion/react";

interface RoleEntry {
  title: string;
  dateBadge: string;
  summary: string;
  highlights: { label: string; text: string }[];
  skills: string[];
}

interface CompanyExperience {
  id: string;
  initials: string;
  company: string;
  isCurrent?: boolean;
  statusBadge?: string;
  roles: RoleEntry[];
}

const TIMELINE_EXPERIENCES: CompanyExperience[] = [
  {
    id: "freelance-projects",
    initials: "FS",
    company: "Independent / Freelance Projects",
    isCurrent: true,
    statusBadge: "PRESENT",
    roles: [
      {
        title: "Independent Software Engineer",
        dateBadge: "2023 — PRESENT",
        summary:
          "Designing and engineering custom software products, specializing in Websites & Web Apps, Custom Software, Mobile Development (iOS/Android), and Generative AI integrations. Sourced globally through platforms and direct referrals.",
        highlights: [
          {
            label: "Websites & Web Apps",
            text: "Building responsive, blazing-fast, and search-optimized Next.js/React platforms.",
          },
          {
            label: "Custom Software",
            text: "Developing secure backend systems, robust APIs, and administrative control panels.",
          },
          {
            label: "Mobile Development",
            text: "Engineering native-performance cross-platform iOS and Android mobile apps.",
          },
          {
            label: "Generative AI",
            text: "Constructing AI-powered MVPs with intelligent chat, content generation, and custom LLM integrations.",
          },
          {
            label: "Availability",
            text: "Continuing to actively accept select freelance side-projects depending on scope and operational alignment.",
          },
        ],
        skills: [
          "React 19",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Supabase",
          "Tailwind CSS",
          "Stripe APIs",
          "Generative AI",
        ],
      },
    ],
  },
  {
    id: "tech-systems",
    initials: "TS",
    company: "Tech Systems & Enterprise Solutions",
    roles: [
      {
        title: "Full-Stack Software Engineer",
        dateBadge: "2022 — 2023",
        summary:
          "Collaborated in an agile engineering squad to design, build, and optimize high-velocity relational database schemas, RESTful API services, and enterprise dashboard interfaces.",
        highlights: [
          {
            label: "Enterprise APIs",
            text: "Engineered scalable RESTful services and relational database schemas with PostgreSQL and MySQL.",
          },
          {
            label: "Security & RBAC",
            text: "Implemented role-based access control (RBAC), JWT authentication token rotation, and automated audit logging.",
          },
          {
            label: "Performance Tuning",
            text: "Reduced core API response latency by 35% through Redis caching layers, query optimization, and connection pooling.",
          },
          {
            label: "Engineering Standards",
            text: "Mentored team members in Git branching workflows, peer code reviews, and TypeScript strict type safety.",
          },
        ],
        skills: [
          "TypeScript",
          "React",
          "Node.js",
          "Express",
          "MySQL",
          "Redis",
          "REST APIs",
          "Git",
        ],
      },
    ],
  },
  {
    id: "digital-studio",
    initials: "DS",
    company: "Digital Studio & Creative Labs",
    roles: [
      {
        title: "Frontend & Mobile App Developer",
        dateBadge: "2021 — 2022",
        summary:
          "Pioneered cross-platform mobile application development and interactive web interfaces with focus on smooth user animations and design system consistency.",
        highlights: [
          {
            label: "Cross-Platform Mobile",
            text: "Built cross-platform iOS and Android mobile features utilizing React Native and Expo with offline-first caching.",
          },
          {
            label: "Fluid UI & Motion",
            text: "Engineered interactive micro-animations and smooth gesture-driven UI transitions using Framer Motion.",
          },
          {
            label: "Design Tokens",
            text: "Partnered directly with UI/UX designers to translate Figma design tokens into reusable, accessible component libraries.",
          },
        ],
        skills: [
          "React Native",
          "Expo",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "Framer Motion",
          "Figma",
        ],
      },
    ],
  },
];

export function ExperienceTimelineContainer() {
  return (
    <div className="relative pl-6 sm:pl-8 py-2">
      {/* Continuous Left Vertical Timeline Rail */}
      <div
        className="absolute left-[13px] sm:left-[17px] top-3 bottom-6 w-[1.5px] bg-border/80"
        aria-hidden="true"
      />

      <div className="space-y-14 sm:space-y-20">
        {TIMELINE_EXPERIENCES.map((exp, expIdx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.45,
              delay: expIdx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Company Header Row (Full Width with Right PRESENT Badge) */}
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Company Monogram Avatar Badge on the timeline */}
                <div className="relative z-10 -ml-6 sm:-ml-8 flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground font-mono text-xs font-bold shadow-xs">
                  {exp.initials}
                </div>

                {/* Company Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  {exp.company}
                </h3>
              </div>

              {/* Right Top Status Badge (e.g. PRESENT) */}
              {exp.statusBadge && (
                <span className="shrink-0 rounded-xs bg-foreground px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-background uppercase shadow-xs">
                  {exp.statusBadge}
                </span>
              )}
            </div>

            {/* Roles Block Under Company with extra gap */}
            <div className="mt-8 sm:mt-10 space-y-10 pl-5 sm:pl-8 border-l border-border/60 ml-[-2px] sm:ml-[1px]">
              {exp.roles.map((role, roleIdx) => (
                <div key={roleIdx} className="relative space-y-4">
                  {/* Role Title & Date on Far Right */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                      {role.title}
                    </h4>

                    {/* Right Date Badge with Dashed Border */}
                    <span className="self-start sm:self-auto rounded-md border border-dashed border-border/90 bg-muted/20 px-2.5 py-1 font-mono text-xs font-medium text-muted-foreground">
                      {role.dateBadge}
                    </span>
                  </div>

                  {/* Role Summary */}
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-4xl">
                    {role.summary}
                  </p>

                  {/* Bullet Points with Bold Labels */}
                  {role.highlights && role.highlights.length > 0 && (
                    <ul className="space-y-2.5 pt-1.5 max-w-4xl">
                      {role.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="select-none text-foreground font-bold shrink-0 mt-0.5">
                            •
                          </span>
                          <span>
                            <strong className="font-semibold text-foreground">
                              {item.label}:
                            </strong>{" "}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skill Tags */}
                  {role.skills && role.skills.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-3">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border/70 bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
