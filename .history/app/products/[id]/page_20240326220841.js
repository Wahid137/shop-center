import ProductDetails from "@/components/ProductDetails";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params }) => {
    const products = data.products;

    const selectedProduct = products?.find((product) => product.id === params.id)

    console.log("kop", selectedProduct)

    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;