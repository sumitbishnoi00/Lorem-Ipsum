import React from 'react'
import Icons from '../common/Icons'
import { useNavigate } from 'react-router-dom'

const Hero = ({ activePage }) => {
    
    const navigate = useNavigate();

    const activePagePath = activePage === "home" ? "/second" : "home";
    return (
        <section className={`section-1 px-3 min-h-200 flex flex-col items-center transition-all duration-500 ${activePage === "home" ? "bg-[linear-gradient(107.6deg,#FF5501_8.81%,#B1106F_163.48%)]  rounded-b-[30px]" : "bg-sky-blue"} `}>
            <div className=' max-w-360 w-full px-3 py-4 flex items-center justify-between bg-white/10 backdrop:blur-md rounded-2xl'>
                <div className='flex flex-row items-center gap-5'>
                    <img src={activePage === "home" ? "/assets/Lorem-logo-2.webp" : "/assets/Lorem-logo.webp"} className='sm:w-16 w-10 sm:h-16 h-10' alt="Lorem-logo" />
                    <h2 className={`font-bold md:text-[32px] sm:text-[28px] text-2xl leading-[100%] ${activePage === "home" ? "text-sky-blue" : "text-orange"}`}>Lorem <span className='text-white'>Ipsum</span></h2>
                </div>

                <button onClick={() => navigate(activePagePath)} className={`sm:px-6.75 px-3.5 py-3.5 border border-transparent rounded-[13px] font-semibold text-[16px] leading-[100%] cursor-pointer ${activePage === "home" ? "bg-orange text-white hover:bg-white hover:text-orange hover:border-orange" : "bg-sky-blue text-white hover:bg-white hover:text-sky-blue hover:border-sky-blue"}`} >
                    {activePage === "home" ? "Second Page" : "Home Page"}</button>
            </div>
            <div className='max-w-360 w-full mx-auto flex items-center justify-center mt-50'>

                <div className='max-w-196.5 w-full flex flex-col items-center justify-center text-center'>
                    <h1 className='w-full font-extrabold md:text-[60px] sm:text-[48px] text-[36px] leading-[120%] text-white mb-5'>Lorem ipsum dolor sit amet consectetur. Sceleris</h1>
                    <p className='para font-medium sm:text-[16px] text-[14px] leading-[140%] text-light-peach-pink'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>

                    {activePage === "home" ? (
                        <div className='flex justify-center'>
                            <div className='bg-white border border-silver-gray rounded-[15px] p-0.75 flex items-center w-full max-w-108.75 overflow-hidden mx-auto mt-10'>
                                <div className='flex items-center flex-1 pl-[14.64px] pr-19'>
                                    <Icons icon={"search"} />
                                    <input type="text" placeholder='Search' className='w-full ml-5 outline-none text-medium-gray font-normal text-[16px] leading-[100%]' />
                                </div>

                                <button className='px-6.75 py-3.5 border border-transparent rounded-[13px] bg-orange text-white font-semibold text-[16px] leading-[100%] hover:bg-white hover:text-orange hover:border-orange cursor-pointer transition-all duration-500'>Start</button>
                            </div>
                        </div>
                    )
                        :
                        (
                            <div className="max-w-56.5 w-full mt-8.75 flex flex-row justify-between items-center">
                                <button className="px-6 py-3.5 font-medium text-[16px] leading-[111%] rounded-[58px] cursor-pointer hover:border-white  hover:text-white hover:bg-sky-blue  bg-white text-sky-blue duration-300 transition-all border border-transparent">Sign up</button>
                                <button className="px-6 py-3.5 font-medium text-[16px] leading-[111%] rounded-[58px] cursor-pointer hover: border border-white text-white bg-sky-blue  duration-300 transition-all hover:bg-white hover:text-sky-blue">Login</button>
                            </div>
                        )
                    }


                </div>

            </div>
        </section>
    )
}

export default Hero