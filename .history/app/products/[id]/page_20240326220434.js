import ProductDetails from "@/components/ProductDetails";

const ProductsDetails = ({ params }) => {

    const products = products.find((product) => product.id === params.id)

    return (
        <ProductDetails />
    );
};

export default ProductsDetails;