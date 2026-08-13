import React from 'react';
import useReveal from '../hooks/useReveal';

export default function TrustSection() {
  const sectionRef = useReveal();

  const points = [
    { num: '01', title: 'SABOR AUTENTICO', desc: 'Tradicion china con verdadera identidad peruana y wok hei ahumado.' },
    { num: '02', title: 'PREPARADO AL MOMENTO', desc: 'Cada plato se cocina al instante con verduras e ingredientes frescos.' },
    { num: '03', title: 'PORCIONES GENEROSAS', desc: 'Abundancia pensada para compartir y disfrutar en familia.' },
    { num: '04', title: 'PEDIR ES FACIL', desc: 'Sin aplicaciones complejas, tu pedido va directo a nuestro WhatsApp.' },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-[#EFE5D5] border-y border-[#E2D5C2] text-[#171313]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 space-y-10">

        <div className="text-center space-y-2 reveal">
          <span className="seal">GARANTIA RIO LARGO</span>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#171313]">
            POR QUE ELEGIR <span className="text-[#7A0508]">RIO LARGO</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className={`bg-[#F6F0E6] border border-[#E2D5C2] rounded-2xl p-6 relative overflow-hidden shadow-card hover:border-[#D6A62A] hover:shadow-lift transition-all group reveal stagger-${i + 1}`}
            >
              <div className="font-display font-black text-5xl text-[#7A0508]/15 group-hover:text-[#7A0508]/25 transition-colors mb-2">
                {pt.num}
              </div>
              <h3 className="font-brand font-black text-base text-[#171313] uppercase tracking-wide mb-2">
                {pt.title}
              </h3>
              <p className="text-xs text-[#544D4B] leading-relaxed font-medium">
                {pt.desc}
              </p>
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6A62A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
