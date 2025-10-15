import React from "react";

const BritainCoverage: React.FC = () => {
  const cities = [
    "London",
    "Birmingham",
    "Liverpool",
    "Nottingham",
    "Sheffield",
    "Bristol",
    "Glasgow",
    "Leicester",
    "Edinburgh",
    "Leeds",
    "Cardiff",
    "Manchester",
    "Stoke-on-Trent",
    "Coventry",
    "Wolverhampton",
    "City of Westminster",
    "Sunderland",
    "Birkenhead",
    "Islington",
    "Reading",
    "Kingston upon Hull",
    "Preston",
    "Newport",
    "Swansea",
    "Bradford",
    "Southend-on-Sea",
    "Belfast",
    "Derby",
    "Plymouth",
    "Luton",
    "Southampton",
  ];

  return (
    <section className="britain-coverage relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-[#ced2fb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex items-center">
        {/* blended background image */}
        <img
          src="/images/UK.png"
          alt="Charger direct UK.png"
          className="absolute w-auto h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] right-[100px] opacity-20 lg:opacity-100"
        />
        <div className="w-full lg:w-[45%] xl:w-[50%] relative z-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#1A2253]">
            Britain is covered
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-2 gap-y-1 font-semibold text-purple-900">
            {cities.map((city) => (
              <li
                key={city}
                className="list-disc list-inside text-[14px] sm:text-[24px]"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BritainCoverage;
