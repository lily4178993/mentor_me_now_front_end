import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1';
const initialState = {
  details: {},
  loading: false,
  error: null,
};

export const fetchMentorDetails = createAsyncThunk(
  'mentor/fetchMentorDetails',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/mentors/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const mentorDetailsSlice = createSlice({
  name: 'mentorDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentorDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMentorDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchMentorDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default mentorDetailsSlice.reducer;
