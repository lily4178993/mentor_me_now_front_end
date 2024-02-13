import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsList } from '../redux/slices/reservations/reservationsListSlice';
import LoadingStatus from '../components/ux/LoadingStatus';
import ErrorStatus from '../components/ux/ErrorStatus';
import AlertStatus from '../components/AlertStatus';
import ReservationItem from '../components/ReservationItem';

const Reservations = () => {
  const user = useSelector((state) => state.authLogin.user);
  const mentors = useSelector((state) => state.mentorsList.mentors);
  const { loading, reservations, error } = useSelector((state) => state.reservationsList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchReservationsList(user.id));
    }
  }, [dispatch, user]);

  if (!user) {
    return (
      <div className="absolute w-full h-full z-10 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center">
        <LoadingStatus />
      </div>
    );
  }

  return (
    <section className="w-full h-full m-auto px-2 md:p-2 relative overflow-hidden">
      {loading && (
        <div className="absolute w-full h-full z-10 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center">
          <LoadingStatus />
        </div>
      )}
      {error && (
        <div className="absolute w-full h-full z-10 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center">
          <ErrorStatus error={error} />
        </div>
      )}
      {reservations && reservations.length === 0 && (
        <div className="absolute w-full h-full z-10 top-0 left-0 backdrop-blur-sm bg-primary-black/50 flex items-center justify-center">
          <AlertStatus alertMessage="You don't have any reservations yet." className="text-primary-orange text-2xl" />
        </div>
      )}
      <h1 className="text-center text-4xl font-bold underline p-4 mb-3">
        Your Appointments
      </h1>
      <ul className="flex flex-wrap justify-center gap-x-2 gap-y-3 md:gap-y-5">
        {reservations.map((reservation) => {
          const mentor = mentors.find((m) => m.id === reservation.mentor_id);
          return <ReservationItem key={reservation.id} reservation={reservation} mentor={mentor} />;
        })}
      </ul>
    </section>
  );
};

export default Reservations;
