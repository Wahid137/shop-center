import Header from "@/components/Header";

const ProductLayout = ({ children }) => {
    return (

        <body>
            <Header />
            <main>
                {children}
            </main>
        </body>

    );
};

export default ProductLayout;