# MobileStore - Frontend Technical Test

A single-page application for browsing and purchasing mobile devices. Users can explore
a product catalog, filter by brand or model in real time, view product details and
add items to their cart.

## Requirements

- Node.js v20
- npm v10

## Installation

```bash
npm install
```

## Scripts

```bash
npm run start    # Development mode
npm run build    # Production build
npm run test     # Run tests
npm run lint     # Check code
npm run format   # Format code
```

## Tech stack

- React 19
- React Router 7
- Vite
- Vitest + React Testing Library
- ESLint + Prettier

## API

This app consumes the API available at:
`https://itx-frontend-test.onrender.com`

> **Note:** The API runs on Render's free tier and may take a few seconds to wake up on the first request.

## Technical decisions

- **Context API over Redux** — the app state is minimal (cart count, product list), so React Context is sufficient without the overhead of Redux.
- **1-hour client-side cache** — API responses are cached in localStorage with a 1-hour TTL to avoid unnecessary requests, as required by the brief.
- **Pagination** — added pagination (8 products per page).

## Project structure

```text
src/
├── api/            # API calls and cache
├── components/     # Reusable components
├── context/        # React Context (cart)
├── pages/          # Application views (PLP, PDP)
├── test/           # Unit and integration tests
└── utils/          # Helper functions
```

## Author

Patricia Mato Miragaya