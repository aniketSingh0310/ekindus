import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[url('/liberty.png')] bg-cover flex justify-center items-center py-[10rem]">
      <div className="max-w-7xl flex flex-col md:flex-row justify-between text-white gap-[5rem] md:gap-[15rem] md:px-0 px-10">
        <div id="sec1">
          <h3 className="text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
            What is an EB-5 visa
          </h3>
          <p className="text-[1.1rem] text-justify font-light font-[family-name:var(--font-manrope)] max-w-2xl">
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
        <div id="sec2">
          <h3 className="text-[2.5rem] font-bold font-[family-name:var(--font-rethink)]">
            What is an EB-5 visa
          </h3>
          <p className="text-[1.1rem] text-justify font-light font-[family-name:var(--font-manrope)] max-w-2xl">
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
      </div>
    </div>
  );
};

export default About;
