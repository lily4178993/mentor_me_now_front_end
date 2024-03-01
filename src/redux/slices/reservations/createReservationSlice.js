import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://mentor-me-now-back-end.onrender.com/api/v1';

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async (newReservation) => {
    const response = await axios.post(`${BASE_URL}/reservations`, { reservation: newReservation }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
);

const initialState = {
  reservation: [],
  loading: false,
  error: null,
};

const createReservationSlice = createSlice({
  name: 'createReservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.reservation = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default createReservationSlice.reducer;
