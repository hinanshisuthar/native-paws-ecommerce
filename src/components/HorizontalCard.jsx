import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context"
import { useWishlist } from "../context/wishlist-context";
import '../pages/ProductPage/ProductPage.css'

const HorizontalCard = ({product}) => {
    const {cartState, cartDispatch} = useCart();
    const { wishlistState, wishlistDispatch} = useWishlist();

    return (
        <div className="card-horizontal flex-row-sb" id={product._id}>
            <div className="product">
                <div className="prod-container">
                    <img src={product.img} alt="product" className="hori-img" />
                </div>
            </div>
            <div className="prod-links p-1">
                <div className="prod-content p-0">
                    <h5 className="text-center">{product.title}</h5>
                    <div className="prod-info">
                        <span className="prod-price">Rs {product.price}</span>
                    </div>
                </div>
                <div className="prod-quantity flex-row-sb pl-sm">
                    <button className="btn btn-float p-sm" onClick={() => cartDispatch({type: 'INCREASE_QUANTITY', payload: product})}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <span className="p-sm">{product.quantity}</span>
                    <button className="btn btn-float" onClick={() => cartDispatch({type: 'DECREASE_QUANTITY', payload: product})}>
                        <i className="fas fa-minus p-sm"></i>
                    </button>
                </div>
                <div className="prod-btn flex-row-sb pl-0">
                    {
                        wishlistState.wishlist.find((item) => item._id === product._id) ?
                        <Link to="/wishlist" className="router-link">
                        <button className="btn btn-secondary">Go To Wishlist</button>
                        </Link> : 
                        <button className="btn btn-primary" onClick={() => wishlistDispatch({type: 'ADD_TO_WISHLIST', payload: product})}>Add To Wishlist</button>
                    }
                        
                    <h5><button className="" onClick={() => cartDispatch({type: 'REMOVE_FROM_CART', payload: product})}>
                            <i className="fas fa-trash-alt" id="delete-btn"></i>
                        </button></h5>
                </div>
            </div>
        </div>
    )
}

export {HorizontalCard}