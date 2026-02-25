# Online Store (Lab 5)

Angular project for category-based product browsing with component hierarchy:
`AppComponent -> ProductListComponent -> ProductItemComponent`.

## Features

- Categories: `Periphery`, `Laptops`, `Tablets`, `Hardware`
- Product hierarchy via `categoryId` in `Product`
- Like and delete actions per product card
- WhatsApp and Telegram share buttons
- Data stored in `ProductService` (not hardcoded in components)

## Data Note

- Periphery: 5 products
- Laptops: 5 products
- Tablets: 5 products
- Hardware: 10 products
- Price, rating, image, and description are left as placeholders for manual filling.

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm start
   ```
3. Open:
   `http://localhost:4200/`

## Build

```bash
npm run build
```

## Test

```bash
npm test
```
