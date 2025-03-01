import Footer from "@/components/Footer";
import MiniFooter from "@/components/MiniFooter";
import FAQs from "@/components/FAQs";
import Demo from "@/components/Demo";
import LogoCarousel from "@/components/LogoCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20"></div>
      <LogoCarousel />
      <Demo />
      <FAQs />
      <MiniFooter />
      <Footer />
    </>
  );
}
