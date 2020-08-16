import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="brand-button" onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">Amazing Webshop</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Shopping Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3 className="shopping-categories-title">Shopping Categories</h3>
        <ul className="shopping-categories-list">
          <li>
            <a href="index.html">Chutneys</a>
          </li>
          <li>
            <a href="index.html">Oils</a>
          </li>
          <li>
            <a href="index.html">Oils</a>
          </li>
          <li>
            <a href="index.html">Spices</a>
          </li>
          <li>
            <a href="index.html">Rice</a>
          </li>
          <li>
            <a href="index.html">Flour</a>
          </li>
        </ul>
        <button onClick={closeMenu} className="button-close-sidebar">
          Close
        </button>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            {data.products.map((product) => (
              <li>
                <div className="product">
                  <img src={product.image} className="product-image" alt="product" />
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
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
      </main>

      <footer className="footer">All rights reserved</footer>
    </div>
  );
}

export default App;
