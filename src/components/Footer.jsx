import { useNavigate } from 'react-router-dom'
import { LINKS, BUSINESS } from '../data/mockData'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="pt-14 pb-6" style={{ background: '#2e1a24' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-medium text-white mb-3">
              {BUSINESS.name} 🌸
            </div>
            <p className="text-sm font-light leading-relaxed mb-5 max-w-xs text-white/55">
              {BUSINESS.description}
            </p>
            {/* ✏️  Update LINKS.messenger in mockData.js */}
            <a
              href={LINKS.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-messenger max-w-[200px] !text-xs !py-2.5"
            >
              💬 Chat on Messenger
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.15em] uppercase text-rose/70 mb-4">Navigate</h4>
            {[
              { label: 'Home',          to: '/'         },
              { label: 'Gallery',       to: '/gallery'  },
              { label: 'Build Bouquet', to: '/builder'  },
              { label: 'Delivery Info', to: '/delivery' },
              { label: 'Contact',       to: '/contact'  },
            ].map(({ label, to }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="block text-sm text-white/50 hover:text-rose/80 transition-colors mb-2"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.15em] uppercase text-rose/70 mb-4">Connect</h4>
            {/* ✏️  All links come from LINKS in mockData.js */}
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"
               className="block text-sm text-white/50 hover:text-rose/80 transition-colors mb-2">Instagram</a>
            <a href={LINKS.facebook}  target="_blank" rel="noopener noreferrer"
               className="block text-sm text-white/50 hover:text-rose/80 transition-colors mb-2">Facebook</a>
            <a href={LINKS.whatsapp}  target="_blank" rel="noopener noreferrer"
               className="block text-sm text-white/50 hover:text-rose/80 transition-colors mb-2">WhatsApp</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/25">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  )
}
