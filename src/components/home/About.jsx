import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import Icons from '../common/Icons'
import { CARD_DATA } from "../../utils/helper";

const About = () => {

    const swiperRef = useRef(null)

    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    return (
        <section className='section-2 px-3 mt-33.75'>
            <div className='max-w-360 w-full mx-auto px-[148.5px]'>

                <h2 className='font-semibold text-[40px] leading-[100%] text-black text-center mb-10'>Lorem ipsum</h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSwiper={(swiper) => {

                        swiperRef.current = swiper;
                        setIsStart(swiper.isStart);
                        setIsEnd(swiper.isEnd);
                    }}

                    onSlideChange={(swiper) => {

                        setIsStart(swiper.isStart);
                        setIsEnd(swiper.isEnd);
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {CARD_DATA.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-soft-peach rounded-[22px] py-5 px-7.5 h-full">

                                <Icons icon={"users"} />

                                <h3 className="text-2xl font-semibold leading-[100%] mt-8 text-black">
                                    {item.title}
                                </h3>

                                <p className="font-light text-[16px] leading-[150%] text-rich-black mt-4">
                                    {item.desc}
                                    <span className="text-orange cursor-pointer ml-1">
                                        Read more
                                    </span>
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-6.5 mt-7.5">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className=" cursor-pointer"
                    >
                        <Icons icon={"leftarrow"} pathName={isStart ? "stroke-[#0A0A0A]" : "stroke-black"} />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className=" cursor-pointer"
                    >
                        <Icons icon={"rightarrow"} pathName={isEnd ? "stroke-[#0A0A0A]" : "stroke-black"} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About