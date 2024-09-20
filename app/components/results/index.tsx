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
   <div id='q2' className='w-full flex flex-col justify-center items-center py-[3.5rem] space-y-5'>
    <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)] text-center">The Results Speak for Themselves</h2>
    <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1 }}
         onViewportEnter={handleViewportEnter}
         onViewportLeave={handleViewportLeave}
        className='md:max-w-7xl w-[90%] grid md:grid-cols-3 grid-cols-2 gap-5 text-center'>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 600 : 0}
                prefix='$'
                suffix='M+'
                duration={4}
                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>In Capital Invested</h4>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 500 : 0}
                suffix='+'
                duration={4}
                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>Investor Applicants</h4>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 13 : 0}
                duration={4}
                suffix='+'

                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>Years Managed</h4>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 99 : 0}
                duration={4}
                suffix='.9%'
                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>I-526 Approval Success</h4>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 100 : 0}
                duration={4}
                suffix='%'
                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>I-829 Approval Success</h4>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
        <CountUp
                start={0}
                end={startCount ? 100 : 0}
                duration={4}
                suffix='%'
                className="text-[40px] md:text-[3rem] font-extrabold text-[#C5922C] font-[family-name:var(--font-rethink)]"
              />
             <h4 className='text-sm font-[family-name:var(--font-manrope)]'>Return of Capital Success</h4>
        </div>
    </motion.div>

   </div>
  );
};

export default Results;