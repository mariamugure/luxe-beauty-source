import { CategoryList, Category } from '@wix/stores/components';
import type { CategoriesListServiceConfig } from '@wix/stores/services';
import { Label } from '@/components/ui/label';

interface CategoryPillsProps {
  categoriesListConfig: CategoriesListServiceConfig;
}

export function CategoryPills({ categoriesListConfig }: CategoryPillsProps) {
  return (
    <CategoryList.Root categoriesListConfig={categoriesListConfig}>
      <div className="w-full">
        <div className="mb-4">
          <Label className="text-foreground font-semibold text-sm uppercase tracking-wide">
            Shop by Category
          </Label>
        </div>

        {/* Category Navigation - Horizontal pills with better visibility */}
        <div className="flex flex-wrap gap-2">
          <CategoryList.CategoryRepeater>
            <Category.Trigger asChild>
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border-2 border-charcoal/20 text-foreground hover:border-primary hover:bg-primary/5 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:border-primary data-[selected=true]:shadow-md">
                <Category.Label />
              </button>
            </Category.Trigger>
          </CategoryList.CategoryRepeater>
        </div>
      </div>
    </CategoryList.Root>
  );
}

export default CategoryPills;
