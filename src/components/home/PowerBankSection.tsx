import React from "react";

const PowerBankSection: React.FC = () => {
  return (
    <div className="power-bank-section  bg-[#231D45] flex items-center flex-col lg:flex-row">
      <div className="w-[100%] sm:w-[45vw] pt-0 sm:pt-20 lg:pt-0 ">
        <img
          src="/images/powerbank.png"
          alt="powerbank"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pl-5 sm:pl-15 pr-5 sm:pr-[10vw] py-10 sm:py-25 xl:py-10">
        {/* 6500mAh */}
        <div className="flex items-start mb-10 xl:mb-20">
          <img
            src="/images/batteryIcon.svg"
            className="w-6 md:w-9 h-auto mr-2 md:mr-4"
            alt="battery icon"
          />
          <p className="text-white text-lg sm:text-xl xl:text-2xl">
            <span className="font-bold mr-3">6500mAh</span>
            Capable of charging your device 60% in 30 minutes and 100% in 1
            hour.
          </p>
        </div>

        {/* Anti-microbial Coating */}
        <div className="flex items-start mb-10 xl:mb-20">
          <img
            src="/images/batteryIcon.svg"
            className="w-6 md:w-9 h-auto mr-2 md:mr-4"
            alt="battery icon"
          />
          <p className="text-white text-lg sm:text-xl xl:text-2xl">
            <span className="font-bold mr-3">Anti-microbial Coating</span>
            Infection control for hospitals.
          </p>
        </div>

        {/* Fully Certified */}
        <div className="flex items-start mb-10 xl:mb-20">
          <img
            src="/images/batteryIcon.svg"
            className="w-6 md:w-9 h-auto mr-2 md:mr-4"
            alt="battery icon"
          />
          <p className="text-white text-lg sm:text-xl xl:text-2xl">
            <span className="font-bold mr-3">Fully Certified</span>
            CE Certificate and MSDS Certified.
          </p>
        </div>

        {/* Customizable Designs */}
        <div className="flex items-start mb-10 xl:mb-20">
          <img
            src="/images/batteryIcon.svg"
            className="w-6 md:w-9 h-auto mr-2 md:mr-4"
            alt="battery icon"
          />
          <p className="text-white text-lg sm:text-xl xl:text-2xl">
            <span className="font-bold mr-3">Customizable designs</span>
            Branded powerbanks for venue partners including a scannable QR code.
          </p>
        </div>

        {/* Full Port Compatibility */}
        <div className="flex items-start ">
          <img
            src="/images/batteryIcon.svg"
            className="w-6 md:w-9 h-auto mr-2 md:mr-4"
            alt="battery icon"
          />
          <p className="text-white text-lg sm:text-xl xl:text-2xl">
            <span className="font-bold mr-3">Full port compatibility</span>
            Lightning Port and Type-C port.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerBankSection;
