// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — replace all values here to brand the site
// ─────────────────────────────────────────────────────────────────────────────

/** @type {string} Brand / business name shown in nav & footer */
export const BRAND_NAME = 'MysticBloom'

/** @type {string} Short tagline under the hero headline */
export const TAGLINE = 'Handcrafted floral arrangements, grown with intention and delivered with love.'

/** @type {string} Hero main headline (can contain \n for line breaks) */
export const HERO_HEADLINE = 'Every petal\ntells a story.'

/** @type {string} WhatsApp number in international format, no spaces/dashes */
export const WHATSAPP_NUMBER = '6591234567'   // e.g. 6512345678 for SG

/** @type {string} Instagram handle WITHOUT the @ symbol */
export const INSTAGRAM_HANDLE = 'bloomandpetal.sg'

/** @type {string} Delivery area / city name shown in Order section */
export const DELIVERY_AREA = 'Singapore'

/** @type {string} Optional delivery note */
export const DELIVERY_NOTE = 'Free delivery for orders above $80 within Singapore. Same-day available for orders placed before 12 PM.'

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS — bouquet / arrangement catalogue
// ─────────────────────────────────────────────────────────────────────────────
// image: path relative to /public — drop real photos into /public/bouquets/
// Leave image as null to show a pastel colour swatch placeholder.

export const products = [
  {
    id: 1,
    name: 'Blushing Garden',
    description: 'Soft pink garden roses, ranunculus & eucalyptus. A classic that never fades.',
    price: '$68',
    tags: ['bestseller', 'romantic'],
    image: null, // replace with '/bouquets/blushing-garden.jpg'
    swatchColor: '#F4C2C2',
  },
  {
    id: 2,
    name: 'Ivory Dream',
    description: 'White lisianthus, cream tulips and delicate gypsophila — pure and serene.',
    price: '$72',
    tags: ['wedding', 'minimal'],
    image: null,
    swatchColor: '#FDF0E0',
  },
  {
    id: 3,
    name: 'Terracotta Dusk',
    description: 'Warm burnt-orange dahlias, dried pampas grass & amber chrysanthemums.',
    price: '$80',
    tags: ['boho', 'trending'],
    image: null,
    swatchColor: '#E8A878',
  },
  {
    id: 4,
    name: 'Garden Verse',
    description: 'A lush mix of seasonal blooms — lavender, sage and wildflower meadow vibes.',
    price: '$60',
    tags: ['seasonal', 'everyday'],
    image: null,
    swatchColor: '#C8D8C0',
  },
  {
    id: 5,
    name: 'Scarlet Affair',
    description: 'Bold red garden roses, deep burgundy ranunculus and matte black leaves.',
    price: '$88',
    tags: ['romantic', 'anniversary'],
    image: null,
    swatchColor: '#D4788A',
  },
  {
    id: 6,
    name: 'Cotton Cloud',
    description: 'Fluffy white hydrangeas, cotton stems and silver brunia — soft as morning air.',
    price: '$74',
    tags: ['bestseller', 'minimalist'],
    image: null,
    swatchColor: '#E8E4F0',
  },
  {
    id: 7,
    name: 'Sundance',
    description: 'Sunny yellow sunflowers, mimosa and lime green buttons — cheerful everyday joy.',
    price: '$58',
    tags: ['gifting', 'cheerful'],
    image: null,
    swatchColor: '#F8E090',
  },
  {
    id: 8,
    name: 'Moody Botanica',
    description: 'Deep plum calla lilies, fig branches and dusty blue thistles — dramatic and rare.',
    price: '$95',
    tags: ['luxury', 'statement'],
    image: null,
    swatchColor: '#9878C8',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — replace image paths; null = coloured swatch
// ─────────────────────────────────────────────────────────────────────────────
export const galleryImages = [
  { id: 1, alt: 'Blush rose arrangement on marble table',         image: null, color: '#F4C2C2' },
  { id: 2, alt: 'Hand-tied wildflower bouquet',                   image: null, color: '#C8D8C0' },
  { id: 3, alt: 'Tall white hydrangea vase arrangement',          image: null, color: '#E8E4F0' },
  { id: 4, alt: 'Bridal bouquet with ivory and blush roses',      image: null, color: '#FDF0E0' },
  { id: 5, alt: 'Terracotta autumn dried flower wreath',          image: null, color: '#E8C0A0' },
  { id: 6, alt: 'Minimalist single stem anemone',                 image: null, color: '#D0C8E8' },
  { id: 7, alt: 'Valentine red roses in craft paper',             image: null, color: '#E8A0A8' },
  { id: 8, alt: 'Sunflower and eucalyptus table centrepiece',     image: null, color: '#F8E090' },
  { id: 9, alt: 'Bespoke floral crown — blush & greenery',        image: null, color: '#B8D8B0' },
]

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote: "The bouquet was even more beautiful in person. My fiancée cried happy tears — thank you for making our proposal unforgettable.",
    author: 'Marcus T.',
    role: 'Proposal client',
  },
  {
    id: 2,
    quote: "I've ordered from Bloom & Petal three times now and every arrangement feels uniquely crafted. The freshness always lasts over a week.",
    author: 'Priya L.',
    role: 'Regular customer',
  },
  {
    id: 3,
    quote: "Our wedding florals were a dream. You understood the vision perfectly without me having to over-explain. Simply magical.",
    author: 'Sarah & James K.',
    role: 'Wedding couple',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutText = `Started from a small studio kitchen table with too many peony clippings and a wild love for colour, Bloom & Petal grew into a full boutique floral studio. We believe flowers aren't just decoration — they're emotion made tangible.`

export const values = [
  {
    id: 1,
    icon: "🌸",
    title: "Seasonal & Fresh",
    description: "We source only what's in bloom — fresher, longer-lasting, and kinder to the earth.",
  },
  {
    id: 2,
    icon: "✦",
    title: "Crafted by Hand",
    description: "Every stem is placed with intention. No two arrangements are ever exactly alike.",
  },
  {
    id: 3,
    icon: "💌",
    title: "Stories First",
    description: "Tell us the moment — anniversary, apology, welcome — and we'll build the bouquet around it.",
  },
];

export const orderSteps = [
  { step: "01", title: "Browse & Choose", description: "Pick an arrangement from our menu or describe your dream bouquet." },
  { step: "02", title: "Message Us", description: "Send us a WhatsApp with your order — we reply within the hour." },
  { step: "03", title: "We Create", description: "We hand-craft your arrangement fresh on the day." },
  { step: "04", title: "Delivered", description: "Careful same-day delivery right to your door, beautifully wrapped." },
];