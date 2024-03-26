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
        <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">

            <div>
              <div
                class="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
              </div>
              <h2 class="text-sm lg:text-base mt-2">
                <a class="text-base font-bold" href="./productPage.html">
                  iPhone 9
                </a>
                <span class="text-[#919090]">
                  <a href="./category.html">(Smartphones)</a>
                </span>
              </h2>
              <p class="text-[#919090] text-sm ">An apple mobile which is nothing like apple</p>

              <p class="text-rose-600 text-sm mt-4"><span class="text-[#919090] line-through">$205.00</span> $195.00</p>
            </div>



          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>

  );
}
