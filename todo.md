# Sri Kalpa — Premium Furniture Website Implementation

> **Primary Visual Reference:** [Weblium Flooring Solutions Template](https://weblium.com/templates/demo/flooring-solutions-website-design-310)
>
> This document is the single source of truth for the Sri Kalpa website implementation.
> Do not skip phases. Do not silently remove tasks. If requirements change, update this file first.

---

## Phase 1 — Project Foundation

### Objective
Initialize a clean Next.js project with TypeScript, Tailwind CSS, and the correct folder structure.

### Tasks

- [x] 1.1 Check environment for available Node.js version and npm/pnpm/yarn
- [x] 1.2 Initialize Next.js project with App Router and TypeScript (Next.js 16.3.6)
- [x] 1.3 Install and configure Tailwind CSS v4 with custom design tokens (CSS-based @theme config)
- [x] 1.4 Install Framer Motion
- [x] 1.5 Configure ESLint (included with create-next-app)
- [x] 1.6 Set up Google Fonts via `next/font` (Cormorant Garamond for headings, Inter for body)
- [x] 1.7 Create folder structure:
  - `src/app/` — routes
  - `src/components/sections/` — homepage sections
  - `src/components/ui/` — buttons, inputs, containers
  - `src/components/layout/` — navigation, footer
  - `src/data/` — mock data files
  - `src/lib/` — utilities (WhatsApp link generator, formatters)
  - `src/types/` — TypeScript interfaces
  - `public/images/` — demo images organized by category
- [x] 1.8 Configure Tailwind v4 @theme inline with custom color palette:
  - Background: `#FAF8F5` (warm ivory)
  - Primary text: `#1A1A1A` (deep charcoal)
  - Secondary text: `#6B6B6B` (warm grey)
  - Accent: `#8B6F47` (natural wood brown)
  - Accent light: `#C4A97D`
  - Dark bg: `#1A1A1A`
  - Border: `#E5E0DA`
- [x] 1.9 Create global CSS with base resets and typography defaults
- [x] 1.10 Create `.env.local` with placeholder WhatsApp number
- [x] 1.11 Configure `tsconfig.json` path aliases (`@/*` → `./src/*`)
- [x] 1.12 Verify development server starts without errors

### Files/Components Affected
- `package.json`
- `next.config.ts` / `next.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `.env.local`
- Entire `src/` directory structure

### Verification Criteria
- `npm run dev` starts successfully
- `npm run build` passes with no errors
- Tailwind utility classes render correctly
- Google fonts load (Cormorant Garamond, Inter)
- Path aliases resolve correctly
### Definition of Done

- [x] Project initializes with zero errors
- [x] TypeScript compiles without errors
- [x] Tailwind CSS v4 renders custom design tokens via @theme inline
- [x] No dependency conflicts
- [x] `npm run build` passes successfully
- [x] `npm run lint` passes cleanly

---

## Phase 2 — Design System Components

### Objective
Build reusable foundational components that every section will depend on.

### Tasks

- [x] 2.1 Create `Container` component — max-width 1200px, responsive horizontal padding (24px mobile, 32px tablet, 40px desktop)
- [x] 2.2 Create `Button` component with variants:
  - Primary: accent bg, white text, square corners, hover to dark bg
  - Secondary: transparent bg, accent border, accent text, hover fill
  - Outline Dark: transparent bg, dark border, dark text, hover fill
  - Sizes: LG (16px, 18px 30px pad), MD (15px, 15px 26px pad), SM (14px, 11px 21px pad)
  - All uppercase, weight 500, letter-spacing 0
- [x] 2.3 Create `SectionLabel` component — small uppercase text label (e.g., "OUR SERVICES"), accent color, letter-spacing
- [x] 2.4 Create `SectionHeading` component — title (Cormorant Garamond), optional subtitle (Inter), optional decorative line
- [x] 2.5 Create `AnimatedSection` wrapper — Framer Motion `whileInView` fade-in-up, configurable delay, `viewport={{ once: true, margin: "-100px" }}`
- [x] 2.6 Create `ImageReveal` component — subtle scale(1.05) to scale(1) transition on viewport entry
- [x] 2.7 Create `DecorativeLine` component — thin 1px horizontal line, 20% opacity, currentColor
- [x] 2.8 Create `NumberLabel` component — large number display (e.g., "01") for numbered sections, Cormorant Garamond, accent color

### Files/Components Affected
- `src/components/ui/Container.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/SectionLabel.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/ui/AnimatedSection.tsx`
- `src/components/ui/ImageReveal.tsx`
- `src/components/ui/DecorativeLine.tsx`
- `src/components/ui/NumberLabel.tsx`

### Verification Criteria
- Each component renders without errors
- Button variants all display correctly
- AnimatedSection triggers animation on scroll
- All components accept className prop for composition

### Definition of Done
- [x] All 8 design system components built and functional
- [x] Components accept flexible props (className, children, etc.)
- [x] No TypeScript errors
- [x] Components follow consistent code style

---

## Phase 3 — Data Layer

### Objective
Create structured mock data that powers the entire site. Data must be easy to replace with real content later.

### Tasks

- [x] 3.1 Define TypeScript interfaces in `src/types/index.ts`:
  - `Product` (id, slug, name, category, material, finish, description, shortDescription, image, specifications, relatedProductSlugs)
  - `Category` (id, number, title, description, image, slug)
  - `Project` (id, slug, title, category, description, images, featured)
  - `Testimonial` (id, name, location, text, isDemo)
  - `BusinessInfo` (name, address, phone, whatsapp, email, hours, social)
  - `NavItem` (label, href, children?)
  - `EnquiryFormData` (name, phone, email, furnitureType, approximateSize, materialPreference, budget, message, referenceImage)
- [x] 3.2 Create `src/data/business.ts` — Sri Kalpa business information:
  - Name: Sri Kalpa
  - Address: No. 579, Sri Veerabadraswamy Nilaya, Ground Floor, Near Gasper School, Vinayaka Layout, Electronic City Phase 2, Bengaluru 560100
  - Phone: placeholder
  - WhatsApp: placeholder (from env)
  - Email: placeholder
  - Hours: placeholder
  - Social: placeholder links
- [x] 3.3 Create `src/data/navigation.ts` — nav items:
  - Furniture (→ /products)
  - Spaces (→ /projects)
  - Custom (→ #custom-furniture)
  - About (→ /about)
  - Contact (→ /contact)
  - CTA: GET A QUOTE (→ #enquiry)
- [x] 3.4 Create `src/data/categories.ts` — 5 numbered categories:
  - 01 HOME FURNITURE
  - 02 OFFICE & COMMERCIAL
  - 03 CUSTOM FURNITURE
  - 04 OUTDOOR FURNITURE
  - 05 KITCHENS
- [x] 3.5 Create `src/data/products.ts` — 6-8 demo products:
  - Solid Rubberwood X Frame Picnic Table and Bench Set
  - Teak Wood Double Bed
  - Boss Office Chair
  - Revolving Office Chair
  - Wooden Temple / Pooja Unit
  - Reclining Sofa
  - Cash Desk Counter
  - Decorative Pillow Set
- [x] 3.6 Create `src/data/projects.ts` — 4-6 demo projects:
  - Residential Living Room Setup
  - Corporate Office Fit-Out
  - Custom Teak Wood Bedroom
  - Outdoor Garden Furniture
  - Modular Kitchen Installation
  - Reception Area Design
- [x] 3.7 Create `src/data/testimonials.ts` — 4-6 placeholder testimonials (each marked `isDemo: true`)
- [x] 3.8 Create `src/data/stats.ts` — statistics data (clearly placeholder-safe values like "10+ Years in Business")

### Files/Components Affected
- `src/types/index.ts`
- `src/data/business.ts`
- `src/data/navigation.ts`
- `src/data/categories.ts`
- `src/data/products.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`
- `src/data/stats.ts`

### Verification Criteria
- All data files import without errors
- TypeScript types are consistent across data files
- Products have unique slugs
- No fabricated claims in data

### Definition of Done
- [x] All TypeScript interfaces defined
- [x] All 7 data files created with realistic demo content
- [x] Data is clearly structured for easy replacement
- [x] Placeholder testimonials marked as demo
- [x] No fake certifications, awards, or customer counts

---

## Phase 4 — Core Layout Components

### Objective
Build the persistent layout: navigation, footer, and WhatsApp floating button.

### Tasks

- [x] 4.1 Build `Navigation` component:
  - Desktop: horizontal menu, SRI KALPA wordmark left (Cormorant Garamond, tracking), nav links center, GET A QUOTE button right
  - Sticky on scroll with subtle background transition
  - Links: Furniture, Spaces, Custom, About, Contact
  - Active link indicator
- [x] 4.2 Build mobile `HamburgerButton` component — 24px wide, 16px tall, 2px lines, animates to X
- [x] 4.3 Build mobile `MobileMenu` — full-screen overlay or slide-in drawer, vertical links, CTA at bottom
- [x] 4.4 Build `Footer`:
  - Dark background (`#1A1A1A`)
  - 4-column grid on desktop: Brand+description, Navigation links, Contact info, Address
  - Social icons row (Instagram, Facebook, YouTube placeholders) in accent color
  - Copyright bar at bottom: copyright left, "All rights reserved" right
  - Stacks to 2-column on tablet, single column on mobile
- [x] 4.5 Build `WhatsAppButton` — floating bottom-right circle, green WhatsApp icon, links to `wa.me/{number}?text={encoded message}`, visible after scrolling past hero
- [x] 4.6 Wire up layout in `src/app/layout.tsx` — Navigation + `<main>` + Footer + WhatsAppButton
- [x] 4.7 Implement smooth scroll for anchor links (e.g., `#custom-furniture`, `#enquiry`)

### Files/Components Affected
- `src/components/layout/Navigation.tsx`
- `src/components/layout/HamburgerButton.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/WhatsAppButton.tsx`
- `src/app/layout.tsx`

### Verification Criteria
- Navigation renders on all pages
- Mobile menu opens and closes
- Footer displays correct business info
- WhatsApp button links to correct URL format
- Smooth scroll works for anchor links
- Navigation is sticky on scroll

### Definition of Done
- [x] Desktop navigation matches reference style (minimal, clean, uppercase CTA)
- [x] Mobile navigation is functional and touch-friendly
- [x] Footer has 4-column layout on desktop
- [x] WhatsApp button is visible and clickable
- [x] Layout wraps all pages correctly

---

## Phase 5 — Homepage: Top Sections

### Objective
Build the hero, brand statement, and "What We Offer" sections following the reference site's visual language.

### Tasks

- [x] 5.1 Build `HeroSection`:
  - Full-width, full-viewport-height (or near) background image
  - Large heading: "CRAFTED FURNITURE" (line 1) "FOR BEAUTIFUL SPACES" (line 2) — Cormorant Garamond, large size
  - Subtitle: "Furniture for homes, offices and custom spaces in Bengaluru." — Inter
  - Two CTA buttons: "EXPLORE COLLECTION" (primary), "REQUEST A QUOTE" (secondary outline)
  - Subtle Ken Burns / slow zoom animation on background image
  - Dark overlay gradient for text readability
- [x] 5.2 Build `BrandStatement` section:
  - Two-column asymmetric layout (image 55% / text 45% or similar)
  - Editorial intro text about Sri Kalpa's craft and approach
  - Decorative line separator
  - Generous section padding (100-120px vertical)
- [x] 5.3 Build `WhatWeOffer` section:
  - Section label: "WHAT WE OFFER"
  - 5 numbered items in alternating layout (number + text left / image right, then flip)
  - Each item: large number (01-05), title (Cormorant Garamond), short description (Inter), accompanying image
  - Thin decorative lines between items
  - Reference style: large typography, image-driven, not card-based

### Files/Components Affected
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/BrandStatement.tsx`
- `src/components/sections/WhatWeOffer.tsx`
- `src/app/page.tsx` (homepage assembly)

### Verification Criteria
- Hero displays full-width with text overlay
- Brand statement has asymmetric two-column layout
- What We Offer shows 5 numbered categories
- Sections use correct typography (Cormorant Garamond headings, Inter body)
- Section padding matches reference rhythm (generous whitespace)

### Definition of Done
- [x] Hero is visually striking and communicates furniture brand
- [x] Brand statement has editorial feel with asymmetric layout
- [x] What We Offer uses numbered presentation, not card grid
- [x] All sections responsive on mobile
- [x] Images load with next/image optimization

---

## Phase 6 — Homepage: Product Showcase

### Objective
Build an editorial, image-dominant product showcase section.

### Tasks

- [x] 6.1 Build `FeaturedProducts` section:
  - Section label: "FEATURED PRODUCTS"
  - Asymmetric grid layout (NOT uniform card grid) — large featured item + smaller items
  - 4-6 products displayed
  - Editorial feel: large images, minimal text overlay
- [x] 6.2 Build `ProductCard` component:
  - Large image with aspect ratio (接近 4:5 or 3:4 for furniture)
  - Product name (Cormorant Garamond)
  - Category label (Inter, small, uppercase)
  - Hover: subtle image scale, overlay with "VIEW PRODUCT" link
  - Square corners (matching reference button style)
- [x] 6.3 Add "VIEW ALL PRODUCTS" link/button at bottom of section → `/products`

### Files/Components Affected
- `src/components/sections/FeaturedProducts.tsx`
- `src/components/ui/ProductCard.tsx`
- `src/app/page.tsx`

### Verification Criteria
- Products display in asymmetric, editorial layout
- Product cards are image-dominant
- Hover effects work smoothly
- Links navigate to product detail pages

### Definition of Done
- [x] Product section looks editorial, not like an ecommerce grid
- [x] Product cards have large imagery
- [x] Hover animations are subtle (scale only)
- [x] All product links work

---

## Phase 7 — Homepage: Trust & Social Proof

### Objective
Build the Why Sri Kalpa, Projects Showcase, Statistics, and Testimonials sections.

### Tasks

- [x] 7.1 Build `WhySriKalpa` section:
  - Section label: "WHY SRI KALPA"
  - 3-4 value propositions with restrained design
  - Each: icon or number + title + short description
  - NOT generic card layout — use editorial/linear presentation
- [x] 7.2 Build `ProjectsShowcase` section:
  - Section label: "OUR SPACES"
  - Large photographs in asymmetric grid (2-3 items, varying sizes)
  - Project title overlay on hover
  - Links to `/projects`
  - "VIEW ALL SPACES" link at bottom
- [x] 7.3 Build `StatisticsSection`:
  - Full-width dark or contrasting background
  - 3-4 statistics in a row
  - Each: large number (animated counter on scroll) + label
  - Example values: "10+" / "Years in Business", "500+" / "Products Delivered", "100+" / "Spaces Designed", "50+" / "Custom Projects"
  - Thin decorative dividers between stats
  - All values clearly documented as demo placeholders in code comments
- [x] 7.4 Build `TestimonialsSection`:
  - Section label: "WHAT OUR CLIENTS SAY"
  - Editorial quote layout with decorative border lines
  - Each testimonial: quote text (italic), author name, location
  - Navigation dots or arrows for multiple testimonials
  - All testimonials marked as demo in data layer

### Files/Components Affected
- `src/components/sections/WhySriKalpa.tsx`
- `src/components/sections/ProjectsShowcase.tsx`
- `src/components/sections/StatisticsSection.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/app/page.tsx`

### Verification Criteria
- Why Sri Kalpa avoids generic card layout
- Projects section uses large photography
- Statistics animate on scroll
- Testimonials have editorial quote styling
- Demo testimonials are clearly identifiable

### Definition of Done
- [x] All 4 sections render correctly
- [x] Sections follow reference visual language
- [x] Statistics use placeholder-safe values
- [x] Testimonials marked as demo content
- [x] Responsive on all breakpoints

---

## Phase 8 — Homepage: CTA & Contact

### Objective
Build the custom furniture CTA, enquiry form, and contact/location sections.

### Tasks

- [x] 8.1 Build `CustomFurnitureCTA` section (anchored at `#custom-furniture`):
  - Full-width, dark or image background
  - Large heading: "HAVE A SPACE IN MIND?"
  - Subtext: "Tell us what you are looking for."
  - "REQUEST A QUOTE" CTA button
  - Visually strong, high contrast
- [x] 8.2 Build `EnquiryForm` section (anchored at `#enquiry`):
  - Section label: "GET IN TOUCH"
  - Fields:
    - Name (text input, required)
    - Phone (tel input, required)
    - Email (email input)
    - Furniture Type (select dropdown: Sofa, Bed, Chair, Table, Kitchen, Temple, Outdoor, Custom, Other)
    - Approximate Size (text input, optional)
    - Material Preference (select: Teak, Rubberwood, Sheesham, Plywood, Metal, Other)
    - Budget Range (select: Under ₹20,000, ₹20,000-50,000, ₹50,000-1,00,000, Above ₹1,00,000, Not Sure)
    - Message (textarea)
    - Reference Image (file input, visual UI only for demo — no backend upload)
  - Submit button: "SEND ENQUIRY"
  - Form is visual-only for demo (console.log on submit)
- [x] 8.3 Build `ContactSection`:
  - Two-column: contact details left, map right
  - Left: Sri Kalpa name, full address, phone, WhatsApp link, email placeholder
  - Right: Google Maps embed iframe (Sri Kalpa Electronic City location)
  - Clean, spacious layout
- [x] 8.4 Build `MapEmbed` component — responsive Google Maps iframe

### Files/Components Affected
- `src/components/sections/CustomFurnitureCTA.tsx`
- `src/components/sections/EnquiryForm.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/ui/MapEmbed.tsx`
- `src/app/page.tsx`
- `src/types/index.ts` (EnquiryFormData)

### Verification Criteria
- CTA section has strong visual contrast
- Enquiry form has all specified fields
- Form validation works (required fields)
- Reference image upload shows file name (visual only)
- Map embeds correctly
- WhatsApp link generates with pre-filled message

### Definition of Done
- [x] Custom Furniture CTA is visually prominent
- [x] Enquiry form has all 9 fields
- [x] Form handles submission gracefully (no backend needed)
- [x] Contact section shows address and map
- [x] All sections responsive

---

## Phase 9 — Product Pages

### Objective
Build the product listing page and dynamic product detail pages.

### Tasks

- [x] 9.1 Build `/products` listing page:
  - Page heading: "OUR COLLECTION"
  - Category filter tabs (All, Home Furniture, Office, Custom, Outdoor, Kitchens)
  - Editorial grid layout (NOT uniform cards — mix of large and small items)
  - Each product: large image, name, category, "ENQUIRE" button
  - Breadcrumb navigation
- [x] 9.2 Build `/products/[slug]` dynamic route:
  - Generate static params from product data
  - Generate metadata per product
- [x] 9.3 Build `ProductDetailPage`:
  - Large product image (70% width on desktop, full on mobile)
  - Product name (Cormorant Garamond, large)
  - Category label
  - Material and finish info
  - Description text
  - Specifications table (if available)
  - "ENQUIRE NOW" CTA button → opens WhatsApp with pre-filled product name
  - "REQUEST PRICE" button → scrolls to enquiry form
  - Breadcrumb navigation
- [x] 9.4 Build `RelatedProducts` component — show 2-3 related products at bottom of detail page
- [x] 9.5 Build `ProductBreadcrumb` component

### Files/Components Affected
- `src/app/products/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/app/products/[slug]/layout.tsx`
- `src/components/ui/ProductBreadcrumb.tsx`
- `src/components/sections/RelatedProducts.tsx`

### Verification Criteria
- Product listing shows all products
- Category filter works
- Dynamic routes render for all product slugs
- Product detail page shows all available info
- WhatsApp CTA generates correct message with product name
- Related products display correctly
- Breadcrumbs work

### Definition of Done
- [x] `/products` listing page renders all products
- [x] Category filtering functions correctly
- [x] `/products/[slug]` renders for every product
- [x] Product detail has image, name, description, specs, CTAs
- [x] WhatsApp message includes product name
- [x] Related products show on detail page

---

## Phase 10 — Projects / Spaces Pages

### Objective
Build the projects listing and detail pages.

### Tasks

- [x] 10.1 Build `/projects` listing page:
  - Page heading: "OUR SPACES"
  - Category filter (All, Residential, Office, Custom, Outdoor, Kitchen)
  - Large photograph grid with project titles
  - Breadcrumb navigation
- [x] 10.2 Build `/projects/[slug]` dynamic route:
  - Generate static params from project data
  - Generate metadata per project
- [x] 10.3 Build `ProjectDetailPage`:
  - Hero image (full-width)
  - Project title (Cormorant Garamond)
  - Category label
  - Description
  - Image gallery (multiple project images)
  - "ENQUIRE ABOUT THIS PROJECT" CTA
  - Breadcrumb navigation

### Files/Components Affected
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/components/ui/ProjectBreadcrumb.tsx`

### Verification Criteria
- Project listing shows all projects
- Detail pages render for all slugs
- Image gallery works
- CTA links to enquiry/WhatsApp

### Definition of Done
- [x] `/projects` page renders all projects
- [x] `/projects/[slug]` renders for every project
- [x] Project detail has hero image, title, description, gallery
- [x] CTA works correctly

---

## Phase 11 — About & Contact Pages

### Objective
Build standalone about and contact pages.

### Tasks

- [x] 11.1 Build `/about` page:
  - Hero/intro section with large image
  - Brand story / mission text
  - Values or approach section
  - Workshop/craft imagery
  - CTA to contact/enquiry
- [x] 11.2 Build `/contact` page:
  - Contact form (same fields as enquiry form on homepage)
  - Address details
  - Phone, WhatsApp, email
  - Google Maps embed
  - Business hours (placeholder)

### Files/Components Affected
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`

### Verification Criteria
- About page tells brand story
- Contact page has form + details + map
- Both pages responsive
- Navigation links to these pages work

### Definition of Done
- [x] About page renders with editorial layout
- [x] Contact page has form, details, and map
- [x] Both pages have proper metadata
- [x] Navigation works to/from both pages

---

## Phase 12 — Responsive Design

### Objective
Ensure every section and page works beautifully at mobile, tablet, and desktop widths.

### Tasks

- [x] 12.1 Audit and refine Navigation for mobile (hamburger menu, touch targets ≥44px)
- [x] 12.2 Refine Hero for mobile (stacked layout, reduced font sizes, full-width image)
- [x] 12.3 Refine Brand Statement for mobile (stack columns, adjust image/text ratio)
- [x] 12.4 Refine What We Offer for mobile (stack items, maintain numbering)
- [x] 12.5 Refine Featured Products for mobile (single column or horizontal scroll)
- [x] 12.6 Refine Why Sri Kalpa for mobile (stack items)
- [x] 12.7 Refine Projects Showcase for mobile (single column)
- [x] 12.8 Refine Statistics for mobile (stack or 2-column)
- [x] 12.9 Refine Testimonials for mobile (single column, swipeable)
- [x] 12.10 Refine Custom Furniture CTA for mobile (stack, adjust padding)
- [x] 12.11 Refine Enquiry Form for mobile (full-width inputs, proper keyboard types)
- [x] 12.12 Refine Contact Section for mobile (stack map below details)
- [x] 12.13 Refine Footer for mobile (stack columns, adjust spacing)
- [x] 12.14 Ensure WhatsApp button is properly positioned on mobile (bottom-right, not overlapping content)
- [x] 12.15 Test product detail pages on mobile
- [x] 12.16 Test project detail pages on mobile

### Files/Components Affected
- All components in `src/components/sections/`
- All components in `src/components/ui/`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/Footer.tsx`
- All page files in `src/app/`

### Verification Criteria
- All sections render correctly at 375px (mobile)
- All sections render correctly at 768px (tablet)
- All sections render correctly at 1440px (desktop)
- No horizontal overflow at any breakpoint
- Touch targets are ≥44px on mobile
- Images do not break layouts

### Definition of Done
- [x] Mobile (375px) — all sections usable and visually refined
- [x] Tablet (768px) — proper 2-column layouts where appropriate
- [x] Desktop (1440px) — full layout with generous whitespace
- [x] No layout breaks at any width
- [x] Navigation works on all breakpoints

---

## Phase 13 — Animations & Micro-interactions

### Objective
Add subtle, premium motion that enhances without distracting.

### Tasks

- [x] 13.1 Add scroll-triggered fade-in-up to all major sections (Framer Motion `whileInView`)
- [x] 13.2 Add image hover scale effect on product cards (scale 1.0 → 1.05)
- [x] 13.3 Add navigation link hover underline animation (CSS transition)
- [x] 13.4 Add button hover transitions (background-color, color, 0.3s ease)
- [x] 13.5 Add smooth scroll behavior for anchor links
- [x] 13.6 Add hero background slow zoom (Ken Burns) animation
- [x] 13.7 Add page transition feel (subtle fade between routes)
- [x] 13.8 Add statistics counter animation (number counts up on scroll)
- [x] 13.9 Ensure all animations respect `prefers-reduced-motion`

### Files/Components Affected
- `src/components/ui/AnimatedSection.tsx`
- `src/components/ui/ProductCard.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/ui/Button.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/StatisticsSection.tsx`
- `src/app/globals.css`

### Verification Criteria
- Animations trigger on scroll
- Animations are subtle (no bouncing, no attention-stealing effects)
- Reduced motion preference disables animations
- Hover effects are smooth

### Definition of Done
- [x] Scroll animations work on all sections
- [x] Hover effects are subtle and premium
- [x] Reduced motion is respected
- [x] No animation causes layout shift

---

## Phase 14 — SEO & Performance

### Objective
Set up proper SEO, structured data, and performance optimization.

### Tasks

- [x] 14.1 Set up `src/app/layout.tsx` metadata:
  - Title template: `%s | Sri Kalpa — Premium Furniture, Bengaluru`
  - Default description: furniture keywords for Electronic City, Bengaluru
  - OpenGraph defaults
  - Icons setup
- [x] 14.2 Add per-page metadata:
  - Homepage: "Sri Kalpa — Crafted Furniture for Beautiful Spaces"
  - Products: "Our Collection — Sri Kalpa Furniture"
  - Product detail: product name + category
  - Projects: "Our Spaces — Sri Kalpa"
  - About: "About Sri Kalpa"
  - Contact: "Contact Sri Kalpa — Electronic City, Bengaluru"
- [x] 14.3 Create `src/app/robots.ts` — allow all pages, reference sitemap
- [x] 14.4 Create `src/app/sitemap.ts` — generate from product and project slugs
- [x] 14.5 Add LocalBusiness JSON-LD structured data in `src/app/layout.tsx`:
  - name: Sri Kalpa
  - address: verified address only
  - telephone: placeholder
  - areaServed: Electronic City Phase 2, Bengaluru
  - Do NOT include unverified fields
- [x] 14.6 Optimize all images:
  - Proper `sizes` prop on every next/image
  - `priority` on hero image
  - `loading="lazy"` on below-fold images
  - Consistent aspect ratios
- [x] 14.7 Minimize client components — keep server components where possible
- [x] 14.8 Add `font-display: swap` for Google Fonts (handled by next/font)

### Files/Components Affected
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/products/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### Verification Criteria
- All pages have unique, descriptive titles
- Meta descriptions are present on all pages
- robots.txt equivalent via robots.ts
- Sitemap includes all routes
- Structured data validates
- Images are optimized

### Definition of Done
- [x] All pages have proper metadata
- [x] robots.ts and sitemap.ts function correctly
- [x] LocalBusiness structured data present (known fields only)
- [x] Images optimized with next/image
- [x] Lighthouse performance score ≥90

---

## Phase 15 — Build Verification & Final Polish

### Objective
Verify everything works, fix errors, and polish the final result.

### Tasks

- [x] 15.1 Run `npm run build` — fix ALL TypeScript and build errors
- [x] 15.2 Run `npm run lint` — fix ALL linting issues
- [x] 15.3 Visual review at 1440px (desktop) — every section
- [x] 15.4 Visual review at 1024px (tablet) — every section
- [x] 15.5 Visual review at 768px (tablet portrait) — every section
- [x] 15.6 Visual review at 375px (mobile) — every section
- [x] 15.7 Fix any broken image aspect ratios or overflow issues
- [x] 15.8 Verify all internal navigation links work
- [x] 15.9 Verify all product detail pages render for every slug
- [x] 15.10 Verify all project detail pages render for every slug
- [x] 15.11 Verify WhatsApp links generate correct pre-filled messages
- [x] 15.12 Verify enquiry form fields are all present and properly labeled
- [x] 15.13 Verify Google Maps embed loads correctly
- [x] 15.14 Final pass: remove any generic/AI-generated looking elements
- [x] 15.15 Final pass: ensure no fake business claims exist
- [x] 15.16 Final pass: verify consistent typography hierarchy across all pages
- [x] 15.17 Final pass: verify consistent spacing rhythm across all pages
- [x] 15.18 Final pass: verify color palette consistency
- [x] 15.19 Document any known limitations or items needing real content

### Files/Components Affected
- All project files

### Verification Criteria
- `npm run build` succeeds with zero errors
- `npm run lint` passes with zero warnings
- All pages render without errors
- All links work
- All responsive breakpoints look polished
- No layout breaks
- No console errors

### Definition of Done
- [x] Build passes with zero errors
- [x] Lint passes cleanly
- [x] All pages verified at 4 breakpoints
- [x] All navigation works
- [x] All product/project pages work
- [x] WhatsApp integration works
- [x] Enquiry form works
- [x] No fake claims in content
- [x] Design feels premium at all sizes
- [x] Project is ready for review

---

## Design Quality Checklist

> The reference site is: https://weblium.com/templates/demo/flooring-solutions-website-design-310
>
> This checklist ensures the Sri Kalpa site follows the reference's visual language specifically.

- [x] Reference site studied and design characteristics documented before implementation
- [x] Header/navigation composition closely follows reference (minimal, clean, CTA on right)
- [x] Hero composition closely follows reference (full-width, large heading, supporting text, CTAs)
- [x] Large image-driven sections dominate the design
- [x] Numbered services/categories present (01-05 style)
- [x] Product showcase structure follows reference (editorial, not ecommerce grid)
- [x] Project showcase structure follows reference (large photographs, minimal text)
- [x] Statistics section present with restrained design
- [x] Testimonials use editorial quote layout
- [x] Large CTA section present with strong visual contrast
- [x] Quote/enquiry section present with form
- [x] Footer structure follows reference (dark bg, multi-column, social links, copyright)
- [x] Similar spacing rhythm to reference (generous whitespace, 100-120px section padding)
- [x] Similar typography hierarchy (display headings + clean body text)
- [x] Similar use of large photography as focal point
- [x] Similar editorial/asymmetric composition where appropriate
- [x] Alternating dark/light section backgrounds for visual rhythm
- [x] Thin decorative lines used sparingly
- [x] NO generic SaaS card layouts
- [x] NO glassmorphism
- [x] NO gradients (except subtle hero overlay)
- [x] NO neon colors
- [x] NO unnecessary rounded cards
- [x] NO excessive shadows
- [x] NO excessive animation (no bouncing, no constant movement)
- [x] NO AI-looking decorative elements (no blobs, no abstract shapes)
- [x] NO stock template feeling
- [x] Square button corners (matching reference)
- [x] Warm neutral color palette consistent throughout

---

## Business Accuracy Checklist

> This is a demo for a real business. Do not invent factual claims.

- [x] All products are backed by publicly available research or clearly marked as demo
- [x] Unverified services (modular kitchens, gypsum ceiling) treated as demo content until confirmed
- [x] No fabricated customer numbers
- [x] No fabricated awards or recognitions
- [x] No fabricated certifications
- [x] No fabricated testimonials presented as verified real reviews
- [x] No fabricated contact information (use placeholders clearly marked as such)
- [x] No fabricated pricing presented as current
- [x] Business address verified against available public information
- [x] Statistics clearly documented as demo/placeholder values
- [x] Any claims about the business are supported by available data

---

## Content Replacement Checklist

> The demo must be structured so that real material can replace demo content without redesigning.

- [x] Product images — easily replaceable via `src/data/products.ts` image paths
- [x] Product descriptions — easily replaceable in data file
- [x] Product specifications — structured in data, easy to update
- [x] Prices — can be added to product data schema when available
- [x] Project photographs — easily replaceable via `src/data/projects.ts`
- [x] Testimonials — easily replaceable, current ones marked as demo
- [x] Business phone — configurable via `.env.local`
- [x] WhatsApp number — configurable via `.env.local`
- [x] Email — single location in `src/data/business.ts`
- [x] Opening hours — single location in `src/data/business.ts`
- [x] Social media links — single location in `src/data/business.ts`
- [x] Verified services — categories in `src/data/categories.ts`, easy to modify

---

## Final Acceptance Criteria

### Visual
- [x] Website looks like a premium furniture brand, not a template
- [x] Reference site's visual language is recognizable in our implementation
- [x] Typography is consistent and premium (Cormorant Garamond + Inter)
- [x] Color palette is warm, neutral, and consistent
- [x] Photography is the visual focus
- [x] Spacing is generous and rhythmic
- [x] No generic or AI-generated visual elements

### Functional
- [x] All navigation links work
- [x] All product pages render with correct data
- [x] All project pages render with correct data
- [x] WhatsApp CTA generates correct messages
- [x] Enquiry form accepts all fields
- [x] Google Maps embed loads
- [x] Smooth scroll works for anchor links

### Responsive
- [x] Desktop (1440px) — polished
- [x] Tablet (768px) — polished
- [x] Mobile (375px) — polished
- [x] No horizontal overflow at any width
- [x] Touch targets ≥44px on mobile

### SEO
- [x] All pages have unique titles and descriptions
- [x] robots.ts and sitemap.ts function
- [x] Structured data present (known fields only)
- [x] Semantic HTML used throughout
- [x] Proper heading hierarchy (h1 → h2 → h3)

### Accessibility
- [x] Keyboard navigable
- [x] Focus indicators visible
- [x] Alt text on all images
- [x] Form labels associated with inputs
- [x] Reduced motion respected
- [x] Sufficient color contrast

### Performance
- [x] All images use next/image with sizes prop
- [x] Hero image has priority loading
- [x] Below-fold images are lazy loaded
- [x] No unnecessary client components
- [x] Fonts optimized via next/font

### Code Quality
- [x] TypeScript strict mode, no `any` types
- [x] Consistent code style across all files
- [x] Components are reusable and well-structured
- [x] Data is separated from UI
- [x] No hardcoded values that should be configurable

### Build
- [x] `npm run build` passes with zero errors
- [x] `npm run lint` passes cleanly
- [x] No TypeScript errors
- [x] No broken imports
- [x] No unused dependencies
