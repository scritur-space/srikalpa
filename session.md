# Sri Kalpa Website — Session Log

## Session Date
September 27, 2026

## Objective
Build a premium demo website for **Sri Kalpa**, a furniture business in Electronic City Phase 2, Bengaluru.

## Primary Visual Reference
https://weblium.com/templates/demo/flooring-solutions-website-design-310

## Tech Stack
- **Next.js 16.3.6** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based @theme config, no tailwind.config.ts)
- **Framer Motion** (scroll animations, hover effects)
- **React 19.2.8**
- **Node.js v24.13.0**, npm 11.6.2

## Design System
- **Heading Font:** Cormorant Garamond (via next/font)
- **Body Font:** Inter (via next/font)
- **Background:** `#FAF8F5` (warm ivory)
- **Primary text:** `#1A1A1A` (deep charcoal)
- **Secondary text:** `#6B6B6B` (warm grey)
- **Accent:** `#8B6F47` (natural wood brown)
- **Accent light:** `#C4A97D`
- **Dark bg:** `#1A1A1A`
- **Border:** `#E5E0DA`
- **Button style:** Square corners (0px radius), uppercase, weight 500

## File Structure

```
srikalpa/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata, structured data
│   │   ├── page.tsx                # Homepage (all sections)
│   │   ├── globals.css             # Tailwind v4 @theme, animations, reduced-motion
│   │   ├── robots.ts               # Robots config
│   │   ├── sitemap.ts              # Dynamic sitemap
│   │   ├── about/page.tsx          # About page
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── products/
│   │   │   ├── page.tsx            # Product listing with filters
│   │   │   └── [slug]/page.tsx     # Dynamic product detail
│   │   └── projects/
│   │       ├── page.tsx            # Project listing with filters
│   │       └── [slug]/page.tsx     # Dynamic project detail
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx      # Sticky nav, mobile hamburger
│   │   │   ├── MobileMenu.tsx      # Full-screen mobile overlay
│   │   │   └── Footer.tsx          # 4-column dark footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Full-screen hero with Ken Burns
│   │   │   ├── BrandStatement.tsx  # Asymmetric two-column intro
│   │   │   ├── WhatWeOffer.tsx     # 5 numbered categories
│   │   │   ├── FeaturedProducts.tsx # Editorial product grid
│   │   │   ├── WhySriKalpa.tsx     # 3 values, dark bg
│   │   │   ├── ProjectsShowcase.tsx # Asymmetric project grid
│   │   │   ├── StatisticsSection.tsx # Animated counters
│   │   │   ├── TestimonialsSection.tsx # Quote carousel
│   │   │   ├── CustomFurnitureCTA.tsx # Full-width CTA
│   │   │   ├── EnquiryForm.tsx     # 9-field enquiry form
│   │   │   └── ContactSection.tsx  # Address + map
│   │   └── ui/
│   │       ├── Container.tsx       # 1200px max-width
│   │       ├── Button.tsx          # 3 variants, 3 sizes
│   │       ├── SectionLabel.tsx    # Uppercase accent label
│   │       ├── SectionHeading.tsx  # Title + subtitle
│   │       ├── AnimatedSection.tsx # Framer Motion fade-in-up
│   │       ├── ImageReveal.tsx     # Scale animation
│   │       ├── DecorativeLine.tsx  # Thin 1px line
│   │       ├── NumberLabel.tsx     # Large number display
│   │       ├── ProductCard.tsx     # Image-dominant card
│   │       ├── MapEmbed.tsx        # Google Maps iframe
│   │       └── WhatsAppButton.tsx  # Floating bottom-right
│   ├── data/
│   │   ├── business.ts             # Sri Kalpa business info
│   │   ├── navigation.ts           # Nav items
│   │   ├── categories.ts           # 5 numbered categories
│   │   ├── products.ts             # 8 demo products
│   │   ├── projects.ts             # 6 demo projects
│   │   ├── testimonials.ts         # 4 demo testimonials
│   │   └── stats.ts                # 4 placeholder stats
│   ├── lib/
│   │   └── whatsapp.ts             # WhatsApp link generator
│   └── types/
│       └── index.ts                # All TypeScript interfaces
├── public/images/                  # Image directories (empty, use Unsplash URLs)
├── .env.local                      # WhatsApp number placeholder
├── next.config.ts                  # Unsplash image domains
├── tailwind.config.ts              # Does not exist (Tailwind v4 uses CSS)
├── postcss.config.mjs              # @tailwindcss/postcss
├── tsconfig.json                   # Path aliases: @/* → ./src/*
├── package.json                    # Dependencies
└── todo.md                         # Implementation plan (285 tasks, all completed)
```

## Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage (11 sections) |
| `/products` | Static | Product listing with category filters |
| `/products/[slug]` | SSG | 8 product detail pages |
| `/projects` | Static | Project listing with category filters |
| `/projects/[slug]` | SSG | 6 project detail pages |
| `/about` | Static | About page |
| `/contact` | Static | Contact page |
| `/robots.txt` | Static | Robots config |
| `/sitemap.xml` | Static | Dynamic sitemap |

## Homepage Sections (in order)
1. Hero — full-screen, Ken Burns animation, two CTAs
2. Brand Statement — asymmetric image/text layout
3. What We Offer — 5 numbered categories with alternating layout
4. Featured Products — editorial grid with hover effects
5. Why Sri Kalpa — 3 values on dark background
6. Projects Showcase — asymmetric grid with hover overlays
7. Statistics — animated counters on dark background
8. Testimonials — quote carousel with dots
9. Custom Furniture CTA — full-width dark/image background
10. Enquiry Form — 9 fields including file upload
11. Contact — address details + Google Maps

## Mock Data

### Products (8)
1. Solid Rubberwood X Frame Picnic Table & Bench Set
2. Teak Wood Double Bed
3. Boss Executive Office Chair
4. Revolving Office Chair
5. Wooden Temple / Pooja Unit
6. Reclining Sofa
7. Cash Desk Counter
8. Decorative Pillow Set

### Projects (6)
1. Residential Living Room
2. Corporate Office Fit-Out
3. Custom Teak Bedroom
4. Outdoor Garden Setup
5. Modular Kitchen
6. Reception Area Design

### Categories (5)
1. 01 — Home Furniture
2. 02 — Office & Commercial
3. 03 — Custom Furniture
4. 04 — Outdoor Furniture
5. 05 — Kitchens

## Environment Variables
```
NEXT_PUBLIC_WHATSAPP_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_BUSINESS_NAME=Sri Kalpa
```

## Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Key Decisions
1. **Tailwind v4** — No tailwind.config.ts; uses `@theme inline` in globals.css
2. **Unsplash URLs** — All demo images use external Unsplash URLs configured in next.config.ts
3. **next/image** — All `<img>` tags converted to `<Image>` with proper `sizes` and `fill`
4. **Server Components** — Most components are server components; only interactive ones use `"use client"`
5. **Framer Motion** — Used for scroll animations (AnimatedSection, ImageReveal)
6. **No backend** — Enquiry form is visual-only (console.log on submit)
7. **WhatsApp** — Configurable via env variable, generates pre-filled messages

## Content Replacement Guide
All content is in `src/data/` files. To replace with real content:
- Products: Edit `src/data/products.ts`
- Projects: Edit `src/data/projects.ts`
- Business info: Edit `src/data/business.ts`
- Testimonials: Edit `src/data/testimonials.ts`
- WhatsApp number: Edit `.env.local`
- Images: Replace Unsplash URLs in data files with real photography

## Business Accuracy Notes
- All testimonials marked `isDemo: true`
- All stats marked `isPlaceholder: true`
- No fabricated certifications, awards, or customer counts
- Address verified against public listings
- Unverified services (kitchens, gypsum ceiling) not included as official services
- Products based on publicly available business directory data

## Known Limitations
1. Map embed uses placeholder coordinates (needs real Google Maps URL)
2. All images are external Unsplash URLs (need real Sri Kalpa photography)
3. Form submission is visual-only (no backend)
4. Email field in business info is placeholder
5. Social media links are placeholder `#` URLs
6. WhatsApp number is placeholder `+91XXXXXXXXXX`

## Next Steps (when ready)
1. Replace Unsplash images with real Sri Kalpa photography
2. Get real WhatsApp number from business owner
3. Get real email address
4. Get real social media links
5. Replace demo testimonials with real reviews
6. Replace placeholder stats with real numbers
7. Get real Google Maps coordinates
8. Add real product prices when available
9. Connect enquiry form to backend (or WhatsApp API)
10. Test on real hosting environment
