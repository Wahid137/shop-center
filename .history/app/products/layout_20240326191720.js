
const ProductLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />

                <main>
                    {children}
                    <Contact />
                </main>

            </body>
        </html>
    );
};

export default ProductLayout;