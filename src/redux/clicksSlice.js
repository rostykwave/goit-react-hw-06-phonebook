import { createSlice } from '@reduxjs/toolkit';

const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const clicksReducer = clicksSlice.reducer;

export const { increment, reset } = clicksSlice.actions;

export const getClicks = state => state.clicks.value;

//make useClicks hook

// import {  createReducer, createAction } from '@reduxjs/toolkit';

// export const increment = createAction('clicks/increment');

// const clicksReducer = createReducer(
//   { value: 0 },
//   {
//     [increment]: (state, action) => {
//       state.value += action.payload;
//     },
//   }
// );
