import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "./reducer/auth";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: auth_reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});


export default store;
