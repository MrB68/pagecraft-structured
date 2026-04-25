import { create } from "zustand";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface POSState {
  cart: CartItem[];
  addToCart: (product: { id: string; name: string; price: string }) => void;
  removeFromCart: (productId: string) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9.]/g, "");
  const parsed = parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

export const usePOSStore = create<POSState>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const numericPrice = parsePrice(product.price);
    set((state) => {
      const existing = state.cart.find((item) => item.productId === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [
          ...state.cart,
          {
            productId: product.id,
            name: product.name,
            price: numericPrice,
            quantity: 1,
          },
        ],
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    }));
  },

  increaseQty: (productId) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  decreaseQty: (productId) => {
    set((state) => {
      const item = state.cart.find((i) => i.productId === productId);
      if (!item) return state;
      if (item.quantity <= 1) {
        return {
          cart: state.cart.filter((i) => i.productId !== productId),
        };
      }
      return {
        cart: state.cart.map((i) =>
          i.productId === productId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
      };
    });
  },

  clearCart: () => set({ cart: [] }),

  getTotal: () => {
    return get().cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));

