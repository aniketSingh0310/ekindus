import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    icon: "/icon1.svg",
    desc: "Invest a minimum of $800,000 in a commercial project within the U.S.",
  },
  {
    id: 2,
    icon: "/icon2.svg",
    desc: "Prove that funds are lawfully sourced ",
  },
  {
    id: 3,
    icon: "/icon3.svg",
    desc: "Have no criminal or financial fraud convictions or U.S. immigration law violations",
  },
 
];
const Info = () => {
  return (
    <div className="flex flex-col md:w-full w-[90%] mx-auto items-center py-[3.5rem] space-y-8">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)] text-center">
        Crucial Requirements for EB-5 visa
      </h2>
      <div className="max-w-5xl flex flex-col md:flex-row gap-[2.5rem] px-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4  items-center mx-auto"
          >
            <Image
              width={120}
              height={120}
              src={item.icon}
              alt={`Icon ${item.id}`}
            />
            <p className="tracking-[-0.015] text-[0.9rem]  max-w-[280px] text-gray-700 text-justify font-semibold font-[family-name:var(--font-manrope)]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
