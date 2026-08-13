// WhatsApp Order Builder & URL Generator for Río Largo (+51935281077)

export const PHONE_NUMBER = '51935281077';

export const DELIVERY_FEE = 5.00;

export function formatCurrency(amount) {
  return `S/ ${Number(amount).toFixed(2)}`;
}

export function generateWhatsAppMessage({ cart, customerDetails, deliveryType, generalNotes, paymentMethod }) {
  if (!cart || cart.length === 0) return '';

  const isDelivery = deliveryType === 'delivery';

  let text = `🍽️ NUEVO PEDIDO - RÍO LARGO\n\n`;

  if (customerDetails?.name) {
    text += `👤 Cliente: ${customerDetails.name}\n`;
  }
  if (isDelivery) {
    text += `📍 Dirección: ${customerDetails?.address || ''}\n`;
    if (customerDetails?.reference) {
      text += `📌 Referencia: ${customerDetails.reference}\n`;
    }
  }
  if (paymentMethod) {
    text += `💳 Pago: ${paymentMethod}\n`;
  }

  text += `\nProductos:\n`;

  let grandTotal = 0;

  cart.forEach(item => {
    const itemTotal = item.totalPrice;
    grandTotal += itemTotal;

    let line = `- ${item.quantity}x ${item.product.name} — ${formatCurrency(item.product.price)} c/u = ${formatCurrency(itemTotal)}`;
    text += `${line}\n`;

    if (item.selectedExtras && item.selectedExtras.length > 0) {
      const extrasStr = item.selectedExtras.map(e => `+${e.name}`).join(', ');
      text += `  Extras: ${extrasStr}\n`;
    }
    if (item.itemNotes && item.itemNotes.trim()) {
      text += `  Nota: ${item.itemNotes.trim()}\n`;
    }
  });

  if (generalNotes && generalNotes.trim()) {
    text += `\n📝 Nota: ${generalNotes.trim()}\n`;
  }

  let totalLine = `${formatCurrency(grandTotal)}`;
  if (isDelivery) {
    totalLine = `${formatCurrency(grandTotal)} + 🚚 ${formatCurrency(DELIVERY_FEE)} = ${formatCurrency(grandTotal + DELIVERY_FEE)}`;
  }

  text += `\n💰 TOTAL: ${totalLine}\n`;
  text += `\n¡Gracias por tu pedido! 🥢✨`;

  return text;
}

export function openWhatsAppCheckout(cartState) {
  const message = generateWhatsAppMessage(cartState);
  if (!message) return;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
