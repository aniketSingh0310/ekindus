import React from 'react';
import Form from '../shared/form';

const MobHero = () => {
  return (
    <>
    <div className="block md:hidden w-full relative mt-[5rem]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-[url('/heroBg.png')]">
        
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[260px]">
        <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-rethink)] text-center">The American Dream<br/> Made Simple</h1>
        <p className="mt-4 text-sm text-gray-300 font-[family-name:var(--font-manrope)] text-center">The process of getting an EB-5 visa made<br/> as seamless as possible</p>
      </div>
      
    </div>
    <div className='block md:hidden'>
        <Form/>
    </div>
    </>
  );
}

export default MobHero;
