import React from 'react';
import { Sparkles, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import WhatsAppIcon from './WhatsAppIcon';

export default function CombosBanner() {
  const combos = [
    { name: 'Combo Duo Chifero', price: 42.00, desc: '1 Chaufa Especial + 1 Tallarín Saltado + 6 Wantanes' },
    { name: 'Combo Familiar Río Largo', price: 78.00, desc: '2 Chaufas + 1 Lomo Saltado + 12 Wantanes + Inca Kola 1.5L' },
    { name: 'Banquete Imperial', price: 110.00, desc: 'Chaufa Especial + Kam Lu Wantán + Aeropuerto + Sopita Fuchifú' },
  ];

  const handleWhatsAppCombo = (comboName) => {
    const msg = encodeURIComponent(`Hola Río Largo 👋 Quisiera pedir el ${comboName}.`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="combos" className="relative bg-[#7A0508] text-white py-16 px-6 lg:py-20 rounded-3xl overflow-hidden shadow-lg border border-[#D6A62A]/40 my-10">
      
      {/* Subtle Pattern & Atmosphere */}
      <div className="absolute inset-0 opacity-[0.06] pattern-lattice pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left: Large Food Photo */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6A62A]/50 shadow-2xl aspect-[4/3]">
            <img
              src="/images/combos_familiares.png"
              alt="Combos Para Compartir Chifa Rio Largo"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#160708]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase text-[#D6A62A] border border-[#D6A62A]/40 flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Para 2 a 6 Personas</span>
            </div>
          </div>
        </div>

        {/* Right: Copy & Combo Options */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <span className="seal mb-2">ABUNDANCIA & SABOR</span>
            <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#D6A62A] leading-none tracking-tight">
              COMBOS PARA COMPARTIR
            </h2>
            <p className="text-sm text-white/90 font-medium mt-2">
              Para compartir lo bueno siempre es mejor. Disfruta los clásicos del chifa en promociones abundantes.
            </p>
          </div>

          <div className="space-y-3">
            {combos.map((combo, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#160708]/70 border border-[#D6A62A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                <div>
                  <h4 className="font-bold text-sm text-white">{combo.name}</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">{combo.desc}</p>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-display font-black text-xl text-[#D6A62A]">
                    S/ {combo.price.toFixed(2)}
                  </span>
                  
                  {/* Clean Chifa WhatsApp Pill Button */}
                  <button
                    onClick={() => handleWhatsAppCombo(combo.name)}
                    className="px-4 py-2 rounded-full bg-[#D6A62A] text-[#160708] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#E6B83B] hover:scale-105 transition-all shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>PEDIR PROMO</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Valid until badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-white/75 pt-1">
            <Clock className="w-4 h-4 text-[#D6A62A]" />
            <span>Válido todos los días para Delivery y Recojo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
