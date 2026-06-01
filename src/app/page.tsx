import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import EcosystemSection from "@/components/Ecosystem";
import InfrastructureSection from "@/components/Infrastructure";
import FranchiseSection from "@/components/Franchise";
import TechAISection from "@/components/TechAI";
import WorkforceSection from "@/components/Workforce";
import TrustSection from "@/components/Trust";
import ContactFooterSection from "@/components/ContactFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white pt-0">
        <Header />
        <div id="ecosystem" className="scroll-mt-[110px]"><HeroSection /></div>
        {/* Sections have IDs corresponding to navigation hrefs with scroll-margin-top offset */}
        <div id="ecosystem-details" className="scroll-mt-[110px]"><EcosystemSection /></div>
        <div id="infrastructure" className="scroll-mt-[110px]"><InfrastructureSection /></div>
        <div id="franchise" className="scroll-mt-[110px]"><FranchiseSection /></div>
        <div id="training-careers" className="scroll-mt-[110px]"><WorkforceSection /></div>
        <div id="technology" className="scroll-mt-[110px]"><TechAISection /></div>
        <div id="trust" className="scroll-mt-[110px]"><TrustSection /></div>
        <div id="contact" className="scroll-mt-[110px]">
          <ContactFooterSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
