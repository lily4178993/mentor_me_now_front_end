import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SwiperNavigation = () => (
  <section className="absolute top-[240px]  left-0 w-full hidden lg:flex flex-row justify-between items-center px-0">
    <div className="swiper-button-prev h-[70px] w-[80px] bg-primary-green rounded-e-full relative left-0 after:hidden">
      <div className="relative flex items-center justify-center  bg-primary-green text-white transition-all duration-700">
        <IoIosArrowBack className="text-2xl" />
      </div>
    </div>
    <div className="swiper-button-next rounded-s-full h-[70px] w-[80px] bg-primary-green border relative right-0 after:hidden">
      <div className="relative  flex items-center justify-center  bg-primary-green text-white transition-all duration-700">
        <IoIosArrowForward className="text-2xl" />
      </div>
    </div>
  </section>
);

export default SwiperNavigation;
