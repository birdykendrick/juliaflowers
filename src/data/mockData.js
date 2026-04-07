// ============================================================
//  data/mockData.js — All editable content for MysticBloom
//  ✏️  Edit prices, names, descriptions, and links here.
// ============================================================

// ─── CONTACT / SOCIAL LINKS ─────────────────────────────────
export const LINKS = {
  messenger:  'https://m.me/YOUR_PAGE_ID',
  instagram:  'https://www.instagram.com/jlanchtalvrz/',
  facebook:   'https://www.facebook.com/julia.alvarez.58958',
  whatsapp:   'https://wa.me/639690587817',
  email:      'hello@mysticbloom.ph',
}

// ─── BUSINESS INFO ───────────────────────────────────────────
export const BUSINESS = {
  name:        'MysticBloom',
  tagline:     'Where Flowers Tell Your Story',
  description: 'Premium handcrafted bouquets for every occasion. Delivered with love.',
  hours:       'Mon – Sat: 8AM – 7PM',
  hoursSunday: 'Sunday orders via Messenger only',
  location:    'Metro Manila, Philippines',
}

// ─── BOUQUETS ────────────────────────────────────────────────
// Categories: 'single-stem' | 'small-bouquet'
// ✏️  Replace emoji with image: '/images/your-file.jpg' when you have real photos.
export const BOUQUETS = [
  {
    id:       1,
    name:     'Rose Reverie',
    desc:     'A single premium red rose wrapped in cream satin — simple, timeless, and heartfelt.',
    price:    120,
    emoji:    '🌹',
    bg:       'from-[#fde8ef] to-[#fdf0f5]',
    category: 'mini-bouquet',
    badge:    'Bestseller',
  },
  {
    id:       2,
    name:     'Blush Tulip',
    desc:     'One soft blush tulip with delicate tissue wrap — a gentle, elegant gesture.',
    price:    100,
    emoji:    '🌷',
    bg:       'from-[#fdf6ee] to-[#faf2e8]',
    category: 'single-stem',
    badge:    '',
  },
  {
    id:       3,
    name:     'Sunlit Stem',
    desc:     "A single bright sunflower with baby's breath accent — cheerful and uplifting.",
    price:    90,
    emoji:    '🌻',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'single-stem',
    badge:    '',
  },
  {
    id:       4,
    name:     'Lily Grace',
    desc:     'One white lily stem — pure, serene, and quietly beautiful.',
    price:    130,
    emoji:    '💐',
    bg:       'from-[#f2eefb] to-[#ece8f5]',
    category: 'single-stem',
    badge:    'New',
  },
  {
    id:       5,
    name:     'Blush & Bloom',
    desc:     'Mixed peonies and tulips in a dreamy pastel palette — soft and romantic.',
    price:    680,
    emoji:    '🌸',
    bg:       'from-[#fde8ef] to-[#fdf0f5]',
    category: 'small-bouquet',
    badge:    'Most Loved',
  },
  {
    id:       6,
    name:     'Garden Whisper',
    desc:     'Wildflower mix with dried pampas grass and eucalyptus — effortlessly charming.',
    price:    680,
    emoji:    '🌷',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'small-bouquet',
    badge:    '',
  },
  {
    id:       7,
    name:     'Sunlit Meadow',
    desc:     "Sunflowers and baby's breath in a free-form Korean wrap — bright and joyful.",
    price:    780,
    emoji:    '🌻',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'small-bouquet',
    badge:    '',
  },
  {
    id:       8,
    name:     'Pink Velvet',
    desc:     'Deep pink roses with champagne ribbon and pearl pins — a little luxurious.',
    price:    850,
    emoji:    '🌹',
    bg:       'from-[#fdf6ee] to-[#faf2e8]',
    category: 'small-bouquet',
    badge:    'Limited',
  },
]

// ─── BUILDER: FLOWERS ────────────────────────────────────────
export const FLOWERS = [
  { id: 'rose',        name: 'Roses',         emoji: '🌹', price: 80,  unit: 'stem' },
  { id: 'tulip',       name: 'Tulips',        emoji: '🌷', price: 60,  unit: 'stem' },
  { id: 'babysbreath', name: "Baby's Breath", emoji: '🤍', price: 40,  unit: 'stem' },
  { id: 'sunflower',   name: 'Sunflowers',    emoji: '🌻', price: 90,  unit: 'stem' },
  { id: 'lily',        name: 'Lilies',        emoji: '💐', price: 100, unit: 'stem' },
  { id: 'peony',       name: 'Peonies',       emoji: '🌸', price: 150, unit: 'stem' },
]

