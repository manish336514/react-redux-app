// import { FETCH_FLIGHT } from "../actions/index";
import { SETNAV } from "../actions/index";

const initialState = {
  id: 1,
  currenttab: "Places To Visit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

// export const Reports = (state = initialState, action) => {

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SETNAV:
      console.log(" Set NAV", action);
      console.log("St anv", action);
      newState.currenttab = action.text;
      return newState;

    default:
      return state;
  }
}
