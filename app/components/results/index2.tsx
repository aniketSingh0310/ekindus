"use client";
import React, { useState } from 'react';
import CountUp from "react-countup";
import { motion } from 'framer-motion';

const Results = () => {
  const [startCount, setStartCount] = useState(false);

  const handleViewportEnter = () => {
    setStartCount(true);
  };

  const handleViewportLeave = () => {
    setStartCount(false);
  };

  return (
    <div className='w-full h-[80vh] bg-[url("/components/ship.jpg")] bg-center bg-cover p-4 md:p-14 flex justify-center md:justify-start items-center'>
       
       <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1 }}
         onViewportEnter={handleViewportEnter}
         onViewportLeave={handleViewportLeave}
         className='bg-white p-3 md:p-8 flex flex-col space-y-4 w-[90%] md:w-[40%] tracking-tight'
       > 
           <div className='w-full flex justify-between items-center border-b border-gray-400/50'>
              <p className='text-2xl text-gray-400 hover:text-black font-bold'>Assets</p>
              <CountUp
                start={0}
                end={startCount ? 247 : 0}
                duration={4}
                className="text-[40px] md:text-[60px] font-bold"
              />
           </div>
           <div className='w-full flex justify-between items-center border-b border-gray-400/50'>
              <p className='text-2xl text-gray-400 hover:text-black font-bold'>Destinations</p>
              <CountUp
                start={0}
                end={startCount ? 500 : 0}
                suffix='+'
                duration={4}
                className="text-[40px] md:text-[60px] font-bold"
              />
           </div>
           <div className='w-full flex justify-between items-center border-b border-gray-400/50'>
              <p className='text-2xl text-gray-400 hover:text-black font-bold'>Transit</p>
              <CountUp
                start={0}
                end={startCount ? 980 : 0}
                suffix='+'
                duration={4}
                className="text-[40px] md:text-[60px] font-bold"
              />
           </div>
           <p className='text-lg md:text-xl text-black/50'>Through a big network and assets, we cover all your logistical needs.</p>
       </motion.div>
    </div>
  );
};

export default Results;