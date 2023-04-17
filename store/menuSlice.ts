import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FavoriteType } from "./favoriteSlice";

const initialState: FavoriteType[] = [];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    storeMenu: (state, action: PayloadAction<FavoriteType[]>) => {
      return action.payload;
    },
    resetMenu: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { storeMenu, resetMenu } = menuSlice.actions;

export default menuSlice.reducer;
