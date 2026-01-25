import React, { useState, useEffect } from 'react';
import {
  ProductActionAddToCart,
  ProductActionBuyNow,
  ProductActionPreOrder,
  ProductPrice,
} from '@/components/ui/store/Product';
import { Button } from '@/components/ui/button';

interface ProductActionButtonsProps {
  showBuyNow?: boolean;
  price?: number;
}

// Main Product Action Buttons Container
export const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  showBuyNow = false,
  price = 0,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  // Check if item is high-ticket (>$3000)
  const isHighTicket = price > 3000;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Quote request:', { price, ...formData });
    alert('Quote request submitted! We will contact you within 24 hours.');
    setIsQuoteModalOpen(false);
    setFormData({ email: '', message: '' });
  };

  return (
    <>
      <div className="flex gap-2 w-full flex-col">
        {isHighTicket ? (
          // High-ticket items: Request Quote is primary
          <>
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full bg-gold-accent text-charcoal hover:bg-gold-accent/90 font-semibold transition-colors"
              size="lg"
            >
              Request a Quote
            </Button>
            <ProductActionAddToCart
              label="Add to Cart"
              loadingState={
                <>
                  <span className="opacity-0">Add to Cart</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </>
              }
              className="w-full"
            />
          </>
        ) : (
          // Standard items: Add to Cart is primary
          <>
            <ProductActionAddToCart
              label="Add to Cart"
              loadingState={
                <>
                  <span className="opacity-0">Add to Cart</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </>
              }
              className="w-full"
            />
            {showBuyNow && (
              <ProductActionBuyNow
                label="Buy Now"
                loadingState={
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                }
                className="w-full"
              />
            )}
          </>
        )}
        {!isHighTicket && (
          <ProductActionPreOrder
            label="Pre Order"
            loadingState={
              <>
                <span className="opacity-0">Pre Order</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              </>
            }
            className="w-full"
          />
        )}
      </div>

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
              Request a Quote
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              For this premium equipment (${price?.toLocaleString()}), we recommend getting a personalized quote. Our team will contact you within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={handleSubmitQuote}>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
              <textarea
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none h-24"
              />
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gold-accent text-charcoal hover:bg-gold-accent/90"
                >
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductActionButtons;
