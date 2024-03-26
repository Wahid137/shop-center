import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

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