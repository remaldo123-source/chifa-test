import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export function CombosBannerCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A000A] to-[#6B0717] text-white p-5 shadow-sm border border-[#D4AF37]/30 space-y-4">
      {/* Background Image Overlay */}
      <img
        src="/images/combos_familiares.png"
        alt="Combos Familiares Chifa"
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay pointer-events-none"
      />

      <div className="relative z-10 space-y-2">
        <h3 className="font-brand font-black text-2xl text-[#F4C430] uppercase tracking-wider leading-none">
          COMBOS FAMILIARES
        </h3>
        <p className="text-xs font-medium text-white/90 leading-snug max-w-xs">
          Para compartir lo bueno siempre es mejor
        </p>

        <div className="pt-2">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#4A000A] hover:bg-[#FAF3D8] transition shadow-md"
          >
            VER COMBOS
          </a>
        </div>
      </div>
    </div>
  );
}

export function TrustBadgesSidebar() {
  const trustPoints = [
    { icon: '⚙️', title: 'Sabor chino-peruano auténtico' },
    { icon: '⚙️', title: 'Preparado al momento con ingredientes frescos' },
    { icon: '⏱️', title: 'Más de 25 años sirviendo tradición' },
    { icon: '🏢', title: 'Miles de pedidos felices nos respaldan' }
  ];

  return (
    <div className="bg-white border border-[#E2D7C7] rounded-2xl p-4 space-y-3 shadow-sm">
      {trustPoints.map((pt, idx) => (
        <div key={idx} className="flex items-start gap-3 text-xs font-bold text-[#1A1817]">
          <span className="text-base leading-none">{pt.icon}</span>
          <span className="leading-snug">{pt.title}</span>
        </div>
      ))}
    </div>
  );
}

export function InstagramSidebarGrid() {
  const instaImages = [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80',
  ];

  return (
    <div className="bg-white border border-[#E2D7C7] rounded-2xl p-4 space-y-3 shadow-sm">
      <h4 className="font-brand font-black text-sm uppercase tracking-wider text-[#1A1817]">
        SÍGUENOS EN INSTAGRAM
      </h4>

      <div className="grid grid-cols-3 gap-2">
        {instaImages.map((img, i) => (
          <a
            key={i}
            href={`https://instagram.com/${RESTAURANT_INFO.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-lg overflow-hidden border border-[#E2D7C7] block group"
          >
            <img
              src={img}
              alt="Chifa Rio Largo Instagram"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        ))}
      </div>

      <a
        href={`https://instagram.com/${RESTAURANT_INFO.instagram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center py-2 rounded-xl text-xs font-bold text-[#1A1817] bg-[#F7F3ED] border border-[#E2D7C7] hover:bg-[#E2D7C7] transition"
      >
        VER MÁS
      </a>
    </div>
  );
}
