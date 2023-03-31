import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  //register user
  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //login user
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //load user
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //logout user
  LogoutRequest: (state) => {
    state.loading = true;
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
  },
  LogoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  //delete user
  DeleteUserRequest: (state) => {
    state.loading = true;
  },
  DeleteUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
  },
  DeleteUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  //update user
  UpdateUserRequest: (state) => {
    state.loading = true;
  },
  UpdateUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated=true;
  },
  UpdateUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //all users
  AllUserRequest: (state, action)=>{
    state.loading = true
  },
  AllUserSuccess: (state, action)=>{
    state.loading = false;
    state.users = action.payload;
  },
  AllUserFailure: (state, action)=>{
    state.loading = false;
    state.error = action.payload
  },

  //clear errors
  ClearErrors: (state) => {
    state.error = null;
  },
  //clear messages
  ClearMessages: (action) => {
    action.message = null;
  },
});