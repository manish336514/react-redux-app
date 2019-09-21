import { combineReducers } from "redux";
import todos from "./todos";

import visibilityFilter from "./visibilityFilter";
import states from "./states";

export default combineReducers({
  todos,
  states,
  visibilityFilter
});
