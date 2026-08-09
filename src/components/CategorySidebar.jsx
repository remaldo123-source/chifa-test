import React from 'react';
import { CATEGORIES } from '../data/menuData';

const ICON_MAP = {
  favoritos: '⭐',
  chaufas: '🍚',
  tallarines: '🍜',
  saltados: '🍳',
  arroces: '🍚',
  especiales: '🍲',
  entradas: '🥟',
  sopas: '🥣',
  wantanes: '🥟',
  combos: '👨‍👩‍👧',
  bebidas: '🥤',
};

export default function CategorySidebar({ activeCategory, onSelectCategory }) {
  return (
    <div className="bg-white border border-[#E2D7C7] rounded-2xl p-4 shadow-sm space-y-2 sticky top-24">
      <div className="text-xs font-black uppercase tracking-wider text-[#8B0000] border-b border-[#E2D7C7] pb-2 mb-3">
        — CATEGORÍAS
      </div>

      <nav className="flex flex-col space-y-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const icon = ICON_MAP[cat.id] || '🥢';
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                isActive
                  ? 'bg-[#8B0000] text-white shadow-md'
                  : 'text-[#2B2625] hover:bg-[#F7F3ED] hover:text-[#8B0000]'
              }`}
            >
              <span className="text-sm">{icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
