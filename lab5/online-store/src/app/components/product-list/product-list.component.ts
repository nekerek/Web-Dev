import { ChangeDetectionStrategy, Component, input, signal, SimpleChanges } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products = input.required<Product[]>();
  readonly visibleProducts = signal<Product[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts.set(this.products().map((product) => ({ ...product, images: [...product.images] })));
    }
  }

  likeProduct(productId: number): void {
    this.visibleProducts.update((products) =>
      products.map((product) =>
        product.id === productId ? { ...product, likes: product.likes + 1 } : product
      )
    );
  }

  onSortChange(direction: 'asc' | 'desc'): void {
    this.visibleProducts.update((products) =>
      [...products].sort((a, b) => (direction === 'asc' ? a.price - b.price : b.price - a.price))
    );
  }

  deleteProduct(productId: number): void {
    this.visibleProducts.update((products) => products.filter((product) => product.id !== productId));
  }

  trackByProductId(_index: number, product: Product): number {
    return product.id;
  }
}
