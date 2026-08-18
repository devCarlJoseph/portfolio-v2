import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Terminal,
  Check,
  Copy,
  RotateCcw,
  LayoutTemplate,
  Globe2,
  Image as ImageIcon,
  ShoppingBag,
  Layers,
  X,
  Plus,
  Minus,
  Star,
  Activity,
  CheckCircle2,
  ArrowRight,
  Clock,
  Send,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

/**
 * --------------------------------------------------------------------------
 * RICH MULTI-PROJECT SHOWCASE CONFIGURATION (JSON FORMAT)
 * --------------------------------------------------------------------------
 */
export interface ProductItem {
  id: string;
  title: string;
  category: string;
  priceNumber: number;
  priceFormatted: string;
  rating: string;
  badge: string;
  imageUrl: string;
}

export interface StudioProjectConfig {
  storefront: {
    siteTitle: string;
    promoBanner: {
      tag: string;
      title: string;
      discount: string;
    };
    products: ProductItem[];
    trustBadges: string[];
  };
  saasApp: {
    platformName: string;
    status: string;
    mrr: string;
    mrrGrowth: string;
    activeUsers: string;
    apiLatency: string;
    uptime: string;
    endpoints: Array<{
      path: string;
      method: "GET" | "POST" | "WS";
      latency: string;
      status: string;
    }>;
    teamMembers: Array<{
      name: string;
      role: string;
      access: string;
    }>;
  };
  businessSite: {
    badge: string;
    headline: string;
    subheadline: string;
    metrics: Array<{ label: string; value: string }>;
    services: Array<{
      title: string;
      turnaround: string;
      description: string;
    }>;
    plans: Array<{
      name: string;
      price: string;
      timeline: string;
      features: string[];
    }>;
    testimonial: {
      quote: string;
      author: string;
      company: string;
    };
  };
}

const DEFAULT_STUDIO_CONFIG: StudioProjectConfig = {
  storefront: {
    siteTitle: "Nova Commerce",
    promoBanner: {
      tag: "FEATURED LAUNCH",
      title: "Engineered for pure sound & precision",
      discount: "Limited 25% Off Code: SHIP25",
    },
    products: [
      {
        id: "prod-1",
        title: "Pro Wireless ANC Headphones",
        category: "Audio",
        priceNumber: 189,
        priceFormatted: "$189",
        rating: "4.9 (128)",
        badge: "BESTSELLER",
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
      },
      {
        id: "prod-2",
        title: "Custom Mechanical Keyboard 75%",
        category: "Workspace",
        priceNumber: 145,
        priceFormatted: "$145",
        rating: "4.8 (94)",
        badge: "IN STOCK",
        imageUrl:
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&q=80",
      },
      {
        id: "prod-3",
        title: "Smart Fitness & Sleep Tracker",
        category: "Wearables",
        priceNumber: 220,
        priceFormatted: "$220",
        rating: "5.0 (62)",
        badge: "NEW",
        imageUrl:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
      },
      {
        id: "prod-4",
        title: "Minimalist Leather Cardholder",
        category: "Accessories",
        priceNumber: 48,
        priceFormatted: "$48",
        rating: "4.7 (81)",
        badge: "POPULAR",
        imageUrl:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&q=80",
      },
    ],
    trustBadges: [
      "Stripe 1-Click Checkout",
      "Instant Stock Reservation",
      "Global CDN Delivery",
    ],
  },
  saasApp: {
    platformName: "CloudFlow Analytics",
    status: "All Systems Operational",
    mrr: "$54,820",
    mrrGrowth: "+28.4% this mo",
    activeUsers: "16,490",
    apiLatency: "24ms",
    uptime: "99.99%",
    endpoints: [
      {
        path: "/api/v2/events/stream",
        method: "WS",
        latency: "12ms",
        status: "Connected",
      },
      {
        path: "/api/v2/analytics/query",
        method: "POST",
        latency: "28ms",
        status: "200 OK",
      },
      {
        path: "/api/v2/billing/webhooks",
        method: "POST",
        latency: "35ms",
        status: "Verified",
      },
      {
        path: "/api/v2/auth/session",
        method: "GET",
        latency: "14ms",
        status: "Cached",
      },
    ],
    teamMembers: [
      { name: "Carl Joseph", role: "Lead Engineer", access: "Super Admin" },
      {
        name: "Dev Team Global",
        role: "5 Contributors",
        access: "Full Deploy",
      },
      { name: "Automated CI/CD", role: "GitHub Actions", access: "Runner" },
    ],
  },
  businessSite: {
    badge: "FREELANCE ENGINEERING STUDIO",
    headline: "High-performance software built for founders & ambitious teams.",
    subheadline:
      "From zero to full-scale production. We engineer scalable MVPs, modern dashboards, and headless stores.",
    metrics: [
      { label: "Client Satisfaction", value: "99.8%" },
      { label: "Avg Delivery Time", value: "2-3 Wks" },
      { label: "Lighthouse Performance", value: "98/100" },
    ],
    services: [
      {
        title: "Full-Stack SaaS Platform",
        turnaround: "2 to 4 Weeks",
        description:
          "Complete MVP with auth, Stripe subscriptions, database, and admin suite.",
      },
      {
        title: "Custom Headless Store",
        turnaround: "1 to 2 Weeks",
        description:
          "Blazing fast storefronts with inventory sync, cart workflows, and checkout.",
      },
      {
        title: "Internal Tools & Dashboards",
        turnaround: "1 to 2 Weeks",
        description:
          "High-density data visualization, analytics tables, and operational workflows.",
      },
    ],
    plans: [
      {
        name: "MVP Sprint",
        price: "Fixed Quote",
        timeline: "2 Weeks Delivery",
        features: [
          "Full Responsive App",
          "Database & Auth Setup",
          "Stripe Integration",
          "30-Day Support",
        ],
      },
      {
        name: "Scale & Retainer",
        price: "Weekly / Monthly",
        timeline: "Continuous Sprints",
        features: [
          "Feature Roadmap",
          "Performance Tuning",
          "Dedicated Slack Channel",
          "Priority SLA",
        ],
      },
    ],
    testimonial: {
      quote:
        "Carl shipped our production dashboard ahead of schedule with remarkable code quality and zero bugs.",
      author: "Alex Rivera",
      company: "Founder @ SaaSMetrics",
    },
  },
};

