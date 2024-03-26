import Header from "@/components/Header";

const HomeLayout = () => {
    return (
        <body className={inter.className}>
            <Header />
            <HeroSection />
            <main>
                {children}
                <Contact />
            </main>
            <Footer />
        </body>
    );
};

export default HomeLayout;