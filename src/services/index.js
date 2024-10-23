import axios from "axios";
import http from "./http";

export const getBooksData = async () => {
    const { data } = await http.get("home-page/products");
    return data;
};

export const signIn = async (payload) => {
    const data = http.post("auth/signin", payload);
    return data;
}

export const signUp = async (payload) => {
    const data = http.post("auth/signup", payload);
    return data;
}

export const AddProductToCart = async (payload) => {
    const data = http.post('cart', payload);
    return data;
}

export const RemoveCartItem = async (payload) => {
    const data = http.delete(`cart/items/${payload.cart_id}/${payload.product_id}`);
    return data;
}

export const ClearCart = async (key) => {
    const data = http.delete(`cart/${key}`)
    return data;
}

