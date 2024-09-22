"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

interface ItemData {
  id: number;
  icon: string;
  desc: string;
}

interface ItemProps {
  item: ItemData;
  index: number;
}

const Item: React.FC<ItemProps> = ({ item, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      
      className="flex flex-col gap-4 items-center mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, delay: index * 0.2 }} // Delay based on index for staggered effect
    >
      <Image
      
        width={120}
        height={120}
        src={item.icon}
        alt={`Icon ${item.id}`}
      />
      <p ref={ref} className="tracking-[-0.015] text-[1rem] text-center w-full md:max-w-[300px] text-gray-700 font-semibold font-[family-name:var(--font-manrope)]">
        {item.desc}
      </p>
    </motion.div>
  );
};

const Info: React.FC = () => {
  const data: ItemData[] = [
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

  return (
    <div id="q3" className="flex flex-col md:w-full w-[90%] mx-auto items-center py-[3.5rem] space-y-8">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)] text-center">
        Qualification Criteria for EB-5 visa
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-[1rem] px-5 md:px-20">
        {data.map((item, index) => (
          <Item key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Info;
