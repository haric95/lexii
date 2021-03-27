import { Store } from "./rootReducer";

type MiscStore = {
  selectedPartnerId: number | null;
};

const SELECT_PARTNER = "auth/SELECT_PARTNER";
const REMOVE_PARTNER = "auth/REMOVE_PARTNER";

type Action =
  | { type: typeof SELECT_PARTNER; payload: number }
  | { type: typeof REMOVE_PARTNER };

const initialState: MiscStore = {
  selectedPartnerId: null,
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

export const selectSelectedPartnerId = (state: Store) =>
  state.miscReducer.selectedPartnerId;
