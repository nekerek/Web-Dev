import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly productService = inject(ProductService);

  readonly categories = signal<Category[]>(this.productService.getCategories());
  readonly selectedCategoryId = signal<number | null>(null);
  readonly selectedProducts = computed(() =>
    this.selectedCategoryId() === null
      ? []
      : this.productService
          .getProducts()
          .filter((product) => product.categoryId === this.selectedCategoryId())
  );

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  isCategorySelected(categoryId: number): boolean {
    return this.selectedCategoryId() === categoryId;
  }

  trackByCategoryId(_index: number, category: Category): number {
    return category.id;
  }
}
