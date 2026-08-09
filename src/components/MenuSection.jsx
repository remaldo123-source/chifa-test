import React, { useMemo } from 'react';
import { PRODUCTS } from '../data/menuData';
import ProductCard from './ProductCard';

export default function MenuSection({ activeCategory, searchQuery }) {
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory === 'favoritos') {
      list = PRODUCTS.filter(p => p.featured);
    } else if (activeCategory && activeCategory !== 'todos') {
      list = PRODUCTS.filter(p => p.category === activeCategory);
    }
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-4">
      {/* 2-Column Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full bg-white border border-[#E2D7C7] rounded-2xl p-10 text-center space-y-2">
            <span className="text-4xl block" aria-hidden="true">🍜</span>
            <h4 className="font-bold text-sm text-[#1A1817] uppercase">No encontramos platos con esa búsqueda</h4>
            <p className="text-xs text-[#786F6B]">Prueba con "chaufa", "wantán" o "lomo".</p>
          </div>
        )}
      </div>

      {/* Ver más platos button */}
      <div className="text-center pt-4">
        <button className="px-6 py-2.5 rounded-xl border border-[#E2D7C7] text-xs font-bold text-[#1A1817] hover:bg-[#E2D7C7] transition">
          VER MÁS PLATOS ⌄
        </button>
      </div>
    </div>
  );
}
