import React from 'react';
import useParallax from '../hooks/useParallax';
import useReveal from '../hooks/useReveal';

export default function StorySection() {
  const sectionRef = useReveal();
  const imgRef = useParallax(0.05);

  return (
    <section ref={sectionRef} id="historia" className="py-16 lg:py-24 bg-[#F6F0E6] text-[#171313] relative overflow-hidden border-t border-[#E2D5C2] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Large Photograph with Double Gold Border */}
          <div className="lg:col-span-6 relative reveal-left">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6A62A] shadow-xl p-1 bg-[#160708]">
              <div className="rounded-xl overflow-hidden border border-[#D6A62A]/40 aspect-[4/3]">
                <img
                  ref={imgRef}
                  src="/images/nuestra_historia.png"
                  alt="Historia Chifa Rio Largo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[118%] object-cover"
                />
              </div>
            </div>

            {/* Red Seal Badge floating overlay */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#7A0508] border-2 border-[#D6A62A] text-[#D6A62A] flex items-center justify-center font-seal text-2xl shadow-lg animate-pulse-glow">
              龍
            </div>
          </div>

          {/* Right: Story Copy */}
          <div className="lg:col-span-6 space-y-6 text-left reveal-right">
            <div>
              <span className="seal mb-2">HERENCIA Y SAZON</span>
              <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#171313] leading-none tracking-tight">
                UNA HISTORIA QUE SE SIENTE <span className="text-[#7A0508]">EN CADA PLATO</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#544D4B] leading-relaxed font-medium">
              En <strong className="text-[#7A0508]">Rio Largo</strong> honramos la autentica tradicion del chifa peruano: ese punto exacto donde la tecnica oriental del fuego vivo se abraza con el corazon y los ingredientes mas frescos de nuestra tierra.
            </p>

            <p className="text-xs sm:text-sm text-[#756D6A] leading-relaxed">
              Desde 1998 servimos porciones abundantes preparadas al momento, garantizando que cada visita y cada pedido lleve a tu mesa el sabor que siempre quieres repetir.
            </p>

            <div>
              <a
                href="#menu"
                className="btn-burgundy px-7 py-3 text-xs min-h-11"
              >
                <span>CONOCENOS</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
