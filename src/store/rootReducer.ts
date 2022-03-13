import { combineReducers } from "redux";
import authStore from "./auth/reducer";
import queriesStore from "./queries/reducer";
// import appState from "./appState/reducer";
// import user from "./user/reducer";
// import spaces from "./spaces/reducer";

export default combineReducers({
  authStore,
  queriesStore,
  //   appState,
  //   user,
  //   spaces,
});
