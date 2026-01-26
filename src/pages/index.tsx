import HeroSection from "../components/HeroSection";
import BurialServiceSection from "../components/BurialServiceSection";
import BrochureBanner from "../components/BrochureBanner";
import DonationsSection from "../components/DonationsSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BurialServiceSection />
      <BrochureBanner />
      <DonationsSection />
       <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
