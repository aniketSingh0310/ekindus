import React from 'react';
import Title from '../shared/title';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'Freedom to live anywhere in the U.S. and travel anywhere in the world',
    image: '/benefits/bldg.jpg'
  },
  {
    id: 2,
    title: 'Ability to attend U.S. schools at the same cost as citizens',
    image: '/benefits/flag.jpg'
  },
  {
    id: 3,
    title: 'Liberty to apply for scholarships and prestigious internships',
    image: '/benefits/education.jpg'
  },
  {
    id: 4,
    title: 'Right to get a job of your choice or to start your own business',
    image: '/benefits/men.jpg'
  }
];

const Benefits = () => {
  return (
    <div className='w-full flex flex-col md:flex-col bg-[#FFFDF8] py-10 space-y-14'>
      <Title title='Benefits of a Green Card' />
      <div className='w-[85%] md:max-w-[1300px] mx-auto grid md:grid-cols-4 grid-cols-1 gap-[2.5rem] md:px-5'>
        {data.map((benefit) => (
          <div key={benefit.id} className='flex flex-col shadow-md bg-white'>
            <div className="w-full">
              <Image 
                src={benefit.image} 
                alt={benefit.title} 
                width={400} 
                height={300} 
                className='object-cover w-full h-full'
                layout="responsive"
                quality={100} // Ensures the image quality is high
              />
            </div>
            <p className='text-center px-2 py-2 font-[family-name:var(--font-manrope)] text-[13.5px]  tracking-tight'>
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
