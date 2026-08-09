import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Río Largo 🍜 ¡Ya se me antojó! Quiero hacer un pedido.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative bg-[#2B0005] text-white py-16 lg:py-24 overflow-hidden border-t border-[#D4AF37]/40">
      
      {/* Flaming Wok Pan Background Image (Slightly Opaque with Dark Gradient Overlay) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_wok_chaufa.png"
          alt="Sartén flameando al wok"
          className="w-full h-full object-cover opacity-30 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B0005]/95 via-[#4A000A]/85 to-[#2B0005]/90" />
      </div>

      {/* Decorative Dragon Overlay */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 text-[#D4AF37] pointer-events-none text-9xl">
        🐲
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual: Chifa Wok Dish Image with Gold Border & Red Logo Stamp in Top-Right Corner */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-96 rounded-2xl p-1.5 bg-[#2B0005] border-2 border-[#D4AF37] shadow-2xl group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src="/images/hero_wok_chaufa.png"
                  alt="Platos de Chifa Río Largo flameando al wok"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Red Chinese Logo Stamp [ 龍 ] on Top-Right Corner of the Border */}
              <div className="absolute -top-3.5 -right-3.5 w-12 h-12 rounded-full bg-[#8B0000] border-2 border-[#F4C430] text-[#F4C430] flex items-center justify-center font-seal text-xl shadow-xl z-20">
                龍
              </div>
            </div>
          </div>

          {/* Right Text & Clean Gold WhatsApp Pill Button */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <span className="seal">¡PEDIDO EN MENOS DE 60 SEGUNDOS!</span>

            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl text-[#F4C430] tracking-tight leading-none">
              ¿YA SE TE ANTOJÓ?
            </h2>

            <p className="text-sm sm:text-lg text-white/90 font-medium max-w-xl">
              Tu próximo plato favorito está a un WhatsApp de distancia.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="btn-yellow-gold px-8 py-4 rounded-full inline-flex items-center justify-center gap-3 text-sm font-extrabold hover:scale-105 transition-all shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>PEDIR POR WHATSAPP</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
