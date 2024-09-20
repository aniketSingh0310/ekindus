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
      <div className="relative z-10 flex flex-col md:flex-row justify-between max-w-7xl px-[7rem] h-full mx-auto">
        {/* Left Section - Text */}
        <div className="text-white py-[7rem] md:pt-[5rem] md:pb-[10rem] flex flex-col justify-center md:translate-y-[-10%] lg:translate-y-0">
          <h1 className="text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] font-bold font-[family-name:var(--font-rethink)] leading-[1.2] md:leading-[1.1] text-center">
            The American Dream<br /> Made Simple
          </h1>
          <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] font-[family-name:var(--font-manrope)] mt-4 text-center md:text-left tracking-tight">
            The process of getting an EB-5 visa, made as seamless as possible.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex h-full items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;
