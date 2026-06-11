import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="px-4 bg-white pb-20">
      <div className="max-w-285 mx-auto w-full flex lg:flex-row flex-col  justify-between items-center">
        <div className=" max-w-100.5 w-full flex justify-center items-center bg-dark-sky rounded-[50px] border-[5px] md:h-35.25 sm:h-28 h-20  border-black">
          <div className="flex flex-row gap-24.25 ">
            <button
              onClick={() => setCount(count - 1)}
              className="font-normal md:text-[60px] sm:text-5xl text-3xl leading-[40%] cursor-pointer"
            >
              -
            </button>
            <button className="font-normal md:text-[60px] sm:text-5xl text-3xl leading-[40%]">
              {count}
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="font-normal md:text-[60px] sm:text-5xl text-3xl leading-[40%] cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
        <div className=" max-w-141  flex flex-col  gap-7.25 max-lg:mt-10   justify-between items-center">
          <div className="flex min-[599px]:flex-row flex-col gap-7.25 justify-between">
            <img className="w-67 h-51.75" src="/assets/reduction.webp" alt="reduction" />
            <img
              className="w-67 h-51.75"
              src="/assets/Faster Recovery.webp"
              alt="Faster Recovery"
            />
          </div>
          <img className="w-67 h-51.75" src="/assets/satisfaction.webp" alt="satisfaction" />
        </div>
      </div>
    </section>
  );
};

export default Counter;