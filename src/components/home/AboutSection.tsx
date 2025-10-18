import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] md:gap-[20px] items-center">
          {/* Left Side - Text */}
          <motion.div
            className=" lg:py-20 lg:pr-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-bold text-4xl md:text-5xl mb-2">About </h2>
            <img
              src={"/images/whitelogo.jpeg"}
              className="w-[300px] md:w-[400px] inline-block"
            />
            <div className="w-[100%%] lg:w-[85%]">
              <p className="mt-6 mb-6 text-lg  md:text-[20px] text-gray-700">
                Charger Direct is a licensed power bank service providing power
                bank rental machines to hospitals and f&b venues across Britain.
              </p>
              <p className="text-lg  md:text-[20px] text-gray-700">
                Our network of power bank stations are owned and operated
                directly by Charger Direct LTD.
              </p>
            </div>
          </motion.div>

          <img
            src="/images/chargerdirectimg1.jpeg"
            alt="Charger Direct Logo"
            className="mb-6 md:mb-0 md:mr-10 w-[100%] h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
