'use client'; // Ensure this component runs only on the client-side

import React from 'react';
import Title from '../shared/title';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    title: 'Freedom to live anywhere in the U.S. and travel anywhere in the world',
    image: '/benefits2/bldg.jpg',
    image2: '/benefits2/bldg2.png'
  },
  {
    id: 2,
    title: 'Ability to attend U.S. schools at the same cost as citizens',
    image: '/benefits2/flag.jpg',
    image2: '/benefits2/flag2.png'
  },
  {
    id: 3,
    title: 'Liberty to apply for scholarships and prestigious internships',
    image: '/benefits2/education.jpg',
    image2: '/benefits2/education2.png'
  },
  {
    id: 4,
    title: 'Right to get a job of your choice or to start your own business',
    image: '/benefits2/men.jpg',
    image2: '/benefits2/men2.png'
  }
];

const Benefits = () => {
  return (
    <div className='w-full flex flex-col md:flex-col bg-[#FFFDF8] py-10 space-y-14'>
      <Title title='Benefits of a Green Card' />
      <div className='w-[85%] md:max-w-[1300px] mx-auto grid md:grid-cols-4 grid-cols-1 gap-[2.5rem] md:px-5'>
      {data.map((benefit) => (
          <div key={benefit.id} className='relative flex flex-col'>
            {/* Image container */}
            <motion.div
              className="relative w-full h-[300px] overflow-hidden"
              whileHover="hover" 
            >
              {/* Base image (image1) that slides down on hover */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ y: 0 }} 
                variants={{
                  hover: { y: "30%", opacity: 1 }, 
                }}
                transition={{ duration: 0.5 }} 
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={400}
                  height={300}
                  className='object-cover w-full h-full'
                  quality={100}
                />
              </motion.div>

              {/* Hover image (image2) on top */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 1, scale: 1 }}  
                variants={{
                  hover: { opacity: 1, scale: 1.07 }, 
                }}
                transition={{ duration: 0.8, }} 
              >
                <Image
                  src={benefit.image2}
                  alt={benefit.title}
                  width={400}
                  height={300}
                  className='object-cover w-full h-full'
                />
              </motion.div>
            </motion.div>

            <p id='q2' className='bg-white shadow-sm text-center px-2 py-2 font-[family-name:var(--font-manrope)] text-[13.5px] tracking-tight'>
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
