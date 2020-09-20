import { CART_ADD_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        // product.product: 2nd one is product id (see cartActions object of payload)
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x 
          ),
        }}
        return { cartItems: [...state.cartItems, item] }
        default:
          return state
  }
}

export { cartReducer }