import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola Río Largo 👋 Quisiera hacer un pedido.');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-green-600/40 transform hover:scale-110 active:scale-95 transition-all duration-300 relative"
        aria-label="Pedir por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        <WhatsAppIcon className="w-8 h-8 text-white" color="#FFFFFF" />
      </button>

      {/* "PEDIR AHORA" White Capsule Badge */}
      <span className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-[#1A1817] font-black text-[9px] uppercase tracking-wider shadow-md border border-gray-200">
        PEDIR AHORA
      </span>
    </div>
  );
}
