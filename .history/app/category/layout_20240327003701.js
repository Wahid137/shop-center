import Header from "@/components/Header";

const CategoryLayout = ({ children }) => {
    return (
        <>
            <Header />
            <HeroSection />
            <main>
                {children}
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default CategoryLayout;