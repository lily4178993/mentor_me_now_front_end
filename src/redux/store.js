import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mentorReducer from './slices/mentor/mentorSlice';
import addMentorReducer from './slices/mentor/addMentorSlice';

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
