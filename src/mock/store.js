import { configureStore } from '@reduxjs/toolkit'
import tourReducer from '../reducers/tourReducer'

export const store = configureStore({
    devTools: true,
    reducer: {
      tour: tourReducer
  },
})