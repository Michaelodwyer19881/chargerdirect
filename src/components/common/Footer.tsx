import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-white py-5 border-t border-gray-200">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/whitelogo.jpeg"
              alt="ChargerDirect Logo"
              className="h-auto w-[200px] sm:w-[250px]"
            />
            <div>@copyright 2025</div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="bg-gray-200 text-black rounded-lg px-6 py-2 cursor-pointer "
          >
            Privacy Policy
          </button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-[#0000009e] flex justify-center items-center p-5 z-50">
            <div className="bg-white text-black w-full max-w-[90%] p-10 rounded-lg overflow-y-auto max-h-[90vh] relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-8 right-5 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-7">Privacy Policy</h2>

              <p className="space-y-4 text-md leading-6">
                <strong>1. Who We Are:</strong> Charger Direct Ltd, registered
                in Newport, Wales, provides short-term power bank rentals. We
                are the data controller of any personal data you provide to us.
                <br />
                <br />
                <strong>2. What Data We Collect</strong>
                <br />
                We only collect the minimum personal data required to operate
                our service:
                <br />• Email address (optional) – To send you a digital receipt
                (with your consent).
                <br />• Card payment info – Processed securely via Stripe.
                <br />• Transaction metadata – Time, date, location of rental,
                etc.
                <br />
                <br />
                We do not require you to download an app or register an account
                to use our service.
                <br />
                <br />
                <strong>3. How We Use Your Data</strong>
                <br />
                • To provide the service you requested (e.g., sending a
                receipt).
                <br />
                • To process your payment securely via Stripe.
                <br />
                • To comply with any legal obligations (tax, accounting, etc.).
                <br />
                • To ensure our rental service operates efficiently and
                securely.
                <br />
                <br />
                <strong>4. Who We Share Your Data With</strong>
                <br />
                • Stripe Payments Europe Ltd – for secure payment processing.
                <br />
                Stripe acts as our data processor. Privacy Policy:{" "}
                <a href="https://stripe.com/privacy" className="underline">
                  stripe.com/privacy
                </a>
                <br />
                <br />
                We do not sell or share your data with any other third parties.
                <br />
                <br />
                <strong>5. How Long We Keep Your Data</strong>
                <br />
                • Email addresses: Deleted after 30 days unless needed for
                customer service or legal reasons.
                <br />
                • Transaction data: Retained for 6 years for tax and accounting
                purposes.
                <br />
                <br />
                <strong>6. Your Rights Under GDPR</strong>
                <br />
                You have the right to access, correct, delete, restrict, or
                object to the processing of your data.
                <br />
                You may also withdraw consent where applicable.
                <br />
                Contact us at:{" "}
                <a href="mailto:info@chargerdirect.co.uk" className="underline">
                  info@chargerdirect.co.uk
                </a>
                <br />
                <br />
                <strong>7. Data Security</strong>
                <br />
                We use appropriate technical and organisational measures to
                protect your personal data from loss, misuse, or unauthorised
                access.
                <br />
                Payment data is never stored on our systems — it is handled
                directly by Stripe.
                <br />
                <br />
                <strong>8. International Transfers</strong>
                <br />
                Your data may be transferred outside the EEA through our
                processor (Stripe), which uses safeguards such as Standard
                Contractual Clauses (SCCs).
                <br />
                <br />
                <strong>9. Cookies & Tracking</strong>
                <br />
                We do not use cookies or tracking on the rental interface.
                <br />
                Standard website cookies may apply if you visit our website.
                <br />
                <br />
                <strong>10. Contact & Complaints</strong>
                <br />
                Email:{" "}
                <a href="mailto:info@chargerdirect.co.uk" className="underline">
                  info@chargerdirect.co.uk
                </a>
                <br />
                If you are not satisfied with our response, you may lodge a
                complaint with the Information Commissioner's Office:{" "}
                <a href="https://www.ico.org.uk" className="underline">
                  www.ico.org.uk
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
