import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import AlertStatus from '../components/AlertStatus';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import Header from '../components/ux/Header';
import { fetchMentorsList } from '../redux/slices/mentors/mentorsListSlice';
import Slider from '../components/slider/Slider';

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

  if (status === 'loading') {
    return <LoadingStatus />;
  }
  if (status === 'failed') {
    return <ErrorStatus error={error} />;
  }

  return (
    <section className="h-screen absolute top-0 left-0 lg:static w-full py-[5rem]">
      <Header />
      <div className="mt-8">
        <Slider mentors={mentors} />
      </div>
    </section>
  );
};

export default Home;
