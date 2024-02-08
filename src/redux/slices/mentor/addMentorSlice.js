import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  addMentor: [],
  loading: false,
  error: '',
};

const baseUrl = 'http://127.0.0.1:3000';

export const addMentorToServer = createAsyncThunk('addMentor/addToServer', async (mentorData) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/mentors`, mentorData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
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
    builder
      .addCase(addMentorToServer.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default addMentorSlice.reducer;
