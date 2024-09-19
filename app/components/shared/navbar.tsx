import Image from 'next/image'
import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-5 md:px-[3.5rem] py-5'>
    <Image src={"/ekindusLogo.svg"} width={120} height={50} alt='Ek.indUS Logo' className='md:w-[190px] md:h-[50px]'/>
    <div className='flex items-center gap-3'>
    <button className='text-[#C5922C]  px-5 py-2 border border-[#C5922C] rounded-md font-[family-name:var(--font-manrope)] text-sm md:text-[1rem] '>
        Get in Touch
    </button>
    <RiWhatsappLine className='size-[40px] text-[#C5922C] '/>
    </div>
    

</div>
  )
}

export default Navbar