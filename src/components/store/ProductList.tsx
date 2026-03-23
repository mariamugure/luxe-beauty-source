import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import * as StyledMediaGallery from '@/components/ui/media/MediaGallery';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ProductList as ProductListPrimitive } from '@wix/stores/components';
import {
  type CategoriesListServiceConfig,
  type ProductsListServiceConfig,
} from '@wix/stores/services';

import React from 'react';
import { useNavigation } from '../NavigationContext';

import { ChoiceColor, ChoiceText } from '@/components/ui/store/Choice';
import {
  OptionChoiceRepeater,
  OptionChoices,
  OptionName,
} from '@/components/ui/store/Option';
import {
  ProductCompareAtPrice,
  ProductDescription,
  ProductMediaGallery,
  ProductName,
  ProductPrice,
  ProductRibbon,
  ProductSlug,
  ProductStock,
  ProductVariantOptionRepeater,
  ProductVariantOptions,
  ProductVariants,
  ProductVariantSelectorReset,
} from '@/components/ui/store/Product';
import {
  ProductList,
  ProductLoadMoreTrigger,
  ProductRepeater,
  Products,
  ProductTotalsDisplayed,
} from '@/components/ui/store/ProductList';
import CategoryPills from './CategoryPills';
import { ProductActionButtons } from './ProductActionButtons';
import ProductFiltersSidebar from './ProductFiltersSidebar';
import { SortDropdown } from './SortDropdown';

