import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchReservationsList } from '../redux/slices/reservations/reservationsListSlice';

const BASE_URL = 'http://localhost:3000/api/v1';

function ReservationForm() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [mentorId, setMentorId] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Get userId from local storage
    if (!userId) {
      // Handle the case where the user's ID is not found in local storage
      return;
    }

    try {
      await axios.post(`${BASE_URL}/users/:user_id/reservations`, {
        reservation: {
          start_time: startTime,
          end_time: endTime,
          date,
          user_id: userId,
          mentor_id: mentorId,
        },
      });
      dispatch(fetchReservationsList(userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" value={mentorId} onChange={(e) => setMentorId(e.target.value)} required />
      <button type="submit">Create Reservation</button>
    </form>
  );
}

export default ReservationForm;
