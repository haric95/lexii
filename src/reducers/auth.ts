import { Store } from "./rootReducer";

type AuthStore = {
  userId: number | null;
  signedInStatus: "signed_out" | "pending" | "signed_in";
  userType: "Volunteer" | "Migrant" | null;
};

type SignInAttempt = {
  username: string;
  password: string;
};

const SIGN_IN = "auth/SIGN_IN";
const SET_AUTH = "auth/SET_AUTH";
const SIGN_OUT = "auth/SIGN_OUT";

type Action =
  | { type: typeof SIGN_IN; payload: SignInAttempt }
  | { type: typeof SIGN_OUT }
  | { type: typeof SET_AUTH; payload: Partial<AuthStore> };

const initialState: AuthStore = {
  userId: null,
  signedInStatus: "signed_out",
  userType: null,
};

export const authReducer = (
  state: AuthStore = initialState,
  action: Action
): AuthStore => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signedInStatus: "pending",
      };
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        userId: null,
        signedInStatus: "signed_out",
        userType: null,
      };
    default:
      return state;
  }
};

export const setAuth = (payload: Partial<AuthStore>): Action => {
  return { type: SET_AUTH, payload };
};

export const signOut = (): Action => {
  return { type: SIGN_OUT };
};

export const selectSignedInStatus = (store: Store) =>
  store.authReducer.signedInStatus;

export const selectUserType = (store: Store) => store.authReducer.userType;
