import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
    persist(
        (set) => ({
            user: {},
            token: "",
            isAuthorized: false,

            login: (payload) => {
                set((state) => {
                    return { user: { ...payload.user }, token: payload.authorisation.token, isAuthorized: true }
                })
            },
            logout: () => {
                set((state) => {
                    return { user: {}, token: "", isAuthorized: false }
                })
            }
        }),
        {
            name: "auth-data",
            storage: createJSONStorage(() => localStorage),
        },
    )
);

export default useCartStore;
