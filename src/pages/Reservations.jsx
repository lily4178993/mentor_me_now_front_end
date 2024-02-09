import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsList } from '../redux/slices/reservations/reservationsListSlice';

const calculateFees = (startTimeParam, endTimeParam, hourlyFeeParam) => {
  const startTime = new Date(`1970-01-01T${startTimeParam}:00Z`);
  const endTime = new Date(`1970-01-01T${endTimeParam}:00Z`);
  const hours = (endTime - startTime) / (1000 * 60 * 60);
  return (hourlyFeeParam * hours).toFixed(2);
};

const Reservations = () => {
  const user = useSelector((state) => state.auth.user);
  const mentors = useSelector((state) => state.mentorsList.mentors);
  const { loading, reservations, error } = useSelector((state) => state.reservationsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchReservationsList(user.id));
    }
  }, [dispatch, user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Reservations Details:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {reservations && (
        <ul>
          {reservations.map((reservation) => {
            const mentor = mentors.find((m) => m.id === reservation.mentor_id);
            return (
              <li key={reservation.id}>
                {mentor
                  ? (
                    <div className="flex">
                      <img src={mentor.photo_url} alt="" className="max-h-28" />
                      <div>
                        <p>
                          <span>Mentor: </span>
                          {mentor.name}
                        </p>
                        <p>
                          <span>Appointment Date: </span>
                          {reservation.date}
                        </p>
                        <p>
                          <span>Start time: </span>
                          {reservation.formatted_times.start_time}
                        </p>
                        <p>
                          <span>End time: </span>
                          {reservation.formatted_times.end_time}
                        </p>
                        <p>
                          Total fees: $
                          {calculateFees(
                            reservation.formatted_times.start_time,
                            reservation.formatted_times.end_time, mentor.hourly_fee,
                          )}
                        </p>
                      </div>
                    </div>
                  ) : (<p>Mentor not found</p>)}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reservations;
