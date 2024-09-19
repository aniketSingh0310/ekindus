import Image from 'next/image'
import React from 'react'
import { RiInstagramLine, RiTwitterXFill, RiWhatsappLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-[#1D5E73] py-[2.5rem] px-5 md:px-[5rem] w-full flex flex-col'>
     <div className='flex flex-col-reverse md:flex-row gap-5 justify-between items-center'>
       <Image src={"/ekindusLogo2.svg"} width={120} height={30} alt='Ek.indUS Logo' className='md:w-[190px] md:h-[50px]'/>
       <div className='flex flex-col text-white font-[family-name:var(--font-manrope)] text-[1.2rem]'>
    <ul className='space-y-3 text-center md:text-start text-base'>
      <li>What is the EB-5 Investor Program?</li>
      <li>The Ek.indUS Advantage</li>
      <li>EB-5 Visa Requirements</li>
    </ul>
       </div>
     </div>
     <div className='w-full flex justify-center items-center text-white gap-3 py-4 md:py-0'>
     <RiTwitterXFill size={18} className='hover:scale-105 transition-all duration-200 ease-in md:size-[25px]'/>
     <RiInstagramLine size={18} className='hover:scale-105 transition-all duration-200 ease-in md:size-[25px]'/>
     <RiWhatsappLine size={18} className='hover:scale-105 transition-all duration-200 ease-in md:size-[25px]'/>
 </div>
 <div className='w-full h-[1px] bg-white/30 my-4'></div>
 <div className='w-full flex justify-center items-center text-white/80 font-[family-name:var(--font-manrope)] text-base mt-2 text-center'>© 2024 Ek.IndUS. All Rights Reserved.</div>
    </div>
  )
}

export default Footer