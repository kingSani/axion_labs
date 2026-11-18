# Axion Labs — Engineering Marketplace & Visualization Studio

Axion Labs is a commercial platform combining a digital and physical engineering storefront with a multidisciplinary product design and visualization studio.

## Core Capabilities

- **Digital Asset Storefront:** Instant purchase and secure pre-signed delivery of proprietary 3D CAD models (`.STEP`, `.SLDPRT`), printable `.STL`/`.3MF` packages, and PCB/schematic templates.
- **Physical 3D-Printed Products Store:** Direct-to-consumer e-commerce for custom additive-manufactured hardware, enclosures, and functional products with variant selection and shipping tracking.
- **Engineering & Creative Design Services:** Multi-step client intake, file upload, scoping, quoting, and milestone management for Mechanical CAD, PCB Layout, 3D Rendering, and Product Animation.
- **Interactive 3D Previews:** Browser-based `.glb`/`.stl` model inspection with orbit, zoom, and wireframe toggles powered by React Three Fiber.

---

## Tech Stack

| Layer                | Technology                                     | Purpose                                                                                  |
| :------------------- | :--------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **Frontend**         | Next.js (App Router), TypeScript, Tailwind CSS | SSR/ISR storefront, interactive product pages, and customer/admin portals                |
| **3D & Media**       | Three.js, React Three Fiber, Cloudinary / Mux  | Interactive 3D viewport and optimized product animation streaming                        |
| **Database & ORM**   | Neon (Serverless PostgreSQL) + Drizzle ORM     | Type-safe relational schema for hybrid carts, orders, and service quotes                 |
| **Object Storage**   | Cloudflare R2 / AWS S3                         | Separated public preview buckets and private paid asset buckets (15-min pre-signed URLs) |
| **Payments**         | Paystack & Stripe                              | Local (NGN) and international (USD/EUR) checkout with webhook verification               |
| **State Management** | Zustand                                        | Persistent hybrid cart state synced with `localStorage`                                  |

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── (store)/
│   │   │   ├── page.tsx               # Landing page & featured catalog
│   │   │   ├── store/page.tsx         # Filterable digital & physical marketplace
│   │   │   └── store/[slug]/page.tsx  # Product detail + 3D viewer
│   │   ├── services/
│   │   │   ├── page.tsx               # Engineering & rendering showcase
│   │   │   └── quote/page.tsx         # Multi-step brief & reference uploader
│   │   ├── cart/                      # Hybrid digital/physical cart
│   │   ├── checkout/                  # Dynamic shipping & payment checkout
│   │   ├── dashboard/                 # Customer portal (Downloads, Orders, Projects)
│   │   ├── admin/                     # Studio console (CRUD, fulfillment, quoting)
│   │   └── api/                       # Route handlers, webhooks & pre-signed URL generators
│   ├── components/
│   │   ├── 3d/                        # Lazy-loaded React Three Fiber canvases
│   │   ├── store/                     # Product cards, variant selectors, filters
│   │   └── ui/                        # Reusable interface components
│   ├── db/
│   │   ├── index.ts                   # Neon serverless client & Drizzle instance
│   │   └── schema.ts                  # Drizzle PostgreSQL tables & enums
│   ├── lib/
│   │   ├── storage.ts                 # S3 / Cloudflare R2 pre-signed URL helpers
│   │   └── payments.ts                # Paystack & Stripe verification utilities
│   └── store/
│       └── cart-store.ts              # Zustand hybrid cart state
├── drizzle/                           # Generated SQL migrations
├── drizzle.config.ts                  # Drizzle Kit configuration
└── package.json
```
