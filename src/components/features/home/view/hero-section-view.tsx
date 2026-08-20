import { useState } from "react";

import type {
  StudioProjectConfig,
  ProductItem,
} from "@/components/features/home/types/studio";
import { HeroIntroduction } from "@/components/features/home/content/hero-introduction";
import { StudioPreview } from "@/components/features/home/content/studio-preview";

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

export function HeroSectionView() {
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