export function HeroSection() {
  const [config, setConfig] = useState<StudioProjectConfig>(
    DEFAULT_STUDIO_CONFIG,
  );
  const [activeMode, setActiveMode] = useState<"app" | "json">("app");
  const [selectedProjectType, setSelectedProjectType] = useState<
    "storefront" | "saas" | "business"
  >("storefront");
  const [activeJsonTab, setActiveJsonTab] = useState<
    "storefront" | "saas" | "business"
  >("storefront");

  // Per-file JSON Text states for VS Code editor
  const [storefrontJson, setStorefrontJson] = useState(() =>
    JSON.stringify(DEFAULT_STUDIO_CONFIG.storefront, null, 2),
  );
  const [saasJson, setSaasJson] = useState(() =>
    JSON.stringify(DEFAULT_STUDIO_CONFIG.saasApp, null, 2),
  );
  const [businessJson, setBusinessJson] = useState(() =>
    JSON.stringify(DEFAULT_STUDIO_CONFIG.businessSite, null, 2),
  );

  const [jsonError, setJsonError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // E-Commerce Interactive Cart State
  const [cartItems, setCartItems] = useState<
    Array<{ product: ProductItem; quantity: number }>
  >([
    { product: DEFAULT_STUDIO_CONFIG.storefront.products[0], quantity: 1 },
    { product: DEFAULT_STUDIO_CONFIG.storefront.products[1], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Business Booking Form State
  const [selectedPlan, setSelectedPlan] = useState("MVP Sprint");
  const [bookingSent, setBookingSent] = useState(false);

  const getActiveJsonText = () => {
    if (activeJsonTab === "saas") return saasJson;
    if (activeJsonTab === "business") return businessJson;
    return storefrontJson;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveJsonText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJsonUpdate = (text: string) => {
    if (activeJsonTab === "storefront") {
      setStorefrontJson(text);
      try {
        const parsed = JSON.parse(text);
        setConfig((prev) => ({ ...prev, storefront: parsed }));
        setJsonError(null);
      } catch {
        setJsonError("Invalid JSON syntax in storefront.json");
      }
    } else if (activeJsonTab === "saas") {
      setSaasJson(text);
      try {
        const parsed = JSON.parse(text);
        setConfig((prev) => ({ ...prev, saasApp: parsed }));
        setJsonError(null);
      } catch {
        setJsonError("Invalid JSON syntax in saas-platform.json");
      }
    } else if (activeJsonTab === "business") {
      setBusinessJson(text);
      try {
        const parsed = JSON.parse(text);
        setConfig((prev) => ({ ...prev, businessSite: parsed }));
        setJsonError(null);
      } catch {
        setJsonError("Invalid JSON syntax in business-site.json");
      }
    }
  };

  const handleResetConfig = () => {
    if (activeJsonTab === "storefront") {
      setConfig((prev) => ({
        ...prev,
        storefront: DEFAULT_STUDIO_CONFIG.storefront,
      }));
      setStorefrontJson(
        JSON.stringify(DEFAULT_STUDIO_CONFIG.storefront, null, 2),
      );
    } else if (activeJsonTab === "saas") {
      setConfig((prev) => ({
        ...prev,
        saasApp: DEFAULT_STUDIO_CONFIG.saasApp,
      }));
      setSaasJson(JSON.stringify(DEFAULT_STUDIO_CONFIG.saasApp, null, 2));
    } else if (activeJsonTab === "business") {
      setConfig((prev) => ({
        ...prev,
        businessSite: DEFAULT_STUDIO_CONFIG.businessSite,
      }));
      setBusinessJson(
        JSON.stringify(DEFAULT_STUDIO_CONFIG.businessSite, null, 2),
      );
    }
    setJsonError(null);
  };

  const addToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
    setOrderCompleted(false);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.product.id === productId) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as Array<{ product: ProductItem; quantity: number }>,
    );
  };

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.product.priceNumber * item.quantity,
    0,
  );

  const getAddressUrl = () => {
    if (selectedProjectType === "saas")
      return "carlsumagang.dev/preview/saas-platform";
    if (selectedProjectType === "business")
      return "carlsumagang.dev/preview/business-studio";
    return isCartOpen
      ? "carlsumagang.dev/preview/ecommerce/cart"
      : "carlsumagang.dev/preview/ecommerce-storefront";
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-12 lg:py-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <HeroIntroduction />
        <StudioPreview
          config={config}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          selectedProjectType={selectedProjectType}
          setSelectedProjectType={setSelectedProjectType}
          activeJsonTab={activeJsonTab}
          setActiveJsonTab={setActiveJsonTab}
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          setOrderCompleted={setOrderCompleted}
          orderCompleted={orderCompleted}
          cartItems={cartItems}
          totalCartCount={totalCartCount}
          cartSubtotal={cartSubtotal}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          bookingSent={bookingSent}
          setBookingSent={setBookingSent}
          copied={copied}
          jsonError={jsonError}
          setJsonError={setJsonError}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          getAddressUrl={getAddressUrl}
          getActiveJsonText={getActiveJsonText}
          handleCopy={handleCopy}
          handleJsonUpdate={handleJsonUpdate}
          handleResetConfig={handleResetConfig}
        />
      </div>
    </section>
  );
}

function HeroIntroduction() {
  return (
    <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
      {/* Availability & Location Badge */}
      <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50/80 px-3.5 py-1 text-xs dark:border-neutral-800 dark:bg-neutral-900/70">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          Available for freelance projects
        </span>
        <span className="text-neutral-300 dark:text-neutral-700">•</span>
        <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
          Cebu, Philippines
        </span>
      </div>

      {/* Role Eyebrow */}
      <p className="label-mono font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
        Software Developer & Full-Stack Engineer
      </p>

      {/* Name Heading */}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
        <span>Carl Joseph Sumagang</span>
      </h1>

      {/* Bio Description */}
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-xl">
        I help founders, businesses, and startups build and ship custom web
        applications, high-converting storefronts, and reliable SaaS platforms
        with speed and maintainability.
      </p>

      {/* Social Links Row */}
      <div className="mt-5 flex flex-wrap items-center gap-5 sm:gap-6 font-mono text-xs sm:text-[13px]">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>github</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>linkedin</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>instagram</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <NavLink
          to="/projects"
          className={buttonVariants({
            className:
              "group h-11 px-6 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all text-xs font-semibold gap-2 shadow-sm",
          })}
        >
          <span>View Projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </NavLink>

        <NavLink
          to="/contact"
          className={buttonVariants({
            variant: "outline",
            className:
              "group h-11 px-6 rounded-lg border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100/80 cursor-pointer dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800/60 transition-all text-xs font-semibold gap-2",
          })}
        >
          <span>Hire Me for a Project</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </NavLink>
      </div>
    </div>
  );
}

type StudioProps = {
  config: StudioProjectConfig;
  activeMode: "app" | "json";
  setActiveMode: (mode: "app" | "json") => void;
  selectedProjectType: "storefront" | "saas" | "business";
  setSelectedProjectType: (
    projectType: "storefront" | "saas" | "business",
  ) => void;
  activeJsonTab: "storefront" | "saas" | "business";
  setActiveJsonTab: (projectType: "storefront" | "saas" | "business") => void;
  setIsCartOpen: (isOpen: boolean) => void;
  isCartOpen: boolean;
  setOrderCompleted: (completed: boolean) => void;
  orderCompleted: boolean;
  cartItems: Array<{ product: ProductItem; quantity: number }>;
  totalCartCount: number;
  cartSubtotal: number;
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  bookingSent: boolean;
  setBookingSent: (sent: boolean) => void;
  copied: boolean;
  jsonError: string | null;
  setJsonError: (error: string | null) => void;
  addToCart: (product: ProductItem) => void;
  updateQuantity: (productId: string, delta: number) => void;
  getAddressUrl: () => string;
  getActiveJsonText: () => string;
  handleCopy: () => void;
  handleJsonUpdate: (text: string) => void;
  handleResetConfig: () => void;
};

function StudioPreview(props: StudioProps) {
  const { activeMode } = props;

  return (
    <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
      <div className="w-full max-w-lg rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden transition-all">
        <StudioToolbar {...props} />
        <div className="h-[400px] w-full overflow-hidden flex flex-col justify-between relative">
          {activeMode === "app" ? (
            <AppPreview {...props} />
          ) : (
            <JsonEditor {...props} />
          )}
        </div>
      </div>
    </div>
  );
}

function StudioToolbar({
  activeMode,
  setActiveMode,
  getAddressUrl,
}: StudioProps) {
  return (
    <div className="flex h-11 items-center justify-between border-b border-neutral-200/80 bg-neutral-100/70 px-3.5 py-2 dark:border-neutral-800 dark:bg-neutral-900/80 select-none">
      <div className="flex items-center space-x-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block shadow-2xs" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block shadow-2xs" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block shadow-2xs" />
      </div>
      <div className="mx-2 flex max-w-[210px] sm:max-w-[240px] flex-1 items-center justify-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-mono text-neutral-600 dark:bg-neutral-800/90 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xs">
        <Globe2 className="h-3 w-3 text-neutral-400 shrink-0" />
        <span className="truncate">{getAddressUrl()}</span>
      </div>
      <div className="flex items-center rounded-md bg-neutral-200/60 p-0.5 text-[10px] font-medium dark:bg-neutral-800">
        <button
          type="button"
          onClick={() => setActiveMode("app")}
          className={`flex items-center gap-1 rounded px-2.5 py-1 transition-all cursor-pointer ${activeMode === "app" ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}
        >
          <LayoutTemplate className="h-3 w-3" />
          <span>App</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveMode("json")}
          className={`flex items-center gap-1 rounded px-2.5 py-1 transition-all cursor-pointer ${activeMode === "json" ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}
        >
          <Terminal className="h-3 w-3" />
          <span>JSON</span>
        </button>
      </div>
    </div>
  );
}

function AppPreview(props: StudioProps) {
  return (
    <div className="h-full flex flex-col justify-between select-none">
      <ProjectSelector {...props} />
      <ProjectCanvas {...props} />
      <CartDrawer {...props} />
    </div>
  );
}

function ProjectSelector({
  selectedProjectType,
  setSelectedProjectType,
  setActiveJsonTab,
  setIsCartOpen,
}: StudioProps) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 bg-white/95 px-4 py-2.5 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/95 shrink-0 z-10">
      <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight text-neutral-900 dark:text-white">
        <Layers className="h-3.5 w-3.5 text-neutral-400" />
        <span>Category:</span>
      </div>

      {/* Interactive Category Selector */}
      <div className="flex items-center gap-1.5 text-[10px]">
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("storefront");
            setActiveJsonTab("storefront");
            setIsCartOpen(false);
          }}
          className={`rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "storefront"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          🛍️ E-Commerce
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("saas");
            setActiveJsonTab("saas");
            setIsCartOpen(false);
          }}
          className={`rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "saas"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          📊 SaaS Platform
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("business");
            setActiveJsonTab("business");
            setIsCartOpen(false);
          }}
          className={`rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "business"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          🚀 Business Site
        </button>
      </div>
    </div>
  );
}

function ProjectCanvas(props: StudioProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-5 sm:py-4 space-y-4 text-neutral-900 dark:text-white scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
      <StorefrontPreview {...props} />
      <SaasPreview {...props} />
      <BusinessPreview {...props} />
    </div>
  );
}

function StorefrontPreview({
  selectedProjectType,
  config,
  setIsCartOpen,
  totalCartCount,
  addToCart,
}: StudioProps) {
  return (
    <>
      {selectedProjectType === "storefront" && (
        <div className="space-y-3.5">
          {/* Store Sub-Navbar */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2 dark:border-neutral-800/60">
            <div>
              <h3 className="font-bold text-xs text-neutral-900 dark:text-white">
                {config.storefront.siteTitle}
              </h3>
              <p className="text-[9px] text-neutral-500">
                Curated Tech Essentials
              </p>
            </div>

            {/* Interactive Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-semibold text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white transition-colors cursor-pointer"
            >
              <ShoppingBag className="h-3.5 w-3.5 text-neutral-700 dark:text-neutral-300" />
              <span>Cart ({totalCartCount})</span>
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>

          {/* Store Promo Banner */}
          <div className="rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-3 text-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 border border-neutral-800">
            <span className="inline-block rounded bg-emerald-500/20 px-1.5 py-0.2 font-mono text-[8px] font-bold text-emerald-400 uppercase">
              {config.storefront.promoBanner.tag}
            </span>
            <h4 className="mt-1 text-xs sm:text-sm font-bold tracking-tight text-white">
              {config.storefront.promoBanner.title}
            </h4>
            <p className="mt-0.5 font-mono text-[9px] text-neutral-400">
              {config.storefront.promoBanner.discount}
            </p>
          </div>

          {/* Products Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Featured Catalog ({config.storefront.products.length} Products)
              </span>
              <span className="text-[9px] text-neutral-400 font-mono">
                Instant Stripe Checkout
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {config.storefront.products?.map((prod) => (
                <div
                  key={prod.id}
                  className="group flex flex-col rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-2 dark:border-neutral-800 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
                >
                  {/* Product Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    {prod.imageUrl ? (
                      <img
                        src={prod.imageUrl}
                        alt={prod.title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <ImageIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <span className="absolute top-1 left-1 rounded bg-white/90 px-1 py-0.2 font-mono text-[7px] font-bold uppercase text-neutral-800 shadow-2xs dark:bg-neutral-900/90 dark:text-neutral-200">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Product Meta */}
                  <div className="mt-2 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-1 text-[8px] text-amber-500 font-semibold">
                        <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        <span>{prod.rating}</span>
                      </div>
                      <p className="text-[10px] font-semibold text-neutral-900 dark:text-white line-clamp-1">
                        {prod.title}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white">
                        {prod.priceFormatted}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToCart(prod)}
                        className="rounded bg-neutral-900 px-2 py-1 text-[9px] font-medium text-white shadow-2xs hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="rounded-lg border border-neutral-100 bg-neutral-50/70 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 dark:text-neutral-400">
              {config.storefront.trustBadges?.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-1">
                  <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SaasPreview({ selectedProjectType, config }: StudioProps) {
  return (
    <>
      {selectedProjectType === "saas" && (
        <div className="space-y-3.5">
          {/* Platform Status Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2 dark:border-neutral-800/60">
            <div>
              <h3 className="font-bold text-xs text-neutral-900 dark:text-white">
                {config.saasApp.platformName}
              </h3>
              <p className="text-[9px] text-neutral-500">
                Live Production Cloud Dashboard
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400">
              <Activity className="h-2.5 w-2.5 animate-pulse" />
              {config.saasApp.status}
            </span>
          </div>

          {/* 4 Core Metrics Grid */}
          <div className="grid grid-cols-4 gap-1.5">
            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Monthly MRR
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.mrr}
              </p>
              <span className="text-[8px] font-mono text-emerald-600 font-bold">
                {config.saasApp.mrrGrowth}
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Active Users
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.activeUsers}
              </p>
              <span className="text-[8px] font-mono text-neutral-400">
                Realtime
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Avg Latency
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {config.saasApp.apiLatency}
              </p>
              <span className="text-[8px] font-mono text-emerald-600">
                Sub-30ms
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Uptime SLA
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.uptime}
              </p>
              <span className="text-[8px] font-mono text-emerald-600">
                High Availability
              </span>
            </div>
          </div>

          {/* Active API Microservices List */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/40 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                API Endpoints & Websockets
              </span>
              <span className="font-mono text-[9px] text-neutral-400">
                Edge Routed
              </span>
            </div>

            <div className="space-y-1.5">
              {config.saasApp.endpoints?.map((ep, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded border border-neutral-200/60 bg-white px-2 py-1.5 text-[10px] dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex items-center gap-1.5 font-mono">
                    <span
                      className={`rounded px-1 py-0.2 text-[8px] font-bold ${
                        ep.method === "WS"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                          : ep.method === "POST"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {ep.path}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px]">
                    <span className="text-neutral-400">{ep.latency}</span>
                    <span className="text-emerald-600 font-semibold">
                      {ep.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RBAC Team Permissions */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/40 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Role-Based Access Control (RBAC)
              </span>
              <span className="font-mono text-[9px] text-emerald-600">
                Enterprise Ready
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {config.saasApp.teamMembers?.map((member, i) => (
                <div
                  key={i}
                  className="rounded border border-neutral-200/60 bg-white p-2 text-left dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <p className="text-[10px] font-bold text-neutral-900 dark:text-white truncate">
                    {member.name}
                  </p>
                  <p className="text-[8px] text-neutral-500">{member.role}</p>
                  <span className="inline-block mt-1 rounded bg-neutral-100 px-1 py-0.2 font-mono text-[7px] font-bold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {member.access}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BusinessPreview({
  selectedProjectType,
  config,
  selectedPlan,
  setSelectedPlan,
  bookingSent,
  setBookingSent,
}: StudioProps) {
  return (
    <>
      {selectedProjectType === "business" && (
        <div className="space-y-3.5">
          {/* Business Hero */}
          <div className="text-center py-1">
            <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              {config.businessSite.badge}
            </span>
            <h3 className="mt-1.5 text-sm sm:text-base font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {config.businessSite.headline}
            </h3>
            <p className="mt-1 text-[10px] text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
              {config.businessSite.subheadline}
            </p>
          </div>

          {/* 3 Outcome Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {config.businessSite.metrics?.map((m, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-neutral-200/70 bg-neutral-50/60 p-2 text-center dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {m.value}
                </p>
                <p className="text-[8px] text-neutral-500 uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Service Offerings */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
              What We Build & Deliver
            </span>
            {config.businessSite.services?.map((serv, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-200/70 bg-neutral-50/50 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-neutral-900 dark:text-white">
                    {serv.title}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <Clock className="h-2.5 w-2.5" />
                    {serv.turnaround}
                  </span>
                </div>
                <p className="mt-0.5 text-[9px] text-neutral-500 dark:text-neutral-400">
                  {serv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Sprint Estimator */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Select Your Project Sprint
            </span>

            <div className="grid grid-cols-2 gap-2">
              {config.businessSite.plans?.map((plan, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`rounded-lg border p-2 text-left transition-all cursor-pointer ${
                    selectedPlan === plan.name
                      ? "border-neutral-900 bg-white shadow-xs dark:border-white dark:bg-neutral-800"
                      : "border-neutral-200/60 bg-neutral-100/50 dark:border-neutral-800 dark:bg-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-neutral-900 dark:text-white">
                      {plan.name}
                    </span>
                    <span className="font-mono text-[9px] font-semibold text-emerald-600">
                      {plan.timeline}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs font-bold text-neutral-900 dark:text-white">
                    {plan.price}
                  </p>
                  <div className="mt-1 space-y-0.5">
                    {plan.features.slice(0, 2).map((feat, fidx) => (
                      <p
                        key={fidx}
                        className="text-[8px] text-neutral-500 flex items-center gap-1"
                      >
                        <Check className="h-2 w-2 text-emerald-500" />
                        <span>{feat}</span>
                      </p>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Booking Action Button */}
            <div className="mt-2.5">
              {bookingSent ? (
                <div className="rounded bg-emerald-50 py-1.5 text-center text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
                  ✓ Sprint selected! Redirecting to contact...
                </div>
              ) : (
                <NavLink
                  to="/contact"
                  onClick={() => setBookingSent(true)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded bg-neutral-900 py-1.5 text-[10px] font-medium text-white shadow-xs hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 transition-colors"
                >
                  <span>Book Discovery Call ({selectedPlan})</span>
                  <Send className="h-3 w-3" />
                </NavLink>
              )}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="rounded-lg border border-neutral-200/70 bg-white p-2.5 dark:border-neutral-800 dark:bg-neutral-900 text-left">
            <p className="text-[9px] italic text-neutral-600 dark:text-neutral-300 leading-relaxed">
              "{config.businessSite.testimonial.quote}"
            </p>
            <div className="mt-1 flex items-center justify-between text-[8px] font-mono text-neutral-400">
              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                {config.businessSite.testimonial.author}
              </span>
              <span>{config.businessSite.testimonial.company}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CartDrawer({
  isCartOpen,
  totalCartCount,
  setIsCartOpen,
  orderCompleted,
  setOrderCompleted,
  cartItems,
  updateQuantity,
  cartSubtotal,
}: StudioProps) {
  return (
    <>
      {isCartOpen && (
        <div className="absolute inset-0 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm z-20 flex flex-col justify-between p-4 sm:p-5 transition-all animate-in fade-in zoom-in-95 duration-150">
          {/* Cart Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5 dark:border-neutral-800/80">
            <div className="flex items-center gap-1.5 font-bold text-xs text-neutral-900 dark:text-white">
              <ShoppingBag className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <span>Your Order Bag ({totalCartCount} items)</span>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Order Completed Screen */}
          {orderCompleted ? (
            <div className="my-auto py-6 text-center space-y-2">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                Order Successfully Placed!
              </h4>
              <p className="text-[10px] text-neutral-500 max-w-xs mx-auto">
                Simulated Stripe checkout complete. Inventory updated in real
                time via webhook.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderCompleted(false);
                  setIsCartOpen(false);
                }}
                className="mt-2 rounded bg-neutral-900 px-4 py-1.5 text-[10px] font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto py-2 space-y-2 max-h-[210px] scrollbar-thin">
                {cartItems.length === 0 ? (
                  <div className="py-8 text-center text-xs text-neutral-400">
                    Your cart is currently empty.
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 p-2 dark:border-neutral-800 dark:bg-neutral-900/40"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 overflow-hidden rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                          {item.product.imageUrl ? (
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.title}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <ImageIcon className="h-4 w-4 text-neutral-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-neutral-900 dark:text-white line-clamp-1">
                            {item.product.title}
                          </p>
                          <p className="font-mono text-[9px] font-bold text-neutral-500">
                            {item.product.priceFormatted}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="flex h-5 w-5 items-center justify-center rounded border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 cursor-pointer"
                        >
                          <Minus className="h-2.5 w-2.5" />
                        </button>
                        <span className="font-mono text-[10px] font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="flex h-5 w-5 items-center justify-center rounded border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 cursor-pointer"
                        >
                          <Plus className="h-2.5 w-2.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer & Checkout */}
              <div className="border-t border-neutral-100 pt-2 dark:border-neutral-800/80 space-y-2 shrink-0">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">Estimated Total:</span>
                  <span className="font-bold text-neutral-900 dark:text-white text-sm">
                    ${cartSubtotal}
                  </span>
                </div>

                <button
                  type="button"
                  disabled={cartItems.length === 0}
                  onClick={() => setOrderCompleted(true)}
                  className="w-full flex items-center justify-center gap-1.5 rounded bg-neutral-900 py-2 text-[11px] font-medium text-white shadow-xs hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 disabled:opacity-50 transition-colors cursor-pointer"
                >
                  <span>Proceed with Order</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

function JsonEditor({
  activeJsonTab,
  setActiveJsonTab,
  setSelectedProjectType,
  setJsonError,
  handleResetConfig,
  handleCopy,
  copied,
  jsonError,
  getActiveJsonText,
  handleJsonUpdate,
}: StudioProps) {
  return (
    <div className="h-full flex flex-col justify-between font-mono text-xs bg-[#181818] text-neutral-200 select-text overflow-hidden">
      {/* VS Code File Tabs Bar */}
      <div className="flex items-center justify-between bg-[#1f1f1f] border-b border-neutral-800 text-[11px] select-none shrink-0 px-1 pt-1">
        {/* Left: 3 File Tabs */}
        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-none min-w-0">
          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("storefront");
              setSelectedProjectType("storefront");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "storefront"
                ? "bg-[#181818] text-white border-amber-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-amber-400 font-bold">{"{}"}</span>
            <span>storefront.json</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("saas");
              setSelectedProjectType("saas");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "saas"
                ? "bg-[#181818] text-white border-sky-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-sky-400 font-bold">{"{}"}</span>
            <span>saas.json</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("business");
              setSelectedProjectType("business");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "business"
                ? "bg-[#181818] text-white border-emerald-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-emerald-400 font-bold">{"{}"}</span>
            <span>business.json</span>
          </button>
        </div>

        {/* Right: Reset & Copy Actions */}
        <div className="flex items-center gap-1 pl-3 pr-2 shrink-0">
          <button
            type="button"
            onClick={handleResetConfig}
            className="flex items-center gap-1 rounded bg-[#2a2a2a] px-2 py-0.5 text-[9px] text-neutral-400 hover:bg-[#333333] hover:text-white transition-colors cursor-pointer"
            title="Reset active file"
          >
            <RotateCcw className="h-2.5 w-2.5" />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded bg-[#2a2a2a] px-2 py-0.5 text-[9px] text-neutral-300 hover:bg-[#333333] hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-2.5 w-2.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-2.5 w-2.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Banner if invalid JSON */}
      {jsonError && (
        <div className="bg-rose-950/80 px-3 py-1 text-[9px] font-mono text-rose-300 border-b border-rose-800 flex items-center justify-between shrink-0">
          <span>⚠ {jsonError}</span>
        </div>
      )}

      {/* VS Code Code Editor Textarea */}
      <div className="flex-1 min-h-0 p-2.5 relative">
        <textarea
          value={getActiveJsonText()}
          onChange={(e) => handleJsonUpdate(e.target.value)}
          spellCheck={false}
          className="h-full w-full rounded-md bg-[#1e1e1e] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed text-emerald-300 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 border border-neutral-800 resize-none transition-all scrollbar-thin scrollbar-thumb-neutral-700"
          placeholder="Edit configuration JSON..."
        />
      </div>

      {/* VS Code Bottom Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-white text-[9px] font-mono select-none shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Terminal className="h-2.5 w-2.5" />
            <span>main*</span>
          </span>
          <span>0 errors</span>
        </div>

        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>JSON</span>
          <span>Spaces: 2</span>
          <span className="hidden sm:inline">Prettier: ✓</span>
        </div>
      </div>
    </div>
  );
}
