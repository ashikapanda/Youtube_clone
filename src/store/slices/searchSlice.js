import { createSlice } from "@reduxjs/toolkit";
//time complexity to search in array = O(n)
//time complexity to search in object = O(1)

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      //{"ip":["iphone", "iphone pro max"]}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
