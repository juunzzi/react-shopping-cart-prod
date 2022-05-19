import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "../lib/thunk";
import { productReducer } from "./product";
import { Product } from "./product/type";
import { productsReducer } from "./products";
import { Products } from "./products/type";

const rootReducer = combineReducers({
  product: productReducer,
  products: productsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default rootReducer;
export interface RootState {
  product: Product;
  products: Products;
}
