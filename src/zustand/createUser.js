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
                    localStorage.setItem("token", payload.authorisation.token)
                    return { user: { ...payload.user }, token: payload.authorisation.token, isAuthorized: true }
                })
            },
            logout: () => {
                set((state) => {
                    localStorage.setItem("token", "")
                    return { user: {}, token: "", isAuthorized: false }
                })
            },
            addUser: (payload) => {
                set((state) => {
                    return { user: payload }
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
