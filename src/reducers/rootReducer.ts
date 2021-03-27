import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { miscReducer } from "./misc";

export const rootReducer = combineReducers({
  miscReducer,
  authReducer,
});

export type Store = ReturnType<typeof rootReducer>;
