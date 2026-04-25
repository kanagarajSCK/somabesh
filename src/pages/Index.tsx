import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Speakers from "@/components/site/Speakers";
import Schedule from "@/components/site/Schedule";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
