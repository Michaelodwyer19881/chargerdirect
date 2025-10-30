import React from "react";
import venueImg from "/images/venue.png";

const Venue = () => {
  return (
    <section className="venue-section overflow-hidden py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#231D45] mb-6">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl">
            Recent legislation has allowed pubs, clubs and restaurants to be
            able to open later. This coupled with zero tolerance for drink
            driving laws will only increase the demand for charging phones.
            Indeed, the ability to find friends, call a taxi, or a ride-hailing
            service all depend on a functioning phone.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center mt-5">
          {/* Left Content */}
          <div className="md:pr-10">
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#231D45] mb-4">
              Key Points
            </h3>
            <ul className="space-y-10 text-gray-700 text-xl pt-5 leading-relaxed">
              <li className="flex items-start gap-2">
                <img
                  src="/images/charge.svg"
                  className="w-8 h-auto"
                  alt="battery icon"
                />
                Revenue generation for venues is maximized by the use of ‘tap &
                go’ payment for power bank rentals.
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/charge.svg"
                  className="w-8 h-auto"
                  alt="battery icon"
                />
                We offer a higher revenue share to venues than any other power
                bank rental service.
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/charge.svg"
                  className="w-8 h-auto"
                  alt="battery icon"
                />
                Fully customizable screen for venue partners.
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/charge.svg"
                  className="w-8 h-auto"
                  alt="battery icon"
                />
                Public Liability and Product Liability coverage.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative p-[30px] sm:p-[80px]">
            <div className="shadow-[0_8px_100px_rgba(126,34,206,0.6)] w-[100%] rounded-2xl">
              <img
                src={venueImg}
                alt="Venue Powerbank Rental Station"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