// ─── BUILDER: WRAPPERS ───────────────────────────────────────
export const WRAPPERS = [
  { id: 'matte-pink',    name: 'Matte Pink Wrap',          price: 80  },
  { id: 'cream-satin',   name: 'Cream Satin Wrap',         price: 100 },
  { id: 'korean',        name: 'Transparent Korean Style', price: 120 },
  { id: 'luxury-ribbon', name: 'Luxury Ribbon Wrap',       price: 150 },
]

// ─── BUILDER: STYLES ─────────────────────────────────────────
export const BOUQUET_STYLES = [
  { id: 'round',      name: 'Classic Round',   price: 0   },
  { id: 'cascade',    name: 'Cascading Flow',  price: 80  },
  { id: 'wildflower', name: 'Wildflower Free', price: 60  },
  { id: 'structured', name: 'Structured Dome', price: 100 },
]

// ─── BUILDER: ADD-ONS ────────────────────────────────────────
export const ADDONS = [
  { id: 'letter',     name: 'Personalized Letter', emoji: '✉️', price: 50  },
  { id: 'greeting',   name: 'Greeting Card',       emoji: '💌', price: 80  },
  { id: 'chocolates', name: 'Chocolates',           emoji: '🍫', price: 250 },
  { id: 'teddy',      name: 'Small Teddy Bear',     emoji: '🧸', price: 350 },
  { id: 'lights',     name: 'Fairy Lights',         emoji: '✨', price: 180 },
  { id: 'ribbon',     name: 'Premium Ribbon',       emoji: '🎀', price: 100 },
  { id: 'giftbag',    name: 'Gift Bag',             emoji: '🎁', price: 150 },
]

// ─── PERSONALIZED NOTE PRICE ─────────────────────────────────
export const NOTE_PRICE = 50

// ─── TESTIMONIALS ────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name:    'Camille R.',
    initial: 'CR',
    role:    'Anniversary Gift',
    stars:   5,
    text:    'MysticBloom absolutely exceeded my expectations. The bouquet was breathtaking and the packaging was so luxurious. My partner was in tears!',
  },
  {
    name:    'Sophia T.',
    initial: 'ST',
    role:    'Birthday Surprise',
    stars:   5,
    text:    "Ordered a custom bouquet for my mum's birthday and it was exactly what I imagined — peonies, soft pinks, and a beautiful personalized note. Pure perfection.",
  },
  {
    name:    'Andrea L.',
    initial: 'AL',
    role:    'Wedding Florals',
    stars:   5,
    text:    'They handled our wedding bouquet and table arrangements with such care and professionalism. Every bloom was fresh and the style was exactly our vision.',
  },
  {
    name:    'Jess M.',
    initial: 'JM',
    role:    'Just Because',
    stars:   5,
    text:    'I sent a MysticBloom bouquet to my best friend and she called me immediately. The flowers were stunning and arrived so beautifully wrapped!',
  },
  {
    name:    'Rachel B.',
    initial: 'RB',
    role:    'Corporate Gifting',
    stars:   5,
    text:    'We used MysticBloom for office gifting and the response was overwhelmingly positive. Fast delivery, beautiful wrapping, and a very responsive team.',
  },
  {
    name:    'Nicole V.',
    initial: 'NV',
    role:    'Graduation Gift',
    stars:   5,
    text:    "The sunflower bouquet I ordered was even more gorgeous in person. Thank you for making my sister's graduation day so much more special!",
  },
]

// ─── GALLERY FILTERS ─────────────────────────────────────────
// comingSoon: true → pill is disabled and shows a "Coming Soon" badge
export const GALLERY_FILTERS = [
  { id: 'all',           label: 'All Bouquets',  comingSoon: false },
  { id: 'mini-bouquet',   label: 'Mini Bouquet',   comingSoon: false },
  { id: 'small-bouquet', label: 'Small Bouquet', comingSoon: false },
  { id: 'medium',        label: 'Medium Sized',  comingSoon: true  },
]

// ─── DELIVERY INFO ───────────────────────────────────────────
export const DELIVERY_INFO = [
  { icon: '🚚', title: 'Delivery Areas',    body: 'We deliver within Metro Manila and selected nearby areas. Message us to check coverage for your location.' },
  { icon: '💨', title: 'Same-Day Delivery', body: 'Available for orders placed before 10:00 AM, subject to flower availability and area coverage.' },
  { icon: '📅', title: 'Next-Day Delivery', body: 'Orders placed after 10:00 AM are typically processed and delivered the next day.' },
  { icon: '🌸', title: 'Custom Orders',     body: 'Custom bouquets require at least 24–48 hours lead time. Message us early to secure your preferred date!' },
  { icon: '💳', title: 'Payment Methods',   body: 'We accept GCash, BPI bank transfer, and cash on delivery for select areas. Full payment required before dispatch.' },
  { icon: '🗺️', title: 'Delivery Fees',     body: 'Starting from ₱80 within Metro Manila. Exact fee will be confirmed when you send your order inquiry.' },
]
