import axios from "axios";
import http from "./http";

export const getBooksData = async () => {
    const { data } = await axios.get("https://leonard.neosao.online/api/v1/home-page/products");
    return data;
}