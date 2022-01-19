import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const getCount = (state) => state.counter.count;

export const { increment, decrement, reset } = counter.actions;
