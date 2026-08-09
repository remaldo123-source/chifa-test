import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Río Largo 👋 Quisiera realizar un pedido.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <footer className="bg-[#1A1817] text-white/80 border-t border-[#D4AF37]/30 pt-12 pb-16 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center text-[#F4C430] font-seal text-lg">
                龍
              </div>
              <div>
                <span className="font-brand font-black text-white text-lg tracking-wider block leading-none">
                  RIO LARGO
                </span>
                <span className="text-[9px] text-[#D4AF37] font-bold tracking-widest uppercase">
                  CHIFA
                </span>
              </div>
            </div>
            
            <p className="text-white/60 text-[11px] leading-relaxed">
              Sabor chino-peruano que se disfruta en cada plato.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1 text-white/70">
              <a href="#" className="hover:text-[#F4C430] text-sm">📘</a>
              <a href="#" className="hover:text-[#F4C430] text-sm">📷</a>
              <a href="#" className="hover:text-[#F4C430] text-sm">🎵</a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <h4 className="font-brand font-black text-white text-sm uppercase tracking-wider">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2 text-white/70 text-[11px] font-medium">
              <li><a href="#menu" className="hover:text-[#F4C430]">Menú</a></li>
              <li><a href="#favoritos" className="hover:text-[#F4C430]">Favoritos</a></li>
              <li><a href="#combos" className="hover:text-[#F4C430]">Combos</a></li>
              <li><a href="#historia" className="hover:text-[#F4C430]">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-[#F4C430]">Ubicación</a></li>
            </ul>
          </div>

          {/* Menú */}
          <div className="space-y-3">
            <h4 className="font-brand font-black text-white text-sm uppercase tracking-wider">
              MENÚ
            </h4>
            <ul className="space-y-2 text-white/70 text-[11px] font-medium">
              <li><a href="#menu" className="hover:text-[#F4C430]">Chaufas</a></li>
              <li><a href="#menu" className="hover:text-[#F4C430]">Tallarines</a></li>
              <li><a href="#menu" className="hover:text-[#F4C430]">Saltados</a></li>
              <li><a href="#menu" className="hover:text-[#F4C430]">Arroces</a></li>
              <li><a href="#menu" className="hover:text-[#F4C430]">Entradas</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h4 className="font-brand font-black text-white text-sm uppercase tracking-wider">
              CONTACTO
            </h4>
            <ul className="space-y-2 text-white/70 text-[11px] font-medium">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F4C430]" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{RESTAURANT_INFO.whatsappDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F4C430]" />
                <span>{RESTAURANT_INFO.hours}</span>
              </li>
              <li className="pt-1">
                <button onClick={handleWhatsApp} className="text-[#25D366] font-bold hover:underline flex items-center gap-1">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Pedido por WhatsApp</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Horario de Atención & CTA Button */}
          <div className="space-y-3">
            <h4 className="font-brand font-black text-white text-sm uppercase tracking-wider">
              HORARIO DE ATENCIÓN
            </h4>
            <p className="text-white/70 text-[11px] leading-relaxed">
              Lunes a Domingo<br />
              11:00 a.m. – 11:00 p.m.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="btn-crimson text-[10px] px-4 py-2.5 w-full flex items-center justify-center gap-2 rounded-full hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>PEDIR POR WHATSAPP</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-[11px]">
          <p>© 2024 Chifa Río Largo. Todos los derechos reservados. Diseñado con ❤️ para nuestros clientes.</p>
        </div>

      </div>
    </footer>
  );
}
