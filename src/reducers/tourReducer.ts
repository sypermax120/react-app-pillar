import { createSlice } from '@reduxjs/toolkit';
import { tourData, ItourData } from '../mock/tours';

interface ItourReducer {
  tours: Array<ItourData>,
  searchValue: any,
}

const initialState: ItourReducer = {
  tours: [],
  searchValue: {},
};

export const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      action.payload.id = (state.tours.length + 1.0).toString();
      state.tours = [...state.tours, action.payload];
    },

    fetchTours: (state) => {
      state.tours = tourData;
    },

    sortByPrice: (state) => {
      state.tours = state.tours.sort((a, b) => a.price - b.price);
    },

    onDeleteTour: (state, action) => {
      state.tours = state.tours.filter((tour) => tour.id !== action.payload);
    },

    onChangeValue: (state, action) => {
      state.searchValue[action.payload.name] = action.payload.value;
    },

    filterTours: (state) => {
      const temp = [...tourData.filter((tour) => tour.price >= state.searchValue.priceFrom
        && tour.price <= state.searchValue.priceTo)];
      state.tours = temp;
    },
  },
});

export const {
  onAdd, fetchTours, sortByPrice, onDeleteTour, onChangeValue, filterTours,
} = tourSlice.actions;
export default tourSlice.reducer;
