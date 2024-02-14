import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1';
const ENDPOINT = 'users';

export const userLogin = createAsyncThunk(
  'authLogin/login',
  async (username) => {
    // Find the user by their username
    const response = await axios.get(
      `${BASE_URL}/${ENDPOINT}/find_by_username?username=${username}`,
    );
    const user = response.data;
    if (!user) {
      throw new Error('User not found');
    }

    // Get the user's details by their ID
    const detailsResponse = await axios.get(
      `${BASE_URL}/${ENDPOINT}/${user.id}`,
    );
    const userDetails = detailsResponse.data;

    return userDetails;
  },
);

const initialState = {
  user: [],
  loading: false,
  error: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = [];
      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
export const { clearUser, setUser } = loginSlice.actions;
