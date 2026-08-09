import React, { createContext, useContext, useState, useEffect } from 'react';
import { openWhatsAppCheckout } from '../utils/whatsapp';

const CartContext = createContext();

const STORAGE_KEY = 'rio_largo_cart_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [deliveryType, setDeliveryType] = useState('delivery');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    reference: '',
  });
  const [generalNotes, setGeneralNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Yape');
  
  // UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isWhatsAppPreviewOpen, setIsWhatsAppPreviewOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState(null);
  const [cartAnimationTrigger, setCartAnimationTrigger] = useState(0);
  const [toast, setToast] = useState(null);
  const [flyItem, setFlyItem] = useState(null);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart state', e);
    }
  }, [cart]);

  // Unique Cart Item ID creator based on product + extras + notes
  const createCartItemId = (product, selectedExtras = [], itemNotes = '') => {
    const extraIds = selectedExtras.map(e => e.id).sort().join('-');
    const noteHash = itemNotes.trim().toLowerCase();
    return `${product.id}::${extraIds}::${noteHash}`;
  };

  const calculateItemPrice = (product, selectedExtras = [], quantity = 1) => {
    const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
    const unitPrice = product.price + extrasTotal;
    return {
      unitPrice,
      totalPrice: unitPrice * quantity,
    };
  };

  const addItem = (product, quantity = 1, selectedExtras = [], itemNotes = '') => {
    const cartItemId = createCartItemId(product, selectedExtras, itemNotes);
    const { unitPrice, totalPrice } = calculateItemPrice(product, selectedExtras, quantity);

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: unitPrice * newQty,
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            product,
            quantity,
            selectedExtras,
            itemNotes,
            unitPrice,
            totalPrice,
          },
        ];
      }
    });

    // Trigger feedback bounce animation
    setCartAnimationTrigger(prev => prev + 1);

    // Toast confirmation
    setToast({ id: Date.now(), name: product.name });
  };

  const triggerFly = (image, fromRect) => {
    if (window.matchMedia('(min-width: 1024px)').matches === false) return;
    const target = document.querySelector('[data-cart-target]');
    if (!target) return;
    const to = target.getBoundingClientRect();
    const size = Math.max(fromRect.width, fromRect.height);
    setFlyItem({
      id: Date.now(),
      image,
      from: { x: fromRect.x, y: fromRect.y, size },
      to: { x: to.x + to.width / 2, y: to.y + to.height / 2, size: Math.min(to.width, to.height) },
    });
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: item.unitPrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Helper getters
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const checkoutWithWhatsApp = () => {
    if (cart.length === 0) return;
    setIsWhatsAppPreviewOpen(true);
  };

  const confirmWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    openWhatsAppCheckout({
      cart,
      customerDetails,
      deliveryType,
      generalNotes,
      paymentMethod,
    });
    setIsWhatsAppPreviewOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        deliveryType,
        setDeliveryType,
        customerDetails,
        setCustomerDetails,
        generalNotes,
        setGeneralNotes,
        paymentMethod,
        setPaymentMethod,
        isCartOpen,
        setIsCartOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        isWhatsAppPreviewOpen,
        setIsWhatsAppPreviewOpen,
        confirmWhatsAppCheckout,
        customizingProduct,
        setCustomizingProduct,
        cartAnimationTrigger,
        toast,
        flyItem,
        triggerFly,
        totalItems,
        totalAmount,
        checkoutWithWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
