import { createSlice } from '@reduxjs/toolkit';
import { tourData } from '../mock/tours';

const initialState = {
  tours: [],
};

export const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    onAdd: (state: any, action) => {
      action.payload.id = (state.tours.length + 1.0).toString();
      state.tours = [...state.tours, action.payload];
    },

    fetchTours: (state: any) => {
      state.tours = tourData;
    },

    sortByPrice: (state) => {
      state.tours = state.tours.sort((a: any, b: any) => a.price - b.price);
    },

    onDeleteTour: (state, action) => {
      state.tours = state.tours.filter((tour: any) => tour.id !== action.payload);
    },
  },
});

export const {
  onAdd, fetchTours, sortByPrice, onDeleteTour,
} = tourSlice.actions;
export default tourSlice.reducer;
