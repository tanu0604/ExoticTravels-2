import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "../logo/logo.jpg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Indian Trips", path: "/indian-trips" },
    { name: "Foreign Trips", path: "/foreign-trips" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 navbar-fixed ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <img
                src={logo}
                alt="Exotic Travels Logo"
                className={`w-auto rounded-full transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? "h-12" : "h-16"
                } shadow-lg ring-2 ring-white/30`}
              />
              <div className="hidden sm:block">
                <div
                  className={`font-bold leading-tight transition-all duration-500 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  <span
                    className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                      isScrolled
                        ? "from-blue-600 to-purple-600"
                        : "from-blue-300 via-white to-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    Exotic
                  </span>
                  <span
                    className={`bg-gradient-to-r bg-clip-text text-transparent ml-1 transition-all duration-500 ${
                      isScrolled
                        ? "from-amber-500 to-orange-500"
                        : "from-amber-300 via-yellow-200 to-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    Travels
                  </span>
                </div>
                <div
                  className={`font-medium transition-all duration-500 ${
                    isScrolled
                      ? "text-sm text-gray-500"
                      : "text-sm text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  Your Dream… our destination!
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? `nav-link ${
                          isActive(item.path)
                            ? "active text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`
                      : `${
                          isActive(item.path)
                            ? "text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                            : "text-white hover:text-blue-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                        }`
                  }`}
                >
                  {item.name}
                  {/* Active indicator for transparent state */}
                  {!isScrolled && isActive(item.path) && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-lg"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-600"
                    : "text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 90880 19480</span>
              </div>
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    : "bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 drop-shadow-lg"
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden backdrop-blur-md border-t shadow-lg transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 border-gray-100"
                : "bg-black/30 border-white/20"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                        : "text-blue-300 bg-white/10 border-l-4 border-blue-300"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-white/90"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+91 90880 19480</span>
                </div>
                <Link
                  to="/contact"
                  className={`block mx-4 mt-3 text-center py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919088019480"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
