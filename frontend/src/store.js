import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers"

const cartItems = Cookie.getJSON("cartItems") || []

const initialState = { cart: {cartItems} };

// reducer is a function that gets a state and action,
// and returns a new state based on that action
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
});

// The Redux Devtools code line 11 is taken from the GitHub repo
// https://github.com/zalmoxisus/redux-devtools-extension#usage
// this adds Redux devtools to Firefox

const composeEnhancer =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// store accepts three parameters: reducer, initialState and middleware
// thunk is middleware for Redux that allows to run async operations in the Redux actions
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
