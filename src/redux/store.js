import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './slices/mentor/mentorSlice';

/**
 * Redux store configured with the mentor reducer.
 * @type {Store}
 */
const store = configureStore({
  reducer: {
    mentor: mentorReducer,
  },
});

export default store;
