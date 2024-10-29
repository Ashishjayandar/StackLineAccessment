import { createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
  name: "sorting",
  initialState: {
    sortColumn: null,
    sortDirection: "asc",
  },
  reducers: {
    setSortColumn: (state, action) => {
      const { column } = action.payload;
      if (state.sortColumn === column) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortColumn = column;
        state.sortDirection = "asc";
      }
    },
  },
});

export const { setSortColumn } = sortingSlice.actions;
export default sortingSlice.reducer;
