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
import { useAuth } from "./context/auth-context";
import {RequiresAuth} from './components/RequiresAuth'
import { MockAPI } from "./pages/Mockman";

function App() {
  const {isLoggedIn} = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/mock" element={<MockAPI />}/>
        <Route path="/*" element={<_404Page />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <CartPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
