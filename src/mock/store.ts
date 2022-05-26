import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../reducers/tourReducer';
import userReducer from '../reducers/userReducer';

export const store = configureStore({
  devTools: true,
  reducer: {
    tour: tourReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
