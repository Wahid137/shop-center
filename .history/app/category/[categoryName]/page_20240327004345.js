const CategoryPage = () => {



    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
            <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                <button className="hover:border-b border-black block h-6 box-border mt-4">All</button>
                <button className="hover:border-b border-black block h-6 box-border mt-5">Smartphones</button>
                <button className="hover:border-b border-black block h-6 box-border mt-5">Laptops</button>
                <button className="hover:border-b border-black block h-6 box-border mt-5">Fragrances</button>
                <button className="hover:border-b border-black block h-6 box-border mt-5">Skincare</button>
                <button className="hover:border-b border-black block h-6 box-border mt-5">Groceries</button>
            </div>
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">

                <h1>Product</h1>
            </div>
        </section>
    );
};

export default CategoryPage;
