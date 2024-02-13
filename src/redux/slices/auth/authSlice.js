import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';
const ENDPOINT = '/api/v1/users';

export const signIn = createAsyncThunk('auth/signIn', async (username) => {
  try {
    const response = await axios.post(`${BASE_URL}${ENDPOINT}`, { username });
    return response.data;
  } catch (err) {
    throw new Error(`${err.response.loading}: ${err.response.data}`);
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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

export const { reducer } = authSlice;
export default reducer;
