import React from 'react'

const Disclaimer = () => {
  return (
    <div className='w-full py-4 flex flex-col justify-center items-center px-5'>
        <h2 className='text-[1.2rem] md:text-[1.5rem] font-bold font-[family-name:var(--font-rethink)] text-center'>Disclaimer</h2>
        <p className="w-full text-center text-xs text-[#212121]/70  mb-3  tracking-tighter leading-tight">
        The figures here represent the track record of IMMCO Investments, the
        EB-5 manager and the Regional Center sponsoring the investment projects
        through our strategic partnership. Ek.indUS exists solely for the
        purpose of marketing, promoting, and providing access to IMMCO&apos;s
        EB-5 strategies for the Indian market, and shall not be interpreted
        otherwise. Past performance is not indicative of future results and
        performance may vary based on a number of factors unrelated to Ek.indUS
        or its affiliated entities.
      </p>
    </div>
  )
}

export default Disclaimer
