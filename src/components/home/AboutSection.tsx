import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="about-section pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] md:gap-[20px]">
          {/* Left Side - Text */}
          <motion.div
            className=" lg:pt-5 lg:pb-20 lg:pr-20"
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

            <div className="w-[100%%] lg:w-[90%]">
              <p className="mt-6 text-lg  md:text-[20px] text-gray-700">
                Charger Direct is a licensed power bank rental operator serving
                bars, clubs, hospitals and f&b venues across Britain.
              </p>
              <p className="mt-6 text-lg  md:text-[20px] text-gray-700 ">
                Our team has been assembled from several other powerbank rental
                companies which has allowed us to bring the best features into
                one product.
              </p>
              <p className="mt-6 text-lg  md:text-[20px] text-gray-700">
                Every charging station holds between 6 to 48 power banks
                depending on the model is equipped with a payment terminal and a
                QR code.
              </p>
              <p className="mt-6 text-lg  md:text-[20px] text-gray-700">
                A fully customizable power bank and the highest revenue share
                with venues has differntiated Charger Direct in a commoditized
                industry.
              </p>
              <p className="mt-6 text-lg  md:text-[20px] text-gray-700">
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
