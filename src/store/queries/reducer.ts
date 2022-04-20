import { QueriesAction, QueriesState } from "./type";
import * as actionTypes from "./actionTypes";

const initialState: QueriesState = {
  countries: null,
  topics: null,
  tickets: null,
  messages: null,
};

export const reducer = (
  state: QueriesState = initialState,
  action: QueriesAction
) => {
  switch (action.type) {
    case actionTypes.COUNTRIES:
      return { ...state, countries: action.payload.countries };
    case actionTypes.TICKETS:
      return { ...state, tickets: action.payload.tickets };
    case actionTypes.MESSAGES:
      return { ...state, messages: action.payload.messages };
    case actionTypes.TOPICS:
      return { ...state, topics: action.payload.topics };
    default:
      return state;
  }
};

export default reducer;
