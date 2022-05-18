import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../mock/users';

const initialState = {
  users: [],
  authUser: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    exitUser: (state) => {
      state.authUser = '';
    },

    fetchUsers: (state) => {
      state.users = userData;
    },

    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },

    createUser: (state, action) => {
      action.payload.id = state.users.length + 1;
      state.users = [...state.users, action.payload];
    },

    loginUser: (state, action) => {
      console.log(state.authUser);
      state.authUser = state.users.find((user) => user.mail === action.payload.mail
      && user.pass === action.payload.pass).mail;
    },
  },
});

export const {
  fetchUsers, exitUser, setAuthUser, createUser, loginUser,
} = userSlice.actions;
export default userSlice.reducer;
