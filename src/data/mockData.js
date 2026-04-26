// ============================================================
//  data/mockData.js — All editable content for MysticBloom
//  ✏️  Edit prices, names, descriptions, and links here.
// ============================================================

// ─── CONTACT / SOCIAL LINKS ─────────────────────────────────
export const LINKS = {
  messenger: 'https://m.me/julia.alvarez.58958',
  instagram: 'https://www.instagram.com/jlanchtalvrz/',
  facebook: 'https://www.facebook.com/julia.alvarez.58958',
  whatsapp: 'https://wa.me/639690587817',
  email: 'alvarezjulia313@gmail.com',
}

// ─── BUSINESS INFO ───────────────────────────────────────────
export const BUSINESS = {
  name: 'MysticBloom',
  tagline: 'Where Flowers Tell Your Story',
  description: 'Premium handcrafted bouquets for every occasion. Delivered with love.',
  hours: 'Mon – Sat: 8AM – 7PM',
  hoursSunday: 'Sunday orders via Messenger only',
  location: 'Metro Manila, Philippines',
}

// ─── BOUQUETS ────────────────────────────────────────────────
// Categories: 'mini-bouquet' | 'small-bouquet' | 'medium'
export const BOUQUETS = [
  {
    id: 1,
    name: 'Sunshine Serenade',
    desc: 'A radiant mixed bouquet filled with cheerful blooms and rustic charm, perfect for celebrations and heartfelt gifting.',
    price: 850,
    image: '/images/gallery/mediumbouquet1.png',
    bg: 'from-[#fdf6ee] to-[#faf2e8]',
    category: 'medium',
    badge: 'Recommended',
    flowers: ['Sunflower', 'Pink Gerbera', 'Orange Gerbera', 'Pink Chrysanthemum', 'Purple Statice', 'Yellow Solidago'],
  },
  {
    id: 2,
    name: 'Golden Glow',
    desc: 'A bright and cheerful single-stem sunflower bouquet wrapped in rustic paper and finished with a delicate ribbon.',
    price: 120,
    image: '/images/gallery/minibouquet2.png',
    bg: 'from-[#fff4cc] to-[#ffe89a]',
    category: 'mini-bouquet',
    badge: 'Fresh Pick',
    flowers: ['Sunflower'],
  },
  {
    id: 3,
    name: 'Pink Whisper',
    desc: 'A graceful bouquet of soft pink tulips and delicate white statice, beautifully wrapped for an elegant, and romantic presentation.',
    price: 780,
    image: '/images/gallery/smallbouquet1.png',
    bg: 'from-[#fdf4f7] to-[#faf7f8]',
    category: 'small-bouquet',
    badge: '',
    flowers: ['Pink Tulips', "Baby's Breath"],
  },
  {
    id: 4,
    name: 'Amethyst Grace',
    desc: 'A lovely mini bouquet featuring pink alstroemeria, a yellow-green carnation, and delicate purple asters.',
    price: 130,
    image: '/images/gallery/minibouquet4.png',
    bg: 'from-[#f2eefb] to-[#ece8f5]',
    category: 'mini-bouquet',
    badge: 'Most Loved',
    flowers: ['Pink Alstroemeria', 'Yellow-Green Carnation', 'Purple Asters'],
  },
  {
    id: 5,
    name: 'Pink Petal Charm',
    desc: 'A sweet mini bouquet featuring a soft pink carnation, delicate chamomile blooms, and dainty purple asters — fresh, charming, and full of gentle color.',
    price: 680,
    image: '/images/gallery/minibouquet5.png',
    bg: 'from-[#fde8ef] to-[#fdf0f5]',
    category: 'mini-bouquet',
    badge: '',
    flowers: ['Pink Carnation', 'Chamomile', 'Purple Asters'],
  },
  {
    id: 6,
    name: 'Crimson Bloom',
    desc: 'A sweet bouquet featuring a bold red carnation, soft pink alstroemeria, delicate chamomile, and purple asters — bright, charming, and full of garden-fresh color.',
    price: 680,
    image: '/images/gallery/minibouquet6.png',
    bg: 'from-[#fff0f3] to-[#fdf6ff]',
    category: 'mini-bouquet',
    badge: '',
    flowers: ['Red Carnation', 'Pink Alstroemeria', 'Chamomile', 'Purple Asters'],
  },
  {
    id: 7,
    name: 'Sage Bloom',
    desc: 'A fresh and elegant bouquet featuring soft green carnations and delicate white snapdragons, wrapped in a clean white finish for a graceful and refreshing look.',
    price: 780,
    image: '/images/gallery/smallbouquet2.png',
    bg: 'from-[#f3f8ee] to-[#f8fbf4]',
    category: 'small-bouquet',
    badge: '',
    flowers: ['Green Carnations', 'White Snapdragons'],
  },
  {
    id: 8,
    name: 'Blush Bloom',
    desc: 'A cheerful mini bouquet featuring a soft pink gerbera, bright yellow solidago, and rich purple statice, wrapped for a sweet and vibrant touch.',
    price: 120,
    image: '/images/gallery/minibouquet1.png',
    bg: 'from-[#fde8ef] to-[#fdf0f5]',
    category: 'mini-bouquet',
    badge: '',
    flowers: ['Pink Gerbera', 'Yellow Solidago', 'Purple Statice'],
  },
  {
    id: 9,
    name: 'Lavender Whisper',
    desc: 'A charming mini bouquet featuring pink alstroemeria, a soft yellow carnation, and delicate purple asters, wrapped for a sweet and graceful touch.',
    price: 120,
    image: '/images/gallery/minibouquet3.png',
    bg: 'from-[#fdf1f5] to-[#f7f0ff]',
    category: 'mini-bouquet',
    badge: '',
    flowers: ['Pink Alstroemeria', 'Yellow Carnation', 'Purple Asters'],
  },
  {
    id: 10,
    name: 'Spring Whisper',
    desc: 'A fresh and charming bouquet featuring pink alstroemeria, a soft yellow carnation, and delicate purple asters, wrapped for a light and graceful touch.',
    price: 780,
    image: '/images/gallery/minibouquet7.png',
    bg: 'from-[#eef4ec] to-[#f0f5ee]',
    category: 'mini-bouquet',
    badge: '',
    flowers: ['Pink Alstroemeria', 'Yellow Carnation', 'Purple Asters'],
  },
]

