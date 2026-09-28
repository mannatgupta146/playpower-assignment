# 🏡 Airbnb Listing Page Clone

> A pixel-perfect, production-quality clone of an Airbnb property listing page — built as part of the Playpower Labs Take-Home Assignment.

🔗 **Live Demo:** [https://playpower-assignment-theta.vercel.app](https://playpower-assignment-theta.vercel.app)

---

## ✨ Features

### Three Core Views (Desktop)
| View | Description |
|------|-------------|
| **Listing Page** | Full property page with hero grid, amenities, map, calendar, reviews & booking card |
| **Photo Tour** | Full-screen gallery modal with sticky category sidebar and deep-linked scroll navigation |
| **Lightbox** | Single-photo viewer with prev/next arrows and full keyboard navigation (← → Esc) |

### Key Interactions
- 🖼️ **Bento Hero Grid** — clicking any image opens the Photo Tour, scrolled to that room's category
- 🔍 **Masonry Photo Grid** — inside the Photo Tour, images open a Lightbox carousel
- ⌨️ **Keyboard Navigation** — ArrowLeft / ArrowRight navigate photos; Escape closes the Lightbox
- 📅 **Interactive Calendar** — dual-month date range picker with strikethrough disabled dates
- 📌 **Sticky Booking Card** — persists on scroll with real-time price breakdown
- 🔄 **More Stays Carousel** — paginated horizontal card slider

### Design & Animation
- Smooth hover `scale-up` animations on gallery thumbnails
- Zoom-in image hover effects in the masonry grid
- Slide-in modal transition for the Photo Tour overlay
- Custom 9-dot SVG grid icon (matching Airbnb's exact icon)
- Pixel-perfect spacing, typography (`#222222`, `#717171`), and color palette

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 15** (App Router) |
| Styling | **Tailwind CSS v4** |
| Language | **TypeScript** |
| Icons | **Lucide React** + Custom SVG |
| Fonts | **Airbnb Cereal** (self-hosted `.woff2` from `/public/assets/fonts/`) |
| Hosting | **Vercel** |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18+`
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
playpower-assignment/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main listing page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── ListingImages.tsx  # Hero grid + Photo Tour + Lightbox
│       ├── Calendar.tsx       # Dual-month date picker
│       └── MoreStaysNearby.tsx# Paginated stays carousel
├── public/
│   └── assets/               # All listing images and icons
├── .agents/
│   └── skills/               # AI sub-agent skill configs
├── docs/
│   ├── architecture.md        # System architecture & scaling strategy
│   └── prompts.md             # AI-assisted development prompt sequence
└── AGENTS.md                  # AI agent rules and guidelines
```

---

## 🏗️ Architecture

For a full production-scale system design — covering frontend scaling (CDN/ISR), microservices (K8s), search (Elasticsearch), caching (Redis), and async processing (Kafka) — see [`docs/architecture.md`](./docs/architecture.md).

---

## 🤖 AI-Assisted Development

This project was built using an AI-native workflow:
- **Google Antigravity IDE** (Gemini 2.5 Pro / Claude Sonnet) as the primary coding agent
- **`.agents/skills/`** sub-agent configurations to enforce consistent code structure
- **27+ iterative prompt cycles** for pixel-perfect UI refinement

See the full prompt sequence in [`docs/prompts.md`](./docs/prompts.md).
