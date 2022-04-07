import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import { PlaceTag } from "../pages/Cart Page/PlaceOrder";
import { useProduct } from "../utilities/ProductContext";

const Navbar = () => {
  const [show, toggleShow] = useState(false);
  const [showHamburgerMenu, toggleHamburgerMenu] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const [showOfferTag, setShowOfferTag] = useState("none");
  const { search, setSearch } = useProduct();

  const showOptions = () => {
    toggleShow(!show);
  };

  const hamburgerMenu = () => {
    toggleHamburgerMenu(!showHamburgerMenu);
  };

  const handleOfferTag = () => {
    setShowOfferTag("flex");
  };

  return (
    <>
      <header className="page-header flex-col-sb">
        <div className="header-content flex-row-sb p-1">
          <Link to="/" className="logo">
            <img
              src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500585/home/logo_bbmksz.webp"
              alt="logo"
              className="min-img img-responsive"
            />
          </Link>
          <div className="search-con flex-row-sb img-responsive">
            <form action="#" className="form-search flex-row-sb">
              <input
                type="text"
                className="text-rg pl-1"
                id="search-field"
                placeholder="Search the entire store..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="btn-icon pr-sm">
                <i className="fa-solid fa-magnifying-glass search-icon thin"></i>
              </button>
            </form>
          </div>
          <div className="flex-row-sb right-nav px-sm">
            <div className="shop-con flex-row-sb">
              <Link to="/products" className="link">
                <h5>Shop All Products</h5>
              </Link>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              className="experience-con flex-row-sb link"
              style={{ cursor: "pointer" }}>
              <h5 onClick={handleOfferTag} className="link">
                Offers
              </h5>
            </div>
            <div className="location-con">
              <div className="location flex-row-sb">
                <Link className="link" to="/">
                  <h5>Location</h5>
                </Link>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="dropdown account-con">
              <button onClick={showOptions}>
                <i className="fa-regular fa-user text-md dropbtn"></i>
              </button>
              {show && (
                <div
                  id="myDropdown"
                  className="dropdown-content"
                  style={{ display: "block" }}>
                  <Link to="/sign-up" className="p-1">
                    Sign Up
                  </Link>
                  <Link to="/log-in" className="p-1">
                    Log In
                  </Link>
                  <Link to="/log-out" className="p-1">
                    Log Out
                  </Link>
                </div>
              )}
            </div>
            <div className="wish-con">
              <Link to="/wishlist">
                <span className="badge-icon badge-container">
                  <i className="fas fa-heart badge-icon-base text-md"></i>
                  {wishlistState.wishlist.length === 0 ? (
                    <span></span>
                  ) : (
                    <span className="count-badge heart-badge-number">
                      {wishlistState.wishlist.length}
                    </span>
                  )}
                </span>
              </Link>
            </div>
            <div className="cart-con">
              <Link to="/cart">
                <span className="badge-icon badge-container">
                  <i className="fa-solid fa-cart-shopping text-md"></i>
                  {cartState.cart.length === 0 ? (
                    <span></span>
                  ) : (
                    <span className="count-badge heart-badge-number">
                      {cartState.cart.length}
                    </span>
                  )}
                </span>
              </Link>
            </div>
          </div>
          <div className="bars-con" onClick={hamburgerMenu}>
            <div className="user">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div className="search-btm p-1">
          <form action="#" className="form-search flex-row-sb">
            <input
              type="text"
              className="text-rg pl-1"
              id="search-field"
              placeholder="search the entire store..."
            />
            <button type="submit" className="btn-icon pr-sm">
              <i className="fa-solid fa-magnifying-glass search-icon thin"></i>
            </button>
          </form>
        </div>
        {showHamburgerMenu && (
          <div className="menu p-sm" style={{ display: "block" }}>
            <h5>
              <Link to="/products">Shop All Products</Link>
            </h5>
            <h5>
              <Link to="/wishlist">My Wishlist</Link>
            </h5>
            <h5>
              <Link to="/cart">My Shopping Cart</Link>
            </h5>
            <h5>
              <Link to="/">Location</Link>
            </h5>
            <h5>
              <Link to="/sign-up">Sign Up</Link>
            </h5>
            <h5>
              <Link to="/log-in">Log In</Link>
            </h5>
          </div>
        )}
      </header>
      {showOfferTag === "flex" ? <PlaceTag /> : showOfferTag === "none"}
    </>
  );
};

export { Navbar };
