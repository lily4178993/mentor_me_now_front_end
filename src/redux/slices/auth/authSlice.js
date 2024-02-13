import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';
const ENDPOINT = '/api/v1/users';

export const signIn = createAsyncThunk('auth/signIn', async (username) => {
  try {
    const response = await axios.post(`${BASE_URL}${ENDPOINT}`, { username });
    return response.data;
  } catch (err) {
    throw new Error(`${err.response.status}: ${err.response.data}`);
  }
});

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reducer } = authSlice;
export default reducer;
