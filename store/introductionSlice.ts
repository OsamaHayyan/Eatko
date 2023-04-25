import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

export const introductionSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    appOpened: (state) => {
      return state;
    },
    setAppOpened: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppOpened } = introductionSlice.actions;

export default introductionSlice.reducer;
