import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from './pages/ProductPage/ProductPage'
import {WishlistPage} from './pages/Wishlist Page/WishlistPage'
import {CartPage} from './pages/Cart Page/CartPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
