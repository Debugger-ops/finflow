import Navigation from "../components/mainpage/Navigation";
import HeroSection from "../components/mainpage/HeroSection";
import FeaturesSection from "../components/mainpage/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BenefitsSection from "../components/mainpage/BenefitsSection";
import PricingSection from "../components/mainpage/PricingSection";
import TestimonialsSection from "../components/mainpage/TestimonialsSection";
import CTASection from "../components/mainpage/CTASection";
import Footer from "../components/mainpage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
