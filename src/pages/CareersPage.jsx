import { Link } from "react-router-dom";
import CareersHeroImage from "../assets/careers-banner.jpg"; // Example image, replace with your own

const CareersPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <img
          src={CareersHeroImage}
          alt="Careers at Our Company"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Join Our Team and Make a Difference
          </h1>
          <p className="text-xl mb-8">
            We are dedicated to fostering a dynamic and inclusive work
            environment. Explore our career opportunities and become a part of
            our journey to innovation and excellence.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Current Job Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
            <p className="text-gray-700 mb-4">
              Develop and maintain our software applications. Collaborate with
              cross-functional teams to deliver high-quality solutions.
            </p>
            <Link
              to="/careers/software-engineer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Product Manager</h3>
            <p className="text-gray-700 mb-4">
              Lead product development initiatives and manage the product
              lifecycle from concept to launch.
            </p>
            <Link
              to="/careers/product-manager"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">
              Clinical Research Associate
            </h3>
            <p className="text-gray-700 mb-4">
              Oversee clinical trials, ensuring adherence to regulatory
              requirements and high-quality data collection.
            </p>
            <Link
              to="/careers/clinical-research-associate"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>
          {/* Repeat similar blocks for additional job openings */}
        </div>
      </div>

      {/* Company Culture */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Company Culture
        </h2>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            At our company, we value collaboration, creativity, and integrity.
            Our team thrives in a supportive and inclusive environment where
            innovation is encouraged and success is celebrated.
          </p>
          <Link
            to="/about"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Benefits & Perks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Health Insurance</h3>
            <p className="text-gray-700">
              Comprehensive health insurance plans to keep you and your family
              healthy.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Retirement Plans</h3>
            <p className="text-gray-700">
              Competitive retirement plans to help you prepare for the future.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Professional Development
            </h3>
            <p className="text-gray-700">
              Opportunities for growth and development through training and
              workshops.
            </p>
          </div>
          {/* Repeat similar blocks for additional benefits */}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Ready to Join Us?</h2>
        <p className="text-lg mb-8">
          Apply for our open positions or get in touch with our HR team to learn
          more about opportunities at our company.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default CareersPage;
