import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPillars from "@/components/ProductPillars";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductPillars />
        <UseCases />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
