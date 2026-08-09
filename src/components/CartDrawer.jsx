import React, { useEffect } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageSquare, Lock, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, PAYMENT_METHODS } from '../data/menuData';
import { DELIVERY_FEE } from '../utils/whatsapp';

export default function CartDrawer() {
  const {
    cart,
    updateQuantity,
    removeItem,
    clearCart,
    deliveryType,
    setDeliveryType,
    customerDetails,
    setCustomerDetails,
    generalNotes,
    setGeneralNotes,
    paymentMethod,
    setPaymentMethod,
    isCartOpen,
    setIsCartOpen,
    totalItems,
    totalAmount,
    checkoutWithWhatsApp,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const deliveryFee = totalItems > 0 ? (deliveryType === 'delivery' ? DELIVERY_FEE : 0.00) : 0.00;
  const finalTotal = totalAmount + deliveryFee;

  const handleInputChange = (field, value) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  const closeAndGoToMenu = () => {
    setIsCartOpen(false);
    setTimeout(() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }), 120);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center lg:justify-end items-end lg:items-stretch">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Panel — bottom sheet on mobile, right drawer on desktop */}
      <div
        role="dialog"
        aria-label="Tu pedido"
        className="relative bg-cream-100 w-full lg:w-[440px] max-h-[85vh] lg:max-h-full h-full lg:h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none border-t-2 lg:border-t-0 lg:border-l-2 border-gold-500 shadow-2xl flex flex-col overflow-hidden animate-slide-up lg:animate-slide-in-right z-10"
      >
        {/* Header */}
        <div className="bg-burgundy-800 text-white px-5 py-4 flex items-center justify-between border-b-2 border-gold-500 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gold-500 text-burgundy-900 flex items-center justify-center">
              <ShoppingBag className="w-4.5 h-4.5" strokeWidth={2.4} />
            </div>
            <div>
              <h3 className="font-brand font-black text-sm text-gold-100 uppercase tracking-wider leading-none">
                TU PEDIDO
              </h3>
              <p className="text-[10px] text-white/70 mt-0.5">
                {totalItems > 0
                  ? `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} · listo para enviar`
                  : 'Agrega platos del menú'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[10px] font-extrabold text-gold-200 hover:text-white uppercase tracking-wide underline underline-offset-2"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white"
              aria-label="Cerrar pedido"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 p-8 text-center flex flex-col items-center justify-center gap-3">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gold-500/60 shadow-md">
              <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-burgundy-950/20" />
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-gold-500 text-burgundy-900 flex items-center justify-center border-2 border-white">
                <ShoppingBag className="w-3 h-3" strokeWidth={2.6} />
              </div>
            </div>
            <h4 className="font-brand font-black text-sm text-ink-900 uppercase tracking-wider">
              TU PEDIDO ESTÁ VACÍO
            </h4>
            <p className="text-[11px] text-ink-500">
              Agrega tus favoritos y arma tu pedido.
            </p>
            <button onClick={closeAndGoToMenu} className="btn-gold px-6 py-2.5 text-[11px] mt-1">
              EXPLORAR MENÚ
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Items */}
            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.cartItemId} className="flex items-center justify-between gap-2 pb-3 border-b border-cream-300">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-xl object-cover border border-cream-300 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-ink-900 leading-tight line-clamp-1">
                        {item.product.name}
                      </h4>
                      {item.selectedExtras?.length > 0 && (
                        <p className="text-[9.5px] text-ink-500 line-clamp-1">
                          Extras: {item.selectedExtras.map(e => e.name).join(', ')}
                        </p>
                      )}
                      {item.itemNotes && (
                        <p className="text-[9.5px] italic text-burgundy-700 line-clamp-1">"{item.itemNotes}"</p>
                      )}
                      <p className="text-[10px] text-ink-500">
                        {item.quantity} x S/ {item.unitPrice.toFixed(2)}
                      </p>
                      <p className="font-extrabold text-xs text-burgundy-700">
                        S/ {item.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center border border-cream-300 rounded-lg bg-white">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="w-8 h-8 flex items-center justify-center text-xs font-bold text-ink-900 hover:bg-cream-200 rounded-l-lg"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-extrabold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="w-8 h-8 flex items-center justify-center text-xs font-bold text-ink-900 hover:bg-cream-200 rounded-r-lg"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.cartItemId)}
                      className="text-ink-400 hover:text-burgundy-700 p-1.5"
                      aria-label="Quitar del pedido"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Delivery type */}
            <div className="space-y-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-burgundy-700">
                <MapPin className="w-3 h-3" /> Tipo de entrega
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'delivery', label: '🚀 Delivery' },
                  { id: 'pickup', label: '🛍️ Recojo local' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setDeliveryType(opt.id)}
                    aria-pressed={deliveryType === opt.id}
                    className={`py-2 rounded-lg border text-[11px] font-extrabold transition-all ${
                      deliveryType === opt.id
                        ? 'bg-burgundy-700 text-gold-100 border-gold-500 shadow-glow-red'
                        : 'bg-white text-ink-700 border-cream-300 hover:border-gold-500'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment method */}
            <div className="space-y-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-burgundy-700">
                💳 Método de pago
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {PAYMENT_METHODS.map(method => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    aria-pressed={paymentMethod === method}
                    className={`py-2 rounded-lg border text-[10px] font-extrabold transition-all ${
                      paymentMethod === method
                        ? 'bg-burgundy-700 text-gold-100 border-gold-500'
                        : 'bg-white text-ink-700 border-cream-300 hover:border-gold-500'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer data */}
            <div className="space-y-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-burgundy-700">
                <User className="w-3 h-3" /> Tus datos
              </span>
              <input
                type="text"
                value={customerDetails.name}
                onChange={e => handleInputChange('name', e.target.value)}
                placeholder="Nombre"
                aria-label="Nombre del cliente"
                className="w-full p-2.5 rounded-xl border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-burgundy-700 bg-white"
              />
              {deliveryType === 'delivery' && (
                <>
                  <input
                    type="text"
                    value={customerDetails.address}
                    onChange={e => handleInputChange('address', e.target.value)}
                    placeholder="Dirección de entrega"
                    aria-label="Dirección de entrega"
                    className="w-full p-2.5 rounded-xl border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-burgundy-700 bg-white"
                  />
                  <input
                    type="text"
                    value={customerDetails.reference}
                    onChange={e => handleInputChange('reference', e.target.value)}
                    placeholder="Referencia (opcional)"
                    aria-label="Referencia de la dirección"
                    className="w-full p-2.5 rounded-xl border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-burgundy-700 bg-white"
                  />
                </>
              )}
              <input
                type="text"
                value={generalNotes}
                onChange={e => setGeneralNotes(e.target.value)}
                placeholder="Indicaciones: sin cebolla, salsa extra..."
                aria-label="Indicaciones generales"
                className="w-full p-2.5 rounded-xl border border-cream-300 text-xs text-ink-900 focus:outline-none focus:border-burgundy-700 bg-white"
              />
            </div>
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 bg-cream-100 border-t-2 border-gold-500 space-y-3 shrink-0">
            <div className="space-y-1 text-xs font-bold text-ink-500">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="text-ink-900">S/ {totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>DELIVERY</span>
                <span className="text-ink-900">S/ {deliveryFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="hairline" />

            <div className="flex justify-between items-center pt-1">
              <span className="font-brand font-black text-lg text-ink-900">TOTAL</span>
              <span className="font-brand font-black text-2xl text-burgundy-700">S/ {finalTotal.toFixed(2)}</span>
            </div>

            <button onClick={checkoutWithWhatsApp} className="btn-crimson w-full py-3.5 min-h-12">
              <MessageSquare className="w-4 h-4 fill-current text-wa" />
              <span>PEDIR POR WHATSAPP</span>
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-ink-500 font-medium text-center">
              <Lock className="w-3 h-3 text-burgundy-700" />
              <span>Tu pedido se enviará por WhatsApp al {RESTAURANT_INFO.whatsappDisplay}.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
