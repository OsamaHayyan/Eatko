import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteType {
  favorite: boolean;
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

let initialState: FavoriteType[] = [];

export const counterSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<FavoriteType>) => {
      if (state.some((favortie) => favortie.idMeal === action.payload.idMeal))
        return;
      const newData = { ...action.payload, favorite: true };
      state.push(newData);
      // saveFavorite(newData);
    },
    removeFromFavorite: (state, action: PayloadAction<FavoriteType>) => {
      let newState: FavoriteType[] = [];
      state.forEach((item) => {
        if (item.idMeal !== action.payload.idMeal) {
          return newState.push(item);
        }
      });
      // state.filter((item) => item.idMeal === action.payload.idMeal);

      // saveFavorite(newState);
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = counterSlice.actions;

export default counterSlice.reducer;
