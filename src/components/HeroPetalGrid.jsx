// HeroPetalGrid.jsx — Option E: repeating SVG petal silhouette grid
// A fixed decorative background pattern on the right side of the hero.
// Fades in from the right edge using a gradient mask.
// Very subtle — acts as luxury "wallpaper" behind the falling petals.

export default function HeroPetalGrid() {
  return (
    <div
      className="absolute right-0 top-0 w-[52%] h-full pointer-events-none overflow-hidden opacity-60"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Repeating petal cell */}
          <pattern
            id="petalGridPattern"
            x="0"
            y="0"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Tall ellipse petal — rose */}
            <ellipse
              cx="20" cy="18" rx="5" ry="11"
              fill="none"
              stroke="rgba(184,92,122,0.18)"
              strokeWidth="0.9"
              transform="rotate(-18 20 18)"
            />
            {/* Wide ellipse — sage */}
            <ellipse
              cx="44" cy="36" rx="7" ry="4"
              fill="none"
              stroke="rgba(140,165,130,0.14)"
              strokeWidth="0.9"
              transform="rotate(25 44 36)"
            />
            {/* Small teardrop — rose */}
            <path
              d="M32 8 C35 12 35 20 32 22 C29 20 29 12 32 8Z"
              fill="none"
              stroke="rgba(184,92,122,0.14)"
              strokeWidth="0.85"
              transform="rotate(10 32 15)"
            />
            {/* Tiny dot accent */}
            <circle cx="52" cy="14" r="1.3" fill="rgba(184,92,122,0.18)" />
            <circle cx="10" cy="50" r="1"   fill="rgba(140,165,130,0.15)" />
          </pattern>

          {/* Left-to-right fade so the grid blends into the page */}
          <linearGradient id="petalGridFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="30%"  stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="petalGridMask">
            <rect width="100%" height="100%" fill="url(#petalGridFade)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#petalGridPattern)"
          mask="url(#petalGridMask)"
        />
      </svg>
    </div>
  )
}
