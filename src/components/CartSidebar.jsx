import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

import WhatsAppIcon from './WhatsAppIcon';

export default function CartSidebar() {
  const {
    cart,
    updateQuantity,
    removeItem,
    clearCart,
    deliveryType,
    generalNotes,
    setGeneralNotes,
    totalItems,
    totalAmount,
    checkoutWithWhatsApp,
  } = useCart();

  const deliveryFee = totalItems > 0 ? (deliveryType === 'delivery' ? 5.00 : 0.00) : 0.00;
  const finalTotal = totalAmount + deliveryFee;

  return (
    <div className="bg-white border border-[#E2D7C7] rounded-2xl shadow-sm overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b border-[#E2D7C7]">
        <h3 className="font-brand font-black text-xl text-[#1A1817] uppercase tracking-wider flex items-center gap-2">
          <span>TU PEDIDO</span>
        </h3>

        <div className="flex items-center gap-2">
          <div className="relative bg-[#F7F3ED] border border-[#E2D7C7] p-2 rounded-xl text-[#1A1817]">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8B0000] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-[11px] font-bold text-red-600 hover:underline"
            >
              Vaciar
            </button>
          )}
        </div>
      </div>

      {/* Cart Body */}
      {cart.length === 0 ? (
        <div className="p-8 text-center flex flex-col items-center justify-center gap-2">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
          <h4 className="font-bold text-xs text-slate-800 uppercase">TU PEDIDO ESTÁ VACÍO</h4>
          <p className="text-[11px] text-slate-500">Agrega tus chaufas, saltados y wantanes favoritos.</p>
        </div>
      ) : (
        <div className="p-4 space-y-4 max-h-[380px] overflow-y-auto">
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.cartItemId} className="flex items-center justify-between gap-2 pb-3 border-b border-[#EFE8DE]">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-xl object-cover border border-[#E2D7C7]"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#1A1817] leading-tight line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-[10px] text-[#786F6B]">
                      {item.quantity} x S/ {item.unitPrice.toFixed(2)}
                    </p>
                    <p className="font-extrabold text-xs text-[#8B0000]">
                      S/ {item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#E2D7C7] rounded-lg bg-[#F7F3ED]">
                    <button
                      onClick={() => updateQuantity(item.cartItemId, -1)}
                      className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#1A1817] hover:bg-[#E2D7C7]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-extrabold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, 1)}
                      className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#1A1817] hover:bg-[#E2D7C7]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.cartItemId)}
                    className="text-gray-400 hover:text-red-600 p-1"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Notes Box */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#786F6B] uppercase block">
              ¿Alguna indicación para tu pedido?
            </label>
            <input
              type="text"
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              placeholder="Ej: Sin cebolla, por favor."
              className="w-full p-2.5 rounded-xl border border-[#E2D7C7] text-xs text-[#1A1817] focus:outline-none focus:border-[#8B0000] bg-[#F7F3ED]"
            />
          </div>
        </div>
      )}

      {/* Cart Summary Footer */}
      {cart.length > 0 && (
        <div className="p-4 bg-[#F7F3ED] border-t border-[#E2D7C7] space-y-3">
          <div className="space-y-1 text-xs font-bold text-[#786F6B]">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span className="text-[#1A1817]">S/ {totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>DELIVERY</span>
              <span className="text-[#1A1817]">S/ {deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-[#E2D7C7]">
            <span className="font-brand font-black text-lg text-[#1A1817]">TOTAL</span>
            <span className="font-brand font-black text-xl text-[#8B0000]">S/ {finalTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={checkoutWithWhatsApp}
            className="btn-crimson w-full py-3.5 flex items-center justify-center gap-2 rounded-full hover:scale-105 transition-all shadow-md"
          >
            <WhatsAppIcon className="w-4.5 h-4.5" />
            <span>PEDIR POR WHATSAPP</span>
          </button>

          <div className="flex items-center justify-center gap-1 text-[10px] text-[#786F6B] font-medium text-center">
            <Lock className="w-3 h-3 text-[#8B0000]" />
            <span>Tu pedido se enviará por WhatsApp de forma segura y rápida.</span>
          </div>
        </div>
      )}

    </div>
  );
}
