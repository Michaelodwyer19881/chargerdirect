import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "For hospitals", href: "/hospitals" },
    { label: "For F&B venues", href: "/venues" },
    { label: "About", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    // If it's About or Contact link
    if (href === "/about" || href === "/contact") {
      const sectionId = href.replace("/", "");

      // If we're already on home page, scroll to section
      if (location.pathname === "/") {
        // Use a small timeout to ensure the DOM is ready
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
        return;
      } else {
        // If we're on another page, navigate to home with hash
        navigate(`/#${sectionId}`);
        return;
      }
    }

    // For other links (hospitals, venues), navigate normally
    navigate(href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate to home
      navigate("/");
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <button
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/images/whitelogo.jpeg"
            alt="ChargerDirect Logo"
            className="h-auto w-[200px] sm:w-[250px] lg:w-[300px]"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="text-gray-800 text-[16px] xl:text-[18px] hover:text-black font-semibold transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto px-4 sm:px-6 pt-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavigation(link.href)}
                className="text-gray-800 text-[16px] hover:text-black font-semibold transition-colors block py-2 w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
