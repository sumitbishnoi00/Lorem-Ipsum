import React from 'react'
import Icons from './Icons'

const Card = ({ title, description, linkText = "Read more", bgColor = "bg-soft-peach" }) => {
  return (
     <div className={` rounded-[22px] py-5 px-7.5 ${bgColor}`}>
        <div>
            <Icons icon={"users"} />
        </div>

        <h3 className='text-2xl font-semibold leading-[100%] mt-8 text-black'>
            {title}
        </h3>

        <p className='font-light text-[16px] leading-[150%] text-rich-black mt-4'>
            {description}
            <span className='text-orange cursor-pointer ml-1'>
                {linkText}
            </span>
        </p>
     </div>
  )
}

export default Card