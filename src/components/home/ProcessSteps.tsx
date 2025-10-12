import React from "react";

const ProcessSteps: React.FC = () => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto">
        <div className="steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div
            className="step-item h-[450px] flex items-end p-8 rounded-2xl bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{ backgroundImage: "url('src/assets/images/image1.png')" }}
          >
            <div className="step-card transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-[#ccb5ff]">01</h2>
              <h3 className="text-3xl font-semibold mb-2 text-balance text-white">
                Download the Charger Direct App
              </h3>
              <a
                href="/"
                className="white-btn w-[100%] inline-block transition-all duration-300 hover:translate-y-1"
              >
                Download the App
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="step-item h-[450px] flex items-end p-8 rounded-2xl bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{ backgroundImage: "url('src/assets/images/image3.png')" }}
          >
            <div className="step-card transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-primary">02</h2>
              <h3 className="text-3xl font-semibold mb-2 text-balance text-primary">
                Find the nearest station on the map in the app
              </h3>
            </div>
          </div>

          <div
            className="step-item h-[450px] flex items-start p-8 rounded-2xl relative bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundImage: "url('src/assets/images/image2.png')",
              backgroundColor: "#deddeb",
              backgroundBlendMode: "multiply",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <div className="step-card transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-primary">03</h2>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="step-item h-[450px] flex items-end p-8 rounded-2xl relative bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundImage: "url('src/assets/images/image4.jpg')",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <div className="step-card h-[100%] transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-primary">04</h2>
              <h3 className="text-3xl font-semibold mb-2 text-balance text-grey-800">
                Tap & Go payment.
                <br /> No app needed
              </h3>
            </div>
          </div>

          {/* Step 5 */}
          <div
            className="step-item h-[450px] flex items-end p-8 rounded-2xl bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{ backgroundImage: "url('src/assets/images/image5.png')" }}
          >
            <div className="step-card transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-primary">05</h2>
              <h3 className="text-3xl font-semibold mb-2 text-balance text-grey-900">
                Use it as long as you need
              </h3>
            </div>
          </div>

          {/* Step 6 */}
          <div
            className="step-item h-[450px] flex items-start p-8 rounded-2xl bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-xl"
            style={{ backgroundImage: "url('src/assets/images/image6.png')" }}
          >
            <div className="step-card transition-opacity duration-700 hover:opacity-90">
              <h2 className="font-semibold text-5xl mb-2 text-primary">06</h2>
              <h3 className="text-3xl font-semibold mb-2 text-balance text-grey-900">
                Return the powerbank to any station
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
