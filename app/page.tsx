// Trigger build: 2025-12-27
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import QuoteForm from "@/components/QuoteForm";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="before-after"><BeforeAfter /></div>
      <div id="quote-form"><QuoteForm /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
