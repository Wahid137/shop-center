import Header from "@/components/Header";

const ProductLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>


    );
};

export default ProductLayout;