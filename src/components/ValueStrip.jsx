import React from 'react';

export default function ValueStrip() {
  const values = [
    { icon: '🥢', text: 'SABOR AUTÉNTICO' },
    { icon: '🔥', text: 'PREPARADO AL MOMENTO' },
    { icon: '❤️', text: 'HECHO CON DEDICACIÓN' },
    { icon: '📲', text: 'PEDIDO FÁCIL POR WHATSAPP' },
  ];

  return (
    <section className="bg-[#7A0508] border-y border-[#D6A62A]/40 text-white py-3.5 px-4 shadow-sm relative z-20">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-black uppercase tracking-wider">
        {values.map((v, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2 text-white">
              <span className="text-base">{v.icon}</span>
              <span className="text-[#F6F0E6]">{v.text}</span>
            </div>
            {i < values.length - 1 && (
              <span className="hidden md:inline text-[#D6A62A] opacity-60">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
