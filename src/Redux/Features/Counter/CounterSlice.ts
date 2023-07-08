import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
      if (state.count < 0) {
        return initialState;
      }
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
