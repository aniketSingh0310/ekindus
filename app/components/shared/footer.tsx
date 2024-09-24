import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#1D5E73] py-[2.5rem] px-5 md:px-[5rem] w-full flex flex-col">
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
        <Image
          src={"/ekindusLogo2.svg"}
          width={120}
          height={30}
          alt="Ek.indUS Logo"
          className="md:w-[190px] md:h-[50px]"
        />
        <div className="flex flex-col text-white font-[family-name:var(--font-manrope)] text-[1.2rem]">
          <ul className="space-y-3 text-center md:text-start text-base">
            <Link href={"#q1"}>
              <li className="hover:underline decoration-1 underline-offset-2">What is an EB-5 visa?</li>
            </Link>
            <Link href={"#q2"}>
              <li className="hover:underline decoration-1 underline-offset-2">Why Ek.indUS?</li>
            </Link>
            <Link href={"#q3"}>
              <li className="hover:underline decoration-1 underline-offset-2">Qualification Criteria for EB-5 visa</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-white gap-3 py-4 md:py-0">
        <Link
          href={"https://www.linkedin.com/company/ek-indus/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxFill
            size={18}
            className="hover:scale-105 transition-all duration-200 ease-in md:size-[25px]"
          />
        </Link>
        <Link
          href={"https://www.instagram.com/ek.indus/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine
            size={18}
            className="hover:scale-105 transition-all duration-200 ease-in md:size-[25px]"
          />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCnEm9lvWPkbHOFw6gMrRy3A"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiYoutubeFill
            size={18}
            className="hover:scale-105 transition-all duration-200 ease-in md:size-[25px]"
          />
        </Link>
      </div>
      <div className="w-full h-[1px] bg-white/30 my-4"></div>
      <div className="w-full flex justify-center items-center text-white/80 font-[family-name:var(--font-manrope)] text-sm mt-2 text-center">
        © 2024 Ek.indUS. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
