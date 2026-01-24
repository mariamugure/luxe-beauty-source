import ProductList from '@/components/store/ProductList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  type CategoriesListServiceConfig,
  type ProductsListServiceConfig,
} from '@wix/stores/services';

interface StoreCollectionPageProps {
  productsListConfig: ProductsListServiceConfig;
  categoriesListConfig: CategoriesListServiceConfig;
  currentCategorySlug: string;
  productPageRoute: string;
}

function CategoryPage({
  productsListConfig,
  categoriesListConfig,
  currentCategorySlug,
  productPageRoute,
}: StoreCollectionPageProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-[100rem] mx-auto w-full px-8 py-12">
        <ProductList
          productPageRoute={productPageRoute}
          productsListConfig={productsListConfig}
          categoriesListConfig={categoriesListConfig}
          currentCategorySlug={currentCategorySlug}
        />
      </main>
      <Footer />
    </div>
  );
}

export default CategoryPage;
