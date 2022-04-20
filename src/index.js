import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./utilities/ProductContext";
import { WishlistProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";
import { AuthProvider } from "./utilities/context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <App />
            </Router>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
