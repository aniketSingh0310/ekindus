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
            The EB-5 Immigrant Investor Program allows a non-US investor
            applicant and their immediate family members to gain permanent
            residency status and receive a green card. Through the EB-5 program,
            the qualified applicant invests a minimum of USD $800,000 into a
            project, within the U.S, and the investment must lead to the
            creation of 10+ American jobs. The most common types of EB-5
            investments are real estate development projects located in a
            Targeted Employment Area (“TEA”).
          </p>
        </div>
        <div id="sec2" className="md:px-10">
          <h3 className="text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
            Why Ek.indUS?
          </h3>
          <p className="text-[1rem] tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)] max-w-3xl">
            The Ek.indUS team leverages the expertise of industry veterans with
            more than a decade of success in the immigration investment space.
            *Through our strategic association with a leading US-based EB-5
            manager, Ek.indUS’ clients can be rest assured that they are in good
            hands. Our team, well-versed in regulatory aspects, will guide you
            through the entire process’ complexities.
          </p>
          <p className="mt-5 text-[1rem] tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)] max-w-3xl">
            Expertise is not our only differentiating factor. In a space filled
            with “experts” looking to earn a commission from pitching unrelated
            investment projects, Ek.indUS will be your reliable partner. Our
            team will be by your side as you step towards obtaining permanent
            U.S. residency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
