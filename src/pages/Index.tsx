import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WatchSection from "@/components/landing/WatchSection";
import TeamSection from "@/components/landing/TeamSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import PartnersSection from "@/components/landing/PartnersSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ChatbotPlaceholder from "@/components/landing/ChatbotPlaceholder";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SolutionSection />
    <FeaturesSection />
    <WatchSection />
    <TeamSection />
    <SocialProofSection />
    <PartnersSection />
    <CTASection />
    <Footer />
    <ChatbotPlaceholder />
  </div>
);

export default Index;
