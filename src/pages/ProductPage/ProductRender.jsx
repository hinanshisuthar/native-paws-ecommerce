import axios from "axios";
import { useEffect, useState } from "react";
import { categorizedProducts } from "../../utilities/filters/categorizedProducts";
import { pricedProducts } from "../../utilities/filters/priceRange";
import { sortedProducts } from "../../utilities/filters/sort";
import { useProduct } from "../../utilities/ProductContext";

const ProductRender = () => {
    const [products, setProducts] = useState([]);
    const {state} = useProduct();

    async function fetchProducts() {
        try {
            const productData = await axios.get('/api/products');
            setProducts(productData.data.products)
        }
        catch(err) {
            console.log(`An Error Occured: ${err}`);
        }
    }

    const getPricedProducts = pricedProducts(products, state.price)

    const getCategoryProducts = categorizedProducts(
        getPricedProducts,
        state.categories.food,
        state.categories.leash,
        state.categories.toys,
        state.categories.clothes,
        state.categories.small,
        state.categories.medium,
        state.categories.large,
        state.categories.arrival,
        state.categories.choice,
        state.categories.bestseller,
    );

    const finalProductsToRender = sortedProducts(getCategoryProducts, state.sortBy);

    useEffect(() => fetchProducts(), [])

    return (
        <div className="products grid grid-3-col grid-3-col-auto pt-2">

            {
                finalProductsToRender.map(prod => (
                    <div className="card-badge" id={prod.id} style={{height: '28rem'}}>
            <a href="#" id="card-links">
                <div className="product">
                    <div className="prod-container">
                        <img src={prod.img}
                            alt="product" className="prod-img" />
                        <span className={`btn-badge ${prod.tagColor}`}>{prod.tag}</span>
                    </div>
                    <div className="prod-content">
                        <h5 className="product-nm" style={{height: '1.5rem'}}>{prod.title}</h5>
                        <div className="prod-info">
                            <span className="prod-price">Rs {prod.price}</span>
                            <span className="ratings-con" style={{fontSize: '1rem'}}>
                                <i className="fas fa-star"></i>{prod.rating}
                            </span>
                        </div>
                        <div className="size-options" style={{margin: '0'}}>
                            <button style={{borderRadius: '10px'}}>{prod.size}</button>
                        </div>
                    </div>
                </div>
            </a>
            <div className="prod-links">
                <div className="prod-btn">
                    <button className="btn btn-primary">Add to Bag</button>
                    <button className="prod-like"><i className="fa fa-heart-o"></i></button>
                </div>
            </div>
        </div>
                ))
            }        
        </div>
    )
}

export {ProductRender};