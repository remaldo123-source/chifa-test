import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function SocialGrid() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', size: 'large' },
    { src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80', size: 'medium' },
    { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80', size: 'small' },
    { src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80', size: 'small' },
  ];

  const instaUrl = RESTAURANT_INFO.instagram;

  return (
    <section className="py-16 lg:py-24 bg-[#F6F0E6] text-[#171313]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-2">
          <span className="seal">COMUNIDAD CHIFERA</span>
          <h2 className="proun-text font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#171313]">
            SIGUE EL <span className="text-[#7A0508]">SABOR</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#756D6A] font-medium">
            Río Largo también se vive fuera de la mesa.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group border border-[#E2D5C2] min-h-[300px]"
          >
            <img
              src={images[0].src}
              alt="Río Largo Instagram Feature"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#160708]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-xs gap-2">
              <InstagramIcon className="w-5 h-5 text-[#D6A62A]" />
              <span>VER EN INSTAGRAM</span>
            </div>
          </a>

          {images.slice(1).map((img, i) => (
            <a
              key={i}
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden group border border-[#E2D5C2] aspect-square"
            >
              <img
                src={img.src}
                alt="Río Largo Instagram"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#160708]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-[10px] gap-1.5">
                <InstagramIcon className="w-4 h-4 text-[#D6A62A]" />
                <span>VER POST</span>
              </div>
            </a>
          ))}
        </div>

        {/* Clean Instagram Link Button */}
        <div className="text-center pt-4">
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7A0508] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8E0A0D] border border-[#D6A62A]/40 transition-all hover:scale-105"
          >
            <InstagramIcon className="w-4 h-4 text-[#D6A62A]" />
            <span>SÍGUENOS EN {RESTAURANT_INFO.instagramDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
