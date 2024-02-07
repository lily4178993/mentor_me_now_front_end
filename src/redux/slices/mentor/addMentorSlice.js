import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  addMentor: [],
  loading: false,
  error: '',
};

const baseUrl = 'http://127.0.0.1:3000';

export const addMentorToServer = createAsyncThunk('addMentor/addToServer', async (obj) => {
  try {
    const response = axios.post(`${baseUrl}/api/v1/mentors`, obj);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const addMentorSlice = createSlice({
  name: 'addMentor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMentorToServer.fulfilled, (state, action) => {
        state.addMentor.push(action.payload);
      });
  },
});

export default addMentorSlice.reducer;
