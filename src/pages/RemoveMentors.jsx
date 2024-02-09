import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentorsList } from '../redux/slices/mentors/mentorsListSlice';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import RemoveMentorCard from '../components/RemoveMentorCard';

const RemoveMentors = () => {
  const dispatch = useDispatch();
  const { mentors, status, error } = useSelector((state) => state.mentorsList);

  useEffect(() => {
    dispatch(fetchMentorsList());
  }, [dispatch]);

  if (error) {
    return <ErrorStatus error={error} />;
  }
  if (status === 'loading') {
    return <LoadingStatus />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center lg:h-[100vh] items-start gap-8 py-[5rem] px-[5rem]">
        {mentors.map((mentor) => (
          <RemoveMentorCard
            key={mentor.id}
            id={mentor.id}
            name={mentor.name}
            photoUrl={mentor.photo_url}
            about={mentor.about}
          />
        ))}
      </div>
    </>
  );
};

export default RemoveMentors;
