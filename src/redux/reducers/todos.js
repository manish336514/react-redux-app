const initialState = {
  reportName: "",
  currentReport: null,
  searchedReports: null,
  displayReportSelecton: false,
  reportType: "default",
  isEditing: false,
  reportId: "",
  saved: "",
  undos: [],
  loading: {
    groupSearch: false,
    searchSubmit: false,
    reportHistory: false,
    reportLoad: false
  },
  errors: {
    reportSearchError: "",
    reportError: ""
  },
  currentTab: 0
};

const todos = (state = initialState, action) => {
  console.log("action", action.type);

  console.log("action", state);

  {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case "TOGGLE_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );

      case "RESET_SEARCHED_REPORTS":
        console.log("state", state);
        return {
          ...state
        };
      default:
        return state;
    }
  }
};

export default todos;
