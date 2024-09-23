"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  // Scroll behavior state
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrollPosition(currentScrollPos);

    const isScrolledDown = prevScrollPos < currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(!isScrolledDown || currentScrollPos < 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 w-full transition-all duration-300  z-[100] ${
          scrollPosition > 0 ? "bg-white" : "bg-white"
        } ease-in duration-150`}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
      >
        <div className="w-full flex justify-between items-center px-5 md:px-[3.5rem] py-5">
          <Link href={"/"}>
            <Image
              src={"/ekindusLogo.svg"}
              width={120}
              height={50}
              alt="Ek.indUS Logo"
              className="md:w-[150px] md:h-[45px]"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href={"#contact"}>
              <button className="text-[#C5922C] px-10 py-2 border border-[#C5922C] rounded-md font-[family-name:var(--font-manrope)] text-sm md:text-[0.9rem]">
                Get in Touch
              </button>
            </Link>
            <Link
             href={`https://wa.me/15125651075?text=${encodeURIComponent(
              "Hello, I would like to know more about your services!"
            )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappLine className="text-[#C5922C] text-[40px]" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
