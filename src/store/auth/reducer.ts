import * as actionTypes from "./actionTypes";

const initialState: AuthState = {
  // token data persisted in localStorage
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  email: localStorage.getItem("email"),
  message: null,
};

export const reducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem("token", action.payload.token as string);
      localStorage.setItem("userId", action.payload.userId as string);
      localStorage.setItem("email", action.payload.email as string);
      return action.payload;
    case actionTypes.LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      return action.payload;
    case actionTypes.SIGNUP:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

export default reducer;
