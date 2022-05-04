import { useWishlist } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";

const VertDismissCard = ({ product }) => {
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  return (
    <div className="card-badge" id={product._id}>
      <div className="product">
        <div className="prod-container">
          <img src={product.img} alt="product" />
          <span
            className="btn-badge-dismiss"
            onClick={() =>
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              })
            }
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
          <button
            className="btn btn-secondary text-regular"
            onClick={() =>
              cartDispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            <i className="fa-solid fa-cart-shopping thin"></i>
            Move To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { VertDismissCard };
