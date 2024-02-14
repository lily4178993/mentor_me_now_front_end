import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

export const fetchReservationsList = createAsyncThunk('reservations/fetchReservationsList', async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/reservations`);
  return response.data;
});

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsListSlice = createSlice({
  name: 'reservationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservationsList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchReservationsList.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservationsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationsListSlice.reducer;
