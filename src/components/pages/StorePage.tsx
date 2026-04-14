import { useLoaderData, Await } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { loadCategoriesListServiceConfig, loadProductsListServiceConfig } from '@wix/stores/services';
import ProductList, { ProductListSkeleton } from '@/components/store/ProductList';

export async function storePageLoader() {
  // Helper function to retry failed requests
  const retryWithBackoff = async (fn: () => Promise<any>, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error);
        if (i === maxRetries - 1) throw error;
        // Exponential backoff: 100ms, 200ms, 400ms
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 100));
      }
    }
  };

  try {
    const productsListConfigPromise = retryWithBackoff(() =>
      loadProductsListServiceConfig({
        cursorPaging: {
          limit: 50,
        },
      })
    );

    const categoriesListConfigPromise = retryWithBackoff(() =>
      loadCategoriesListServiceConfig({
        cursorPaging: {
          limit: 100,
        },
      })
    );

    const productsListConfig = import.meta.env.SSR
      ? await productsListConfigPromise.catch((err) => {
          console.error('Failed to load products config on SSR:', err);
          return undefined;
        })
      : undefined;

    const categoriesListConfig = import.meta.env.SSR
      ? await categoriesListConfigPromise.catch((err) => {
          console.error('Failed to load categories config on SSR:', err);
          return undefined;
        })
      : undefined;

    return {
      productsListConfigPromise,
      productsListConfig,
      categoriesListConfigPromise,
      categoriesListConfig,
    };
  } catch (error) {
    console.error('Store page loader error:', error);
    throw error;
  }
}

function StoreError() {
  return (
    <div className="text-center py-12">
      <p className="text-lg text-destructive mb-4">Failed to load products</p>
      <Button onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </div>
  );
}

interface StorePageContentProps {
  productsListConfig: any;
  categoriesListConfig: any;
}

function StorePageContent({ productsListConfig, categoriesListConfig }: StorePageContentProps) {
  // Debug: Check if configs are loaded
  if (!productsListConfig) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 max-w-[100rem] mx-auto w-full px-8 py-12">
          <div className="text-center py-12">
            <p className="text-lg text-destructive mb-4">Failed to load products configuration</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-[100rem] mx-auto w-full px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-heading font-bold text-foreground mb-3">
            Our Collection
          </h1>
          <p className="text-lg font-paragraph text-secondary-foreground">
            Browse our premium selection of spa and beauty equipment
          </p>
        </div>

        <ProductList
          productPageRoute="/products"
          productsListConfig={productsListConfig}
          categoriesListConfig={categoriesListConfig}
          currentCategorySlug=""
        />
      </main>
      <Footer />
    </div>
  );
}

function StorePage() {
  const { 
    productsListConfigPromise, 
    productsListConfig,
    categoriesListConfigPromise,
    categoriesListConfig 
  } = useLoaderData<typeof storePageLoader>();

  // Debug logs
  console.log('StorePage loaded with config:', {
    hasProductsConfig: !!productsListConfig,
    hasProductsPromise: !!productsListConfigPromise,
    hasCategoriesConfig: !!categoriesListConfig,
    hasCategoriesPromise: !!categoriesListConfigPromise,
  });

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 max-w-[100rem] mx-auto w-full px-8 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-3">
              Our Collection
            </h1>
            <p className="text-lg font-paragraph text-secondary-foreground">
              Browse our premium selection of spa and beauty equipment
            </p>
          </div>
          <ProductListSkeleton />
        </main>
        <Footer />
      </div>
    }>
      <Await 
        resolve={Promise.all([
          productsListConfig ?? productsListConfigPromise,
          categoriesListConfig ?? categoriesListConfigPromise
        ])} 
        errorElement={<StoreError />}
      >
        {([resolvedProductsListConfig, resolvedCategoriesListConfig]) => {
          console.log('Await resolved with:', {
            hasProducts: !!resolvedProductsListConfig,
            hasCategories: !!resolvedCategoriesListConfig,
          });
          return (
            <StorePageContent 
              productsListConfig={resolvedProductsListConfig}
              categoriesListConfig={resolvedCategoriesListConfig}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

export default StorePage;
