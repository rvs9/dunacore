import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HeroVideo from "../assets/hcvid.mp4"; // Import video
import HC2 from "../assets/hc1.jpg";
import HC3 from "../assets/hc3.jpg";

import S1 from "../assets/research-banner.jpg";
import S2 from "../assets/manufacturing-banner.jpg";
import S3 from "../assets/distibution-banner.jpg";

import P1 from "../assets/p1.jpeg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.webp";

const HomePage = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section>
      {/* Hero Section with Carousel */}
      <div className="relative w-full h-screen">
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={5000}
          infinite
        >
          <div className="relative w-full h-screen">
            <video
              src={HeroVideo}
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 flex justify-center items-center">
              <div className="text-center text-white px-8 py-12">
                <h1 className="text-6xl font-extrabold mb-6 leading-tight">
                  Welcome to Dunacore Pharmaceuticals
                </h1>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${HC2})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 flex flex-col justify-center items-center">
              <div className="text-center text-white px-8 py-12">
                <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                  Driving Innovation in Medicine
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Dedication to improving healthcare through high-quality
                  medicine.
                </p>
                <Link
                  to="/about"
                  className="bg-white text-green-600 py-3 px-6 rounded-full shadow-lg hover:bg-green-100 transition"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
          {/* <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${HC3})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 flex flex-col justify-center items-center">
              <div className="text-center text-white px-8 py-12">
                <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                  Committed to Global Health
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Delivering essential medicines worldwide with the highest
                  standards of care.
                </p>
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>

      {/* Services Section with Cards and Images */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Key Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 text-center rounded-lg transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={S1}
              alt="Research & Development"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-4">Research & Development</h3>
            <p className="mb-4">
              Cutting-edge research to develop the latest medications for global
              health challenges.
            </p>
            <Link
              to="/research"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center"
            >
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white shadow-lg p-6 text-center rounded-lg transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={S2}
              alt="Manufacturing"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
            <p className="mb-4">
              State-of-the-art manufacturing facilities ensuring the highest
              quality and efficiency.
            </p>
            <Link
              to="/research"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center"
            >
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white shadow-lg p-6 text-center rounded-lg transition transform hover:scale-105 hover:shadow-xl">
            <img
              src={S3}
              alt="Distribution"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-4">Distribution</h3>
            <p className="mb-4">
              A robust supply chain ensuring timely delivery of essential
              medicines worldwide.
            </p>
            <Link
              to="/research"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center"
            >
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product Catalogue Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={P1}
                alt="Product 1"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Cancer Treatment</h4>
              <p className="text-gray-700 mb-4">
                Innovative solutions for treating various types of cancer.
              </p>
              <Link
                to="/products"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={P2}
                alt="Product 2"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Cardiovascular</h4>
              <p className="text-gray-700 mb-4">
                Effective medicines for cardiovascular health.
              </p>
              <Link
                to="/products"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={P3}
                alt="Product 3"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Diabetes</h4>
              <p className="text-gray-700 mb-4">
                Advanced treatments for diabetes management.
              </p>
              <Link
                to="/products"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={P4}
                alt="Product 4"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2">Vaccines</h4>
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
    </section>
  );
};

export default HomePage;
