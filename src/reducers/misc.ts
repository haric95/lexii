import { Store } from "./rootReducer";

type MiscStore = {
  selectedPartnerId: number | null;
  name: string | null;
};

const SELECT_PARTNER = "auth/SELECT_PARTNER";
const REMOVE_PARTNER = "auth/REMOVE_PARTNER";
const SET_NAME = "auth/SET_NAME";

type Action =
  | { type: typeof SELECT_PARTNER; payload: number }
  | { type: typeof REMOVE_PARTNER }
  | { type: typeof SET_NAME; payload: string };

const initialState: MiscStore = {
  selectedPartnerId: null,
  name: null,
};

export const miscReducer = (
  state: MiscStore = initialState,
  action: Action
): MiscStore => {
  switch (action.type) {
    case SELECT_PARTNER:
      return {
        ...state,
        selectedPartnerId: action.payload,
      };
    case REMOVE_PARTNER:
      return {
        ...state,
        selectedPartnerId: null,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const selectPartner = (id: number) => {
  return {
    type: SELECT_PARTNER,
    payload: id,
  };
};

export const removePartner = () => {
  return { type: REMOVE_PARTNER };
};

export const setName = (name: string) => {
  return { type: SET_NAME, payload: name };
};

export const selectSelectedPartnerId = (state: Store) =>
  state.miscReducer.selectedPartnerId;

export const selectName = (state: Store) => state.miscReducer.name;
