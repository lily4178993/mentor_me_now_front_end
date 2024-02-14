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
    <section className="absolute top-0 left-0 lg:static w-full h-screen m-auto px-2 md:p-2 overflow-y-scroll py-8 lg:py-[5rem]">
      {loading && (
        <div className="absolute w-full h-full z-20 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center text-right">
          <LoadingStatus />
        </div>
      )}
      <header className="flex flex-col mb-16 justify-center gap-8 items-center">
        <h1 className="text-center font-semibold capitalize  text-4xl text-primary-black">
          Inactive Mentors
        </h1>
        <div className="w-[80px] border-b-4 border-primary-green" />
      </header>
      {error && <ErrorStatus error={error} />}
      <section className="flex flex-wrap justify-center items-start gap-8 ">
        {mentors.length === 0 ? (
          <div className="text-center text-2xl text-primary-orange">
            <p className="text-primary-black">No inactive mentors yet!</p>
          </div>
        ) : (
          mentors.map((mentor) => (
            <RemoveMentorCard
              key={mentor.id}
              id={mentor.id}
              name={mentor.name}
              photoUrl={mentor.photo_url}
              about={mentor.about}
              removed={mentor.remove}
            />
          ))
        )}
      </section>
    </section>
  );
};

export default RemovedMentorsList;
