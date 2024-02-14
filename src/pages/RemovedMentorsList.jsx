import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRemovedMentors } from '../redux/slices/mentors/removedMentorsSlice';
import ErrorStatus from '../components/ux/ErrorStatus';
import LoadingStatus from '../components/ux/LoadingStatus';
import RemoveMentorCard from '../components/RemoveMentorCard';

const RemovedMentorsList = () => {
  const dispatch = useDispatch();
  const { mentors, loading, error } = useSelector(
    (state) => state.removedMentorsList,
  );

  useEffect(() => {
    dispatch(fetchRemovedMentors());
  }, [dispatch]);

  return (
    <section className="h-[100vh] px-4 absolute top-0 left-0 lg:static w-full overflow-y-scroll py-[5rem]">
      <header className="flex flex-col mb-16 justify-center gap-8 items-center">
        <h1 className="text-center font-semibold capitalize  text-4xl text-[#111111]">
          Removed Mentors
        </h1>
        <div className="w-[80px] border-b-4 border-primary-green" />
      </header>
      {loading && <LoadingStatus />}
      {error && <ErrorStatus error={error} />}
      <section className="flex flex-wrap justify-center items-start gap-8 ">
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
      </section>
    </section>
  );
};

export default RemovedMentorsList;
