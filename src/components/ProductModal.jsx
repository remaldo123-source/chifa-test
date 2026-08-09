import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, MessageSquare, Sparkles, ShoppingBag } from 'lucide-react';
import { EXTRAS_LIST } from '../data/menuData';
import { useCart } from '../context/CartContext';

export default function ProductModal() {
  const { customizingProduct, setCustomizingProduct, addItem, totalItems, setIsCartOpen } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [itemNotes, setItemNotes] = useState('');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (customizingProduct) {
      setQuantity(1);
      setSelectedExtras([]);
      setItemNotes('');
      setAdded(false);
    }
  }, [customizingProduct]);

  if (!customizingProduct) return null;

  const toggleExtra = extra => {
    setSelectedExtras(prev =>
      prev.some(e => e.id === extra.id)
        ? prev.filter(e => e.id !== extra.id)
        : [...prev, extra],
    );
  };

  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = customizingProduct.price + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirmAdd = () => {
    addItem(customizingProduct, quantity, selectedExtras, itemNotes);
    setAdded(true);
    setTimeout(() => setCustomizingProduct(null), 550);
  };

  const handleOpenCart = () => {
    setCustomizingProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-ink-900/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-label={`Personalizar ${customizingProduct.name}`}
      onClick={() => setCustomizingProduct(null)}
    >
      <div
        className="bg-cream-100 w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl border-t-2 sm:border-2 border-gold-500 max-h-[92vh] sm:max-h-[90vh] flex flex-col relative animate-slide-up sm:animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile grab handle */}
        <span className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-ink-400/30 z-10" aria-hidden="true" />

        {/* Header image */}
        <div className="relative h-40 sm:h-52 bg-ink-900">
          <img
            src={customizingProduct.image}
            alt={customizingProduct.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />

          <button
            onClick={() => setCustomizingProduct(null)}
            className="absolute top-3 right-3 bg-ink-900/70 hover:bg-burgundy-700 text-white p-2 rounded-full border border-gold-500/50 transition-all"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="seal !text-[8px] !py-0 !px-1.5">PERSONALIZAR PLATO</span>
            <h3 className="mt-1.5 font-display text-2xl text-gold-100 tracking-wide uppercase leading-tight">
              {customizingProduct.name}
            </h3>
            <p className="text-[11px] text-white/80 font-bold">
              Precio base: <span className="text-gold-300">S/ {customizingProduct.price.toFixed(2)}</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 sm:space-y-5 flex-1">
          <p className="text-xs text-ink-500 leading-relaxed">{customizingProduct.description}</p>

          <div>
            <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-burgundy-700 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Extras opcionales
            </h4>
            <div className="space-y-2">
              {EXTRAS_LIST.map(extra => {
                const isSelected = selectedExtras.some(e => e.id === extra.id);
                return (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra)}
                    aria-pressed={isSelected}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      isSelected
                        ? 'bg-burgundy-800 text-gold-100 border-gold-500 shadow-glow-red'
                        : 'bg-white text-ink-700 border-cream-300 hover:border-gold-500'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-gold-500 border-gold-500 text-burgundy-900' : 'border-ink-400'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" strokeWidth={3.5} />}
                      </span>
                      {extra.name}
                    </span>
                    <span className={`font-black ${isSelected ? 'text-gold-300' : 'text-burgundy-700'}`}>
                      +S/ {extra.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="item-notes"
              className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-burgundy-700 mb-2 block"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
              Indicaciones para este plato
            </label>
            <input
              id="item-notes"
              type="text"
              value={itemNotes}
              onChange={e => setItemNotes(e.target.value)}
              placeholder="Ej. Sin cebolla china, bien tostado..."
              className="w-full p-3 text-xs bg-white border border-cream-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 rounded-xl outline-none"
            />
          </div>
        </div>

        {/* 3-Button Action Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-cream-300 flex items-center gap-2.5">
          {/* Button 1: Quantity Controls */}
          <div className="flex items-center bg-cream-200 rounded-full p-1 border border-cream-300 shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-burgundy-700 font-black hover:bg-cream-100 transition-all"
              aria-label="Disminuir cantidad"
            >
              <Minus className="w-3.5 h-3.5" strokeWidth={2.6} />
            </button>
            <span className="w-6 sm:w-7 text-center font-extrabold text-xs sm:text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-burgundy-700 text-white flex items-center justify-center font-black hover:bg-burgundy-600 transition-all"
              aria-label="Aumentar cantidad"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2.6} />
            </button>
          </div>

          {/* Button 2: Main Add to Cart Button */}
          <button
            onClick={handleConfirmAdd}
            disabled={added}
            className={`flex-1 btn py-3 px-3 text-[11px] sm:text-xs min-w-0 ${
              added ? '!bg-gold-500 !text-burgundy-900 border-gold-600 shadow-glow-gold' : 'btn-red'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 shrink-0" strokeWidth={3} />
                <span className="truncate">AGREGADO</span>
              </>
            ) : (
              <div className="flex items-center justify-center gap-1.5 min-w-0 w-full">
                <span className="truncate">AGREGAR</span>
                <span className="font-display text-xs bg-ink-900/25 px-1.5 py-0.5 rounded shrink-0">
                  S/ {totalPrice.toFixed(2)}
                </span>
              </div>
            )}
          </button>

          {/* Button 3: Cart Icon Button with Badge (Only Icon + Item Count) */}
          <button
            onClick={handleOpenCart}
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#8B0000] text-white hover:bg-[#A30000] border-2 border-[#D4AF37] shadow-md flex items-center justify-center shrink-0 transition-all active:scale-95"
            aria-label="Ver pedido"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={2.2} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#E6AF2E] text-[#3A0009] text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#8B0000] shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
