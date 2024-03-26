import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params: { id } }) => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const products = data.products;
    console.log(products)


    useEffect(() => {
        const selectedProduct = products?.find((product) => product.id === id)

    }, [id, products])


    console.log("kop", selectedProduct)

    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;