import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

const initialState = {
  mentors: [],
  loading: false,
  error: null,
};

export const fetchRemovedMentors = createAsyncThunk(
  'mentors/fetchRemovedMentors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/removed_mentors`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const removedMentorsSlice = createSlice({
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

export default removedMentorsSlice.reducer;
