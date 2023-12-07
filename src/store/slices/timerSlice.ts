import { createSlice } from "@reduxjs/toolkit";

export interface TimerState {
  isTimerRunning: boolean;
  time: number;
  currentSelected: number;
}

const initialState: TimerState = {
  isTimerRunning: false,
  time: 0,
  currentSelected: 0
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimerData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTimerData } = timerSlice.actions;

export default timerSlice.reducer;
