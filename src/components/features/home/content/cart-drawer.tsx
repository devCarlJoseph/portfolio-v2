import type { StudioProps } from "@/components/features/home/types/studio";
import {
  Image as ImageIcon,
  ShoppingBag,
  X,
  Plus,
  Minus,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function CartDrawer({
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
