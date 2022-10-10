import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useProduct } from "../../context/product-context";
import { SingleProductCard } from "./SingleProductCard";

const SingleProduct = () => {
    const {productId} = useParams();
    const {products} = useProduct();

    const getSingleProduct = (products, productId) => {
        return products.find((product) => product._id === productId)
    }
    
    const product = getSingleProduct(products, productId)

    return (
        <>
        <Navbar />
        <SingleProductCard {...product} />
        </>
    )
}

export {SingleProduct};