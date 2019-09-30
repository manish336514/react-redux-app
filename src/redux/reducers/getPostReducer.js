// import { FETCH_FLIGHT } from "../actions/index";
import { INCREMENT } from "../actions/index";

const initialState = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title:
      " aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      console.log(" INCREMENT action121", action);
      console.log("action1211", action);

      return action.data.post;
  }
  return state;
}
