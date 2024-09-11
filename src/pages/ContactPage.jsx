import contactImage from "../assets/contactImage.jpg";

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Contact Form */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          We Love to Hear from You
        </h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Information
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Our Office</h4>
            <p className="text-gray-700 mb-4">
              DunaCore Pharmaceutical <br />
              Health City, Vadodara
              <br />
              India
            </p>
            <p className="text-gray-700 mb-4">
              Email:{" "}
              <a
                href="mailto:info@dunacorepharma.com"
                className="hover:text-teal"
              >
                info@dunacorepharma.com
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-teal">
                +91 98372 64440
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31411.226376793342!2d-77.0368707!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1c7433f20c7%3A0x89b7b1c7433f20c7!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1620380506787!5m2!1sen!2sus"
              title="Our Location"
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
