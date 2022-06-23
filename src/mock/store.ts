import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../reducers/tourReducer';
import userReducer from '../reducers/userReducer';
import historyReducer from '../reducers/historyReducer';

export const store = configureStore({
  devTools: true,
  reducer: {
    tour: tourReducer,
    user: userReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
