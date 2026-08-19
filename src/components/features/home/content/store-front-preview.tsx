import type { StudioProps } from "@/components/features/home/types/studio";
import {
  Image as ImageIcon,
  ShoppingBag,
  Star,
  CheckCircle2,
} from "lucide-react";

export function StorefrontPreview({
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
