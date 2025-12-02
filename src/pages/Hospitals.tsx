import hospitalImg from "/images/hospitals.png";

const Hospitals = () => {
  return (
    <section className="hospitals-section overflow-hidden py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[100px] items-center">
          {/* Left Content */}
          <div className="md:pr-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#231D45] mb-6">
              Overview
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-xl">
              Hospitals can be a stressful environment for both patients and
              staff.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-xl">
              NHS waiting times can leave patients and visitors with low
              batteries - disconnecting them from friends, family, and vital
              information at a stressful time. Although a simple solution,
              powerbank rentals can alleviate this isolation in addition to
              raising awareness of charitable causes such as hospital
              foundations and blood donation campaigns.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl">
              Ultimately, our powerbank rental machines provide connectivity,
              convenience, and support public health initiatives such as blood
              donation drives, fundraising, and campaigns.
            </p>

            <div className="mt-15">
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#231D45] mb-4">
                Highlights
              </h3>
              <ul className="space-y-8 text-gray-700 text-xl pt-5">
                <li className="flex items-start gap-2 ">
                  <img
                    src="/images/charge.svg"
                    className="w-8 h-auto "
                    alt="battery icon"
                  />
                  Anti-microbial coating on powerbanks.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/images/charge.svg"
                    className="w-8 h-auto "
                    alt="battery icon"
                  />
                  Custom designed powerbanks.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/images/charge.svg"
                    className="w-8 h-auto "
                    alt="battery icon"
                  />
                  Free powerbank rentals for hospital staff.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/images/charge.svg"
                    className="w-8 h-auto "
                    alt="battery icon"
                  />
                  Lowest rental fee and deposit in Britain.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/images/charge.svg"
                    className="w-8 h-auto "
                    alt="battery icon"
                  />
                  Public service messaging available on powerbanks and station
                  screens.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative p-[30px] sm:p-[80px]">
            <div className="shadow-[0_8px_100px_rgba(126,34,206,0.6)] w-[100%] rounded-2xl">
              <img
                src={hospitalImg}
                alt="Hospital Powerbank Rental Station"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
