import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import ProcessSteps from "../components/home/ProcessSteps";
import AboutSection from "../components/home/AboutSection";
import BritainCoverage from "../components/home/BritainCoverage";
import PowerBankSection from "../components/home/PowerBankSection";
import ContactSection from "../components/home/ContactSection";

const Home: React.FC = () => {
  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          // Small timeout to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleHashScroll();

    // Also handle hash changes if user manually changes URL
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <div>
      <Hero />
      <ProcessSteps />
      <PowerBankSection />
      <BritainCoverage />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </div>
  );
};

export default Home;
