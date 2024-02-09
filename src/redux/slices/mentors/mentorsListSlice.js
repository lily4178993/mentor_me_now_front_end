import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

export const fetchMentorsList = createAsyncThunk(
  'mentor/fetchMentorsList',
  async () => {
    const response = await axios.get(`${API_URL}/mentors`);
    return response.data;
  },
);

const mentorsListSlice = createSlice({
  name: 'mentorsList',
  initialState: {
    mentors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentorsList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentorsList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = action.payload;
      })
      .addCase(fetchMentorsList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default mentorsListSlice.reducer;
