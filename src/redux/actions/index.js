import axios from "axios";
export const FETCH_FLIGHT = "FETCH_FLIGHT";
export const INCREMENT = "INCREMENT";

let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
  // RESET_SEARCHED_REPORTS: "RESET_SEARCHED_REPORTS"
};

// export const getReportData = abc => {
//   console.log("abc", abc);

//   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
//     console.log("post", res);

//     // const post = res.data;
//     // console.log("post", post);

//     // return dispatch({
//     //   type: "RESET_SEARCHED_REPORTS"
//     // });
//   });
// };

// export const getReportData = async abc =>dispatch=> {
//   var post;
//   // axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
//   //   console.log("res", res);
//   //   post = res;
//   // });
//   let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   post = res.data;
//   console.log("post 121", post);
//   dispatch({
//     type: "FETCH_FLIGHT",
//     data: {
//       post
//     }
//   });
// };
// export const getReportData = async () => {
//   // export function getReportData() {
//   var post;
//   let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   post = res.data;
//   console.log("post 121", post);

//   return { type: INCREMENT, payload: post };
// };

export const getReportData = reportId => async dispatch => {
  var post;
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  post = res.data;
  console.log("post 121", post);

  dispatch({
    type: INCREMENT,
    data: {
      post
    }
  });
};
