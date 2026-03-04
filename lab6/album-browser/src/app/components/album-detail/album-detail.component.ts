import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Album | null = null;
  title = '';
  isLoading = true;
  isSaving = false;
  errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.loadAlbum();
  }

  loadAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.errorMessage = 'Invalid album id.';
      this.isLoading = false;
      this.cdr.detectChanges();
      return;
    }

    this.isLoading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.title = album.title;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to load album.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) {
      return;
    }

    this.isSaving = true;
    const updatedAlbum: Album = { ...this.album, title: this.title.trim() || this.album.title };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (savedAlbum) => {
        this.album = savedAlbum;
        this.title = savedAlbum.title;
        this.isSaving = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Failed to save album title.';
        this.isSaving = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
