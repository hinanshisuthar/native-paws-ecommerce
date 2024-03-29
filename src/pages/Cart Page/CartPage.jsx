import { HorizontalCard } from "../../components/HorizontalCard";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cart-context";
import "./cart.css";
import { CartDetails } from "./CartDetails";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";

const CartPage = () => {
  const { cart } = useCart();
  const { setLoader } = useAuth();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="center m-md">My Shopping Cart</h1>
      <div className="cart-grid grid grid-60-40 auto-flex">
        <div className="cart-cards flex-col-sb p-1">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h3 className="m-md">No products in Cart</h3>
              <Link to="/products" className="">
                <button className="btn btn-primary m-sm">Shop Products</button>
              </Link>
              <Link to="/wishlist" className="">
                <button className="btn btn-secondary m-sm">
                  Go To Wishlist
                </button>
              </Link>
            </div>
          ) : (
            cart?.map((product) => {
              return <HorizontalCard product={product} key={product._id} />;
            })
          )}
        </div>
        <CartDetails />
      </div>
    </>
  );
};

export { CartPage };
