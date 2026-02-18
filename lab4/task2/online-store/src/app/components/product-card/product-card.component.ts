import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { NgFor } from '@angular/common';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly starIndexes = [0, 1, 2, 3, 4];
  readonly selectedImageIndex = signal(0);

  readonly galleryImages = computed(() => {
    const product = this.product();
    const uniqueImages = [...new Set([product.image, ...product.images])].filter((imageUrl) => imageUrl.length > 0);

    while (uniqueImages.length < 3) {
      uniqueImages.push(uniqueImages[uniqueImages.length - 1] ?? product.image);
    }

    return uniqueImages;
  });

  readonly selectedImage = computed(() => {
    const images = this.galleryImages();
    const index = this.getSafeIndex(images.length, this.selectedImageIndex());
    return images[index];
  });

  isFilledStar(starIndex: number, rating: number): boolean {
    return starIndex < Math.round(rating);
  }

  buildWhatsAppShareUrl(): string {
    const message = `Check out this product: ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  buildTelegramShareUrl(): string {
    const product = this.product();
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
  }

  selectImage(imageIndex: number): void {
    const images = this.galleryImages();
    this.selectedImageIndex.set(this.getSafeIndex(images.length, imageIndex));
  }

  showPreviousImage(): void {
    const images = this.galleryImages();
    this.selectedImageIndex.set(this.getSafeIndex(images.length, this.selectedImageIndex() - 1));
  }

  showNextImage(): void {
    const images = this.galleryImages();
    this.selectedImageIndex.set(this.getSafeIndex(images.length, this.selectedImageIndex() + 1));
  }

  isSelectedImage(imageIndex: number): boolean {
    const images = this.galleryImages();
    return this.getSafeIndex(images.length, this.selectedImageIndex()) === imageIndex;
  }

  trackByImageUrl(_index: number, imageUrl: string): string {
    return imageUrl;
  }

  private getSafeIndex(totalImages: number, index: number): number {
    if (totalImages < 1) {
      return 0;
    }

    return ((index % totalImages) + totalImages) % totalImages;
  }
}
