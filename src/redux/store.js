import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './slices/mentor/mentorSlice';
import authReducer from './slices/auth/authSlice';

/**
 * Redux store configured with the mentor reducer.
 * @type {Store}
 */

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    auth: authReducer,
  },
});

export default store;
