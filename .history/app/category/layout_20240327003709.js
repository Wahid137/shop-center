import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

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