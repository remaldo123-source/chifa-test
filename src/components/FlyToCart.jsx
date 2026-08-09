import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function FlyToCart() {
  const { flyItem } = useCart();
  const [started, setStarted] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!flyItem) return;
    setStarted(false);
    setItem(flyItem);
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setStarted(true)));
    const timer = setTimeout(() => setItem(null), 680);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [flyItem]);

  if (!item) return null;

  const dx = item.to.x - item.from.x;
  const dy = item.to.y - item.from.y;
  const scale = Math.min(item.to.size / item.from.size, 1);

  return (
    <img
      src={item.image}
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] rounded-xl object-cover"
      style={{
        width: item.from.size,
        height: item.from.size,
        left: item.from.x,
        top: item.from.y,
        transform: started ? `translate(${dx}px, ${dy}px) scale(${scale})` : 'translate(0, 0) scale(1)',
        opacity: started ? 0.2 : 1,
        transition: started
          ? 'transform 0.62s cubic-bezier(0.5, 0.02, 0.68, 0.55), opacity 0.5s ease 0.2s'
          : 'none',
        transformOrigin: 'center center',
        boxShadow: '0 14px 34px rgba(0, 0, 0, 0.35)',
      }}
    />
  );
}
