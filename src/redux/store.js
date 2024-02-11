import { configureStore } from '@reduxjs/toolkit';
import mentorsListReducer from './slices/mentors/mentorsListSlice';
import mentorDetailsReducer from './slices/mentors/mentorDetailsSlice';
import authReducer from './slices/auth/authSlice';
import addMentorReducer from './slices/mentors/addMentorSlice';
import reservationsListReducer from './slices/reservations/reservationsListSlice';

const store = configureStore({
  reducer: {
    mentorsList: mentorsListReducer,
    mentorDetails: mentorDetailsReducer,
    auth: authReducer,
    addMentor: addMentorReducer,
    reservationsList: reservationsListReducer,
  },
});

export default store;
