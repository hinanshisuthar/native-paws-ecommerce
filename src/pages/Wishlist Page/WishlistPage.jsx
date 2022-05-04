import { Navbar } from "../../components/Navbar"
import { VertDismissCard } from "../../components/VertDismissCard";
import { useWishlist } from "../../context/wishlist-context";
import './wishlist.css'
import { Link } from "react-router-dom";

const WishlistPage = () => {
    const { wishlist } = useWishlist();
return (
    <>
    <Navbar />
        <div className="cart-wrapper mt-2">
            <h1 className="center p-md title">My Wishlist ( <span>{wishlist.length}</span>-items)</h1>
            <hr className="center" />
            {wishlist.length === 0 ? (
                <Link to="/products" className="center">
                    <button className="btn btn-primary m-sm">Add products to Wishlist</button>
                </Link>
            ) : (
            <div className="wish-prods grid grid-3-col grid-3-col-auto pt-md">
                {wishlist.map((product) => {
                    return <VertDismissCard product={product} id={product._id}/>
                })}
            </div>
            )}
            
        </div>
    </>
)
}

export {WishlistPage};