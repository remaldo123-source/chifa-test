import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function LocationSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Río Largo 👋 Quisiera consultar sobre el delivery.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-[#EFE5D5] border-t border-[#E2D5C2] text-[#171313]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="seal mb-2">UBICACIÓN Y ATENCIÓN</span>
              <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#171313] leading-none tracking-tight">
                VISÍTANOS O PIDE <span className="text-[#7A0508]">DIRECTO A TU CASA</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-medium text-[#544D4B]">
              <div className="flex items-start gap-3 bg-[#F6F0E6] p-4 rounded-xl border border-[#E2D5C2]">
                <MapPin className="w-5 h-5 text-[#7A0508] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171313] block font-bold">Dirección del Local:</strong>
                  <span>{RESTAURANT_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F6F0E6] p-4 rounded-xl border border-[#E2D5C2]">
                <Clock className="w-5 h-5 text-[#7A0508] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171313] block font-bold">Horario de Atención:</strong>
                  <span>{RESTAURANT_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F6F0E6] p-4 rounded-xl border border-[#E2D5C2]">
                <Navigation className="w-5 h-5 text-[#7A0508] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171313] block font-bold">Zona de Delivery:</strong>
                  <span>{RESTAURANT_INFO.deliveryZone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F6F0E6] p-4 rounded-xl border border-[#E2D5C2]">
                <Phone className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#171313] block font-bold">Atención Directa WhatsApp:</strong>
                  <span className="font-bold text-[#7A0508]">{RESTAURANT_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={handleWhatsApp} className="btn-burgundy px-6 py-3.5 text-xs">
                <MessageSquare className="w-4 h-4 fill-current text-[#25D366]" />
                <span>PEDIR POR WHATSAPP</span>
              </button>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Arequipa+350%2C+Moquegua%2C+Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-translucent text-xs text-[#171313] border-[#7A0508] flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#7A0508]" />
                <span>CÓMO LLEGAR</span>
              </a>
            </div>
          </div>

          {/* Right Map Preview */}
          <div className="lg:col-span-6">
            <div className="bg-[#F6F0E6] border-2 border-[#D6A62A]/40 rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
              <iframe
                title="Río Largo Chifa Ubicación Map"
                src="https://maps.google.com/maps?q=Calle%20Arequipa%20350%2C%20Moquegua%2C%20Peru&t=m&z=16&output=embed"
                className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
