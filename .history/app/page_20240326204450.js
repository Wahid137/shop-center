import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import data from "../public/data/data.json";

export default function Home() {
  const products = data.products

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
