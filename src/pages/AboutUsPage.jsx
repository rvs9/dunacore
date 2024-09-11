import HC2 from "../assets/aboutus.mp4";
import I1 from "../assets/careers-banner.jpg";
import I2 from "../assets/distibution-banner.jpg";
import I3 from "../assets/manufacturing-banner.jpg";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.jpg";

const AboutUsPage = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="relative">
          <video
            src={HC2} // Replace with your video path
            autoPlay
            muted
            loop
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight px-4">
              Empowering Life Through Innovation
            </h1>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-800">
            Our Mission & Vision
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
            At DunaCore, we are dedicated to innovating pharmaceuticals that
            improve life. Our commitment to excellence drives us to constantly
            seek out new solutions that meet the highest standards of quality
            and care. We aim to be a leader in the pharmaceutical industry by
            pushing the boundaries of research and development.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-4">
              <img
                src={I1}
                alt="Commitment to Quality"
                className="mx-auto h-24 w-24 rounded-lg object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              Commitment to Quality
            </h3>
            <p className="text-gray-600">
              We are dedicated to maintaining world-class quality standards in
              all our products. From rigorous testing to compliance with
              international regulations, quality is at the core of everything we
              do.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-4">
              <img
                src={I2}
                alt="Innovative Solutions"
                className="mx-auto h-24 w-24 rounded-lg object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              Innovative Solutions
            </h3>
            <p className="text-gray-600">
              Our cutting-edge research and development team work tirelessly to
              create pioneering solutions that address the evolving needs of
              healthcare. Innovation is not just a goal; it is our passion.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-4">
              <img
                src={I3}
                alt="Empathy & Care"
                className="mx-auto h-24 w-24 rounded-lg object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              Empathy & Care
            </h3>
            <p className="text-gray-600">
              We place the patient at the center of everything we do. Our
              commitment to empathy and care ensures that every decision and
              action is made with the patients best interest in mind.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm text-center">
              <img
                src={T3}
                alt="Team Member 1"
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4"
              />
              <h4 className="text-xl font-semibold">Dr. Bharat</h4>
              <p className="text-gray-600">Chief Scientific Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm text-center">
              <img
                src={T2}
                alt="Team Member 2"
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4"
              />
              <h4 className="text-xl font-semibold">Lisa Johnson</h4>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-sm text-center">
              <img
                src={T1}
                alt="Team Member 3"
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4"
              />
              <h4 className="text-xl font-semibold">Carlos Garcia</h4>
              <p className="text-gray-600">Director of Operations</p>
            </div>
          </div>
        </div>

        {/* Company History */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our History</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Founded in 2007, DunaCore began with a vision to revolutionize the
            pharmaceutical industry through innovation and quality. Over the
            years, we have grown from a small startup to a global leader, with
            numerous breakthroughs in healthcare solutions and a commitment to
            improving lives worldwide.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            What Our Partners Say
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              DunaCore has consistently delivered exceptional quality and
              innovation, making them a trusted partner in our healthcare
              initiatives.
            </p>
            <p className="text-sm text-gray-500">
              — Jane Doe, Healthcare Professional
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
