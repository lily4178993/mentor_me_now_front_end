import { configureStore } from '@reduxjs/toolkit';
import mentorsListReducer from './slices/mentors/mentorsListSlice';
import mentorDetailsReducer from './slices/mentors/mentorDetailsSlice';
import authReducer from './slices/auth/authSlice';
import addMentorReducer from './slices/mentors/addMentorSlice';
import removeMentorReducer from './slices/mentors/removeMentorSlice';

const store = configureStore({
  reducer: {
    mentorsList: mentorsListReducer,
    mentorDetails: mentorDetailsReducer,
    auth: authReducer,
    addMentor: addMentorReducer,
    removeMentor: removeMentorReducer,
  },
});

export default store;
