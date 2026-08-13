import React from 'react';
import { ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Río Largo 👋 Quisiera realizar un pedido de chifa.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative w-full h-[92vh] min-h-[580px] max-h-[820px] overflow-hidden flex items-center bg-[#160708] text-white">
      
      {/* FULL-BLEED FOOD PHOTOGRAPH BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero_wok_chaufa.png"
          alt="Chifa Río Largo - Lomo Saltado y Arroz Chaufa al Wok"
          className="w-full h-full object-cover animate-ken-burns opacity-90"
        />
      </div>

      {/* CINEMATIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#160708] via-[#160708]/85 via-55% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#160708] via-transparent to-[#160708]/60 pointer-events-none" />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center h-full">
        <div className="max-w-2xl space-y-5 text-left">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="seal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
              CHIFA RIO LARGO
            </span>
          </div>

          {/* Headline */}
          <h1 className="proun-text font-display font-black uppercase text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-tight text-white">
            <span className="block">EL SABOR</span>
            <span className="block">QUE</span>
            <span className="block">SIEMPRE</span>
            <span className="block text-[#D6A62A]">ANTOJA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/90 font-medium max-w-lg leading-relaxed">
            El encuentro perfecto entre la tradicion china y el sabor peruano. Wok a fuego vivo y porciones generosas.
          </p>

          {/* Dual CTAs with Authentic WhatsApp Icon */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={handleWhatsApp}
              className="btn-burgundy text-xs px-7 py-3.5 rounded-full shadow-lg border border-[#D6A62A]/50 flex items-center justify-center gap-2.5 hover:scale-105 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span className="proun-text">PEDIR POR WHATSAPP</span>
            </button>

            <button
              onClick={scrollToMenu}
              className="btn-translucent text-xs px-6 py-3.5 rounded-full border border-[#D6A62A]/50 hover:bg-[#D6A62A]/20 transition flex items-center justify-center gap-2"
            >
              <span className="proun-text">VER MENU</span>
              <ChevronDown className="w-4 h-4 text-[#D6A62A]" />
            </button>
          </div>

          {/* 3 Compact Value Bullets */}
          <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-white/15 text-[11px] font-semibold text-white/85">
            <div className="flex items-center gap-1.5">
              <span>🥢</span>
              <span>Sabor chino-peruano</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🔥</span>
              <span>Preparado al momento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>📲</span>
              <span>Pedido en 60 seg</span>
            </div>
          </div>

        </div>
      </div>

      {/* COMPACT & SLEEK SCROLL INDICATOR (Fixed excessive height) */}
      <div
        onClick={scrollToMenu}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition cursor-pointer"
      >
        <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#D6A62A]">
          DESCUBRE EL MENU
        </span>
        <ChevronDown className="w-4 h-4 text-[#D6A62A] animate-bounce-slow" />
      </div>

    </section>
  );
}
