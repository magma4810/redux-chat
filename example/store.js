import { createStore } from "redux";
import { counterReducer } from "./reducer";

export const store1 = createStore(counterReducer);
export const store2 = createStore(counterReducer);
