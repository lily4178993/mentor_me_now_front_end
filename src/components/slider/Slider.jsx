import PropTypes from 'prop-types';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavigation from './Navigation';
import MentorCard from '../MentorCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ mentors }) => (
  <>
    <div className="relative flex flex-col justify-center items-center w-full border-green-600 lg:px-0 lg:py-0">
      <Swiper
        className="w-full max-w-[1024px] border-orange-500"
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        initialSlide={0}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={1000}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        }}
      >
        {mentors.map((mentor) => {
          const {
            id, name, photo_url: photoUrl, about,
          } = mentor;
          return (
            <SwiperSlide
              key={id}
              className="overflow-hidden rounded-xl"
              style={{ width: 'auto', height: '500px' }}
            >
              <MentorCard id={id} name={name} about={about} image={photoUrl} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperNavigation />
    </div>
  </>
);

Slider.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo_url: PropTypes.string,
      about: PropTypes.string,
    }),
  ).isRequired,
};

export default Slider;
