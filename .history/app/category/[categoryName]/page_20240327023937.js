import Link from "next/link";
import data from "../../../public/data/data.json";

const CategoryPage = () => {
    const products = data.products;

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Extracting unique category values into a new array with first letter capitalized
    const uniqueCategories = [...new Set(products.map(product => (product.category)))];



    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
            <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                <Link href="/">
                    <button className="hover:border-b border-black block h-6 box-border mt-4">All</button>
                </Link>
                {
                    uniqueCategories?.map((item, i) => <Link key={i} href={`/category/${}`}>
                        <button className="hover:border-b border-black block h-6 box-border mt-4">{item}</button>
                    </Link>)
                }
            </div>
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">

                <h1>Product</h1>
            </div>
        </section>
    );
};

export default CategoryPage;
