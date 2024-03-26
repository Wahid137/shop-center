import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
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
}
