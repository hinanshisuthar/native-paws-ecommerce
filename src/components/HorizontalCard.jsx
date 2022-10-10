import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import "../pages/ProductPage/ProductPage.css";

const HorizontalCard = ({ product }) => {
  const { removeProductFromCart, updateProductQntyInCart } = useCart();

  const {
    wishlist,
    setWishlist,
    addProductToWishlist,
    removeProductFromWishlist,
  } = useWishlist();
  
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
          <button
            className="btn btn-float p-sm"
            onClick={() => updateProductQntyInCart(product._id, "increment")}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="p-sm">{product.quantity}</span>
          <button
            className="btn btn-float"
            onClick={() =>
              product.quantity > 1
                ? updateProductQntyInCart(product._id, "decrement")
                : null
            }
          >
            <i className="fas fa-plus p-sm"></i>
          </button>
        </div>
        <div className="prod-btn flex-row-sb pl-0">
          {wishlist.find((item) => item._id === product._id) ? (
            <Link to="/wishlist" className="router-link">
              <button className="btn btn-secondary">Go To Wishlist</button>
            </Link>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => addProductToWishlist(product)}
            >
              Add To Wishlist
            </button>
          )}

          <h5>
            <button
              className=""
              onClick={() => removeProductFromCart(product._id)}
            >
              <i className="fas fa-trash-alt" id="delete-btn"></i>
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
