import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function CartScreen(props) {
  const productId = props.match.params.id;
  // the product id is found by searching the url, and converting the result
  // to a number using Number(); the search result after ?qty is '=4' for example,
  // and only the number '4' is selected by splitting the '=' and '4', taking
  // one digit to the right of '='. If digit does not exist, default is '1'
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return <div>Cart Screen</div>;
}

export default CartScreen;
