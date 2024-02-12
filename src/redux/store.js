import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mentorsListReducer from './slices/mentors/mentorsListSlice';
import mentorDetailsReducer from './slices/mentors/mentorDetailsSlice';
import authReducer from './slices/auth/authSlice';
import addMentorReducer from './slices/mentors/addMentorSlice';
<<<<<<< HEAD
import removeMentorReducer from './slices/mentors/removeMentorSlice';
import removedMentorsReducer from './slices/mentors/removedMentorsSlice';

const store = configureStore({
  reducer: {
    mentorsList: mentorsListReducer,
    mentorDetails: mentorDetailsReducer,
    auth: authReducer,
    addMentor: addMentorReducer,
    removeMentor: removeMentorReducer,
    removedMentorsList: removedMentorsReducer,
  },
=======
import createReservationReducer from './slices/reservations/createReservationSlice';
import reservationsListReducer from './slices/reservations/reservationsListSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  mentorsList: mentorsListReducer,
  mentorDetails: mentorDetailsReducer,
  auth: authReducer,
  addMentor: addMentorReducer,
  createReservation: createReservationReducer,
  reservationsList: reservationsListReducer,
>>>>>>> cce9dd4784532fd686a5434ffb2e2f2f624de86d
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
