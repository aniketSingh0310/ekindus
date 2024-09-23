import React from "react";
import Title from "../shared/title";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="w-[90%] md:max-w-4xl flex flex-col py-[3.5rem] justify-center items-center mx-auto">
        <Title title="Testimonials" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[4rem] py-10 md:px-0 px-3">
          <div className="relative bg-white py-5 px-10 shadow-md">
            <Image
              src={"/apos1.svg"}
              width={35}
              height={35}
              alt="apos"
              className="absolute left-5 top-5"
            />
            <Image
              src={"/apos2.svg"}
              width={35}
              height={35}
              alt="apos"
              className="absolute right-5 bottom-16"
            />
            <div className="flex flex-col">
              <p className="text-justify p-5 text-base font-[family-name:var(--font-rethink)] tracking-[-0.020em] h-[150px] ">
                We are very happy that we completed the EB-5 process
                successfully. It was easy to work with you and we will recommend
                others to choose your next EB-5 project!
              </p>
              <p className="text-center text-[#3B6F80] text-lg font-semibold font-[family-name:var(--font-manrope)">
                Bo Sun
              </p>
            </div>
          </div>
          <div className="relative bg-white py-5 px-10 shadow-md">
            <Image
              src={"/apos1.svg"}
              width={35}
              height={35}
              alt="apos"
              className="absolute left-5 top-5"
            />
            <Image
              src={"/apos2.svg"}
              width={35}
              height={35}
              alt="apos"
              className="absolute right-5 bottom-16"
            />
            <div className="flex flex-col">
              <p className="text-justify p-5 text-base font-[family-name:var(--font-rethink)] tracking-[-0.020em] h-[150px]">
                I invested and got my Green Card. Then I recommended my friend
                to choose your next project and they got their Green Card too!
              </p>
              <p className="text-center text-[#3B6F80] text-lg font-semibold font-[family-name:var(--font-manrope)">
                Zhang Yi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full font-[family-name:var(--font-manrope) text-xs p-5 text-justify tracking-tight">
        Disclaimer: ©ekindus.com This webpage or any document found here is not
        an offer or solicitation to sell or acquire securities or any other
        financial products and is not a prospectus, disclosure statement or
        other offering document. For illustrative purposes for use in this
        electronic media, descriptions, processes or details are simplified..
        Any offering of securities will only be by means of a confidential
        private offering memorandum, and conducted in accordance with applicable
        law. These securities have not been registered under the Securities Act
        of 1933 and may not be offered or sold in the United States or to U.S.
        persons unless the securities are registered under the Act, or an
        exemption from the registration requirements of the Act is available.
        Hedging transactions involving the securities may not be conducted
        unless in compliance with the Act.
      </div>
    </>
  );
};

export default Testimonials;
