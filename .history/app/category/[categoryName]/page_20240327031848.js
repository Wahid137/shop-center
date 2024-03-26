"use client"
import CustomLink from "@/components/CustomLink";
import ProductCard from "@/components/ProductCard";
import { usePathname } from "next/navigation";
import data from "../../../public/data/data.json";

const CategoryPage = () => {
    const pathName = usePathname();
    const products = data.products;

    // Extracting unique category values into a new array with first letter capitalized
    const uniqueCategories = [...new Set(products.map(product => product.category))];

    // Function to filter products based on the category segment of the path name
    const filterProductsByCategory = (category) => {
        if (category === "all") {
            return products;
        } else {
            return products.filter(product => product.category === category);
        }
    };

    // Extracting category segment from the path name
    const categorySegment = pathName.split("/")[2];

    // Filter products based on the category segment
    const filteredProducts = filterProductsByCategory(categorySegment);


    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
            <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                <CustomLink path="/category/all">
                    <button className="hover:border-b border-black block h-6 box-border mt-4">All</button>
                </CustomLink>
                {
                    uniqueCategories?.map((item, i) => <CustomLink key={i} path={`/category/${item}`}>
                        <button className="hover:border-b  border-black block h-6 box-border mt-4">{item}</button>
                    </CustomLink>)
                }
            </div>
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">

                {
                    filteredProducts && filteredProducts?.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </section>
    );
};

export default CategoryPage;
