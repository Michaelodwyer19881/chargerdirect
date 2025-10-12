import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="hero-section overflow-hidden">
      <div className="container mx-auto">
        <div className="hero flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <motion.div
            className="w-[510px]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              CHARGE <br />
              YOUR DEVICES ANYWHERE WITH{" "}
              <img
                src="src/assets/images/whitelogo.png"
                style={{ width: "300px", display: "inline-block" }}
              />
            </h1>
            <h5 className="my-5 text-gray-600 font-medium w-[90%]">
              The most affordable powerbank service in Britain.
            </h5>

            <div>
              <a href="#">
                <img
                  src="src/assets/images/appstore.jpeg"
                  alt="App Store"
                  className="h-[48px] inline-block w-[160px]"
                />
              </a>
              <a href="#">
                <img
                  src="src/assets/images/palystore.jpeg"
                  alt="App Store"
                  className="h-[48px] inline-block ml-4  w-[160px]"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-auto w-[600px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="src/assets/images/img_charger_direct.jpeg"
              alt="Hero"
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
