import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://mentor-me-now-back-end.onrender.com';
const ENDPOINT = '/api/v1/users';

export const signIn = createAsyncThunk('auth/signIn', async (username) => {
  const response = await axios.post(`${BASE_URL}${ENDPOINT}`, { username });
  return response.data;
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = authSlice.actions;
export const { reducer } = authSlice;
export default reducer;
