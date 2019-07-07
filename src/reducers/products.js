import { FETCH_PRODUCTS } from "../constants/actionTypes";
import products from "../data/products";

const initialState = {
    products: products
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state
            };
        default:
            return state;
    }
}
