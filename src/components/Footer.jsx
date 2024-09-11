import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-8 border-b border-gray-700">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">DunaCore Pharmaceuticals</h3>
            <p className="text-gray-400 mb-4">
              Innovating healthcare solutions to improve life and empower healthier communities around the world.
            </p>
            <p>Email: <a href="mailto:info@dunacorepharma.com" className="hover:text-teal">info@dunacorepharma.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-teal">+91 98372 64440</a></p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about-us" className="hover:text-teal transition">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:text-teal transition">Products & Services</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-teal transition">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-teal transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal and Privacy Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
           <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Dunacore Pharmaceuticals. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-500 hover:text-teal text-sm transition">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-gray-500 hover:text-teal text-sm transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;