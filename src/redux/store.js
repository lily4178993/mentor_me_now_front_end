import { configureStore } from '@reduxjs/toolkit';
import mentorsListReducer from './slices/mentors/mentorsListSlice';
import mentorDetailsReducer from './slices/mentors/mentorDetailsSlice';
import authReducer from './slices/auth/authSlice';

const store = configureStore({
  reducer: {
    mentorsList: mentorsListReducer,
    mentorDetails: mentorDetailsReducer,
    auth: authReducer,
  },
});

export default store;
