import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for menu
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={Logo} alt="DunaCore Logo" className="h-10 mr-2" />
          DunaCore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-teal transition"
          >
            Home
          </Link>
          <Link to="/about-us" className="text-gray-600 hover:text-teal transition">
            About Us
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-teal transition"
          >
            Products & Services
          </Link>
          <Link
            to="/research"
            className="text-gray-600 hover:text-teal transition"
          >
            R&D
          </Link>
          <Link
            to="/careers"
            className="text-gray-600 hover:text-teal transition"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-teal transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Consult Us Button for Desktop */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-purple px-4 py-2 text-white rounded hover:bg-purple-700 transition"
        >
          Consult Us
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none z-50" // Ensuring visibility and proper layering
          aria-label="Toggle menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {/* Toggle between FaBars (hamburger) and FaTimes (close) */}
          {isOpen ? (
            <FaTimes size={24} className="text-gray-600" />
          ) : (
            <FaBars size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Slide-In Effect */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="p-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                Products & Services
              </Link>
            </li>
            <li>
              <Link
                to="/research"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                R&D
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-teal"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="block mt-8 bg-purple px-4 py-2 text-white rounded hover:bg-purple-700 transition"
            onClick={toggleMenu}
          >
            Consult Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
