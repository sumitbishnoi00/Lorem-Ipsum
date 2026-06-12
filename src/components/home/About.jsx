import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import Icons from '../common/Icons'
import { CARD_DATA } from "../../utils/helper";
import Card from "../common/Card";

const About = () => {

    const swiperRef = useRef(null)

    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    return (
        <section className='section-2 px-3 mt-10 sm:mt-20 md:mt-33.75'>
            <div className='max-w-360 w-full mx-auto px-3 sm:px-6 lg:px-[148.5px]'>

                <h2 className='font-semibold lg:text-[40px] sm:text-3xl text-2xl leading-[100%] text-black text-center mb-10'>Lorem ipsum</h2>

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
                            <Card title={item.title} description={item.desc} text="text-orange" />
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