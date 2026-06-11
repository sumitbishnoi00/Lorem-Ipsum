import React from 'react'
import Icons from '../common/Icons'

const Hero = () => {
  return (
    <section className='section-1 px-3 min-h-200 bg-[linear-gradient(107.6deg,#FF5501_8.81%,#B1106F_163.48%)] rounded-b-[30px] flex items-center justify-center'>
        <div className='max-w-360 w-full mx-auto flex items-center justify-center'>
            <div className='max-w-196.5 w-full flex flex-col items-center justify-center text-center'>
            <h1 className='w-full font-extrabold text-[60px] leading-[120%] text-white mb-5'>Lorem ipsum dolor sit amet consectetur. Sceleris</h1>
            <p className='para font-medium text-[16px] leading-[140%] text-light-peach-pink mb-10'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>

            <div className='flex justify-center'>
                <div className='bg-white border border-silver-gray rounded-[15px] p-0.75 flex items-center w-full max-w-108.75 overflow-hidden mx-auto'>
                    <div className='flex items-center flex-1 pl-[14.64px] pr-19'>
                        <Icons icon={"search"}  /> 
                        <input type="text" placeholder='Search' className='w-full ml-5 outline-none text-medium-gray font-normal text-[16px] leading-[100%]' />
                    </div>

                    <button className='px-6.75 py-3.5 border border-transparent rounded-[13px] bg-orange text-white font-semibold text-[16px] leading-[100%] hover:bg-white hover:text-orange hover:border-orange cursor-pointer transition-all duration-500'>Start</button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero