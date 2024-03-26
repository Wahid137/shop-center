import Header from "@/components/Header";

const ProductLayout = ({ children }) => {
    return (
   
                <Header />
                <main>
                    {children}
                </main>

    );
};

export default ProductLayout;