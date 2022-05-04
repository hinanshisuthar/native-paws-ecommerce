import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { categorizedProducts } from "../../utilities/filters/categorizedProducts";
import { pricedProducts } from "../../utilities/filters/priceRange";
import { sortedProducts } from "../../utilities/filters/sort";
import { useProduct } from "../../context/product-context";
import { useFilter } from "../../context/filter-context";
import { useAuth } from "../../context/auth-context";

const ProductRender = () => {
  const { products, setProducts } = useProduct();
  const { filterState, filterDispatch } = useFilter();
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useWishlist();
  const { cart, addProductToCart } = useCart();
  const { search } = useProduct();
  const { auth } = useAuth();

  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const productData = await axios.get("/api/products");
      setProducts(productData.data.products);
    } catch (err) {
      console.log(`An Error Occured: ${err}`);
    }
  }

  useEffect(() => {
    return function cleanUp() {
      filterDispatch({ type: "CLEAR" });
    };
  }, []);

  const getPricedProducts = pricedProducts(products, filterState.price);

  const getCategoryProducts = categorizedProducts(
    getPricedProducts,
    filterState.categories.food,
    filterState.categories.leash,
    filterState.categories.toys,
    filterState.categories.clothes,
    filterState.categories.small,
    filterState.categories.medium,
    filterState.categories.large,
    filterState.categories.arrival,
    filterState.categories.choice,
    filterState.categories.bestseller
  );

  const finalProductsToRender = sortedProducts(
    getCategoryProducts,
    filterState.sortBy
  );

  const getSearchedNotes = finalProductsToRender.filter((prod) => {
    if (search === "") {
      return prod;
    } else if (prod.title.toLowerCase().includes(search.toLowerCase())) {
      return prod;
    }
  });

  useEffect(() => fetchProducts(), []);

  return (
    <div className="products grid grid-3-col grid-3-col-auto pt-2">
      {getSearchedNotes.map((product) => (
        <div
          className="card-badge"
          id={product._id}
          key={product._id}
          style={{ height: "28rem" }}
        >
          <Link to={`/product/${product._id}`} id="card-links">
            <div className="product">
              <div className="prod-container">
                <img src={product.img} alt="product" className="prod-img" />
                <span className={`btn-badge ${product.tagColor}`}>
                  {product.tag}
                </span>
              </div>
              <div className="prod-content">
                <h5 className="product-nm" style={{ height: "1.5rem" }}>
                  {product.title}
                </h5>
                <div className="prod-info">
                  <span className="prod-price">Rs {product.price}</span>
                  <span className="ratings-con" style={{ fontSize: "1rem" }}>
                    <i className="fas fa-star"></i>
                    {product.rating}
                  </span>
                </div>
                <div className="size-options" style={{ margin: "0" }}>
                  <button style={{ borderRadius: "10px" }}>
                    {product.size}
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <div className="prod-links">
            <div className="prod-btn">
              {cart.find((item) => item._id === product._id) ? (
                <Link to="/cart" className="router-link">
                  <button className="btn btn-secondary">Go to Cart</button>
                </Link>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    !auth.isLoggedIn
                      ? addProductToCart(product)
                      : navigate("/login");
                  }}
                >
                  Add to Cart
                </button>
              )}
              {wishlist.find((item) => item._id === product._id) ? (
                <button
                  className="prod-like"
                  style={{ color: "#f34e4e" }}
                  onClick={() => removeProductFromWishlist(product._id)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              ) : (
                <button
                  className="prod-like"
                  style={{ color: "#f34e4e" }}
                  onClick={() => {
                    !auth.isLoggedIn
                      ? addProductToWishlist(product)
                      : navigate("/login");
                  }}
                >
                  <i className="fa fa-heart-o"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ProductRender };
