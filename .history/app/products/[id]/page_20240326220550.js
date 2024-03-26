import ProductDetails from "@/components/ProductDetails";
import data from "/data/data.json";

const ProductsDetails = ({ params }) => {

    const products = data.products

    const selectedProduct = products.find((product) => product.id === params.id)

    return (
        <ProductDetails />
    );
};

export default ProductsDetails;