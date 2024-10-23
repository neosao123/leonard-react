import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const existingItem = state?.cart.find(
            (cartItem) => cartItem?.id === item?.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem?.id === item?.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }

          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }
        ),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      incrementQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decrementQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-data",
      storage: createJSONStorage(() => localStorage),
    },
  )
);

export default useCartStore;