// ─── BUILDER: FLOWERS ────────────────────────────────────────
export const FLOWERS = [
  { id: 'rose', name: 'Roses', emoji: '🌹', price: 80, unit: 'stem' },
  { id: 'tulip', name: 'Tulips', emoji: '🌷', price: 60, unit: 'stem' },
  { id: 'babysbreath', name: "Baby's Breath", emoji: '🤍', price: 40, unit: 'stem' },
  { id: 'sunflower', name: 'Sunflowers', emoji: '🌻', price: 90, unit: 'stem' },
  { id: 'lily', name: 'Lilies', emoji: '💐', price: 100, unit: 'stem' },
  { id: 'peony', name: 'Peonies', emoji: '🌸', price: 150, unit: 'stem' },
]

// ─── BUILDER: WRAPPERS ───────────────────────────────────────
export const WRAPPERS = [
  { id: 'matte-pink', name: 'Matte Pink Wrap', price: 80 },
  { id: 'cream-satin', name: 'Cream Satin Wrap', price: 100 },
  { id: 'korean', name: 'Transparent Korean Style', price: 120 },
  { id: 'luxury-ribbon', name: 'Luxury Ribbon Wrap', price: 150 },
]

// ─── BUILDER: STYLES ─────────────────────────────────────────
export const BOUQUET_STYLES = [
  { id: 'round', name: 'Classic Round', price: 0 },
  { id: 'cascade', name: 'Cascading Flow', price: 80 },
  { id: 'wildflower', name: 'Wildflower Free', price: 60 },
  { id: 'structured', name: 'Structured Dome', price: 100 },
]

// ─── BUILDER: ADD-ONS ────────────────────────────────────────
export const ADDONS = [
  { id: 'letter', name: 'Personalized Letter', emoji: '✉️', price: 50 },
  { id: 'greeting', name: 'Greeting Card', emoji: '💌', price: 80 },
  { id: 'chocolates', name: 'Chocolates', emoji: '🍫', price: 250 },
  { id: 'teddy', name: 'Small Teddy Bear', emoji: '🧸', price: 350 },
  { id: 'lights', name: 'Fairy Lights', emoji: '✨', price: 180 },
  { id: 'ribbon', name: 'Premium Ribbon', emoji: '🎀', price: 100 },
  { id: 'giftbag', name: 'Gift Bag', emoji: '🎁', price: 150 },
]

