import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

// The Redux Devtools code line 11 is taken from the GitHub repo https://github.com/zalmoxisus/redux-devtools-extension#usage

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
