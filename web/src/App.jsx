import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Bouquets     from './components/Bouquets'
import Gallery      from './components/Gallery'
import About        from './components/About'
import Testimonials from './components/Testimonials'
import Order        from './components/Order'
import Footer       from './components/Footer'
import FloatingCTA  from './components/FloatingCTA'

export default function App() {
  return (
    <>
      {/* ── Skip-to-content for keyboard users ── */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-rose text-white px-5 py-3 rounded-full font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Gallery />
        <Bouquets />
        <About />
        <Testimonials />
        <Order />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  )
}
