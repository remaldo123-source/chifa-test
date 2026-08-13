import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/menuData';
import { getBadgeStyle } from '../utils/badges';

export default function FeaturedProducts() {
  const { addItem, setCustomizingProduct } = useCart();

  const favoritos = [
    {
      id: 'chaufa-especial',
      name: 'Arroz Chaufa Especial',
      price: 18.00,
      badge: 'MAS PEDIDO',
      badgeType: 'mas-pedido',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'tallarin-especial',
      name: 'Tallarin Saltado Especial',
      price: 20.00,
      badge: 'FAVORITO',
      badgeType: 'favorito',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'lomo-saltado',
      name: 'Lomo Saltado',
      price: 22.00,
      badge: 'RECOMENDADO',
      badgeType: 'recomendado',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <div id="favoritos" className="space-y-6 pt-6 border-t border-[#E2D7C7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* Left Section: 3 Dark Cards for Favoritos (8 Cols) */}
        <div className="xl:col-span-8 space-y-4">
          <h3 className="proun-text font-brand font-black text-xl uppercase tracking-wider text-[#1A1817]">
            LOS FAVORITOS DE RIO LARGO
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {favoritos.map((item) => {
              const fullProduct = PRODUCTS.find(p => p.id === item.id) || { ...item, customizable: false };
              return (
                <div
                  key={item.id}
                  className="bg-[#2B0005] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-md text-white flex flex-col justify-between group"
                >
                  <div className="relative aspect-square overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider shadow-sm ${getBadgeStyle(item.badgeType)}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-white leading-tight line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="font-extrabold text-xs text-[#F4C430] mt-1">
                        S/ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => fullProduct.customizable ? setCustomizingProduct(fullProduct) : addItem(fullProduct, 1)}
                      className="w-full py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-[#8B0000] hover:bg-[#A30000] text-white transition"
                    >
                      AGREGAR AL PEDIDO
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section: NUESTRA HISTORIA Card (4 Cols) */}
        <div className="xl:col-span-4 space-y-2">
          <div className="bg-[#F7F3ED] border border-[#E2D7C7] rounded-2xl p-5 shadow-sm space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#8B0000] block">
              NUESTRA HISTORIA
            </span>

            <h4 className="font-brand font-black text-lg text-[#1A1817] uppercase leading-tight">
              UNA HISTORIA QUE SE SIENTE EN CADA PLATO
            </h4>

            <p className="text-xs text-[#786F6B] leading-relaxed">
              Una mesa, dos culturas y un sabor que se volvió parte de nuestra historia.
            </p>

            <div className="rounded-xl overflow-hidden border border-[#E2D7C7] aspect-[16/9]">
              <img
                src="/images/nuestra_historia.png"
                alt="Historia Chifa Rio Largo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <a
              href="#historia"
              className="w-full block text-center py-2.5 rounded-xl text-xs font-bold text-[#1A1817] bg-white border border-[#E2D7C7] hover:bg-[#E2D7C7] transition uppercase"
            >
              CONOCENOS
            </a>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
