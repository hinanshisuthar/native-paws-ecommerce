import { useWishlist } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";
import { useNavigate } from "react-router-dom";

const VertDismissCard = ({ product }) => {
  const { removeProductFromWishlist } = useWishlist();
  const { addProductToCart, cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="card-badge" id={product._id}>
      <div className="product">
        <div className="prod-container">
          <img src={product.img} alt="product" />
          <span
            className="btn-badge-dismiss"
            onClick={() => removeProductFromWishlist(product._id)}
          >
            <i
              className="fa-solid fa-heart px-sm"
              id="close-card"
              style={{ color: "#f34e4e" }}
            ></i>
          </span>
        </div>
        <div className="prod-content">
          <h5>{product.title}</h5>
          <div className="prod-info">
            <span className="prod-price">Rs {product.price}</span>
            <span className="ratings-con" style={{ fontSize: "1rem" }}>
              <i className="fas fa-star"></i>
              {product.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="prod-links">
        <div className="prod-btn">
          {cart.find((item) => item._id === product._id) ? (
            <button
              className="btn btn-secondary text-regular"
              onClick={() => navigate("/cart")}
            >
              <i className="fa-solid fa-cart-shopping thin"></i>
              Go To Cart
            </button>
          ) : (
            <button
              className="btn btn-secondary text-regular"
              onClick={() => addProductToCart(product)}
            >
              <i className="fa-solid fa-cart-shopping thin"></i>
              Move To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { VertDismissCard };
