import React from 'react';
import { Star } from 'lucide-react';
import useReveal from '../hooks/useReveal';

// ─── EDITABLE TESTIMONIALS — cambia aquí las reseñas ────────────────────────
const TESTIMONIALS = [
  {
    name: 'María F.',
    zone: 'Moquegua Centro',
    text: 'El chaufa más rico que he probado en Moquegua. Llegó caliente y la atención por WhatsApp fue rapidísima. ¡Repetiremos!',
  },
  {
    name: 'Jorge R.',
    zone: 'San Antonio',
    text: 'Pedí el Combo Familiar para el almuerzo del domingo y fue un éxito total. Porciones abundantes y muy buen sabor.',
  },
  {
    name: 'Carmen T.',
    zone: 'Samegua',
    text: 'El wantán frito es adictivo y la chicha morada está como la de antes. Pedir por WhatsApp es súper fácil, se lo recomiendo a todos.',
  },
];

const STATS = [
  { value: '4.9★', label: 'Calificación de clientes' },
  { value: '10K+', label: 'Pedidos entregados' },
  { value: '40 min', label: 'Tiempo promedio de entrega' },
];
// ─────────────────────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#E6AF2E]" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} id="opiniones" className="py-16 lg:py-20 bg-[#F7F3ED] border-y border-[#E2D7C7]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 reveal">
          <span className="seal">LO QUE DICEN NUESTROS CLIENTES</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1A1817]">
            SABOR QUE SE <span className="text-[#8B0000]">RECOMIENDA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className={`bg-white border border-[#E2D7C7] rounded-2xl p-6 shadow-card hover:border-[#D4AF37] hover:shadow-lift transition-all reveal stagger-${i + 1} relative`}
            >
              <span className="absolute top-3 right-4 text-[#E6AF2E]/30 text-2xl select-none" aria-hidden="true">✦</span>
              <Stars />
              <blockquote className="text-sm text-[#544D4B] leading-relaxed mt-3">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 pt-3 border-t border-[#EFE8DE] flex items-center justify-between">
                <div>
                  <div className="font-brand font-black text-xs text-[#1A1817] uppercase tracking-wide">{t.name}</div>
                  <div className="text-[10px] text-[#786F6B] font-medium">{t.zone}</div>
                </div>
                <span className="text-[10px] font-extrabold text-[#8B0000] uppercase">Pedido verificado</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal stagger-2">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-[#6B0717] text-white rounded-2xl px-6 py-5 flex items-center justify-between border border-[#D4AF37]/50"
            >
              <span className="font-display font-black text-3xl text-[#FDE047] leading-none">{s.value}</span>
              <span className="text-[11px] text-white/80 font-bold uppercase tracking-wide text-right">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
