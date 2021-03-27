import { combineReducers } from "redux";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  authReducer,
});

export type Store = ReturnType<typeof rootReducer>;
