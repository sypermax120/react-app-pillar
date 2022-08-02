import { IuserData } from '../mock/users';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UsersAPI from '../api/user'

interface tourReducer {
  users: Array<IuserData>,
  authUser: string,
  isAdmin: boolean,
}

const initialState: tourReducer = {
  users: [],
  authUser: '',
  isAdmin: false,
};

export const GetUser: any = createAsyncThunk(
  'users/GetUser',
  async () => {
      const { data } = await UsersAPI.getUser(); 
      return data;
  }
);

export const AddUser: any = createAsyncThunk(
  'users/AddUser',
  async (user) => {
      const { data } = await UsersAPI.addUser(user);
      return data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    exitUser: (state) => {
      state.authUser = '';
      localStorage.clear();
    },

    isUser: (state) => {
      // state.authUser = localStorage.getItem('authUser');
      // state.isAdmin = localStorage.getItem('isAdmin');
    },

    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },

    createUser: (state, action) => {
      action.payload.id = state.users.length + 1;
      state.users = [...state.users, action.payload];
    },

    loginUser: (state: any, action) => {
      state.authUser = state.users.find((user: IuserData) => user.mail === action.payload.mail
      && user.password === action.payload.password).name;      
      state.isAdmin = state.users.find((user: IuserData) => user.mail === action.payload.mail).isAdmin;
      localStorage.setItem('authUser', state.authUser);
      localStorage.setItem('isAdmin', state.isAdmin);
    },
  },
  extraReducers: {
    [GetUser.fulfilled]: (state, action) => {
        state.users = action.payload;
    },
    [AddUser.fulfilled]: (state, action) => {
    state.users = [...state.users, action.payload];
    },
  },
});

export const {
  isUser, exitUser, setAuthUser, createUser, loginUser,
} = userSlice.actions;
export default userSlice.reducer;
