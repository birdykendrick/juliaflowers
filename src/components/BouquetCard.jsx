// BouquetCard.jsx
// ✏️  To use a real image:
//   1. Place your photo in /public/images/ (e.g. rose-reverie.jpg)
//   2. Add `image: '/images/rose-reverie.jpg'` to the bouquet in mockData.js
//   3. This component will automatically display it.

export default function BouquetCard({ bouquet }) {
  const { name, desc, price, emoji, image, bg, badge } = bouquet

  return (
    <div className="bouquet-card group h-full">
      {/* Image area */}
      <div className={`h-52 flex items-center justify-center bg-gradient-to-br ${bg} relative overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-6xl select-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
            {emoji}
          </span>
        )}
        {badge && (
          <span className="absolute top-3 right-3 text-xs bg-white/85 text-deep-rose px-3 py-1 rounded-full font-medium tracking-wide shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-medium text-text-dark leading-snug">{name}</h3>
        <p className="text-xs text-text-light mt-1 mb-4 leading-relaxed font-light opacity-85">{desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-deep-rose">
            ₱{price.toLocaleString()}
          </span>
          <button className="text-xs tracking-[0.07em] uppercase text-text-mid border border-rose/45 px-3 py-1.5 rounded-full hover:bg-blush/50 hover:border-deep-rose hover:text-deep-rose transition-all duration-200">
            Inquire
          </button>
        </div>
      </div>
    </div>
  )
}
