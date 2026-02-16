# Clinic PWA - Dr. Anshita Singh Rathore

A modern, full-featured Progressive Web Application for Dr. Anshita Singh Rathore's Homeopathic Clinic.

**Live Demo:** [https://clinic-47sztokei-invicis-projects.vercel.app](https://clinic-47sztokei-invicis-projects.vercel.app)

## 🌟 Features

### Patient-Facing Features
- **Online Appointment Booking** - Multi-step booking with clinic selection, date/time picker
- **Service Information** - Detailed pages for all treatment specializations
- **Health Blog** - Educational articles on homeopathy and wellness
- **Clinic Locations** - Interactive maps and contact information
- **Contact Form** - Easy communication with the clinic
- **AI Chatbot** - Integrated health assistant for booking and queries

### Technical Features
- **Progressive Web App (PWA)** - Installable, works offline
- **Responsive Design** - Works on all devices
- **Dark Mode** - System-aware theme switching
- **SEO Optimized** - Full metadata, sitemap, OpenGraph images
- **Performance** - Optimized loading with Next.js 16
- **Animations** - Smooth, modern micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Database**: Prisma (PostgreSQL)
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing & posts
│   ├── book/              # Appointment booking
│   ├── contact/           # Contact page
│   ├── services/          # Services listing & details
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── ...
├── components/
│   ├── animations/        # Animation components
│   ├── booking/           # Booking form components
│   ├── contact/           # Contact components
│   ├── layout/            # Header, Footer, etc.
│   ├── sections/          # Homepage sections
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives
├── lib/
│   ├── data/              # Static data (services, blog)
│   ├── validations/       # Zod schemas
│   └── utils.ts           # Utility functions
└── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/JSR2406/DOCTOR-CLINIC-APPOINTMENT-WEBSITE-.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SITE_URL="https://clinic-47sztokei-invicis-projects.vercel.app"
```

## 📱 PWA Installation

The app can be installed as a PWA on:
- **Desktop**: Chrome, Edge, Firefox
- **Mobile**: iOS Safari, Android Chrome

Look for the "Install App" prompt or use the browser's install option.

## 🎨 Customization

### Colors
Edit the theme in `src/app/globals.css`:

```css
@theme {
  --color-primary-*: /* Your colors */
}
```

### Content
- Services: `src/lib/data/services.ts`
- Blog posts: `src/lib/data/blog.ts`
- Clinic info: Update in respective components

## 📦 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

## 🔧 Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npx tsc --noEmit   # Type check
```

## 📄 License

Private - All rights reserved.

## 👩‍⚕️ About Dr. Anshita Singh Rathore

Dr. Anshita Singh Rathore is a renowned homeopathic consultant with 15+ years of experience specializing in:
- Autoimmune Diseases
- Thyroid Disorders
- PCOS & Infertility
- Lifestyle Disorders
- Skin Conditions
- Digestive Issues

**Clinic Locations:**
- Pune - Shivajinagar
- Pune - Kothrud
- Mumbai - Andheri

---

Built with ❤️ for holistic healing
