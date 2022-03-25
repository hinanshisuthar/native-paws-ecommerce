import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { ProductProvider } from "./utilities/ProductContext";
import { WishlistProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
      <ProductProvider>
        <WishlistProvider>
          <Router>
            <App />
          </Router>
        </WishlistProvider>
      </ProductProvider>
  </React.StrictMode>,  
  document.getElementById("root")
);
