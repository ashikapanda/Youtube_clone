import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    sideMenu: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      console.log("state");
      state.sideMenu = !state.sideMenu;
    },
    closeMenu: (state) => {
      state.sideMenu = false;
    },
  },
});

export const { toggleSideMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
