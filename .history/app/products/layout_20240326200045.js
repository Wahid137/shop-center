import Header from "@/components/Header";

const ProductLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default ProductLayout;