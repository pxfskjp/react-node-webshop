import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button className="brand-button" onclick="openMenu()">
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
        <li><a href="index.html">Chutneys</a></li>
        <li><a href="index.html">Oils</a></li>
        <li><a href="index.html">Oils</a></li>
        <li><a href="index.html">Spices</a></li>
        <li><a href="index.html">Rice</a></li>
        <li><a href="index.html">Flour</a></li>
      </ul>
      <button onclick="closeMenu()" className="button-close-sidebar">Close</button>
    </aside>

    <main className="main">
      <div className="content">
        <ul className="products">

          <li>
            <div className="product">
              <img src="images/asian-food1.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of spices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food3.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Spices in any quantity</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food2.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of spices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          
          <li>
            <div className="product">
              <img src="images/asian-food4.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Spices in any quantity</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food5.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of rices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$5 <small>(1 kg)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food1.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of spices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food2.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of spices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

          <li>
            <div className="product">
              <img src="images/asian-food3.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Spices in any quantity</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>

          </li>
          <li>
            <div className="product">
              <img src="images/asian-food4.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Spices in any quantity</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$37 <small>(100 gr)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="images/asian-food5.jpeg" className="product-image" alt="product"/>
              <div className="product-name">
                <a href="product.html">Assortment of rices</a>
              </div>
              <div className="product-brand">India's Finest</div>
              <div className="product-price">$5 <small>(1 kg)</small></div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>

        </ul>
      </div>
    </main>

    <footer className="footer">
      All rights reserved
    </footer>
  </div>
  );
}

export default App;
