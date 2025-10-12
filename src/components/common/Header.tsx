import React from "react";

const Header: React.FC = () => {
  const navLinks = [
    { label: "For hospitals", href: "/hospitals" },
    { label: "For F&B venues", href: "/venues" },
    { label: "About", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <header className="d-flex align-center w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <a href="/bookings" className="flex items-center">
          <img
            src="src/assets/images/whitelogo.png"
            alt="ChargerDirect Logo"
            className="h-auto w-[300px]"
          />
        </a>

        {/* Navigation Section */}
        <nav>
          <ul className="flex align-center gap-12 flex-row">
            {navLinks.map((link) => (
              <li>
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 text-[18px] hover:text-black font-semibold transition-colors nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
