import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumId = 0;
  photos: Photo[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.loadPhotos();
  }

  loadPhotos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.errorMessage = 'Invalid album id.';
      this.isLoading = false;
      this.cdr.detectChanges();
      return;
    }

    this.albumId = id;
    this.isLoading = true;

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load photos.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  onImageError(event: Event, photo: Photo): void {
    const img = event.target as HTMLImageElement;
    if (!img) {
      return;
    }

    // First fallback: try the full-size URL from JSONPlaceholder.
    if (!img.dataset['fallbackStep']) {
      img.dataset['fallbackStep'] = 'full';
      img.src = photo.url;
      return;
    }

    // Second fallback: stable placeholder image provider.
    if (img.dataset['fallbackStep'] === 'full') {
      img.dataset['fallbackStep'] = 'picsum';
      img.src = `https://picsum.photos/seed/album-photo-${photo.id}/150/150`;
      return;
    }

    // Stop retry loop if every source fails.
    img.onerror = null;
  }
}
