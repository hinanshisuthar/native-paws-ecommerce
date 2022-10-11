import { Navbar } from "../../components/Navbar";
import { VertDismissCard } from "../../components/VertDismissCard";
import { useWishlist } from "../../context/wishlist-context";
import "./wishlist.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
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
      <div className="cart-wrapper mt-2">
        <h1 className="center p-md title">
          My Wishlist ( <span>{wishlist.length}</span>)
        </h1>
        <hr className="center" />
        {wishlist.length === 0 ? (
          <Link to="/products" className="center">
            <button className="btn btn-primary m-sm">
              Add products to Wishlist
            </button>
          </Link>
        ) : (
          <div className="wish-prods grid grid-3-col grid-3-col-auto pt-md">
            {wishlist.map((product) => {
              return <VertDismissCard product={product} key={product._id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export { WishlistPage };
