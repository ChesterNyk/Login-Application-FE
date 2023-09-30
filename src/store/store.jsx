import { applyMiddleware, configureStore, isAsyncThunkAction } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import thunk from 'redux-thunk'; 

const store = configureStore({
    middleware: [thunk],
    reducer: authSlice,
})

export default store;