import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import OrderContact from "./components/OrderContact";
import Footer from "./components/Footer";
import FloatingOrderButton from "./components/FloatingOrderButton";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Gallery />
        <About />
        <Testimonials />
        <OrderContact />
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}