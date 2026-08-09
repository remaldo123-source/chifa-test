import React from 'react';
import { Flame, UtensilsCrossed, MessageSquare, ShieldCheck } from 'lucide-react';

const POINTS = [
  { icon: UtensilsCrossed, title: '100% AUTÉNTICO', sub: 'Tradición chino-peruana' },
  { icon: Flame, title: 'WOK A FUEGO VIVO', sub: 'Preparado al momento' },
  { icon: MessageSquare, title: 'PEDIDO POR WHATSAPP', sub: 'Sin apps ni registros' },
  { icon: ShieldCheck, title: 'GARANTÍA RÍO LARGO', sub: 'Porciones generosas' },
];

export default function TrustBar() {
  return (
    <div className="bg-burgundy-950 border-y border-gold-500/25">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, idx) => (
            <div
              key={point.title}
              className={`flex items-center gap-3 px-4 py-4 lg:px-6 ${
                idx % 2 === 1 ? 'border-l border-white/10' : ''
              } ${idx > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${
                idx > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <point.icon className="w-5 h-5 text-gold-400 shrink-0" strokeWidth={1.8} />
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-extrabold text-white tracking-wide">
                  {point.title}
                </div>
                <div className="text-[10px] text-white/55">{point.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
