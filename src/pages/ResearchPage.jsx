import { Link } from "react-router-dom";
import RDImage from "../assets/research-banner.jpg"; // Replace with your image
import F1 from "../assets/rdf1.jpg"; // Replace with your image
import F2 from "../assets/rdf2.jpg"; // Replace with your image
import F3 from "../assets/rdfc3.png"; // Replace with your image

const ResearchPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={RDImage}
          alt="Research & Development"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white py-12 px-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Advancing Healthcare through Cutting-Edge Research
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our commitment to research drives innovation and enhances patient
            care. Explore our focus areas and ongoing projects.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Research Focus Areas */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Research Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={F1}
              alt="Cancer Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Cancer Research
              </h3>
              <p className="text-gray-700 mb-4">
                We are at the forefront of developing innovative therapies for
                various types of cancer, aiming to improve patient outcomes and
                survival rates.
              </p>
              <Link
                to="/research/cancer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={F2}
              alt="Cardiovascular Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Cardiovascular Research
              </h3>
              <p className="text-gray-700 mb-4">
                Our research focuses on innovative treatments and solutions for
                cardiovascular diseases, enhancing the quality of life for
                patients worldwide.
              </p>
              <Link
                to="/research/cardiovascular"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={F3}
              alt="Neurology Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Neurology Research
              </h3>
              <p className="text-gray-700 mb-4">
                We are dedicated to advancing treatments for neurological
                disorders, including Alzheimer’s and Parkinson’s disease,
                through groundbreaking research.
              </p>
              <Link
                to="/research/neurology"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Ongoing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Project A: Advanced Cancer Therapy
              </h3>
              <p className="text-gray-700 mb-4">
                Developing a new class of targeted therapies for the treatment
                of various cancers, with a focus on personalized medicine.
              </p>
              <Link
                to="/research/project-a"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Project B: Cardiovascular Innovations
              </h3>
              <p className="text-gray-700 mb-4">
                Researching novel treatments and drug delivery methods for
                cardiovascular diseases, aiming to improve patient outcomes and
                safety.
              </p>
              <Link
                to="/research/project-b"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Project C: Neurological Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Investigating new therapies for neurodegenerative diseases,
                including innovative approaches to enhance brain function and
                delay disease progression.
              </p>
              <Link
                to="/research/project-c"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation & Impact */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Innovation & Impact
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Transformative Innovations
            </h3>
            <p className="text-gray-700 mb-4">
              Our research is at the forefront of medical innovation, leading to
              breakthroughs that significantly impact patient care and treatment
              paradigms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
