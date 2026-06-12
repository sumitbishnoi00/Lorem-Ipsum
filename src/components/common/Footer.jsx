import React from 'react'
import { FOOTER_LINKS } from '../../utils/helper'
import { Link } from 'react-router-dom'

const Footer = ({ activePage }) => {
    return (
        <footer className={`px-3 min-h-95.25 md:mt-[98.25px] sm:mt-17.5 mt-10 py-6 flex items-center justify-center ${activePage === "home" ? "bg-charcoal-black rounded-t-[30px]" : "bg-prussian-blue"}`}>
            <div className='max-w-360 w-full mx-auto'>
                <div className='max-w-296 w-full mx-auto flex flex-col lg:flex-row max-lg:items-center justify-between gap-10 pl-5.5 lg:pr-52.25'>
                    <div className='flex flex-col gap-4 max-w-107.75 w-full'>
                        <h1 className='font-bold text-[38px] leading-[100%] text-orange'>Logo <span className='text-white'>Here</span></h1>
                        <p className='font-normal text-[16px] leading-[140%] text-light-gray'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                    </div>
                    <div className='max-w-98.5 w-full grid sm:grid-cols-2 gap-10 sm:gap-38'>
                        {FOOTER_LINKS.map((section, index) => (

                            <div key={index} className='gap-6 flex flex-col'>
                                <h3 className='font-semibold text-[18px] leading-[150%] text-white'>{section.title}</h3>

                                <ul className='text-light-gray space-y-4'>
                                    {section.links.map((link, idx) => (

                                        <li key={idx}>
                                            <Link to={"/"} className='font-normal text-[16px] leading-[100%]'>{link}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full border mt-14.5 border-very-light-gray'></div>

                <p className='font-normal text-[16px] leading-[100%] text-center text-light-gray mt-6'>Copyright©2024 (Logo) All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer