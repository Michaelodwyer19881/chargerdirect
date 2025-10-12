import React from "react";
import Hero from "../components/home/Hero";
import ProcessSteps from "../components/home/ProcessSteps";
import AboutSection from "../components/home/AboutSection";
import BritainCoverage from "../components/home/BritainCoverage";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProcessSteps />
      <AboutSection />
      <BritainCoverage />
    </div>
  );
};

export default Home;
