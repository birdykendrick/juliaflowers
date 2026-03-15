# 🌸 MysticBloom — Premium Floral Boutique Website

A beautiful, production-ready website for **MysticBloom** built with:
- **Vite** — lightning-fast dev server & build tool
- **React 18** — component-based UI
- **Tailwind CSS** — utility-first styling with custom MysticBloom design tokens
- **Framer Motion** — smooth animations (installed, ready to use)
- **React Router v6** — client-side navigation

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 📁 Folder Structure

```
mysticbloom/
├── public/
│   ├── favicon.svg
│   └── images/              ← 📸 Place your bouquet photos here
│       └── (your-images.jpg)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Fixed nav with mobile hamburger
│   │   ├── Footer.jsx       ← Footer with links & Messenger CTA
│   │   ├── BouquetCard.jsx  ← Reusable bouquet card (supports image or emoji)
│   │   ├── TestimonialCard.jsx
│   │   ├── SectionHeader.jsx
│   │   └── HowItWorks.jsx
│   ├── pages/
│   │   ├── Home.jsx         ← Landing page
│   │   ├── Gallery.jsx      ← Filtered bouquet gallery
│   │   ├── Builder.jsx      ← Custom bouquet builder with live pricing
│   │   ├── Delivery.jsx     ← Delivery info + FAQ
│   │   └── Contact.jsx      ← Contact form + testimonials
│   ├── data/
│   │   └── mockData.js      ← ✏️ ALL editable content lives here
│   ├── App.jsx              ← Router setup
│   ├── main.jsx             ← React entry point
│   └── index.css            ← Tailwind + global styles
├── tailwind.config.js       ← Custom colour palette & fonts
├── vite.config.js
└── package.json
```

---

## ✏️ How To Customise

### 1. Update Your Messenger & Social Links
Open `src/data/mockData.js` and edit the `LINKS` object:
```js
export const LINKS = {
  messenger:  'https://m.me/YOUR_PAGE_ID',   // ← Replace this
  instagram:  'https://instagram.com/yourhandle',
  facebook:   'https://facebook.com/YourPage',
  whatsapp:   'https://wa.me/639XXXXXXXXX',
  phone:      '+63 9XX XXX XXXX',
}
```

### 2. Add Real Bouquet Photos
1. Place your images in `/public/images/` (e.g. `rose-reverie.jpg`)
2. In `mockData.js`, find the bouquet and add:
```js
{
  id: 1,
  name: 'Rose Reverie',
  image: '/images/rose-reverie.jpg',  // ← Add this line
  // emoji: '🌹',                     // ← Remove or comment out emoji
  ...
}
```
The `BouquetCard` component will automatically use the image when provided.

### 3. Update Prices
All prices are in `src/data/mockData.js`:
- **Bouquet prices** → `BOUQUETS` array → `price` field
- **Flower per-stem prices** → `FLOWERS` array → `price` field
- **Wrapper prices** → `WRAPPERS` array → `price` field
- **Add-on prices** → `ADDONS` array → `price` field
- **Personalized note price** → `NOTE_PRICE` constant

### 4. Edit Testimonials
Find the `TESTIMONIALS` array in `mockData.js` and update with real customer reviews:
```js
{
  name:    'Customer Name',
  initial: 'CN',         // Initials for avatar
  role:    'Order type', // e.g. 'Birthday Gift'
  stars:   5,
  text:    'Their review...',
}
```

### 5. Update Delivery Info
Edit the `DELIVERY_INFO` array in `mockData.js` to match your actual delivery areas, fees, and hours.

### 6. Add More Bouquets
Add a new object to the `BOUQUETS` array in `mockData.js`:
```js
{
  id:       9,
  name:     'My New Bouquet',
  desc:     'Short description',
  price:    900,
  emoji:    '🌷',          // or use image: '/images/...'
  bg:       'from-[#fde8ef] to-[#fdf0f5]',
  category: 'romantic',   // romantic | birthday | minimalist | luxury
  badge:    'New',        // or '' for no badge
}
```

### 7. Add Gallery Filter Categories
Edit `GALLERY_FILTERS` in `mockData.js` to add new category pills.

---

## 🎨 Design Tokens

The MysticBloom colour palette is defined in `tailwind.config.js`:

| Token          | Hex       | Use                          |
|----------------|-----------|------------------------------|
| `blush`        | `#f7e0e8` | Light backgrounds, badges    |
| `rose`         | `#e8b4c4` | Borders, accents             |
| `deep-rose`    | `#c97a96` | Primary brand colour, CTAs   |
| `petal`        | `#fdf4f7` | Card backgrounds             |
| `cream`        | `#faf6f0` | Section backgrounds          |
| `ivory`        | `#fff9f5` | Page background              |
| `sage`         | `#b8c9b0` | Green accent                 |
| `text-dark`    | `#3d2535` | Headings, body               |
| `text-mid`     | `#7a5568` | Secondary text               |
| `text-light`   | `#a8849a` | Captions, labels             |
| `gold`         | `#c9a96e` | Stars, decorative            |

---

## 🔌 Wiring Up the Contact Form

The contact form currently shows a success state on submit without sending data.
To connect it to a real backend, edit `handleSubmit` in `src/pages/Contact.jsx`:

**Option A — Formspree (free, easy):**
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

**Option B — EmailJS:**
Install `@emailjs/browser` and follow their React guide.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `/dist` — deploy to Vercel, Netlify, or any static host.

**Deploy to Vercel (recommended):**
```bash
npx vercel
```

---

## 🌸 Pages Overview

| Route       | Page              | Description                                      |
|-------------|-------------------|--------------------------------------------------|
| `/`         | Home              | Hero, bestsellers, about, testimonials, how-it-works |
| `/gallery`  | Gallery           | Filterable bouquet grid                          |
| `/builder`  | Bouquet Builder   | Interactive builder with live pricing + Messenger order |
| `/delivery` | Delivery & Info   | Info cards, order flow steps, FAQ                |
| `/contact`  | Contact           | Form, social links, more testimonials            |
