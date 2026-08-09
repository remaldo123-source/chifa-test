import React, { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getBadgeStyle } from '../utils/badges';

export default function ProductCard({ product }) {
  const { cart, addItem, updateQuantity, setCustomizingProduct, triggerFly } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItemsForProduct = cart.filter(item => item.product.id === product.id);
  const totalQuantity = cartItemsForProduct.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuickAdd = (e) => {
    if (product.customizable) {
      setCustomizingProduct(product);
    } else {
      const imgEl = e.currentTarget.closest('article')?.querySelector('img');
      if (imgEl) triggerFly(product.image, imgEl.getBoundingClientRect());
      addItem(product, 1);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 900);
    }
  };

  const handleIncrement = () => {
    if (cartItemsForProduct.length === 1 && !cartItemsForProduct[0].selectedExtras?.length && !cartItemsForProduct[0].itemNotes) {
      updateQuantity(cartItemsForProduct[0].cartItemId, 1);
    } else if (product.customizable) {
      setCustomizingProduct(product);
    } else {
      addItem(product, 1);
    }
  };

  const handleDecrement = () => {
    const lastItem = cartItemsForProduct[cartItemsForProduct.length - 1];
    if (lastItem) updateQuantity(lastItem.cartItemId, -1);
  };

  return (
    <article className="bg-white border border-[#E2D7C7] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#8B0000]/40 hover:shadow-md transition-all duration-200">
      
      {/* Top Image Section */}
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-[#F7F3ED] cursor-pointer"
        onClick={() => product.customizable && setCustomizingProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider shadow-sm ${getBadgeStyle(product.badgeType)}`}>
            {product.badge}
          </span>
        )}

        {/* Gold top accent line revealed on hover */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#F4C430] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Body & Price Section */}
      <div className="p-3.5 flex flex-col flex-1 justify-between space-y-3">
        <div>
          <h3 
            onClick={() => product.customizable && setCustomizingProduct(product)}
            className="font-bold text-sm text-[#1A1817] group-hover:text-[#8B0000] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-[11px] text-[#786F6B] leading-relaxed line-clamp-2 mt-0.5">
            {product.description}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#EFE8DE]">
          <div className="font-extrabold text-sm text-[#8B0000]">
            S/ {product.price.toFixed(2)}
          </div>

          {totalQuantity > 0 ? (
            <div className="flex items-center justify-between bg-[#8B0000] text-white rounded-xl p-1">
              <button
                onClick={handleDecrement}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[#A30000]"
                aria-label="Decrementar"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-extrabold text-xs">{totalQuantity}</span>
              <button
                onClick={handleIncrement}
                className="w-9 h-9 rounded-lg bg-[#F4C430] text-[#3A0009] font-black flex items-center justify-center hover:brightness-110"
                aria-label="Incrementar"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleQuickAdd}
              className={`w-full min-h-11 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                justAdded
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#8B0000] hover:bg-[#A30000] text-white shadow-sm'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>AGREGADO</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>AGREGAR</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

    </article>
  );
}