// ─── PERSONALIZED NOTE PRICE ─────────────────────────────────
export const NOTE_PRICE = 50

// ─── GALLERY FILTERS ─────────────────────────────────────────
export const GALLERY_FILTERS = [
  { id: 'all',           label: 'All Bouquets',   comingSoon: false },
  { id: 'mini-bouquet',  label: 'Mini Bouquet',   comingSoon: false },
  { id: 'small-bouquet', label: 'Small Bouquet',  comingSoon: false },
  { id: 'medium',        label: 'Medium Bouquet', comingSoon: false },
  { id: 'large',         label: 'Large Bouquet',  comingSoon: true  },
]

// ─── DELIVERY INFO ───────────────────────────────────────────
export const DELIVERY_INFO = [
  { icon: '🚚', title: 'Delivery Areas',     body: 'We deliver within Metro Manila and selected nearby areas. Message us to check coverage for your location.' },
  { icon: '💨', title: 'Same-Day Delivery',  body: 'Available for orders placed before 10:00 AM, subject to flower availability and area coverage.' },
  { icon: '📅', title: 'Next-Day Delivery',  body: 'Orders placed after 10:00 AM are typically processed and delivered the next day.' },
  { icon: '🌸', title: 'Custom Orders',      body: 'Custom bouquets require at least 24–48 hours lead time. Message us early to secure your preferred date!' },
  { icon: '💳', title: 'Payment Methods',    body: 'We accept GCash, BPI bank transfer, and cash on delivery for select areas. Full payment required before dispatch.' },
  { icon: '🗺️', title: 'Delivery Fees',      body: 'Starting from ₱80 within Metro Manila. Exact fee will be confirmed when you send your order inquiry.' },
]

// ─── PRODUCT PAGE: FILLERS ───────────────────────────────────
export const FILLERS = [
  { id: 'babysbreath',  name: "Baby's Breath",           price: 40 },
  { id: 'waxflower',    name: 'Waxflower',                price: 45 },
  { id: 'statice',      name: 'Statice',                  price: 40 },
  { id: 'limonium',     name: 'Limonium',                 price: 45 },
  { id: 'solidago',     name: 'Solidago',                 price: 40 },
  { id: 'queenanne',    name: "Queen Anne's Lace",        price: 50 },
  { id: 'lavender',     name: 'Lavender',                 price: 55 },
  { id: 'aster',        name: 'Aster',                    price: 40 },
  { id: 'stock',        name: 'Stock',                    price: 50 },
  { id: 'bupleurum',    name: 'Bupleurum',                price: 45 },
  { id: 'eucalyptus',   name: 'Silver Dollar Eucalyptus', price: 55 },
]

// ─── PRODUCT PAGE: WRAPPER COLOURS ──────────────────────────
export const WRAPPER_COLOURS = [
  { id: 'white',      name: 'White',       hex: '#ffffff', border: '#e0d0d8' },
  { id: 'cream',      name: 'Cream',       hex: '#f5f0e0', border: '#d8cdb0' },
  { id: 'kraft',      name: 'Kraft Brown', hex: '#b5895a', border: '#9a7040' },
  { id: 'soft-pink',  name: 'Soft Pink',   hex: '#f5c4d0', border: '#d9a0b4' },
  { id: 'blush',      name: 'Blush',       hex: '#e8b4b8', border: '#c89098' },
  { id: 'red',        name: 'Red',         hex: '#c0392b', border: '#a02020' },
  { id: 'lavender',   name: 'Lavender',    hex: '#c4b0d8', border: '#a090c0' },
  { id: 'sage',       name: 'Sage Green',  hex: '#9db89a', border: '#7a9878' },
  { id: 'baby-blue',  name: 'Baby Blue',   hex: '#b0cce0', border: '#88aac8' },
  { id: 'black',      name: 'Black',       hex: '#2a2a2a', border: '#111111' },
]

// ─── PRODUCT PAGE: ADD-ONS ───────────────────────────────────
export const PRODUCT_ADDONS = [
  { id: 'letter',     name: 'Personalised Letter', price: 50,  icon: 'letter' },
  { id: 'chocolates', name: 'Chocolates',           price: 250, icon: 'choc'   },
]
