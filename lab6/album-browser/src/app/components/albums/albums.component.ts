import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Album[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly albumService: AlbumService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load albums. Please try again.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to delete album.';
        this.cdr.detectChanges();
      }
    });
  }
}
