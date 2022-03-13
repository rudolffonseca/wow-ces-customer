import { QueriesAction, QueriesState } from "./type";
import * as actionTypes from "./actionTypes";

const initialState: QueriesState = {
  countries: null,
};

export const reducer = (
  state: QueriesState = initialState,
  action: QueriesAction
) => {
  switch (action.type) {
    case actionTypes.COUNTRIES:
      return { ...state, countries: action.payload.countries };

    default:
      return state;
  }
};

export default reducer;
