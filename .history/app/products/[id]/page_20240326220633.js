import ProductDetails from "@/components/ProductDetails";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params }) => {

    const products = data.products;

    const selectedProduct = products.find((product) => product.id === params.id)

    console.log(selectedProduct)

    return (
        <ProductDetails />
    );
};

export default ProductsDetails;