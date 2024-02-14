import React from 'react';
import PropTypes from 'prop-types';
import calculateFees from '../utils/calculateFees';
import AlertStatus from './AlertStatus';

const ReservationItem = ({ reservation, mentor }) => {
  if (!mentor) {
    return (
      <AlertStatus
        alertMessage="We couldn't find a mentor matching your request. It seems like you haven't reserved a mentor in the usual manner."
      />
    );
  }

  return (
    <li className="min-w-64 bg-primary-white shadow-md border rounded-md p-4">
      <div className="flex flex-col">
        <img
          src={mentor.photo_url}
          alt=""
          className="max-h-32 mx-auto"
        />
        <div className="text-xs text-gray-700 p-2 relative">
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
            <span className="text-right italic">
              {reservation.formatted_times.start_time}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="font-extrabold">To </span>
            <span className="text-right italic">
              {reservation.formatted_times.end_time}
            </span>
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
    </li>
  );
};

ReservationItem.propTypes = {
  reservation: PropTypes.shape({
    formatted_times: PropTypes.shape({
      start_time: PropTypes.string.isRequired,
      end_time: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  mentor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired,
    hourly_fee: PropTypes.number.isRequired,
  }),
};

ReservationItem.defaultProps = {
  mentor: null,
};

export default ReservationItem;
