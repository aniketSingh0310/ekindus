import React from 'react'
import Form2 from '../shared/form2'

const Contact = () => {
  return (
    <div className='w-full '>
   <p className='text-xs text-black ml-5 mb-3'>*partnership with IMMCO investments </p>
   <div className='w-full flex flex-col md:flex-row'>
   <div id='sec1' className='md:w-[40vw] bg-[url("/contactbg.png")] object-contain bg-center bg-cover py-[6rem] px-[4rem]'>
     <div className='flex flex-col gap-4 text-white'>
        <h4 className='font-[family-name:var(--font-rethink)] font-bold text-[2.5rem] leading-[1.1]'>Ready to apply for<br/>your EB-5 visa? </h4>
        <p className='font-[family-name:var(--font-manrope)] font-light text-[1rem]'>Schedule a consultation with us.</p>
     </div>
   </div>
   <div id='sec2' className='md:w-[60vw]'>
     <Form2/>
   </div>
   </div>
    </div>
  )
}

export default Contact