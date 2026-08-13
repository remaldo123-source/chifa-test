import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';
import WhatsAppIcon from './WhatsAppIcon';

const NAV_LINKS = [
  { label: 'MENU', href: '#menu' },
  { label: 'FAVORITOS', href: '#favoritos' },
  { label: 'NOSOTROS', href: '#historia' },
  { label: 'UBICACION', href: '#ubicacion' },
];

export default function Navbar() {
  const { totalItems, totalAmount, setIsCartOpen, cartAnimationTrigger } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (cartAnimationTrigger > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartAnimationTrigger]);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Rio Largo 👋 Quisiera realizar un pedido.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2B0005] border-b border-[#D4AF37]/30 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo Brand */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#8B0000] border-2 border-[#D4AF37] flex items-center justify-center text-[#F4C430] font-seal text-xl shadow-md">
              龍
            </div>
            <div>
              <div className="proun-text font-brand font-black text-white text-xl lg:text-2xl tracking-wider leading-none">
                RIO LARGO
              </div>
              <div className="text-[10px] text-[#D4AF37] font-bold tracking-[0.25em] uppercase mt-0.5">
                CHIFA
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-extrabold tracking-widest text-white/90 hover:text-[#F4C430] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: WhatsApp + Shopping Cart */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WhatsApp Pedir Button */}
            <button
              onClick={handleWhatsApp}
              className="btn-crimson hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold hover:scale-105 transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4.5 h-4.5" />
              <span className="proun-text">PEDIR POR WHATSAPP</span>
            </button>

            {/* Shopping Cart Button — Opens CartDrawer on click */}
            <button
              onClick={handleCartClick}
              data-cart-target
              className={`relative flex items-center gap-2 bg-[#D6A62A] text-[#160708] px-3.5 sm:px-4 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md hover:bg-[#E6B83B] hover:scale-105 transition-all ${
                bounce ? 'animate-cart-bounce' : ''
              }`}
              aria-label="Ver resumen de tu pedido"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag className="w-4.5 h-4.5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-[#8B0000] text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#D6A62A] shadow-sm">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {totalItems > 0 ? `S/ ${totalAmount.toFixed(2)}` : 'TU PEDIDO'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#F4C430]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#2B0005] border-t border-[#D4AF37]/30 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-bold text-white">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-white/10">
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={handleWhatsApp} className="btn-crimson w-full py-3 flex items-center justify-center gap-2">
            <WhatsAppIcon className="w-4.5 h-4.5" />
            <span>PEDIR POR WHATSAPP</span>
          </button>
        </div>
      )}
    </header>
  );
}
