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

export type StudioProps = {
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
