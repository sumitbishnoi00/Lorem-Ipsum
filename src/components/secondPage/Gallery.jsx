import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { SWIPER_DATA } from "../../utils/helper";

const Stats = () => {
    return (
        <section className="section-gallery px-3 py-20">
            <div className="max-w-7xl mx-auto px-3">

                <h1 className="font-semibold text-[40px] leading-[142%] text-black text-center mb-5">Lorem ipsum dolor sit amet</h1>
                <p className="font-medium text-[16px] leading-[140%] text-graphite-gray text-center mb-11.25">Lorem ipsum dolor sit amet consectetur. Amet varius in enim.</p>

                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        540: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {SWIPER_DATA.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item.image}
                                alt=""
                                className="w-full h-75 object-cover rounded-2xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Stats