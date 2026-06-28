# technical-test

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
npm run dev      # Development mode
npm run build    # Production build
npm run test     # Run tests
npm run lint     # Check code
```

## Tech stack

- React 18
- React Router 6
- Vite

## API

This app consumes the API available at:
`https://itx-frontend-test.onrender.com`

## Project structure
```text
src/
├── backend/        # API services and data fetching
├── modules/        # Domain modules (catalog, cart, common)
├── store/          # Redux store setup
└── index.js        # Entry point
```

## Author
Patricia Mato Miragaya - patriciamato10@gmail.com