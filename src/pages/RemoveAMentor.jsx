import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentorsList } from '../redux/slices/mentors/mentorsListSlice';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import RemoveMentorCard from '../components/RemoveMentorCard';

const RemoveAMentor = () => {
  const dispatch = useDispatch();
  const { mentors, status, error } = useSelector((state) => state.mentorsList);

  useEffect(() => {
    dispatch(fetchMentorsList());
  }, [dispatch]);

  if (status === 'loading') {
    return <LoadingStatus />;
  }
  if (error) {
    return <ErrorStatus error={error} />;
  }

  return (
    <section className="py-[5rem] border-orange-500 px-[5rem] pb-[3rem] h-[100vh] w-full overflow-y-scroll">
      <header className="flex flex-col mb-16 justify-center gap-8 items-center">
        <h1 className="text-center font-semibold capitalize  text-4xl text-[#111111]">
          Remove a mentor
        </h1>
        <div className="w-[80px] border-b-4 border-red-400" />
      </header>
      <section>
        <div className="flex justify-end items-center mb-8 max-w-6xl px-[2rem]">
          <Link
            to="/removed_mentors"
            className="bg-primary-blue font-medium text-white px-6 py-2 rounded"
          >
            Removed Mentors
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-8 ">
          {mentors.map((mentor) => (
            <RemoveMentorCard
              key={mentor.id}
              id={mentor.id}
              name={mentor.name}
              photoUrl={mentor.photo_url}
              about={mentor.about}
              removed={mentor.remove}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default RemoveAMentor;
