import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SampleArrow from '../components/ux/SampleArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AlertStatus from '../components/AlertStatus';
import MentorList from '../components/ux/MentorList';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import Header from '../components/ux/Header';
import { fetchMentorsList } from '../redux/slices/mentors/mentorsListSlice';

// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * Home component. Displays a list of mentors fetched from the API.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const dispatch = useDispatch();
  const { mentors, status, error } = useSelector((state) => state.mentorsList);

  useEffect(() => {
    dispatch(fetchMentorsList());
  }, [dispatch]);

  /**
   * Settings for the Slider component.
   * @type {Object}
   */
  const settings = {
    lazyLoad: true,
    className: 'center',
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <SampleArrow className="bg-red-500" ariaLabel="Next" />,
    prevArrow: <SampleArrow ariaLabel="Previous" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-[100%] flex flex-col justify-start h-full py-[7rem] border-orange-500 m-auto">
      <Header />
      {status === 'loading' && <LoadingStatus />}
      {status === 'failed' && <ErrorStatus error={error} />}
      {status === 'succeeded' && (
        <div className="mt-8">
          {mentors && mentors.length > 0 ? (
            <MentorList mentors={mentors} settings={settings} />
          ) : (
            <AlertStatus
              className="h-[420px] flex justify-center items-center text-lg uppercase text-primary-gray"
              alertMessage="No Mentor found"
            />
          )}
        </div>
      )}
    </section>
  );
};

// const CustomPrevArrow = (props) => (
//   <button {...props} className="prev-arrow">
//     <FiChevronLeft />
//   </button>
// );

// const CustomNextArrow = (props) => (
//   <button {...props} className="next-arrow">
//     <FiChevronRight />
//   </button>
// );

export default Home;
