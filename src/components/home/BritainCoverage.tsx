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
    <section className="britain-coverage relative overflow-hidden lg:py-20 py-12 bg-[#ced2fb]">
      <div className="container mx-auto px-4 py-8 relative z-10 flex items-center">
        {/* blended background image */}
        <img
          src="/images/UK.png"
          alt=""
          className="absolute w-auto h-[90%] right-0"
        />
        <div className="w-full md:w-[40%]">
          <h2 className="text-5xl font-bold mb-10 text-[#1A2253]">
            Britain is covered
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-semibold text-purple-800">
            {cities.map((city) => (
              <li key={city} className="list-disc list-inside text-lg">
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
