import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HistoryAPI from '../api/history';

interface IHistory {
  history: Array<any>,
}

export const GetHistory: any = createAsyncThunk(
  'history/GetHistory',
  async () => {
      const { data } = await HistoryAPI.getHistory(); 
      return data;
  }
);

export const AddHistory: any = createAsyncThunk(
  'history/AddHistory',
  async (history) => {
      const { data } = await HistoryAPI.addHistory(history);
      return data;
  }
);

const initialState: IHistory = {
  history: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: {
    [GetHistory.fulfilled]: (state, action) => {
        state.history = action.payload;
    },
    [AddHistory.fulfilled]: (state, action) => {
    state.history = [...state.history, action.payload];
    },
  },
});

export default historySlice.reducer;