interface ProductListProps {
  productsListConfig: ProductsListServiceConfig;
  productPageRoute: string;
  categoriesListConfig: CategoriesListServiceConfig;
  currentCategorySlug: string;
}

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <Card
          key={i}
          className="overflow-hidden relative bg-surface-card border-surface-subtle"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-surface-loading/30 to-transparent"></div>

          {/* Content Skeleton */}
          <CardContent className="p-4">
            <div className="min-h-[320px] bg-surface-loading rounded-lg mb-4 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-surface-loading rounded animate-pulse"></div>
              <div className="h-3 bg-surface-loading rounded w-2/3 animate-pulse"></div>
              <div className="flex gap-2 mt-3">
                <div className="w-6 h-6 bg-surface-loading rounded-full animate-pulse"></div>
                <div className="w-6 h-6 bg-surface-loading rounded-full animate-pulse"></div>
                <div className="w-6 h-6 bg-surface-loading rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-6 bg-surface-loading rounded w-16 animate-pulse"></div>
                <div className="h-4 bg-surface-loading rounded w-20 animate-pulse"></div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="space-y-2 w-full">
              <div className="h-10 bg-surface-loading rounded animate-pulse"></div>
              <div className="h-10 bg-surface-loading rounded animate-pulse"></div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export const ProductListWrapper: React.FC<ProductListProps> = ({
  productsListConfig,
  productPageRoute,
  categoriesListConfig,
}) => {
  const Navigation = useNavigation();

  return (
    <TooltipProvider>
      <ProductList productsListConfig={productsListConfig} variant="grid">
        <div className="min-h-screen">
          {/* Category Pills - Prominent Navigation */}
          <div className="mb-8 pb-6 border-b border-charcoal/10">
            <CategoryPills categoriesListConfig={categoriesListConfig} />
          </div>

          {/* Header Controls */}
          <Card className="border-surface-subtle mb-6 bg-surface-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* ... keep existing code (CategoryPicker) ... */}
                </div>
                <SortDropdown />
              </div>
            </CardContent>
          </Card>

          {/* Filters Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filters Sidebar */}
            <ProductFiltersSidebar />

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <>
                {/* Filter Status Bar */}
                <ProductListPrimitive.FilterResetTrigger asChild>
                  {React.forwardRef(
                    ({ resetFilters, isFiltered }, ref) =>
                      isFiltered && (
                        <div
                          ref={ref as React.RefObject<HTMLDivElement>}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 filter-status-bar border rounded-xl p-4 mb-6"
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-brand-primary flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                              />
                            </svg>
                            <ProductTotalsDisplayed
                              className="text-brand-light text-sm sm:text-base"
                              label="Showing {length} products"
                            />
                          </div>
                          <Button
                            variant="link"
                            size="sm"
                            onClick={resetFilters}
                            className="self-start sm:self-auto"
                          >
                            Clear Filters
                          </Button>
                        </div>
                      )
                  )}
                </ProductListPrimitive.FilterResetTrigger>

                {/* Products Grid - Single column on mobile, 2 on large screens */}
                <Products>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProductRepeater>
                      <Card className="relative hover:shadow-2xl transition-all duration-300 group h-full flex flex-col bg-white border border-charcoal/10 hover:border-gold-accent/30 justify-between overflow-hidden">
                        {/* Product Ribbon */}
                        <ProductRibbon />
                        <CardContent className="p-0 pb-0">
                          {/* Product Image */}
                          <div className="min-h-[320px] bg-gradient-to-br from-secondary/80 to-secondary/60 overflow-hidden relative shadow-md border-b border-charcoal/5 flex items-center justify-center">
                            <ProductMediaGallery>
                              <StyledMediaGallery.Root className="w-full h-full">
                                <StyledMediaGallery.Viewport className="transition-transform duration-700 ease-out group-hover:scale-105" />
                              </StyledMediaGallery.Root>
                            </ProductMediaGallery>
                            {/* Enhanced overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>

                          {/* Product Title */}
                          <div className="p-5 pb-0">
                            <ProductSlug asChild>
                              {({ slug }) => (
                                <Navigation
                                  data-testid="title-navigation"
                                  route={`${productPageRoute}/${slug}`}
                                >
                                  <CardTitle className="text-charcoal mb-3 hover:text-primary transition-colors font-heading text-xl">
                                    <ProductName variant="paragraph" />
                                  </CardTitle>
                                </Navigation>
                              )}
                            </ProductSlug>
                            {/* Enhanced Product Variants */}
                            <ProductVariants>
                              <ProductVariantOptions>
                                <div className="mb-4 space-y-2">
                                  <ProductVariantOptionRepeater>
                                    <div className="space-y-2">
                                      <OptionName className="text-content-secondary text-xs font-medium uppercase tracking-wide" />
                                      <OptionChoices>
                                        <div className="flex flex-wrap gap-2">
                                          <OptionChoiceRepeater>
                                            <>
                                              <ChoiceColor className="w-8 h-8 border-2" />
                                              <ChoiceText className="text-xs" />
                                            </>
                                          </OptionChoiceRepeater>
                                        </div>
                                      </OptionChoices>
                                    </div>
                                  </ProductVariantOptionRepeater>
                                </div>
                              </ProductVariantOptions>
                            </ProductVariants>

                            {/* Reset Selections */}
                            <ProductVariantSelectorReset className="text-xs underline p-0" />
                            {/* Product Description */}
                            <ProductDescription
                              as="html"
                              className="text-foreground/70 text-base mb-4 leading-relaxed"
                            />
                          </div>
                        </CardContent>

                        <CardFooter className="p-4 pt-0 flex-col space-y-3">
                          {/* Enhanced Price and Stock */}
                          <div className="w-full">
                            <div className="w-full flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <ProductPrice className="text-lg font-bold text-charcoal" />
                                <ProductCompareAtPrice className="text-sm font-medium text-foreground/50 line-through" />
                              </div>
                              <ProductStock
                                className="flex items-center gap-1 text-xs font-medium text-foreground/70"
                                labels={{
                                  inStock: 'In Stock',
                                  limitedStock: 'In Stock',
                                  outOfStock: 'Out of Stock',
                                }}
                              />
                            </div>
                            {/* Trust & Buying Info Micro-lines */}
                            <div className="space-y-1 text-xs text-foreground/60 border-t border-charcoal/5 pt-2">
                              <div className="flex items-center gap-1">
                                <span className="text-gold-accent">•</span>
                                <span>Financing from $350/mo</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-gold-accent">•</span>
                                <span>Ships in 2–4 weeks</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-gold-accent">•</span>
                                <span>2-Year Warranty</span>
                              </div>
                            </div>
                          </div>
                          {/* Enhanced Action Buttons - Extract price from product data */}
                          <ProductActionButtons price={0} />

                          <ProductSlug asChild>
                            {({ slug }) => (
                              <Navigation
                                data-testid="view-product-button"
                                route={`${productPageRoute}/${slug}`}
                                className="w-full"
                              >
                                <Button
                                  variant="secondary"
                                  size="lg"
                                  className="w-full bg-primary text-white hover:bg-charcoal transition-colors"
                                >
                                  View Product
                                  <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
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
                                </Button>
                              </Navigation>
                            )}
                          </ProductSlug>
                        </CardFooter>
                      </Card>
                    </ProductRepeater>
                  </div>
                </Products>
              </>
            </div>
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12 mb-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ProductLoadMoreTrigger
                  label="Load More Products"
                  loadingState={
                    <span className="flex items-center gap-2">
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
                      Loading...
                    </span>
                  }
                />
              </div>
              <ProductTotalsDisplayed
                className="text-content-muted text-sm mt-4"
                label="{length} products loaded"
              />
            </div>
          </div>
        </div>
      </ProductList>
    </TooltipProvider>
  );
};

export default ProductListWrapper;
