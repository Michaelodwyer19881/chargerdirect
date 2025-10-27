import React from "react";
import Hero from "../components/home/Hero";
import ProcessSteps from "../components/home/ProcessSteps";
import AboutSection from "../components/home/AboutSection";
import BritainCoverage from "../components/home/BritainCoverage";
import PowerBankSection from "../components/home/PowerBankSection";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProcessSteps />
      <PowerBankSection />
      <BritainCoverage />
      <AboutSection />
    </div>
  );
};

export default Home;
