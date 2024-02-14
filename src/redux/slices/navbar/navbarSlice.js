import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggled: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggleNav } = navbarSlice.actions;

export default navbarSlice.reducer;
