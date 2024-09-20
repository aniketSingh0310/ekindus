import React from 'react';
import Title from '../shared/title';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'Freedom to live anywhere in the U.S. and travel anywhere in the world',
    image: '/benefits/bldg.png'
  },
  {
    id: 2,
    title: 'Ability to attend U.S. schools at the same cost as citizens',
    image: '/benefits/flag.png'
  },
  {
    id: 3,
    title: 'Liberty to apply for scholarships and prestigious internships',
    image: '/benefits/edu.png'
  },
  {
    id: 4,
    title: 'Right to get a job of your choice or to start your own business',
    image: '/benefits/man.png'
  }
];

const Benefits = () => {
  return (
    <div className='w-full flex flex-col md:flex-col bg-[#FFFDF8] py-10 space-y-14'>
      <Title title='Benefits of a Green Card' />
      <div className='w-[80%] md:max-w-[1400px] mx-auto grid md:grid-cols-4 grid-cols-1 gap-[2rem] md:px-5'>
        {data.map((benefit) => (
          <div key={benefit.id} className='flex flex-col items-center shadow-md bg-white'>
            <div className="w-full h-[270px]">
              <Image 
                src={benefit.image} 
                alt={benefit.title} 
                width={260} 
                height={260} 
                className='object-cover w-full h-full'
              />
            </div>
            <p className='text-center px-2 py-4 font-[family-name:var(--font-manrope)] text-sm tracking-tight'>
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
