# Forescribe UI (Next.js)

A modern, animated SaaS-style frontend built with Next.js, featuring smooth route transitions, interactive UI components, and a polished authentication experience.

---

## 🚀 Tech Stack

- Next.js 16.1.7 (App Router)
- React 19.2.3
- React DOM 19.2.3
- TypeScript
- TailwindCSS 4.2.1
- Framer Motion 12.38.0
- React Hook Form 7.71.2
- Zod 4.3.6

---

## ✨ Features

### 🔹 Core Features
- App Router architecture (`app/`)
- Home page (`/`) with onboarding logic
- Sign-in page (`/signin`) with modal-based UI
- Custom 404 page with animation

### 🎨 UI & UX
- Smooth route transitions (Framer Motion)
- Scroll reveal animations
- Glassmorphism-based card UI
- Interactive login flow (Google, Microsoft, Email)
- Fully responsive layout

### ⚡ Performance & Architecture
- Server/Client component separation
- Optimized fonts using `next/font`
- Reusable UI components (`Button`, `Card`)
- Clean folder structure for scalability

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Screen-reader friendly elements

---

## 🛠️ Project Setup

### Requirements
- Node.js v18+
- npm / pnpm / yarn

### Install

```bash
npm install
# or
pnpm install
# or
yarn
```

### Run development server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build / production preview

```bash
npm run build
npm run dev
```

or

```bash
pnpm build
pnpm start
```

## 🧩 Features completed

- App router architecture (`app/`)
- Home page (`/`) with sign-in call-to-action
- Sign-in page (`/signin`) with full background + modal
- 404 custom page (`app/not-found.tsx`) with motion
- Route transitions and reveal animations (framer-motion)
- Accessibility improvements (semantic roles, ARIA labels, hidden `sr-only` heading)
- SVG DOM property compatibility (React attribute names in `data/cardData.tsx`)
- Dynamic page metadata:
  - `/`: `Forescribe AI`
  - `/signin`: `Sign In | Forescribe AI`
- Button component supports both click and link usage

## 🛠️ Development details and assumptions

- Uses Next.js 14+ App Router (server components by default, client components where needed)
- `LoginModal` is client-side with simulated authentication action (setTimeout push to `/`)
- `SignInPage` and Home call same shared UI; home now minimal promotion + sign-in link
- `cardData.tsx` includes inline SVG icons used by `CardGrid`
- `next/font` is used for Geist fonts via `layout.tsx`
- `app/layout.tsx` wraps children in `RouteTransition` for hydration
- `not-found` route uses accessible 404 experience and motion animations

## 📁 Directory structure (developer view)

This section describes where key app code lives and what each folder is for.

- `app/`
  - `layout.tsx`: app shell, global CSS and font setup
  - `page.tsx`: home route UI and first-visit behavior
  - `signin/page.tsx`: signin route rendering `SignInPage`
  - `not-found.tsx`: custom 404 page
  - `HomeClient.tsx`: client-side first-visit redirect logic + home content

- `components/`
  - `animations/`
    - `RouteTransition.tsx`: page transition container
    - `RevealOnScroll.tsx`: animation wrapper for content reveal
  - `layout/`
    - `CardGrid.tsx`: renders card list from `cardData`
    - `Column.tsx`: responsive layout helper
  - `sections/`
    - `LoginModal.tsx`: signin modal with fake auth flow
    - `SignInPage.tsx`: signin page that includes `LoginModal` and background graphics
  - `ui/`
    - `Button.tsx`: reusable button with link/click modes
    - `Card.tsx`: card UI used by `CardGrid` (hover + icon + labels)

- `data/`
  - `cardData.tsx`: array of card entries (title, subtitle, icon, color)

- `public/`
  - `logo.gif`: animated brand logo (marked `unoptimized` in `Image` component)
  - other static assets

root config files
- `README.md`
- `package.json`
- `next.config.ts`
- `tsconfig.json`

## 🧪 How to verify the behavior

1. Start dev server
2. Go to `/` (single button, front door)
3. Click sign-in button (`/signin` with full modal scene)
4. Navigate to unknown route (`/not-real`) to confirm 404
5. Open browser console and verify no "Invalid DOM property" warnings, or disable extensions like Grammarly if still seen

## 💡 Future improvements

- Add full auth flow with OAuth, server-side session and secure cookie support
- Add form validation states in `LoginModal` (implemented with `react-hook-form`)
- Add automated tests (Jest + React Testing Library + Playwright)
- Add e2e flows for `signin`, `home`, and 404
- Optimize images via `next/image` and dynamic import of sign-in page for client-only behavior

## 📌 Notes

- The project intentionally prevents hydration mismatch by avoiding random values in SSR and using React-safe SVG props


