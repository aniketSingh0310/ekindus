import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[url('/liberty.png')] bg-cover bg-center flex justify-center py-[3rem]">
      <div className="lg:max-w-5xl xl:max-w-7xl flex flex-col md:flex-row justify-between text-white gap-[5rem] md:gap-[15rem] md:px-0 px-10">
        <div id="sec1" className="md:px-10">
          <h3 className="text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
          What is an EB-5 visa?
 </h3>
          <p className="text-[1rem] text-justify font-normal font-[family-name:var(--font-manrope)] max-w-3xl tracking-tight">
            This visa is granted through the EB-5 Immigrant Investor Program.
            The EB-5 visa makes the holders and their immediate families
            eligible for a green card. It enables qualified applicants to invest
            in projects within the U.S. The minimum investment required is
            $800,000. This investment should also help create 10 full-time jobs
            for U.S. citizens. We ensure that your funds are invested in
            qualified development projects of established real estate
            developers.
          </p>
        </div>
        <div id="sec2" className="md:px-10">
          <h3 className="text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
          Why Ek.indUS?
          </h3>
          <p className="text-[1rem] tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)] max-w-3xl">
            The Ek.indUS team leverages the expertise of leading industry
            veterans with more than a decade of experience and success in the
            immigration investment space. Through our strategic association with
            a leading US-based EB-5 manager, Ek.indUS’ clients can rest assured
            that they are in good hands and that their experience will be
            seamless. Our team is well-versed in all regulatory aspects and
            provides a unique understanding of how to navigate the complexities
            of the process from start to finish.
          </p>
          <p className="mt-5 text-[1rem] tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)] max-w-3xl">
            Expertise is not our only differentiating factor. In a space filled
            with agencies and “experts” looking to earn a commission from
            pitching you an unrelated third party’s investment projects,,
            Ek.indUS is here to serve you as a trusted and reliable partner. Our
            team will be by your side throughout the entire process and hold
            your hand as you step towards to your dream of obtaining permanent
            U.S. residency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
