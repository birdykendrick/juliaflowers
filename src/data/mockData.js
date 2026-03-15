// ============================================================
//  data/mockData.js — All editable content for MysticBloom
//  ✏️  Edit prices, names, descriptions, and links here.
// ============================================================

// ─── CONTACT / SOCIAL LINKS ─────────────────────────────────
// ✏️  Replace these with your real links
export const LINKS = {
  messenger:  'https://m.me/YOUR_PAGE_ID',        // Facebook Messenger link
  instagram:  'https://www.instagram.com/jlanchtalvrz/',  // Instagram profile
  facebook:   'https://www.facebook.com/julia.alvarez.58958',
  whatsapp:   'https://wa.me/639690587817',
  email:      'hello@mysticbloom.ph',             // optional
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
// ✏️  Replace `emoji` with `image: '/images/your-file.jpg'` when you have real photos.
//    Place images in: /public/images/
//    Example: image: '/images/rose-reverie.jpg'
export const BOUQUETS = [
  {
    id:       1,
    name:     'Rose Reverie',
    desc:     '12 premium red roses wrapped in cream satin',
    price:    850,
    emoji:    '🌹',
    // image: '/images/rose-reverie.jpg',   // ✏️ uncomment & set path
    bg:       'from-[#fde8ef] to-[#fdf0f5]',
    category: 'romantic',
    badge:    'Bestseller',
  },
  {
    id:       2,
    name:     'Blush & Bloom',
    desc:     'Mixed peonies and tulips in a dreamy pastel palette',
    price:    1200,
    emoji:    '🌸',
    bg:       'from-[#fdf6ee] to-[#faf2e8]',
    category: 'romantic',
    badge:    'Most Loved',
  },
  {
    id:       3,
    name:     'Sunlit Meadow',
    desc:     'Sunflowers and baby\'s breath in a free-form Korean wrap',
    price:    780,
    emoji:    '🌻',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'birthday',
    badge:    '',
  },
  {
    id:       4,
    name:     'Lilac Dreams',
    desc:     'White lilies with soft sage eucalyptus and ribbon accents',
    price:    950,
    emoji:    '💐',
    bg:       'from-[#f2eefb] to-[#ece8f5]',
    category: 'minimalist',
    badge:    'New',
  },
  {
    id:       5,
    name:     'The Luxe Arch',
    desc:     'Premium 24-stem statement arrangement in luxury ribbon wrap',
    price:    2200,
    emoji:    '🌺',
    bg:       'from-[#fde8ef] to-[#fdf0f5]',
    category: 'luxury',
    badge:    'Premium',
  },
  {
    id:       6,
    name:     'Garden Whisper',
    desc:     'Wildflower mix with dried pampas grass and eucalyptus',
    price:    680,
    emoji:    '🌷',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'minimalist',
    badge:    '',
  },
  {
    id:       7,
    name:     'Pink Velvet',
    desc:     'Deep pink roses with champagne ribbon and pearl pins',
    price:    1450,
    emoji:    '🌹',
    bg:       'from-[#fdf6ee] to-[#faf2e8]',
    category: 'luxury',
    badge:    'Limited',
  },
  {
    id:       8,
    name:     'Birthday Burst',
    desc:     'Colourful tulips and gerberas in a cheerful matte wrap',
    price:    720,
    emoji:    '🌼',
    bg:       'from-[#eef4ec] to-[#f0f5ee]',
    category: 'birthday',
    badge:    '',
  },
]

// ─── BUILDER: FLOWERS ────────────────────────────────────────
// ✏️  Adjust flower names, emojis, and per-stem prices here
export const FLOWERS = [
  { id: 'rose',        name: 'Roses',          emoji: '🌹', price: 80,  unit: 'stem' },
  { id: 'tulip',       name: 'Tulips',         emoji: '🌷', price: 60,  unit: 'stem' },
  { id: 'babysbreath', name: "Baby's Breath",  emoji: '🤍', price: 40,  unit: 'stem' },
  { id: 'sunflower',   name: 'Sunflowers',     emoji: '🌻', price: 90,  unit: 'stem' },
  { id: 'lily',        name: 'Lilies',         emoji: '💐', price: 100, unit: 'stem' },
  { id: 'peony',       name: 'Peonies',        emoji: '🌸', price: 150, unit: 'stem' },
]

// ─── BUILDER: WRAPPERS ───────────────────────────────────────
// ✏️  Adjust wrapper names and prices here
export const WRAPPERS = [
  { id: 'matte-pink',     name: 'Matte Pink Wrap',            price: 80  },
  { id: 'cream-satin',    name: 'Cream Satin Wrap',           price: 100 },
  { id: 'korean',         name: 'Transparent Korean Style',   price: 120 },
  { id: 'luxury-ribbon',  name: 'Luxury Ribbon Wrap',         price: 150 },
]

// ─── BUILDER: STYLES ─────────────────────────────────────────
// ✏️  Adjust style names and prices here
export const BOUQUET_STYLES = [
  { id: 'round',       name: 'Classic Round',    price: 0   },
  { id: 'cascade',     name: 'Cascading Flow',   price: 80  },
  { id: 'wildflower',  name: 'Wildflower Free',  price: 60  },
  { id: 'structured',  name: 'Structured Dome',  price: 100 },
]

// ─── BUILDER: ADD-ONS ────────────────────────────────────────
// ✏️  Adjust add-on names and prices here
export const ADDONS = [
  { id: 'letter',     name: 'Personalized Letter', emoji: '✉️',  price: 50  },
  { id: 'greeting',   name: 'Greeting Card',        emoji: '💌',  price: 80  },
  { id: 'chocolates', name: 'Chocolates',            emoji: '🍫',  price: 250 },
  { id: 'teddy',      name: 'Small Teddy Bear',      emoji: '🧸',  price: 350 },
  { id: 'lights',     name: 'Fairy Lights',          emoji: '✨',  price: 180 },
  { id: 'ribbon',     name: 'Premium Ribbon',        emoji: '🎀',  price: 100 },
  { id: 'giftbag',    name: 'Gift Bag',              emoji: '🎁',  price: 150 },
]

// ─── PERSONALIZED NOTE PRICE ─────────────────────────────────
// ✏️  Change the cost of the personalized note add-on here
export const NOTE_PRICE = 50

// ─── TESTIMONIALS ────────────────────────────────────────────
// ✏️  Add, remove, or edit customer testimonials here
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
    text:    'The sunflower bouquet I ordered was even more gorgeous in person. Thank you for making my sister\'s graduation day so much more special!',
  },
]

