import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[url('/liberty.png')] bg-cover bg-center flex flex-col">
    <div className="w-full  flex justify-center py-[4rem] md:py-[6rem] lg:py-[6.4rem]">
      <div className="lg:max-w-[90vw] xl:max-w-[85vw] w-full flex flex-col md:flex-row justify-between text-white gap-[3rem] md:gap-[5rem] lg:gap-[10rem] xl:gap-[15rem] px-6 md:px-10 lg:px-0">
        {/* Section 1 */}
        <div id="sec1" className="md:w-1/2">
          <h3 className="text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
            What is an EB-5 visa?
          </h3>
          <p className="text-[1rem] lg:text-[1rem] text-justify font-normal font-[family-name:var(--font-manrope)] tracking-tight mt-4 leading-snug">
            The EB-5 Immigrant Investor Program allows a non-US investor
            applicant and their immediate family members to gain USA permanent
            residency status and receive a Green Card. Through the EB-5 program,
            the qualified applicant invests a minimum of USD $800,000 into a
            project, within the U.S., and the investment must lead to the
            creation of 10+ American jobs. The most common types of EB-5
            investments are real estate development projects located in a
            Targeted Employment Area (“TEA”). Once the requirements have been
            achieved and the Green Card is granted, the funds are returned to
            the investor applicant.
          </p>
        </div>
        {/* Section 2 */}
        <div id="sec2" className="md:w-1/2">
          <h3 className="text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
            Why Ek.indUS?
          </h3>
          <p className="text-[1rem] lg:text-[1rem] leading-snug tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)] mt-4">
            The Ek.indUS team leverages the expertise of industry veterans with
            more than a decade of success in the immigration investment space.
            *Through our strategic association with a leading US-based EB-5
            manager, Ek.indUS’ clients can be rest assured that they are in good
            hands. Our team, well-versed in regulatory aspects, will guide you
            through the entire process’ complexities.
          </p>
          <p className="mt-5 text-[1rem] lg:text-[1rem] leading-snug tracking-tight text-justify font-normal font-[family-name:var(--font-manrope)]">
            Expertise is not our only differentiating factor. In a space filled
            with “experts” looking to earn a commission from pitching the
            investment projects of an unrelated third party, Ek.indUS will be
            your reliable partner. Our team will be by your side as you step
            toward obtaining permanent U.S. residency.
          </p>
        </div>
      </div>
      
    </div>
    <p className="text-xs text-center text-white/70 ml-5 mb-3 tracking-tight">
        (partnership with IMMCO investments, the EB-5 manager and the Regional
        Center sponsoring the investment project.)
      </p>
      
    </div>
  );
};

export default About;
