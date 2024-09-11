import { Link } from "react-router-dom";
import RDImage from "../assets/hc1.jpg"
import "react-multi-carousel/lib/styles.css";
import P1 from "../assets/p1.jpeg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.webp";



const ProductsPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
     {/* Hero Section */}
     <div className="relative bg-gray-800 text-white py-24">
        <img
          src={RDImage}
          alt="Research & Development"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Advancing Healthcare through Cutting-Edge Research
          </h1>
          <p className="text-xl mb-8">
          Our products are testimonials to our commitment towards the patients
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Custom Drug Development</h3>
            <p>
              We offer tailored drug development solutions for specialized health needs.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Contract Manufacturing</h3>
            <p>
              We partner with leading brands to provide high-quality contract manufacturing services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Clinical Research</h3>
            <p>
              Our clinical research department ensures compliance and effectiveness for all products.
            </p>
          </div>
        </div>
      </div>

      {/* Product Catalogue Section */}
      <div className="bg-gray-100 py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={P1}
              alt="Cancer Treatment"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Cancer Treatment</h4>
            <p className="text-gray-700 mb-4">
              Innovative solutions for treating various types of cancer.
            </p>
            <Link
              to="/products/cancer-treatment"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={P2}
              alt="Cardiovascular"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Cardiovascular</h4>
            <p className="text-gray-700 mb-4">
              Effective medicines for cardiovascular health.
            </p>
            <Link
              to="/products/cardiovascular"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={P3}
              alt="Diabetes"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Diabetes</h4>
            <p className="text-gray-700 mb-4">
              Advanced treatments for diabetes management.
            </p>
            <Link
              to="/products/diabetes"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={P4}
              alt="Vaccines"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Vaccines</h4>
            <p className="text-gray-700 mb-4">
              A wide range of vaccines for various infectious diseases.
            </p>
            <Link
              to="/products/vaccines"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
