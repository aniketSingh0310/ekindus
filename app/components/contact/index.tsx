import React from "react";
import Form2 from "../shared/form2";

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <p className="text-xs text-[#212121]/70 ml-5 mb-3 tracking-tight">
        *partnership with IMMCO investments, the EB-5 manager and the Regional
        Center sponsoring the investment project.
      </p>
      <p className="text-xs text-[#212121]/70 px-5 mb-3 text-justify tracking-tighter">
        ** The figures here represent the track record of IMMCO Investments, the
        EB-5 manager and the Regional Center sponsoring the investment projects
        through our strategic partnership. Ek.indUS exists solely for the
        purpose of marketing, promoting, and providing access to IMMCO&apos;s
        EB-5 strategies for the Indian market, and shall not be interpreted
        otherwise. Past performance is not indicative of future results and
        performance may vary based on a number of factors unrelated to Ek.indUS
        or its affiliated entities.
      </p>
      <div className="w-full flex flex-col md:flex-row">
        <div
          id="sec1"
          className='md:w-[40vw] bg-[url("/contactbg.png")] object-contain bg-center bg-cover py-[6rem] px-[4rem]'
        >
          <div className="flex flex-col gap-4 text-white">
            <h4 className="font-[family-name:var(--font-rethink)] font-bold text-[2.5rem] leading-[1.1]">
              Ready to apply for
              <br />
              your EB-5 visa?{" "}
            </h4>
            <p className="font-[family-name:var(--font-manrope)] font-light text-[1rem]">
              Schedule a consultation with us.
            </p>
          </div>
        </div>
        <div id="sec2" className="md:w-[60vw]">
          <Form2 />
        </div>
      </div>
    </div>
  );
};

export default Contact;
