import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from './pages/ProductPage/ProductPage'
import { WishlistPage } from './pages/Wishlist Page/WishlistPage'
import { CartPage } from './pages/Cart Page/CartPage'
import { SignUp } from "./pages/Auth Pages/SignUp";
import { LogIn } from "./pages/Auth Pages/LogIn";
import { LogOut } from "./pages/Auth Pages/LogOut";
import { SingleProduct } from "./pages/single product page/SingleProductPage";
import {_404Page} from './pages/404-page/404Page'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/*" element={<_404Page />} />
      </Routes>
    </div>
  );
}

export default App;
