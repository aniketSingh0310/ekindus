import React from "react";
import Form from "../shared/form";

const Hero = () => {
  return (
    <div className="relative w-full h-max md:h-[80vh] overflow-hidden hidden md:block mt-[5.2rem]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heroVideo.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between  w-full h-full px-8 lg:px-24">
        {/* Left Section - Text */}
        <div className="text-white py-[7rem]">
          <h1 className="text-[3.5rem] font-bold font-[family-name:var(--font-rethink)] leading-[1.1] text-center">
          The American Dream<br/> Made Simple
          </h1>
          <p className="text-[1rem]  font-[family-name:var(--font-manrope)] mt-4">
          The process of getting an EB-5 visa, made as seamless as possible.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        
        <div className="flex h-full items-center">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
