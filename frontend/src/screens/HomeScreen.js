import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function HomeScreen(props) {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <Link to={"/product/" + product._id}>
                <img src={product.image} className="product-image" alt="product" />
              </Link>
              <div className="product-name">
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">
                ${product.price}
                <small> (100 gr)</small>
              </div>
              <div className="product-rating">
                {product.rating} Stars ({product.numReviews})
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
