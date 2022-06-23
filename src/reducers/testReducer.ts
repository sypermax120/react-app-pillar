// import { createSlice } from '@reduxjs/toolkit';
// import { userData } from '../mock/users';
// import { IuserData } from '../mock/users';

// interface tourReducer {
//   users: Array<IuserData>,
//   authUser: string,
//   isAdmin: boolean,
// }

// const initialState: tourReducer = {
//   users: [],
//   authUser: '',
//   isAdmin: false,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     exitUser: (state) => {
//       state.authUser = '';
//     },

//     fetchUsers: (state) => {
//       state.users = userData;
//     },

//     setAuthUser: (state, action) => {
//       state.authUser = action.payload;
//     },

//     createUser: (state, action) => {
//       action.payload.id = state.users.length + 1;
//       state.users = [...state.users, action.payload];
//     },

//     loginUser: (state: any, action) => {
//       state.authUser = state.users.find((user: IuserData) => user.mail === action.payload.mail
//       && user.pass === action.payload.pass).mail;
//       state.isAdmin = state.users.find((user: IuserData) => user.mail === state.authUser).isAdmin;
//     },
//   },
// });

// export const {
//   fetchUsers, exitUser, setAuthUser, createUser, loginUser,
// } = userSlice.actions;
// export default userSlice.reducer;
