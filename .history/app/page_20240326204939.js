import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import data from "../public/data/data.json";

export default function Home() {
  const products = data.products

  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">

            {
              products?.map((product) => <ProductCard key={product.id} product={product} />)
            }
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>

  );
}
