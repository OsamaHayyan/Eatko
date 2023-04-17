import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mealType } from "../types/mealType";

const initialState: mealType = null;

export const counterSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    storeMeal: (state, action: PayloadAction<mealType>) => {
      return action.payload;
    },
    resetMeal: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { storeMeal, resetMeal } = counterSlice.actions;

export default counterSlice.reducer;
