import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set) => ({
      cart: {},
      cartuid: "",

      updateCardUID: (uid) => set((state) => {
        return { cartuid: uid }
      }),

      addToCart: (cart) =>
        set((state) => {
          return { cart: cart };
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
