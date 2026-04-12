import { useLoaderData, Await } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { loadProductsListServiceConfig } from '@wix/stores/services';

interface Product {
  _id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description?: string;
  media?: {
    items?: Array<{
      url: string;
    }>;
  };
  slug?: string;
}

function StoreSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[3/2] bg-secondary/30 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-secondary/30 rounded animate-pulse"></div>
              <div className="h-4 bg-secondary/30 rounded w-2/3 animate-pulse"></div>
              <div className="h-5 bg-secondary/30 rounded w-1/3 animate-pulse"></div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="w-full space-y-2">
              <div className="h-10 bg-secondary/30 rounded animate-pulse"></div>
              <div className="h-10 bg-secondary/30 rounded animate-pulse"></div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
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

export async function storePageLoader() {
  const productListConfigPromise = loadProductsListServiceConfig({
    cursorPaging: {
      limit: 50,
    },
  });

  const productListConfig = import.meta.env.SSR
    ? await productListConfigPromise
    : undefined;

  return {
    productListConfigPromise,
    productListConfig,
  };
}

interface StorePageContentProps {
  productsListConfig: any;
}

function StorePageContent({ productsListConfig }: StorePageContentProps) {
  const products = productsListConfig?.products || [];
  const hasProducts = products.length > 0;

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

        {!hasProducts ? (
          <div className="text-center py-12">
            <p className="text-lg text-secondary-foreground">
              No products available at the moment
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: Product) => {
              const imageUrl =
                product.media?.items?.[0]?.url ||
                'https://static.wixstatic.com/media/5ea123_da901b39b81c45489e33f5c1e381928b~mv2.png?originWidth=384&originHeight=256';

              return (
                <Card
                  key={product._id}
                  className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <Link
                      to={`/products/${product.slug || product._id}`}
                      className="block overflow-hidden bg-secondary/20"
                    >
                      <Image
                        src={imageUrl}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="p-6">
                      <Link
                        to={`/products/${product.slug || product._id}`}
                        className="block group/title"
                      >
                        <h3 className="text-lg font-heading text-foreground mb-2 group-hover/title:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      {product.description && (
                        <p className="text-sm font-paragraph text-secondary-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-charcoal">
                          ${product.price?.toFixed(2) || '0.00'}
                        </span>
                        {product.compareAtPrice && (
                          <span className="text-sm text-secondary-foreground line-through">
                            ${product.compareAtPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex-col gap-3">
                    <Link
                      to={`/products/${product.slug || product._id}`}
                      className="w-full"
                    >
                      <Button className="w-full bg-primary hover:bg-charcoal text-white transition-colors">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function StorePage() {
  const { productListConfigPromise, productListConfig } = useLoaderData<typeof storePageLoader>();

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
          <StoreSkeleton />
        </main>
        <Footer />
      </div>
    }>
      <Await resolve={productListConfig ?? productListConfigPromise} errorElement={<StoreError />}>
        {(resolvedProductListConfig) => (
          <StorePageContent productsListConfig={resolvedProductListConfig} />
        )}
      </Await>
    </Suspense>
  );
}

export default StorePage;
