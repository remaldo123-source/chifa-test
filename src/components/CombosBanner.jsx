import React from 'react';
import { Sparkles, Clock, Plus, Minus, Check } from 'lucide-react';
import { PRODUCTS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export default function CombosBanner() {
  const { cart, addItem, updateQuantity, setCustomizingProduct } = useCart();

  // Retrieve the 3 combo items from PRODUCTS master list
  const comboProducts = PRODUCTS.filter(p => p.category === 'combos');

  const handleAddCombo = (product) => {
    if (product.customizable) {
      setCustomizingProduct(product);
    } else {
      addItem(product, 1);
    }
  };

  const handleIncrement = (product, cartItems) => {
    if (cartItems.length === 1 && !cartItems[0].selectedExtras?.length && !cartItems[0].itemNotes) {
      updateQuantity(cartItems[0].cartItemId, 1);
    } else {
      setCustomizingProduct(product);
    }
  };

  const handleDecrement = (cartItems) => {
    const lastItem = cartItems[cartItems.length - 1];
    if (lastItem) updateQuantity(lastItem.cartItemId, -1);
  };

  return (
    <section id="combos" className="relative bg-[#7A0508] text-white py-16 px-6 lg:py-20 rounded-3xl overflow-hidden shadow-lg border border-[#D6A62A]/40 my-10">
      
      {/* Subtle Pattern & Atmosphere */}
      <div className="absolute inset-0 opacity-[0.06] pattern-lattice pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left: Large Food Photo */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6A62A]/50 shadow-2xl aspect-[4/3]">
            <img
              src="/images/combos_familiares.png"
              alt="Combos Para Compartir Chifa Rio Largo"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#160708]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase text-[#D6A62A] border border-[#D6A62A]/40 flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Para 2 a 6 Personas</span>
            </div>
          </div>
        </div>

        {/* Right: Copy & Combo Options */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <span className="seal mb-2">ABUNDANCIA & SABOR</span>
            <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#D6A62A] leading-none tracking-tight">
              COMBOS PARA COMPARTIR
            </h2>
            <p className="text-sm text-white/90 font-medium mt-2">
              Para compartir lo bueno siempre es mejor. Disfruta los clásicos del chifa en promociones abundantes.
            </p>
          </div>

          <div className="space-y-3">
            {comboProducts.map((combo) => {
              const cartItemsForCombo = cart.filter(item => item.product.id === combo.id);
              const totalQuantity = cartItemsForCombo.reduce((sum, item) => sum + item.quantity, 0);

              return (
                <div key={combo.id} className="p-4 rounded-2xl bg-[#160708]/70 border border-[#D6A62A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md hover:border-[#D6A62A]/60 transition-all">
                  <div>
                    <h4 className="font-bold text-sm text-white">{combo.name}</h4>
                    <p className="text-[11px] text-white/70 mt-0.5">{combo.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                    <span className="font-display font-black text-xl text-[#D6A62A]">
                      S/ {combo.price.toFixed(2)}
                    </span>
                    
                    {/* Add to Cart Button matching other items */}
                    {totalQuantity > 0 ? (
                      <div className="flex items-center gap-2 bg-[#8B0000] text-white rounded-xl p-1 border border-[#D6A62A]/50 shadow-md">
                        <button
                          onClick={() => handleDecrement(cartItemsForCombo)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#A30000] transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-extrabold text-xs px-1">{totalQuantity}</span>
                        <button
                          onClick={() => handleIncrement(combo, cartItemsForCombo)}
                          className="w-8 h-8 rounded-lg bg-[#F4C430] text-[#3A0009] font-black flex items-center justify-center hover:brightness-110 transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddCombo(combo)}
                        className="px-5 py-2.5 rounded-full bg-[#8B0000] hover:bg-[#A30000] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 border border-[#D6A62A]/50 transition-all shadow-md hover:scale-105"
                      >
                        <Plus className="w-4 h-4" />
                        <span>AGREGAR</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Valid until badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-white/75 pt-1">
            <Clock className="w-4 h-4 text-[#D6A62A]" />
            <span>Válido todos los días para Delivery y Recojo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
