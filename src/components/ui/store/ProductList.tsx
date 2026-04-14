import React from 'react';
import { cn } from '@/lib/utils';
import { ProductList as ProductListPrimitive } from '@wix/stores/components';
import { Button } from '@/components/ui/button';

/**
 * Root component for product list functionality.
 */
export const ProductList = ProductListPrimitive.Root;

/**
 * Container for the actual product grid/list display.
 * Handles empty states.
 */
export const Products = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      <ProductListPrimitive.Products
        emptyState={
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-surface-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm border border-surface-subtle">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-content-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
        }
      >
        {props.children}
      </ProductListPrimitive.Products>
    </div>
  );
});
Products.displayName = 'Products';

/**
 * Repeater component that renders each product in the list.
 * Renders items as direct children so the parent CSS grid controls layout.
 */
export const ProductRepeater = React.forwardRef
  React.ElementRef<typeof ProductListPrimitive.ProductRepeater>,
  React.ComponentPropsWithoutRef<typeof ProductListPrimitive.ProductRepeater>
>((props, ref) => {
  return <ProductListPrimitive.ProductRepeater {...props} ref={ref} />;
});
ProductRepeater.displayName = 'ProductRepeater';

/**
 * Load more trigger component.
 */
export const ProductLoadMoreTrigger = React.forwardRef
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    label?: React.ReactNode;
    loadingState?: React.ReactNode;
  }
>(
  (
    {
      className,
      label = 'Load More Products',
      loadingState = 'Loading...',
      ...props
    },
    ref
  ) => (
    <ProductListPrimitive.LoadMoreTrigger
      className={cn('font-semibold transform hover:scale-105', className)}
      {...props}
      asChild
    >
      {({ loadMore, isLoading }) => (
        <Button
          ref={ref}
          variant="default"
          size="lg"
          onClick={() => loadMore()}
          className={`font-semibold transform hover:scale-105 ${
            isLoading
              ? 'bg-surface-loading animate-pulse'
              : 'shadow-md hover:shadow-lg'
          }`}
        >
          {!isLoading ? label : loadingState}
        </Button>
      )}
    </ProductListPrimitive.LoadMoreTrigger>
  )
);
ProductLoadMoreTrigger.displayName = 'ProductLoadMoreTrigger';

/**
 * Displays the total number of products currently shown.
 */
export const ProductTotalsDisplayed = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
  }
>(({ className, label = '{length} products loaded', ...props }, ref) => (
  <ProductListPrimitive.TotalsDisplayed
    ref={ref}
    {...props}
    className={className}
    asChild
  >
    {({ displayedItems }) => (
      <span>{label.replace('{length}', displayedItems.toString())}</span>
    )}
  </ProductListPrimitive.TotalsDisplayed>
));
ProductTotalsDisplayed.displayName = 'ProductTotalsDisplayed';
