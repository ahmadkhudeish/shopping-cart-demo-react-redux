import { FETCH_PRODUCTS } from "../constants/actionTypes";

const products = [];

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
    payload: products
});
