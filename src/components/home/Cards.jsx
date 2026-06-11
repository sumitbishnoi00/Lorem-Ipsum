import React, { useState } from 'react'
import { PLANS } from '../../utils/helper';
import Icons from '../common/Icons';

const Cards = () => {

    const [yearly, setYearly] = useState(false);
    return (
        <section className='section-3 px-3 mt-36.25'>
            <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center'>
                <h2 className='font-semibold text-[40px] leading-[100%] text-black text-center'>Powerful features for <span className='text-bright-blue'>powerful <span className='azure-blue'>creators</span></span></h2>
                <p className='font-normal text-[20px] leading-[100%] text-light-black mt-5'>Choose a plan that’s right for you</p>

                <div className="btn-year flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => setYearly(false)}
                        className={`text-[16px] font-normal leading-[100%] transition-all  ${!yearly ? "text-black" : "text-gray"
                            }`}
                    >
                        Pay Monthly
                    </button>

                    <button
                        onClick={() => setYearly(!yearly)}
                        className={`w-12 h-6 rounded-full p-1 flex items-center transition-all duration-300 cursor-pointer ${yearly ? "bg-[#FF5B00] justify-end" : "bg-gray-300 justify-start"
                            }`}
                    >
                        <span className="w-4 h-4 bg-white rounded-full"></span>
                    </button>

                    <button
                        onClick={() => setYearly(true)}
                        className={`text-[16px] font-normal leading-[100%] transition-all ${yearly ? "text-black" : "text-gray"
                            }`}
                    >
                        Pay Yearly
                    </button>
                </div>

                <div className='max-w-296 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-12.5'>
                    {PLANS.map((item, index) => (

                        <div key={index} className='w-full py-10 px-6 border border-transparent rounded-xl hover:bg-orange group transition-all duration-500 hover:shadow-[0px_10px_25px_0px_#CCD9FF] cursor-pointer'>
                            
                            <h3 className='font-bold text-[22px] leading-[100%] text-black group-hover:text-white'>{item.title}</h3>
                            <p className='font-normal text-[16px] leading-[100%] mt-2.75 text-neutral group-hover:text-white'>{item.description}</p>

                            <div className='card-head mt-5 flex items-center'>
                                <h2 className=' font-semibold text-[56px] leading-[100%] text-black group-hover:text-white'>
                                    ${yearly ? item.yearly : item.monthly}
                                </h2>
                                <span className='ml-2 font-light text-[16px] leading-[100%] text-neutral group-hover:text-white'>
                                    / {yearly ? "Year" : "Month"}
                                </span>
                            </div>

                            <button className='card-btn w-full h-11 border border-orange rounded-sm mt-6 font-semibold text-[16px] leading-[100%] text-orange group-hover:bg-white transition-all duration-500 cursor-pointer'>
                                Get Started Now
                            </button>

                            <div className='mt-10 space-y-3'>
                                {item.features.map((featur, idx) => (

                                    <div key={idx} className='flex items-center gap-4.25'>
                                        {featur.active ? (<Icons icon={"right"} />) : (<Icons icon={"wrong"} />)}
                                        <span className={`group-hover:text-white ${!featur.active ? "text-cool-gray" : "text-black"}`}>{featur.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards