import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="about-grid">
          {/* Left Side - Text */}
          <motion.div
            className="py-20 pr-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-bold text-5xl mb-2">About </h2>
            <img
              src={"/images/whitelogo.png"}
              style={{ width: "400px", display: "inline-block" }}
            />
            <div className="w-[85%]">
              <p className="mt-6 mb-6">
                Charger Direct is a licensed power bank service providing power
                bank rental machines to hospitals and f&b venues across Britain.
              </p>
              <p>
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
