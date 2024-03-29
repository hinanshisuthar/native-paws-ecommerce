import { useProduct } from "../../context/product-context";

const ProductFiltersResponsive = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, categories, price } = state;
  const {
    food,
    leash,
    toys,
    clothes,
    small,
    medium,
    large,
    arrival,
    choice,
    bestseller,
  } = categories;
  return (
    <div className="flex-row-start">
      <div>
        <div className="flex-col-sb-start">
          <h5>SORT BY</h5>
          <label htmlFor="sort-h-t-l">
            <input
              type="radio"
              id="sort-h-t-l"
              name="sort"
              className="input"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            Price: High to Low
          </label>

          <label htmlFor="sort-l-t-h">
            <input
              type="radio"
              id="sort-l-t-h"
              name="sort"
              className="input"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            Price: Low to High
          </label>

          <label htmlFor="sort-h-t-l-rating">
            <input
              type="radio"
              id="sort-h-t-l-rating"
              name="sort"
              className="input"
              checked={sortBy === "RATING_HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "RATING_HIGH_TO_LOW" })}
            />
            Rating: High to Low
          </label>

          <label htmlFor="sort-l-t-h-rating">
            <input
              type="radio"
              id="sort-l-t-h-rating"
              name="sort"
              className="input"
              checked={sortBy === "RATING_LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "RATING_LOW_TO_HIGH" })}
            />
            Rating: Low to High
          </label>
        </div>
        <div className="price-range my-md flex-col-sb-start">
          <h5>PRICE</h5>
          <label htmlFor="price-range">
            <input
              id="price-range"
              type="range"
              step="100"
              min="100"
              max="500"
              value={price}
              onChange={(e) =>
                dispatch({ type: "PRICE", price: e.target.value })
              }
            />
            {price} and below
          </label>
        </div>
      </div>

      <div className="sort-con flex-col-sb-start sort-con-res">
        <h5 className="py-sm">CATEGORIES</h5>
        <form name="categories" className="categories flex-col">
          <h6 className="p-sm">Products</h6>
          <label htmlFor="food">
            <input
              type="checkbox"
              className="input"
              id="food"
              value="food"
              name="categories-name"
              checked={food}
              onChange={() => dispatch({ type: "FOOD" })}
            />
            Food
          </label>
          <label htmlFor="leash">
            <input
              type="checkbox"
              className="input"
              id="leash"
              value="leash"
              name="categories-name"
              checked={leash}
              onChange={() => dispatch({ type: "LEASH" })}
            />
            Leash, Harness
          </label>
          <label htmlFor="toys">
            <input
              type="checkbox"
              className="input"
              id="toys"
              value="toys"
              name="categories-name"
              checked={toys}
              onChange={() => dispatch({ type: "TOYS" })}
            />
            Toys
          </label>
          <label htmlFor="clothes">
            <input
              type="checkbox"
              className="input"
              id="clothes"
              value="clothes"
              name="categories-name"
              checked={clothes}
              onChange={() => dispatch({ type: "CLOTHES" })}
            />
            Clothes
          </label>
        </form>

        <form name="categories" className="categories flex-col">
          <h6 className="p-sm">Breed Size</h6>
          <label htmlFor="small">
            <input
              type="checkbox"
              className="input"
              id="small"
              value="small"
              name="categories-name"
              checked={small}
              onChange={() => dispatch({ type: "SMALL" })}
            />
            Small
          </label>
          <label htmlFor="medium">
            <input
              type="checkbox"
              className="input"
              id="medium"
              value="medium"
              name="categories-name"
              checked={medium}
              onChange={() => dispatch({ type: "MEDIUM" })}
            />
            Medium
          </label>
          <label htmlFor="large">
            <input
              type="checkbox"
              className="input"
              id="large"
              value="large"
              name="categories-name"
              checked={large}
              onChange={() => dispatch({ type: "LARGE" })}
            />
            Large
          </label>
        </form>

        <form name="categories" className="categories flex-col">
          <h6 className="p-sm">TAGS</h6>
          <label htmlFor="bestseller">
            <input
              type="checkbox"
              className="input"
              id="bestseller"
              value="bestseller"
              name="categories-name"
              checked={bestseller}
              onChange={() => dispatch({ type: "BEST_SELLER" })}
            />
            Best Seller
          </label>
          <label htmlFor="arrival">
            <input
              type="checkbox"
              className="input"
              id="arrival"
              value="arrival"
              name="categories-name"
              checked={arrival}
              onChange={() => dispatch({ type: "NEW" })}
            />
            New
          </label>
          <label htmlFor="choice">
            <input
              type="checkbox"
              className="input"
              id="choice"
              value="choice"
              name="categories-name"
              checked={choice}
              onChange={() => dispatch({ type: "CHOICE" })}
            />
            Native's Choice
          </label>
        </form>
      </div>
    </div>
  );
};

export { ProductFiltersResponsive };
