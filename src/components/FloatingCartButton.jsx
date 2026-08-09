import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function FloatingCartButton() {
  const {
    totalItems,
    totalAmount,
    setIsCartOpen,
    cartAnimationTrigger,
    customizingProduct,
    isCartOpen,
    isWhatsAppPreviewOpen,
  } = useCart();

  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (cartAnimationTrigger > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartAnimationTrigger]);

  // Hide floating cart button when customizing a product modal, cart drawer, or preview modal is open
  if (customizingProduct || isCartOpen || isWhatsAppPreviewOpen) {
    return null;
  }

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      aria-label={`Ver pedido${totalItems > 0 ? `, ${totalItems} productos` : ''}`}
      className={`fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-[#8B0000] to-[#A30000] text-white px-4 py-3 rounded-full shadow-glow-red border-2 border-[#D4AF37] hover:scale-105 active:scale-95 transition-all min-h-12 ${
        bounce ? 'animate-cart-bounce' : ''
      }`}
    >
      <span className="relative">
        <ShoppingBag className="w-5 h-5" strokeWidth={2.4} />
        {totalItems > 0 && (
          <span
            key={totalItems}
            className="absolute -top-2.5 -right-2.5 bg-[#E6AF2E] text-[#3A0009] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#8B0000]"
          >
            {totalItems}
          </span>
        )}
      </span>
      <span className="text-xs font-black uppercase tracking-wider">
        {totalItems > 0 ? `S/ ${totalAmount.toFixed(2)}` : 'PEDIR AHORA'}
      </span>
    </button>
  );
}
