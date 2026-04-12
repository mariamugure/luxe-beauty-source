import { useLoaderData, Await, redirect } from 'react-router';
import React, { useEffect } from 'react';
import {
  loadCategoriesListServiceConfig,
  parseUrlToSearchOptions,
} from '@wix/stores/services';
import { loadProductsListServiceConfig } from '@wix/stores/services';
import ProductListWrapper from '@/components/store/ProductList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProductListSkeleton } from '@/components/store/ProductList';
import { Card, CardContent } from '@/components/ui/card';
import { customizationsV3 } from '@wix/stores';
import { SEO } from '@wix/seo/components';
import { seoTags } from '@wix/seo';
import { loadSEOTagsServiceConfig } from '@wix/seo/services';

// Helper function to create SEO configuration for store
function createStoreSeoConfig() {
  return {
    pageName: 'Store',
    slug: 'store',
    seoData: {
      tags: [
        {
          type: 'title' as const,
          children: 'Store - All Products',
        },
        {
          type: 'meta' as const,
          props: {
            content: 'Browse our complete collection of products',
            name: 'description',
          },
        },
      ],
    },
  };
}

// Skeleton component for store loading
function StoreSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title skeleton */}
      <div className="mb-8">
        <div className="h-8 w-32 bg-surface-loading rounded animate-pulse mb-2"></div>
        <div className="h-4 w-64 bg-surface-loading rounded animate-pulse"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-80 lg:flex-shrink-0 lg:self-stretch">
          <div className="lg:sticky lg:top-6">
            {/* Filters skeleton */}
            <Card className="overflow-hidden relative bg-surface-card border-surface-subtle p-4 lg:h-full h-32">
              <CardContent className="p-0">
                {/* Filters Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-4 h-4 bg-surface-loading rounded animate-pulse"></div>
                  <div className="h-6 w-16 bg-surface-loading rounded animate-pulse"></div>
                </div>

                {/* Price Range Section */}
                <div className="mb-6">
                  <div className="h-5 w-20 bg-surface-loading rounded animate-pulse mb-4"></div>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="h-4 w-6 bg-surface-loading rounded animate-pulse"></div>
                    <div className="h-4 w-8 bg-surface-loading rounded animate-pulse"></div>
                  </div>
                  <div className="h-2 bg-surface-loading rounded-full animate-pulse mb-4"></div>
                  <div className="flex gap-4">
                    <div className="h-10 flex-1 bg-surface-loading rounded animate-pulse"></div>
                    <div className="h-10 flex-1 bg-surface-loading rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Color Section */}
                <div className="mb-6">
                  <div className="h-5 w-10 bg-surface-loading rounded animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-surface-loading rounded-full animate-pulse"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="h-5 w-20 bg-surface-loading rounded animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-surface-loading rounded animate-pulse"></div>
                        <div className="h-4 w-24 bg-surface-loading rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Product grid skeleton */}
        <div className="flex-1 min-w-0">
          <ProductListSkeleton />
        </div>
      </div>
    </div>
  );
}

// Error fallback for store loading
function StoreError() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <div className="text-status-danger text-2xl mb-4">⚠️</div>
        <h2 className="text-content-primary text-xl mb-2">
          Failed to load products
        </h2>
        <p className="text-content-secondary">Please try refreshing the page</p>
      </div>
    </div>
  );
}

export async function storePageLoader({
  request,
}: {
  request: Request;
}) {
  // Load categories for the sidebar
  const categoriesListConfig = await loadCategoriesListServiceConfig();

  // Load all products without category filter
  const { items: customizations = [] } = await customizationsV3
    .queryCustomizations()
    .find();

  const parsedSearchOptions = await parseUrlToSearchOptions(
    request.url,
    categoriesListConfig.categories,
    customizations,
    {
      cursorPaging: {
        limit: 20,
      },
    }
  );

  // Always load products on both server and client
  const productListConfigPromise =
    loadProductsListServiceConfig(parsedSearchOptions);
  const productListConfig = await productListConfigPromise;

  // Load SEO tags for the store page
  const seoTagsServiceConfig = await loadSEOTagsServiceConfig({
    pageUrl: request.url,
    itemType: seoTags.ItemType.STORES_CATEGORY,
    itemData: createStoreSeoConfig(),
  });

  return {
    productListConfigPromise,
    productListConfig,
    categoriesListConfig,
    seoTagsServiceConfig,
  };
}

function StorePage() {
  const {
    categoriesListConfig,
    productListConfigPromise,
    productListConfig,
  } = useLoaderData<typeof storePageLoader>();

  return (
    <SEO.UpdateTagsTrigger>
      {({ updateSeoTags }) => {
        // Update SEO tags on client-side navigation
        useEffect(() => {
          if (typeof window !== 'undefined') {
            updateSeoTags(
              seoTags.ItemType.STORES_CATEGORY,
              createStoreSeoConfig()
            );
          }
        }, [updateSeoTags]);

        return (
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 max-w-[100rem] mx-auto w-full px-8 py-12">
              <div className="mb-8">
                <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
                  All Products
                </h1>
                <p className="text-lg font-paragraph text-secondary-foreground">
                  Browse our complete collection
                </p>
              </div>

              <div className="wix-verticals-container">
                {/* Products load with skeleton using React Router's Await */}
                <React.Suspense fallback={<StoreSkeleton />}>
                  <Await
                    resolve={productListConfig}
                    errorElement={<StoreError />}
                  >
                    {resolvedProductListConfig => {
                      return (
                        <ProductListWrapper
                          productPageRoute="/products"
                          productsListConfig={resolvedProductListConfig}
                          categoriesListConfig={categoriesListConfig}
                          currentCategorySlug={undefined}
                        />
                      );
                    }}
                  </Await>
                </React.Suspense>
              </div>
            </main>
            <Footer />
          </div>
        );
      }}
    </SEO.UpdateTagsTrigger>
  );
}

export default StorePage;
