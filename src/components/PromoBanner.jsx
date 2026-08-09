import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import WhatsAppIcon from './WhatsAppIcon';
import { RESTAURANT_INFO } from '../data/menuData';

// ─── EDITABLE PROMO DATA — cambia aquí el banner de temporada ───────────────
const PROMO = {
  badge: '🔥 PROMO DEL MES',
  title: 'COMBO FAMILIAR',
  subtitle: 'Chaufa Especial + Kam Lu Wantán + 12 Wantanes Fritos',
  price: 'S/ 68.00',
  oldPrice: 'S/ 84.00',
  expires: 'Válido hasta el 31 de agosto',
  cta: 'PEDIR ESTA PROMO',
};
// ─────────────────────────────────────────────────────────────────────────────

export default function PromoBanner() {
  const sectionRef = useReveal();

  const handlePromoWhatsApp = () => {
    const msg = encodeURIComponent(`Hola Río Largo 👋 Quisiera pedir la PROMO DEL MES: ${PROMO.title} (${PROMO.price}).`);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="relative py-10 px-4 sm:px-6 lg:py-12 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-[#6B0717] text-white border-2 border-[#D4AF37] shadow-xl">
        <div className="absolute inset-0 opacity-[0.07] pattern-lattice pointer-events-none" />
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#E6AF2E]/20 rounded-full blur-3xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-[#E6AF2E] text-lg select-none" aria-hidden="true">✦</span>
        <span className="absolute bottom-3 right-6 text-[#E6AF2E] text-sm select-none" aria-hidden="true">✦</span>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-3 reveal-left">
            <span className="inline-flex items-center gap-1.5 w-fit bg-[#E6AF2E] text-[#3A0009] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
              {PROMO.badge}
            </span>
            <h2 className="font-brand font-black uppercase text-3xl sm:text-5xl lg:text-6xl leading-none text-[#FDE047] tracking-tight">
              {PROMO.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-md">
              {PROMO.subtitle}
            </p>
            <div className="flex items-end gap-3 mt-1">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#FDE047] leading-none">{PROMO.price}</span>
              <span className="text-base sm:text-lg text-white/50 line-through">{PROMO.oldPrice}</span>
            </div>

            {/* Single-line Compact Yellow Gold Button with side-by-side arrow & WhatsApp icon */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={handlePromoWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E6AF2E] hover:bg-[#F4C430] text-[#3A0009] font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-md hover:scale-105 transition-all shrink-0 border border-[#FFF0A5]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{PROMO.cta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/80 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-[#E6AF2E] shrink-0" />
                {PROMO.expires}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[200px] lg:min-h-0 reveal-right">
            <img
              src="/images/hero_wok_chaufa.png"
              alt="Promo del mes Chifa Río Largo"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B0717] via-[#6B0717]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
