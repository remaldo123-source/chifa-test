import React from 'react';
import { Search, Utensils, Flame, Sparkles, Soup, Cookie, Coffee, Package, GlassWater, UtensilsCrossed } from 'lucide-react';
import { CATEGORIES } from '../data/menuData';

const ICON_MAP = {
  Utensils: Utensils,
  Flame: Flame,
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  Soup: Soup,
  Cookie: Cookie,
  Coffee: Coffee,
  Package: Package,
  GlassWater: GlassWater,
};

export default function CategoryNav({ activeCategory, onSelectCategory, searchQuery, onSearchChange, categoryCounts }) {
  return (
    <div className="sticky top-16 z-40 bg-cream-100/95 backdrop-blur-md border-b border-cream-300 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 py-2.5 space-y-2.5">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Buscar chaufa, wantán, lomo..."
            aria-label="Buscar platos"
            className="w-full pl-10 pr-9 py-2.5 text-xs font-semibold bg-white border border-cream-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25 rounded-full text-ink-900 outline-none transition-all placeholder:text-ink-400 shadow-card"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-bold text-burgundy-700 hover:underline"
              aria-label="Limpiar búsqueda"
            >
              Borrar
            </button>
          )}
        </div>

        {/* Horizontal category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map(cat => {
            const IconComponent = ICON_MAP[cat.icon] || Utensils;
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-bold text-[11px] whitespace-nowrap transition-all duration-200 border shrink-0 ${
                  isActive
                    ? 'bg-burgundy-700 text-gold-100 border-gold-500 shadow-glow-red'
                    : 'bg-white text-ink-700 border-cream-300 hover:border-gold-500'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-burgundy-700'}`} strokeWidth={1.9} />
                {cat.name}
                {count > 0 && cat.id !== 'todos' && (
                  <span
                    className={`px-1.5 py-0.5 text-[9px] font-black rounded-full ${
                      isActive ? 'bg-gold-500 text-burgundy-900' : 'bg-cream-200 text-ink-500'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
