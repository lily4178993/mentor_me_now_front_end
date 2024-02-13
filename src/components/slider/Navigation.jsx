import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SwiperNavigation = () => (
  <section className="absolute top-[270px] left-0 w-full hidden lg:flex flex-row justify-between items-center px-0">
    <div className="swiper-button-prev relative left-0 after:hidden">
      <div className="relative flex items-center justify-center rounded-e-full bg-primary-green text-white transition-all duration-700">
        <IoIosArrowBack className="text-2xl" />
      </div>
    </div>
    <div className="swiper-button-next relative right-0 after:hidden">
      <div className="relative flex items-center justify-center rounded-s-full bg-primary-green p-4 text-white transition-all duration-700">
        <IoIosArrowForward className="text-2xl" />
      </div>
    </div>
  </section>
);

export default SwiperNavigation;
