
const ProductLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <HeroSection />
                <main>
                    {children}
                    <Contact />
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default ProductLayout;