
export default function Home() {
  return (
   
    <Header />
    <HeroSection />
    <main>
      {children}
      <Contact />
    </main>
    <Footer />
  );
}
