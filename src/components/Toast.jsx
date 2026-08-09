import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (!toast) return;
    setVisible(toast);
    const timer = setTimeout(() => setVisible(null), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!visible) return null;

  return (
    <div
      key={visible.id}
      role="status"
      aria-live="polite"
      className="fixed left-1/2 -translate-x-1/2 bottom-24 lg:left-auto lg:right-6 lg:translate-x-0 lg:top-24 lg:bottom-auto z-[85] animate-rise"
    >
      <div className="flex items-center gap-2.5 bg-burgundy-800 text-white border border-gold-500/70 shadow-glow-red rounded-full pl-3 pr-5 py-2.5">
        <span className="w-6 h-6 rounded-full bg-gold-500 text-burgundy-900 flex items-center justify-center shrink-0">
          <Check className="w-3.5 h-3.5" strokeWidth={3.5} />
        </span>
        <span className="text-xs font-extrabold tracking-wide whitespace-nowrap">
          {visible.name} — AGREGADO AL PEDIDO
        </span>
      </div>
    </div>
  );
}
