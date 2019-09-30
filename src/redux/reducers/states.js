// import { INCREMENT } from "../actions/index";

const initialState = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

const states = (
  state = [
    {
      key: "Andhra Pradesh",
      val: "Hyderabad"
    },
    {
      key: "Arunachal Pradesh",
      val: "Itanagar"
    },
    {
      key: "Assam",
      val: "Dispur"
    },
    {
      key: "Bihar",
      val: "Patna"
    },
    {
      key: "Chhattisgarh",
      val: "Raipur"
    },
    {
      key: "Goa",
      val: "Panaji"
    },
    {
      key: "Gujarat",
      val: "Gandhinagar"
    },
    {
      key: "Haryana",
      val: "Chandigarh"
    },
    {
      key: "Himachal Pradesh",
      val: "Shimla"
    },
    {
      key: "Jammu & Kashmir",
      val: "Srinagar(Summer)/Jammu(Winter)"
    },
    {
      key: "Jharkhand",
      val: "Ranchi"
    },
    {
      key: "Karnataka",
      val: "Bengaluru"
    },
    {
      key: "Kerala",
      val: "Thiruvananthapuram"
    },
    {
      key: "Madhya Pradesh",
      val: "Bhopal"
    },
    {
      key: "Maharashtra",
      val: "Mumbai"
    },
    {
      key: "Manipur",
      val: "Imphal"
    },
    {
      key: "Meghalaya",
      val: "Shillong"
    },
    {
      key: "Mizoram",
      val: "Aizawl"
    },
    {
      key: "Nagaland",
      val: "Kohima"
    },
    {
      key: "Odisha",
      val: "Bhubaneswar"
    },
    {
      key: "Punjab",
      val: "Chandigarh"
    },
    {
      key: "Rajasthan",
      val: "Jaipur"
    },
    {
      key: "Sikkim",
      val: "Gangtok"
    },
    {
      key: "Tamil Nadu",
      val: "Chennai"
    },
    {
      key: "Telangana",
      val: "Hyderabad"
    },
    {
      key: "Tripura",
      val: "Agartala"
    },
    {
      key: "Uttar Pradesh",
      val: "Lucknow"
    },
    {
      key: "Uttarakhand",
      val: "Dehradun"
    },
    {
      key: "West Bengal",
      val: "Kolkata"
    },
    {
      key: "Andaman & Nicobar Islands",
      val: "Port Blair"
    },
    {
      key: "Chandigarh",
      val: "Chandigarh"
    },
    {
      key: "Dadra & Nagar Haveli",
      val: "Silvassa"
    },
    {
      key: "Daman & Diu",
      val: "Daman"
    },
    {
      key: "Lakshadweep",
      val: "Kavaratti"
    },
    {
      key: "Puducherry",
      val: "Puducherry"
    },
    {
      key: "Delhi",
      val: "New Delhi"
    }
  ],
  action
) => {
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

      case "FETCH_FLIGHT":
        console.log("action121", action);

        return state;

      //   case INCREMENT:
      //     console.log(" INCREMENT action121", action);
      //     console.log("action1211", action);

      //     return action.data.post;

      default:
        return state;
    }
  }
};

export default states;
