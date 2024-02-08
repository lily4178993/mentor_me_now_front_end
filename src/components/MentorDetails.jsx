import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMentorDetails } from '../redux/slices/mentors/mentorDetailsSlice';

const MentorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector(
    (state) => state.mentorDetails,
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
    photo_url: photoUrl,
    occupation,
    skills,
    year_of_experience: yearsOfExperience,
    location,
    about,
    hourly_fee: hourlyFee,
  } = details;
  return (
    <section className="flex border w-full border-orange-500 justify-between items-start">
      <div className="border flex justify-center items-center basis-2/3 h-[90%]">
        <img
          src={photoUrl}
          alt="mentor"
          className="w-full h-full object-contain shadow"
        />
      </div>
      <div className="border basis-1/3 pt-[5rem]">
        <header className="px-4 text-right">
          <h2 className="text-4xl font-medium">{name}</h2>
          <p className="mt-4">{about}</p>
        </header>
        <section className="mt-8">
          <div className="flex odd:bg-gray-200  justify-between items-center py-4 px-4">
            <p>Location</p>
            <p>{location}</p>
          </div>
          <div className="flex odd:bg-gray-200  justify-between items-center py-4 px-4">
            <p>Hourly rate</p>
            <p>
              $
              {hourlyFee}
              /hr
            </p>
          </div>
          <div className="flex odd:bg-gray-200 justify-between items-center py-4 px-4">
            <p>Experience</p>
            <p>
              {yearsOfExperience}
              yrs
            </p>
          </div>
          <div className="flex odd:bg-gray-200 justify-between items-center py-4 px-4">
            <p>Occupation</p>
            <p>{occupation}</p>
          </div>
          <div className="flex odd:bg-gray-200 justify-between items-center py-4 px-4">
            <p>Skills</p>
            <p>{skills}</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MentorDetails;
