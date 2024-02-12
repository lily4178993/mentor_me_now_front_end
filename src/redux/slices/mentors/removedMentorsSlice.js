import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  mentors: [],
  loading: false,
  error: null,
};

export const fetchRemovedMentors = createAsyncThunk(
  'mentors/fetchRemovedMentors',
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.example.com/mentors');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Create the slice
const removedMentorsListSlice = createSlice({
  name: 'removedMentorsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemovedMentors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRemovedMentors.fulfilled, (state, action) => {
        state.loading = false;
        state.mentors = action.payload;
      })
      .addCase(fetchRemovedMentors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default removedMentorsListSlice.reducer;
