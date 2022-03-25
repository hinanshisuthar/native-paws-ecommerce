import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { ProductProvider } from "./utilities/ProductContext";
import { WishlistProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <App />
            </Router>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
  </React.StrictMode>,  
  document.getElementById("root")
);
