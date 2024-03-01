import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://mentor-me-now-back-end.onrender.com/api/v1';

const initialState = {
  mentor: null,
  loading: false,
  error: null,
};

export const removeMentor = createAsyncThunk(
  'mentors/removeMentor',
  async (mentorId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/mentors/${mentorId}/remove_mentor`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const removeMentorSlice = createSlice({
  name: 'removeMentor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeMentor.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(removeMentor.fulfilled, (state) => {
        state.loading = false;
        window.location.reload();
      })
      .addCase(removeMentor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : 'An error occurred';
      });
  },
});

export default removeMentorSlice.reducer;
