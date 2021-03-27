import { Store } from "./rootReducer";

type MiscStore = {
  selectedPartnerId: number | null;
};

const SELECT_PARTNER = "auth/SELECT_PARTNER";

type Action = { type: typeof SELECT_PARTNER; payload: { id: number } };

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
        selectedPartnerId: action.payload.id,
      };
    default:
      return state;
  }
};

export const selectPartner = (id: number) => ({
  type: SELECT_PARTNER,
  payload: id,
});
