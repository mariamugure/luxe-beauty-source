import { StyledProductListSort } from '@/components/ui/store/Sort';

export function SortDropdown() {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-content-primary font-semibold text-sm uppercase tracking-wide">
          Sort by
        </h3>
      </div>

      <StyledProductListSort className="min-w-[200px]" />
      
      <p className="text-xs text-foreground/50 mt-1">
        💡 Tip: Sort by Price (High→Low) for premium equipment
      </p>
    </div>
  );
}
