import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsList } from '../redux/slices/reservations/reservationsListSlice';

const calculateFees = (startTimeParam, endTimeParam, hourlyFeeParam) => {
  const convertTo24Hour = (time) => {
    const [main, period] = time.split(' ');
    const [hours, minutes] = main.split(':');
    let hours24 = hours;
    if (period === 'PM') {
      hours24 = (hours % 12) + 12;
    }
    return `${hours24}:${minutes}`;
  };

  const startTime = new Date(`1970-01-01T${convertTo24Hour(startTimeParam)}:00Z`);
  const endTime = new Date(`1970-01-01T${convertTo24Hour(endTimeParam)}:00Z`);
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
    <section className="w-full h-full m-auto px-2 md:p-2">
      <h1 className="text-center text-4xl font-bold underline p-4 mb-3">Your Appointments</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {reservations && reservations.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-3 md:gap-y-5">
          {reservations.map((reservation) => {
            const mentor = mentors.find((m) => m.id === reservation.mentor_id);
            return (
              <li key={reservation.id} className="min-w-64 bg-primary-green shadow-2xl rounded-md">
                {mentor ? (
                  <div className="flex flex-col">
                    <img
                      src={mentor.photo_url}
                      alt=""
                      className="max-h-32 mx-auto"
                    />
                    <div className="text-xs text-white p-2 relative">
                      <span className="text-xs text-center py-2 block">Meeting</span>
                      <p className="flex justify-between">
                        <span className="font-extrabold">With </span>
                        <span className="text-right italic">{mentor.name}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-extrabold">On </span>
                        <span className="text-right italic">{reservation.date}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-extrabold">From </span>
                        <span className="text-right italic">{reservation.formatted_times.start_time}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-extrabold">To </span>
                        <span className="text-right italic">{reservation.formatted_times.end_time}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-extrabold">Total fees </span>
                        <span className="text-right italic">
                          $
                          {calculateFees(
                            reservation.formatted_times.start_time,
                            reservation.formatted_times.end_time,
                            mentor.hourly_fee,
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>
                    We couldn`t find a mentor matching your request. It seems
                    like you haven`t reserved a mentor in the usual manner.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          We couldn`t find any reservations. It looks like you haven`t reserved
          any mentors yet.
        </p>
      )}
    </section>
  );
};

export default Reservations;
