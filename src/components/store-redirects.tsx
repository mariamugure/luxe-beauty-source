import { redirect } from 'react-router';
import { loadCategoriesListServiceConfig } from '@wix/stores/services';

export async function defaultStoreCollectionRouteRedirectLoader() {
  // Helper function to retry failed requests
  const retryWithBackoff = async (fn: () => Promise<any>, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        // Exponential backoff: 100ms, 200ms, 400ms
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 100));
      }
    }
  };

  const [categoriesConfig] = await Promise.all([
    retryWithBackoff(() => loadCategoriesListServiceConfig()),
  ]);

  const selectedCategory = categoriesConfig.categories[0];
  if (!selectedCategory) {
    return redirect('/store/all-products');
  }
  return redirect(`/store/${selectedCategory.slug}`);
}
