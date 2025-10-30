import React, { useState } from "react";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "4ee3b6b6-a2ac-46b5-8b06-dbde7221cf30");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      e.target.reset();
    } else {
      setResult("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section
      id={id}
      className="venue-section overflow-hidden py-15 lg:py-[120px] bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[700px] mx-auto p-5 md:p-10 bg-white rounded-2xl space-y-4"
          >
            <div className=" mb-5 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-semibold text-center">
                Contact Us
              </h2>
              <p className="mt-2 text-lg text-center  md:text-[20px] text-gray-700">
                Feel free to contact us through the form below:
              </p>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-purple-300 focus:border-purple-500 rounded-lg p-3 md:p-4 md:text-xl outline-none "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-purple-300 focus:border-purple-500 rounded-lg p-3 md:p-4 md:text-xl outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full border border-purple-300 focus:border-purple-500 rounded-lg p-3 md:p-4 md:text-xl outline-none"
            ></textarea>

            {/* Optional hidden honeypot field */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 md:p-4 md:text-xl rounded-lg hover:bg-purple-700 transition "
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-600">{result}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
