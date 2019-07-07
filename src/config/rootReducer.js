import { combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";

export default combineReducers({
    cart: cartReducer,
    products: productsReducer
});
