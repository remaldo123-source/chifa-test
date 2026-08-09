export function getBadgeStyle(badgeType) {
  switch (badgeType) {
    case 'fire':
    case 'mas-pedido':
      return 'bg-[#E6AF2E] text-[#3A0009]';
    case 'gold':
      return 'bg-[#B8860B] text-white';
    case 'red':
    case 'recomendado':
      return 'bg-[#8B0000] text-white';
    case 'star':
    case 'favorito':
      return 'bg-[#2B0005] text-[#F4C430] border border-[#D4AF37]/60';
    case 'new':
    case 'nuevo':
      return 'bg-[#4C6B47] text-white';
    default:
      return 'bg-[#8B0000] text-white';
  }
}
