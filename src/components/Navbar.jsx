import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show, toggleShow] = useState(false);
    const [showHamburgerMenu, toggleHamburgerMenu] = useState(false);

    const showOptions = () => {
        toggleShow(!show)
    }

    const hamburgerMenu = () => {
        toggleHamburgerMenu(!showHamburgerMenu)
    }

    return (
        <>
        <header className="page-header flex-col-sb">
            <div className="header-content flex-row-sb p-1">
                <Link to="/" className="logo">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500585/home/logo_bbmksz.webp" alt="logo" className="min-img img-responsive" />
                </Link>
                <div className="search-con flex-row-sb img-responsive">
                    <form action="#" className="form-search flex-row-sb">
                        <input type="text" className="text-rg pl-1" id="search-field" placeholder="Search the entire store..." />
                        <button type="submit" className="btn-icon pr-sm"><i
                                className="fa-solid fa-magnifying-glass search-icon thin"></i></button>
                    </form>
                </div>
                <div className="flex-row-sb right-nav px-sm">
                    <div className="shop-con flex-row-sb">
                        <Link to="/products" className="link">
                            <h5>Shop All Products</h5>
                        </Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="experience-con flex-row-sb">
                        <a className="link" href="#">
                            <h5>Offers</h5>
                        </a>
                    </div>
                    <div className="location-con">
                        <div className="location flex-row-sb">
                            <a className="link" href="#">
                                <h5>Location</h5>
                            </a>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className="dropdown account-con">
                        <button  onClick={showOptions}><i className="fa-regular fa-user text-md dropbtn"></i></button>
                        {show && <div id="myDropdown" className="dropdown-content" style={{display: 'block'}}>
                            <a href="/screens/sign-up.html" className="p-1">Sign Up</a>
                            <a href="/screens/log-in.html" className="p-1">Log In</a>
                            <a href="/screens/user-profile.html" className="p-1">My Account</a>
                        </div> }
                    </div>
                    <div className="wish-con">
                        <a href="/screens/wishlist-page.html">
                            <span className="badge-icon badge-container"><i
                                    className="fas fa-heart badge-icon-base text-md"></i>
                                <span className="count-badge heart-badge-number">4</span>
                            </span>
                        </a>
                    </div>
                    <div className="cart-con">
                        <a href="/screens/cart-page.html">
                            <span className="badge-icon badge-container"><i className="fa-solid fa-cart-shopping text-md"></i>
                            <span className="count-badge cart-badge-number">3</span></span>
                        </a>
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
                    <input type="text" className="text-rg pl-1" id="search-field" placeholder="search the entire store..." />
                    <button type="submit" className="btn-icon pr-sm"><i
                            className="fa-solid fa-magnifying-glass search-icon thin"></i></button>
                </form>
            </div>
            {showHamburgerMenu && <div className="menu p-sm" style={{display: 'block'}}>
                <h5><a href="/screens/product-page.html">Shop All Products</a></h5>
                <h5><a href="/screens/wishlist-page.html">My Wishlist</a></h5>
                <h5><a href="/screens/cart-page.html">My Shopping Cart</a></h5>
                <h5><a href="">Location</a></h5>
                <h5><a href="/screens/sign-up.html">Sign Up</a></h5>
                <h5><a href="/screens/log-in.html">Log In</a></h5>
            </div> }
        </header>
        </>
    )
}

export {Navbar};