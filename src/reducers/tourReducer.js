import { createSlice } from "@reduxjs/toolkit";
import { tourData } from "../mock/tours";

const initialState = {
    tours: []
};

export const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            let id = state.tours.length+1
            action.payload.id = id
            state.tours = [...state.tours, action.payload];
        },

        fetchTours: (state) => {
            state.tours = tourData
        },

        sortByPrice: (state) => {
            state.tours = state.tours.sort((a, b) => a.price - b.price);
        },

        onDeleteTour: (state, action) => {
            state.tours = state.tours.filter(tour => tour.id !== action.payload);
        }
    }
})

export const { onAdd, fetchTours, sortByPrice, onDeleteTour } = tourSlice.actions;
export default tourSlice.reducer;