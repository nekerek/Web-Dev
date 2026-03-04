import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/albums';
  private readonly updatedTitlesKey = 'album-browser-updated-titles';
  private readonly deletedAlbumsKey = 'album-browser-deleted-albums';

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl).pipe(
      map((albums) => {
        const deletedIds = this.getDeletedAlbumIds();
        return albums
          .filter((album) => !deletedIds.has(album.id))
          .map((album) => this.applyLocalTitle(album));
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    if (this.getDeletedAlbumIds().has(id)) {
      return throwError(() => new Error('Album was deleted locally.'));
    }

    return this.http.get<Album>(`${this.baseUrl}/${id}`).pipe(
      map((album) => this.applyLocalTitle(album))
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/${album.id}`, album).pipe(
      map((updatedAlbum) => {
        const titles = this.getUpdatedTitles();
        titles[updatedAlbum.id] = album.title;
        this.saveUpdatedTitles(titles);
        return { ...updatedAlbum, title: album.title };
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      map(() => {
        const deletedIds = this.getDeletedAlbumIds();
        deletedIds.add(id);
        this.saveDeletedAlbumIds(deletedIds);

        const titles = this.getUpdatedTitles();
        if (titles[id]) {
          delete titles[id];
          this.saveUpdatedTitles(titles);
        }
      })
    );
  }

  private applyLocalTitle(album: Album): Album {
    const localTitle = this.getUpdatedTitles()[album.id];
    return localTitle ? { ...album, title: localTitle } : album;
  }

  private getUpdatedTitles(): Record<number, string> {
    if (typeof localStorage === 'undefined') {
      return {};
    }

    try {
      const raw = localStorage.getItem(this.updatedTitlesKey);
      return raw ? (JSON.parse(raw) as Record<number, string>) : {};
    } catch {
      return {};
    }
  }

  private saveUpdatedTitles(titles: Record<number, string>): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(this.updatedTitlesKey, JSON.stringify(titles));
    } catch {
      // Ignore storage write errors.
    }
  }

  private getDeletedAlbumIds(): Set<number> {
    if (typeof localStorage === 'undefined') {
      return new Set<number>();
    }

    try {
      const raw = localStorage.getItem(this.deletedAlbumsKey);
      const ids = raw ? (JSON.parse(raw) as number[]) : [];
      return new Set(ids);
    } catch {
      return new Set<number>();
    }
  }

  private saveDeletedAlbumIds(ids: Set<number>): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(this.deletedAlbumsKey, JSON.stringify(Array.from(ids)));
    } catch {
      // Ignore storage write errors.
    }
  }
}
