import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-max md:h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/6606216/6606216-uhd_2732_1440_24fps.mp4" // Path to your video file in the public folder
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full h-full px-8 lg:px-24">
        {/* Left Section - Text */}
        <div className="text-white">
          <h1 className="text-[3.5rem] font-bold font-[family-name:var(--font-rethink)] leading-[1.1]">
          The American Dream<br/> Made Simple.
          </h1>
          <p className="text-[1rem]  font-[family-name:var(--font-manrope)]">
          The process of getting an EB-5 visa, made as seamless as possible.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
