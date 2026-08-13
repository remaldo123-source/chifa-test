import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { PRODUCTS, CATEGORIES } from './data/menuData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import TrustBar from './components/TrustBar';
import FeaturedProducts from './components/FeaturedProducts';
import CategorySidebar from './components/CategorySidebar';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import CombosBanner from './components/CombosBanner';
import StorySection from './components/StorySection';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import SocialGrid from './components/SocialGrid';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import FloatingCartButton from './components/FloatingCartButton';
import WhatsAppPreviewModal from './components/WhatsAppPreviewModal';
import Toast from './components/Toast';
import FlyToCart from './components/FlyToCart';

function MainAppContent() {
  const [activeCategory, setActiveCategory] = useState('favoritos');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryCounts = useMemo(() => {
    const counts = { todos: PRODUCTS.length };
    CATEGORIES.forEach(cat => {
      if (cat.id === 'favoritos') {
        counts.favoritos = PRODUCTS.filter(p => p.featured).length;
      } else if (cat.id !== 'todos') {
        counts[cat.id] = PRODUCTS.filter(p => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#1A1817] font-sans antialiased">
      {/* 1. Header Navbar */}
      <Navbar />

      {/* 2. Full-bleed cinematic hero */}
      <Hero />

      {/* 3. Seasonal promo poster */}
      <PromoBanner />

      {/* 4. Value proposition strip */}
      <TrustBar />

      {/* 4. Editorial favorites band */}
      <FeaturedProducts />

      {/* 5. Main 3-column ordering experience */}
      <main id="menu" className="scroll-mt-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Column 1 — Categories (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <CategorySidebar
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </aside>

          {/* Column 2 — Menu header + grid */}
          <section className="lg:col-span-9 space-y-8">
            {/* Mobile horizontal category bar + search */}
            <div className="lg:hidden -mx-4 px-0">
              <CategoryNav
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryCounts={categoryCounts}
              />
            </div>

            {/* Menu Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-[#E2D7C7] pb-3 text-center sm:text-left">
              <h2 className="proun-text font-brand font-black text-2xl uppercase tracking-wider text-[#1A1817] flex items-center gap-2">
                <span>🥢</span>
                <span>NUESTRO MENU</span>
                <span>🥢</span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#1A1817] bg-white border border-[#E2D7C7] rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  +12 pedidos hoy
                </span>
                <span className="text-[11px] text-[#786F6B] font-medium">
                  ⏱ Entrega estimada: 35–40 min
                </span>
              </div>
            </div>

            {/* Product Cards Grid */}
            <MenuSection activeCategory={activeCategory} searchQuery={searchQuery} />
          </section>

        </div>
      </main>

      {/* 6. Combos editorial promotion */}
      <CombosBanner />

      {/* 7. Brand story */}
      <StorySection />

      {/* 8. Trust & quality guarantees */}
      <TrustSection />

      {/* 9. Customer reviews & social proof */}
      <Testimonials />

      {/* 10. Instagram editorial grid */}
      <SocialGrid />

      {/* 10. Location & hours */}
      <LocationSection />

      {/* 11. Final conversion climax */}
      <FinalCTA />

      {/* 12. Brand footer */}
      <Footer />

      {/* Ordering overlays */}
      <ProductModal />
      <CartDrawer />
      <FloatingCartButton />
      <WhatsAppPreviewModal />
      <Toast />
      <FlyToCart />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
