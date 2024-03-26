import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const products = data.products
  console.log(products)
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <h1>Home</h1>
        <Contact />
      </main>
      <Footer />
    </>

  );
}
