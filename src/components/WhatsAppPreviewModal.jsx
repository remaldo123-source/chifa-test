import React, { useEffect } from 'react';
import { MessageSquare, Pencil, ArrowRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppMessage } from '../utils/whatsapp';
import { RESTAURANT_INFO } from '../data/menuData';

export default function WhatsAppPreviewModal() {
  const {
    cart,
    customerDetails,
    deliveryType,
    generalNotes,
    paymentMethod,
    isWhatsAppPreviewOpen,
    setIsWhatsAppPreviewOpen,
    setIsCartOpen,
    confirmWhatsAppCheckout,
  } = useCart();

  useEffect(() => {
    if (isWhatsAppPreviewOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isWhatsAppPreviewOpen]);

  if (!isWhatsAppPreviewOpen) return null;

  const message = generateWhatsAppMessage({ cart, customerDetails, deliveryType, generalNotes, paymentMethod });

  const handleEditOrder = () => {
    setIsWhatsAppPreviewOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsWhatsAppPreviewOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-label="Confirmar pedido por WhatsApp"
        className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500 flex flex-col animate-scale-in z-10 max-h-[85vh]"
      >
        {/* Header */}
        <div className="bg-burgundy-800 text-white px-5 py-4 flex items-center justify-between border-b-2 border-gold-500 shrink-0">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 fill-current text-wa" />
            <div>
              <h3 className="font-brand font-black text-sm text-gold-100 uppercase tracking-wider leading-none">
                CONFIRMA TU PEDIDO
              </h3>
              <p className="text-[10px] text-white/70 mt-0.5">
                Así se verá tu mensaje en WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsWhatsAppPreviewOpen(false)}
            className="p-1 rounded-full text-white/80 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message preview — chat bubble */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#E5DED3]">
          <div className="max-w-[92%] ml-auto rounded-2xl rounded-tr-md bg-[#DCF8C6] border border-black/5 shadow-sm p-3.5">
            <p className="text-[11px] leading-relaxed text-[#1A1817] whitespace-pre-wrap font-medium">
              {message}
            </p>
            <div className="mt-1.5 text-right text-[9px] text-[#1A1817]/50 font-medium">
              {RESTAURANT_INFO.whatsappDisplay} · ahora
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-cream-300 shrink-0 space-y-2.5">
          <button onClick={confirmWhatsAppCheckout} className="btn-crimson w-full py-3.5 min-h-12">
            <MessageSquare className="w-4 h-4 fill-current text-wa" />
            <span>CONFIRMAR Y ENVIAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={handleEditOrder} className="btn-outline w-full py-3 text-[11px]">
            <Pencil className="w-3.5 h-3.5" />
            <span>EDITAR PEDIDO</span>
          </button>
          <p className="text-[10px] text-center text-ink-500">
            Al confirmar se abrirá WhatsApp con tu pedido listo para enviar.
          </p>
        </div>
      </div>
    </div>
  );
}
