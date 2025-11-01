import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="hero-section overflow-hidden py-8 sm:py-12 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Text */}
          <motion.div
            className="w-full lg:w-[700px] text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              CHARGE <br />
              YOUR DEVICES ANYWHERE
              <br /> WITH{" "}
              <img
                src="/images/whitelogo.jpeg"
                alt="ChargerDirect Logo"
                className="w-[280px] md:w-[350px] lg:w-[480px] inline-block"
              />
            </h1>
            <h5 className="my-4 sm:my-5 text-gray-600 font-medium text-xl sm:text-2xl w-full lg:w-[60%] mx-auto lg:mx-0">
              The most affordable powerbank service in Britain.
            </h5>

            <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 mt-6">
              <Link to="/coming-soon" className="inline-block">
                <img
                  src="/images/appstore.jpeg"
                  alt="App Store"
                  className="h-[44px] sm:h-[48px] w-[150px] sm:w-[160px] inline-block"
                />
              </Link>
              <Link to="/coming-soon" className="inline-block">
                <img
                  src="/images/palystore.jpeg"
                  alt="Play Store"
                  className="h-[44px] sm:h-[48px] w-[150px] sm:w-[160px] inline-block"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full sm:w-[500px] lg:w-[600px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/images/LOGOnew.jpeg"
              alt="Hero"
              className="object-contain w-[80%] md:w-full h-auto m-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
