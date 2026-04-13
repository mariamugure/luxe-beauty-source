import { useLoaderData, Await } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { loadCategoriesListServiceConfig, loadProductsListServiceConfig } from '@wix/stores/services';
import ProductList, { ProductListSkeleton } from '@/components/store/ProductList';

export async function storePageLoader() {
  const productsListConfigPromise = loadProductsListServiceConfig({
    cursorPaging: {
      limit: 50,
    },
  });

  const categoriesListConfigPromise = loadCategoriesListServiceConfig({
    cursorPaging: {
      limit: 100,
    },
  });

  const productsListConfig = import.meta.env.SSR
    ? await productsListConfigPromise
    : undefined;

  const categoriesListConfig = import.meta.env.SSR
    ? await categoriesListConfigPromise
    : undefined;

  return {
    productsListConfigPromise,
    productsListConfig,
    categoriesListConfigPromise,
    categoriesListConfig,
  };
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
        {([resolvedProductsListConfig, resolvedCategoriesListConfig]) => (
          <StorePageContent 
            productsListConfig={resolvedProductsListConfig}
            categoriesListConfig={resolvedCategoriesListConfig}
          />
        )}
      </Await>
    </Suspense>
  );
}

export default StorePage;
