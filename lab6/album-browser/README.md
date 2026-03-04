# Album Browser (Lab 6)

Angular standalone app that demonstrates routing + HTTP service usage with JSONPlaceholder albums.

## Implemented

- Routes:
  - `/` redirects to `/home`
  - `/home` (HomeComponent)
  - `/about` (AboutComponent)
  - `/albums` (AlbumsComponent)
  - `/albums/:id` (AlbumDetailComponent)
  - `/albums/:id/photos` (AlbumPhotosComponent)
- Shared navigation bar with `routerLink` and `routerLinkActive`
- `AlbumService` for all API operations (`getAlbums`, `getAlbum`, `getAlbumPhotos`, `updateAlbum`, `deleteAlbum`)
- Typed interfaces in separate model files (`Album`, `Photo`)
- Loading and empty states for album and photo pages

## Run

1. `npm install`
2. `npm start`
3. Open `http://localhost:4200`

## Build

- `npm run build`
