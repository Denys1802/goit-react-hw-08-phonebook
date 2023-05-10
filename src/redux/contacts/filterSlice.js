import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilteredContact(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilteredContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
