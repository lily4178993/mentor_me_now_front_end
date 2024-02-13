import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <section className=" flex flex-col justify-start h-full py-[2rem] border-orange-500 m-auto">
      <Header />
      {status === 'loading' && <LoadingStatus />}
      {status === 'failed' && <ErrorStatus error={error} />}
      {status === 'succeeded' && (
        <div className="mt-8">
          {mentors && mentors.length > 0 ? (
            <MentorList mentors={mentors} />
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

export default Home;
