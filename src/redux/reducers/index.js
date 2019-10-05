import { combineReducers } from "redux";
import todos from "./todos";

import visibilityFilter from "./visibilityFilter";
import states from "./states";
import getPostReducer from "./getPostReducer";
import getCityReducer from "./getCityReducer";
import getCityDetailsReducer from "./getCityDetailsReducer";
import getNavReducer from "./getNavReducer";

export default combineReducers({
  // todos,
  states,
  // visibilityFilter,
  getPostReducer,
  getCityReducer,
  getCityDetailsReducer,
  getNavReducer
});
