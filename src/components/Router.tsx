import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Import Wix Services Provider
import {
  rootRouteLoader,
  WixServicesProvider
} from '@/wix-verticals/react-pages/react-router/routes/root';
import {
  ProductDetailsRoute,
  productRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/product-details';
import {
  StoreCollectionRoute,
  storeCollectionRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Lazy load pages to prevent circular imports
const HomePage = lazy(() => import('@/components/pages/HomePage'));
const AboutPage = lazy(() => import('@/components/pages/AboutPage'));
const FinancingPage = lazy(() => import('@/components/pages/FinancingPage'));
const ShippingPage = lazy(() => import('@/components/pages/ShippingPage'));
const ReturnsPage = lazy(() => import('@/components/pages/ReturnsPage'));
const ContactPage = lazy(() => import('@/components/pages/ContactPage'));
const FAQPage = lazy(() => import('@/components/pages/FAQPage'));
const BlogPage = lazy(() => import('@/components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/components/pages/BlogPostPage'));
const PrivacyPolicyPage = lazy(() => import('@/components/pages/PrivacyPolicyPage'));
const SuppliersPage = lazy(() => import('@/components/pages/SuppliersPage'));
const TeamPage = lazy(() => import('@/components/pages/TeamPage'));
const PartnerApplicationPage = lazy(() => import('@/components/pages/PartnerApplicationPage'));
const ProductCatalogPage = lazy(() => import('@/components/pages/ProductCatalogPage'));

// Fallback loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner />
    </div>
  );
}

// Layout component that includes ScrollToTop and WixServicesProvider
function Layout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Outlet />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: rootRouteLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "financing",
        element: (
          <Suspense fallback={<PageLoader />}>
            <FinancingPage />
          </Suspense>
        ),
      },
      {
        path: "shipping",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ShippingPage />
          </Suspense>
        ),
      },
      {
        path: "returns",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ReturnsPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={<PageLoader />}>
            <FAQPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPostPage />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: "suppliers",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SuppliersPage />
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TeamPage />
          </Suspense>
        ),
      },
      {
        path: "partner-application",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PartnerApplicationPage />
          </Suspense>
        ),
      },
      {
        path: "product-catalog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProductCatalogPage />
          </Suspense>
        ),
      },
      {
        path: "products/:slug",
        element: (
          <div className="bg-background">
            <ProductDetailsRoute />
          </div>
        ),
        loader: productRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.product",
          identifiers: {
            slug: "STORES.PRODUCT.SLUG"
          }
        },
      },
      {
        path: "store",
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: "store/:categorySlug",
        element: (
          <div className="bg-background">
            <StoreCollectionRoute productPageRoute="/products" />
          </div>
        ),
        loader: storeCollectionRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.category",
          identifiers: {
            categorySlug: "STORES.CATEGORY.SLUG"
          }
        }
      },
      {
        path: "cart",
        element: (
          <div className="bg-background">
            <Cart />
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