// ─── GALLERY FILTERS ─────────────────────────────────────────
export const GALLERY_FILTERS = [
  { id: 'all',        label: 'All Bouquets' },
  { id: 'romantic',   label: 'Romantic'     },
  { id: 'birthday',   label: 'Birthday'     },
  { id: 'minimalist', label: 'Minimalist'   },
  { id: 'luxury',     label: 'Luxury'       },
]

// ─── DELIVERY INFO ───────────────────────────────────────────
// ✏️  Update your delivery areas, fees, and times here
export const DELIVERY_INFO = [
  { icon: '🚚', title: 'Delivery Areas',      body: 'We deliver within Metro Manila and selected nearby areas. Message us to check coverage for your location.' },
  { icon: '💨', title: 'Same-Day Delivery',   body: 'Available for orders placed before 10:00 AM, subject to flower availability and area coverage.' },
  { icon: '📅', title: 'Next-Day Delivery',   body: 'Orders placed after 10:00 AM are typically processed and delivered the next day.' },
  { icon: '🌸', title: 'Custom Orders',       body: 'Custom bouquets require at least 24–48 hours lead time. Message us early to secure your preferred date!' },
  { icon: '💳', title: 'Payment Methods',     body: 'We accept GCash, BPI bank transfer, and cash on delivery for select areas. Full payment required before dispatch.' },
  { icon: '🗺️', title: 'Delivery Fees',       body: 'Starting from ₱80 within Metro Manila. Exact fee will be confirmed when you send your order inquiry.' },
]

// ─── HOME PAGE: WHY CHOOSE US ───────────────────────────────
export const WHY_US = [
  {
    icon: '🌸',
    title: 'Fresh Daily Blooms',
    desc: 'Every bouquet is arranged fresh to order using carefully selected flowers.',
  },
  {
    icon: '🎀',
    title: 'Elegant Wrapping',
    desc: 'Signature wrapping and finishing details that make every bouquet feel premium.',
  },
  {
    icon: '💌',
    title: 'Personal Touch',
    desc: 'Add thoughtful notes and custom bouquet choices for meaningful gifting.',
  },
  {
    icon: '🚚',
    title: 'Reliable Delivery',
    desc: 'Carefully packed and delivered with attention so your flowers arrive beautifully.',
  },
]

// ─── HOME PAGE: OCCASIONS ────────────────────────────────────
export const OCCASIONS = [
  {
    id: 'romance',
    emoji: '💕',
    label: 'Romance',
    description: 'Anniversaries, dates, and heartfelt surprises.',
  },
  {
    id: 'birthday',
    emoji: '🎂',
    label: 'Birthday',
    description: 'Bright bouquets for joyful celebrations.',
  },
  {
    id: 'graduation',
    emoji: '🎓',
    label: 'Graduation',
    description: 'Celebrate milestones with fresh blooms.',
  },
  {
    id: 'sympathy',
    emoji: '🤍',
    label: 'Sympathy',
    description: 'Gentle arrangements for comfort and care.',
  },
  {
    id: 'wedding',
    emoji: '💍',
    label: 'Wedding',
    description: 'Elegant florals for unforgettable moments.',
  },
  {
    id: 'just-because',
    emoji: '✨',
    label: 'Just Because',
    description: 'A simple way to make someone smile.',
  },
]

// ─── HOME PAGE: DELIVERY SUMMARY ─────────────────────────────
export const DELIVERY = {
  freeThreshold: 1500,
  sameDayCutoff: '12PM',
}
