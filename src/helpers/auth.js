import createUser from "../zustand/createUser";


export const isAuthenticated = () => {
    const token = createUser((state) => state.token);
    return !!token;
};
