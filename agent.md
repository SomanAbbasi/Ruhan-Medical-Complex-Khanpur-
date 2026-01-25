## `agent.md` — React (Vite) → Next.js App Router Conversion

### 🎯 Objective

Convert an existing **React + Vite** project into **Next.js (App Router)** while keeping the **UI 100% identical**.

❗ **No visual, layout, animation, spacing, color, typography, or interaction changes are allowed.**
The final output must look and behave **pixel-perfect the same** as the original.

---

## 🔒 Hard Rules (Non-Negotiable)

1. **DO NOT**

   * Change Tailwind classes
   * Change JSX structure
   * Change animation logic (Anime.js, cursor effects, transitions)
   * Rename CSS classes
   * Modify component markup hierarchy
   * Re-design layout or spacing
   * Replace libraries

2. **ONLY**

   * Adapt the project to Next.js App Router requirements
   * Fix imports, routing, and environment differences
   * Add `"use client"` where required
   * Convert routing and entry points

3. **UI MUST REMAIN IDENTICAL**

   * Same DOM structure
   * Same animations
   * Same transitions
   * Same responsive behavior
   * Same light/dark theme behavior

---

## 🧱 Target Stack

* **Next.js (latest)**
* **App Router (`/app`)**
* **TypeScript**
* **Tailwind CSS**
* **Anime.js**
* **Client + Server Components (as appropriate)**

---

## 📁 Folder Structure Conversion

### Current (Vite)

```
src/
 ├─ main.tsx
 ├─ App.tsx
 ├─ layout/
 ├─ components/
 ├─ pages/
 ├─ constants.ts
 ├─ assets/
```

### Target (Next.js App Router)

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ globals.css
 ├─ providers.tsx (if needed)
components/
constants/
assets/
public/
```

---

## 🔁 Conversion Instructions (Step-by-Step)

### 1️⃣ Entry Point Conversion

* `main.tsx` ❌ REMOVE
* `App.tsx` → logic goes into:

  * `app/page.tsx`
* Global layout logic → `app/layout.tsx`

---

### 2️⃣ Layout Conversion (CRITICAL)

#### `src/layout/*` → `app/layout.tsx`

* Preserve **exact JSX structure**
* Wrap children properly
* Keep navbar + footer exactly as-is
* Move global providers here if any

Example:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* SAME layout JSX from Vite */}
        {children}
      </body>
    </html>
  )
}
```

❗ DO NOT restructure markup.

---

### 3️⃣ Routing Conversion

* Remove React Router if used
* Each route:

  * `src/pages/Home.tsx` → `app/page.tsx`
  * Nested routes → `app/route-name/page.tsx`
* Keep component JSX unchanged

---

### 4️⃣ Client vs Server Components

Add `"use client"` **ONLY** where required:

Use `"use client"` if component uses:

* `useState`
* `useEffect`
* `useRef`
* Anime.js
* Mouse / cursor animations
* Event listeners
* Theme toggles
* Typewriter animation

❌ DO NOT add `"use client"` globally.

---

### 5️⃣ Constants & Data (SEO SAFE)

* Keep `constants.ts` unchanged
* Import it into **server components where possible**
* Pass data as props to client components

Goal:

* Content rendered on server
* Animations run on client

---

### 6️⃣ Assets Handling

* Move static assets to `/public`
* Update imports:

  * `/assets/img.png` → `/img.png`
* Images:

  * Keep `<img />` if currently used
  * Do NOT replace with `next/image` unless strictly required

(UI must not change)

---

### 7️⃣ Tailwind & Styling

* Keep **same Tailwind config**
* Same class names
* Same animations
* Same dark/light theme logic

Ensure:

* `globals.css` is imported in `app/layout.tsx`

---

### 8️⃣ Anime.js & Animations

* Keep **all animation code unchanged**
* Ensure:

  * Runs only on client components
  * Uses `useEffect` safely

❗ DO NOT refactor animations.

---

### 9️⃣ Environment Differences

* Replace:

  * `import.meta.env` → `process.env.NEXT_PUBLIC_*`
* Only if environment variables exist

---

### 🔍 Validation Checklist (Must Pass)

Before finalizing:

* [ ] UI visually identical (side-by-side comparison)
* [ ] No layout shifts
* [ ] No animation timing changes
* [ ] No Tailwind class changes
* [ ] All sections render same order
* [ ] Dark/Light theme works same
* [ ] Mobile responsiveness unchanged
* [ ] Cursor animation behaves same
* [ ] SEO content server-rendered

---

## 🚫 Explicitly Forbidden Actions

* ❌ Rewriting components
* ❌ Introducing new UI libraries
* ❌ Changing animation libraries
* ❌ Switching to CSS animations
* ❌ Optimizing UI code
* ❌ Cleaning JSX
* ❌ Refactoring for “best practices” if it changes UI

---

## ✅ Final Goal

A **Next.js App Router project** that:

* Looks **exactly** like the original React + Vite app
* Behaves **exactly** the same
* Has **zero UI regression**
* Is SEO-ready
* Is production-deployable