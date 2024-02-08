import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMentorDetails } from '../redux/slices/mentors/mentorDetailsSlice';

const MentorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector(
    (state) => state.mentorDetails
  );

  useEffect(() => {
    dispatch(fetchMentorDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const {
    name,
    occupation,
    skills,
    location,
    about,
    photo_url: photoUrl,
    year_of_experience: yearsOfExperience,
    hourly_fee: hourlyFee,
  } = details;

  const mentorDetails = [
    {
      id: 1,
      title: 'Location',
      value: location,
    },
    {
      id: 2,
      title: 'Hourly rate',
      value: `$${hourlyFee}/hr`,
    },
    {
      id: 3,
      title: 'Experience',
      value: `${yearsOfExperience} yrs`,
    },
    {
      id: 4,
      title: 'Occupation',
      value: occupation,
    },
    {
      id: 5,
      title: 'Skills',
      value: skills,
    },
  ];

  return (
    <section className="flex flex-col justify-start items-start w-full h-[100vh] border-green-700">
      <section className="flex h-[90%] w-full border-orange-500 justify-between items-start">
        <div className="flex justify-center items-center basis-2/3 h-[100%]">
          <img
            src={photoUrl}
            alt="mentor"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="border-blue-500 flex flex-col justify-start h-full basis-1/3 pt-[5rem]">
          <header className="px-4 text-right">
            <h2 className="text-4xl text-primary-black font-medium">{name}</h2>
            <p className="mt-4 text-gray-700">{about}</p>
          </header>
          <section className="mt-8 ">
            {mentorDetails.map((detail) => (
              <div
                key={detail.id}
                className="flex odd:bg-gray-200  justify-between items-center py-4 px-6"
              >
                <p className="font-medium">{detail.title}</p>
                <p className="text-gray-700">{detail.value}</p>
              </div>
            ))}
          </section>
          <div className="h-auto mt-auto flex justify-center items-center">
            <Link
              to={`/mentors`}
              className="py-4 px-6 w-[200px] text-center rounded-full bg-primary-green text-white font-bold text-xl"
            >
              Reserve
            </Link>
          </div>
        </div>
      </section>
      <div className="flex h-[10%] justify-start items-end">
        <Link
          to={`/mentors`}
          className="w-full py-4 px-6 rounded-e-full bg-primary-green text-white font-bold text-xl"
        >
          Back
        </Link>
      </div>
    </section>
  );
};

export default MentorDetails;
