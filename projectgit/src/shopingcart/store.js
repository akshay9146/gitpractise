import { createStore } from "redux";
import combineReducer from ".";

export const store=createStore(combineReducer)