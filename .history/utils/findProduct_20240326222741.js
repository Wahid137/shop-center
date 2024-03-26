import data from "../../../public/data/data.json";

const products = data.products

export const findProduct = (products, id) => {
    const matchedProduct = products.find(product => product.id === id)

    return matchedProduct
}