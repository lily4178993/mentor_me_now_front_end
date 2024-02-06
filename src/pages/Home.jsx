import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchMentor } from '../redux/slices/mentor/mentorSlice';
import getRandomColor from '../utils/getRandomColor';
import AlertStatus from '../components/AlertStatus';
import SampleArrow from '../components/ux/SampleArrow';
import testImage from '../assets/photo-Marie-Curie.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Home component. Displays a list of mentors fetched from the API.
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const dispatch = useDispatch();
  const { mentors, status, error } = useSelector((state) => state.mentor);

  useEffect(() => {
    dispatch(fetchMentor());
  }, [dispatch]);

  /**
   * Settings for the Slider component.
   * @type {Object}
   */
  const settings = {
    lazyLoad: true,
    className: 'center',
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: (
      <SampleArrow
        ariaLabel="Next"
      />
    ),
    prevArrow: (
      <SampleArrow
        ariaLabel="Previous"
      />
    ),
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
    <section className="w-3/4 m-auto">
      <div>
        <h1 className="uppercase font-extrabold">Ours best Mentors</h1>
        <p className="text-xs -mt-4">Please select a Mentor</p>
        <div className="w-1/6 mx-auto mt-8 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted">{' '}</div>
      </div>
      {(status === 'loading') && <AlertStatus className="h-[420px] flex justify-center items-center animate-bounce text-lg uppercase text-primary-orange" alertMessage="Loading..." />}
      {(status === 'failed')
      && (
        <div className="h-[420px] flex flex-col justify-center items-center text-primary-red">
          <p>
            Error when fetching informations.
            <br />
            {' '}
            Causes:
            {' '}
          </p>
          <AlertStatus className="text-lg" alertMessage={error} />
        </div>
      )}
      {(status === 'succeeded') && (
      <div className="mt-20">
        {mentors && mentors.length > 0 ? (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {mentors?.map((mentor) => (
                <div key={mentor.id} className="bg-white h-[420px] text-primary-black my-4">
                  <div className="h-36 mx-2 flex justify-center items-center relative">
                    <div className={`h-36 w-36 rounded-full bg-${getRandomColor()}`}>
                      <img src={testImage} alt={mentor.name} className="h-48 w-48 rounded-b-full -mt-9 -ml-8" />
                    </div>
                  </div>
                  <div className="h-56 flex flex-col justify-stretch items-center gap-2 p-4 relative">
                    <h2 className="text-xl font-extrabold">{mentor.name}</h2>
                    <div className="w-1/2 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted">{' '}</div>
                    <p className="text-center text-sm">{mentor.about}</p>
                    <div className="h-20 flex items-center gap-4 absolute bottom-0">
                      <button type="button" className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full">S</button>
                      <button type="button" className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full">V</button>
                      <button type="button" className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full">G</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <AlertStatus className="h-[420px] flex justify-center items-center text-lg uppercase text-primary-gray" alertMessage="No Mentor found" />
        )}
      </div>
      )}
    </section>
  );
};

export default Home;
