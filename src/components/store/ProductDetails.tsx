import { ProductActionButtons } from './ProductActionButtons';
import { CartSummary } from '@/components/ui/ecom/Cart';
import {
  Product,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductCompareAtPrice,
  ProductVariants,
  ProductVariantOptions,
  ProductVariantOptionRepeater,
  ProductModifierOptions,
  ProductModifierOptionRepeater,
  ProductModifiers,
  ProductQuantityRoot,
  ProductQuantityDecrement,
  ProductQuantityInput,
  ProductQuantityIncrement,
  ProductQuantityRaw,
  ProductVariantSKU,
  ProductVariantWeight,
  ProductVariantSelectorReset,
  ProductVariantStock,
} from '@/components/ui/store/Product';
import {
  OptionName,
  OptionChoices,
  OptionChoiceRepeater,
  OptionMandatoryIndicator,
} from '@/components/ui/store/Option';
import {
  ChoiceColor,
  ChoiceText,
  ChoiceFreeText,
} from '@/components/ui/store/Choice';

import { productsV3 } from '@wix/stores';

import { SocialSharingButtons } from '../social/SocialSharingButtons';
import { useNavigation } from '../NavigationContext';

import * as StyledMediaGallery from '@/components/ui/media/MediaGallery';

export default function ProductDetails({
  isQuickView = false,
  product,
}: {
  isQuickView?: boolean;
  product: productsV3.V3Product;
}) {
  const Navigation = useNavigation();

  return (
    <Product product={product}>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        data-testid="product-details"
        data-product-id={product._id}
        data-product-available={true}
        data-item-id={product._id}
      >
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-surface-primary rounded-2xl overflow-hidden border border-brand-subtle relative">
            <StyledMediaGallery.Viewport />
            <StyledMediaGallery.Previous />
            <StyledMediaGallery.Next />
            <StyledMediaGallery.Indicator />
          </div>

          {/* Thumbnail Images */}
          <StyledMediaGallery.Thumbnails>
            <StyledMediaGallery.ThumbnailRepeater>
              <StyledMediaGallery.ThumbnailItem />
            </StyledMediaGallery.ThumbnailRepeater>
          </StyledMediaGallery.Thumbnails>
        </div>
        {/* Product Info */}
        <div className="space-y-8 px-3">
          {/* Product Name & Price */}
          <div>
            <ProductName asChild>
              <h2 />
            </ProductName>
            <div className="space-y-1">
              <ProductPrice />
              <ProductCompareAtPrice asChild>
                <div></div>
              </ProductCompareAtPrice>
            </div>
          </div>

          {/* Conversion Stack - Above the Fold */}
          <div className="bg-surface-primary border border-brand-subtle rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-content-primary mb-3">
              What's Included
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-content-primary mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-content-primary">Complete Equipment Package</div>
                  <div className="text-content-muted">Device, accessories, user manual & training materials</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-content-primary mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-content-primary">2-Year Comprehensive Warranty</div>
                  <div className="text-content-muted">Parts & labor coverage, manufacturer-backed</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-content-primary mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-content-primary">Expert Support</div>
                  <div className="text-content-muted">24-48 hour response time, Mon-Fri 8AM-8PM EST</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-content-primary mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-content-primary">Flexible Financing</div>
                  <div className="text-content-muted">From $350/mo with approved credit</div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-subtle">
              <div className="text-xs text-content-muted space-y-1">
                <div><strong>Delivery:</strong> 2-4 weeks lead time • Curbside or white-glove delivery available</div>
                <div><strong>Returns:</strong> 30-day evaluation period (return shipping & 15% restocking fee apply)</div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <ProductDescription as="plain" asChild>
            {({ description }) => (
              <>
                {description && !isQuickView && (
                  <div>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">
                      Description
                    </h3>
                    {
                      <p
                        className="text-content-secondary leading-relaxed"
                        data-item-field="description"
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    }
                  </div>
                )}
              </>
            )}
          </ProductDescription>

          {/* Product Options (if any) */}
          <ProductVariants>
            <div className="space-y-6" data-testid="product-options">
              <h3 className="text-lg font-semibold text-content-primary">
                Product Options
              </h3>

              <ProductVariantOptions>
                <ProductVariantOptionRepeater>
                  <div className="space-y-3 mb-4">
                    <OptionName />
                    <OptionChoices>
                      <div className="flex flex-wrap gap-3">
                        <OptionChoiceRepeater>
                          <>
                            <ChoiceColor />
                            <ChoiceText />
                          </>
                        </OptionChoiceRepeater>
                      </div>
                    </OptionChoices>
                  </div>
                </ProductVariantOptionRepeater>
              </ProductVariantOptions>

              <ProductVariantSelectorReset />
            </div>
          </ProductVariants>

          {/* Product Modifiers */}
          <ProductModifiers>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-content-primary">
                Product Modifiers
              </h3>

              <ProductModifierOptions>
                <ProductModifierOptionRepeater
                  allowedTypes={['color', 'text', 'free-text']}
                >
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-1">
                      <OptionName />
                      <OptionMandatoryIndicator />
                    </div>

                    <OptionChoices>
                      <div className="flex flex-wrap gap-3">
                        <OptionChoiceRepeater>
                          <>
                            <ChoiceColor />
                            <ChoiceText className="text-lg" />
                            <ChoiceFreeText />
                          </>
                        </OptionChoiceRepeater>
                      </div>
                    </OptionChoices>
                  </div>
                </ProductModifierOptionRepeater>
              </ProductModifierOptions>
            </div>
          </ProductModifiers>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-content-primary">
              Quantity
            </h3>
            <ProductQuantityRoot className="flex items-center gap-3">
              <>
                <div className="flex items-center border border-brand-light rounded-lg">
                  <ProductQuantityDecrement variant="button" />
                  <ProductQuantityInput variant="input" />
                  <ProductQuantityIncrement variant="button" />
                </div>
                <ProductQuantityRaw asChild>
                  {({ availableQuantity, inStock, isPreOrderEnabled }) => (
                    <div>
                      {/* Show max quantity only when out of stock AND preorder enabled */}
                      {!inStock && isPreOrderEnabled && availableQuantity && (
                        <span className="text-content-muted text-sm">
                          Max: {availableQuantity} Pre Order
                        </span>
                      )}
                      {/* Show stock message when in stock but available quantity < 10 */}
                      {inStock &&
                        availableQuantity &&
                        availableQuantity < 10 && (
                          <span className="text-content-muted text-sm">
                            Only {availableQuantity} left in stock
                          </span>
                        )}
                    </div>
                  )}
                </ProductQuantityRaw>
              </>
            </ProductQuantityRoot>
          </div>

          <SocialSharingButtons />

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <ProductActionButtons showBuyNow={false} />
              <button className="flex-1 bg-content-primary text-primary-foreground hover:bg-content-primary/90 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Request a Quote
              </button>
            </div>
            <ProductVariantStock
              labels={{
                inStock: 'In Stock',
                limitedStock: 'Limited Stock',
                outOfStock: 'Out of Stock',
                preOrder: 'Available for Pre-order',
              }}
            />
          </div>

          {/* Product Details */}
          <div className="border-t border-brand-light pt-8">
            <h3 className="text-xl font-semibold text-content-primary mb-4">
              Product Details
            </h3>
            <div className="space-y-3 text-content-secondary">
              <div className="flex items-center gap-2">
                <span>SKU:</span>
                <ProductVariantSKU />
              </div>
              <div className="flex items-center gap-2">
                <span>Weight:</span>
                <ProductVariantWeight />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Cart Summary */}
      {!isQuickView && (
        <div className="mt-12 pt-8 border-t border-brand-subtle">
          <CartSummary asChild>
            {({ subtotal, totalItems }) => (
              <>
                {totalItems > 0 && (
                  <div className="bg-surface-primary backdrop-blur-sm rounded-xl p-6 border border-brand-subtle">
                    <h3 className="text-xl font-semibold text-content-primary mb-4">
                      Cart Summary
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-content-secondary">
                        {totalItems} item{totalItems !== 1 ? 's' : ''} in cart
                      </span>
                      <span className="text-xl font-bold text-content-primary">
                        {subtotal}
                      </span>
                    </div>
                    <Navigation
                      data-testid="view-cart-button"
                      route="/cart"
                      className="mt-4 w-full text-content-primary font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 btn-secondary"
                    >
                      View Cart
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Navigation>
                  </div>
                )}
              </>
            )}
          </CartSummary>
        </div>
      )}
    </Product>
  );
}
