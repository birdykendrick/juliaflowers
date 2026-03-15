import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Builder from './pages/Builder'
import Delivery from './pages/Delivery'
import Contact from './pages/Contact'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/builder"   element={<Builder />} />
          <Route path="/delivery"  element={<Delivery />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}
