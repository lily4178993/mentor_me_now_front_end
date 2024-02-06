import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

/**
 * Async thunk action to fetch mentors from the API.
 * @type {AsyncThunkAction<Promise<any>, void, {}>}
 */
export const fetchMentor = createAsyncThunk(
  'mentor/fetchMentor',
  async () => {
    const response = await axios.get(`${API_URL}/mentors`);
    return response.data;
  },
);

/**
 * Slice for mentor state and reducers.
 * @type {Slice<{mentors: any[], status: string, error: any | null}, {}, "mentor">}
 */
const mentorSlice = createSlice({
  name: 'mentor',
  initialState: {
    mentors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = action.payload;
      })
      .addCase(fetchMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

/**
 * The reducer function of the mentor slice.
 * @type {Reducer<{mentors: any[], status: string, error: any | null}, AnyAction>}
 */
export default mentorSlice.reducer;
