import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortColumn: null,
  sortDirection: null,
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSortColumn(state, action) {
      const column = action.payload;
      state.sortColumn = column;
      state.sortDirection = "asc"; // Start with ascending by default
    },
    toggleSortDirection(state) {
      // Toggle ascending and descending
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
    },
    resetSorting(state) {
      state.sortColumn = null;
      state.sortDirection = null;
    },
  },
});

export const { setSortColumn, toggleSortDirection, resetSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
