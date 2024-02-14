import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentorsList } from '../redux/slices/mentors/mentorsListSlice';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import RemoveMentorCard from '../components/RemoveMentorCard';
import { IoMdArrowRoundBack } from '../assets';

const RemoveAMentor = () => {
  const dispatch = useDispatch();
  const { mentors, loading, error } = useSelector((state) => state.mentorsList);

  useEffect(() => {
    dispatch(fetchMentorsList());
  }, [dispatch]);

  if (error) {
    return (
      <div className="absolute w-full h-full z-10 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center">
        <ErrorStatus error={error} />
      </div>
    );
  }

  return (
    <section className="absolute top-0 right-0 w-full h-screen m-auto px-2 md:p-2 overflow-y-scroll">
      {loading && (
        <div className="absolute w-full h-full z-20 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center text-right">
          <LoadingStatus />
        </div>
      )}
      <Link
        to="/reserveMentor"
        type="button"
        className="absolute z-50 top-4 left-8 text-primary-green hover:text-primary-orange focus:text-primary-green text-4xl"
      >
        <IoMdArrowRoundBack />
      </Link>
      <header className="flex flex-col mb-16 justify-center gap-8 items-center">
        <h1 className="text-center font-semibold capitalize  text-4xl text-primary-black">
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
