import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './slices/mentor/mentorSlice';
import addMentorReducer from './slices/mentor/addMentorSlice';
import authReducer from './slices/auth/authSlice';

/**
 * Redux store configured with the mentor reducer.
 * @type {Store}
 */

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    auth: authReducer,
    addMentor: addMentorReducer,
  },
});

export default store;
