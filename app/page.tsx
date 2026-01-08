// app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";



export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection /> 
      <InfoSection />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
