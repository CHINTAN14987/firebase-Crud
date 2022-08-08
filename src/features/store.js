import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./loginSlice";

const store = configureStore({ reducer: { LoginReducer } });
export default store;
