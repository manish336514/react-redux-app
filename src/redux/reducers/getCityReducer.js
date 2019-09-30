// import { FETCH_FLIGHT } from "../actions/index";
import { INCREMENT } from "../actions/index";

const initialState = [
  {
    key: "Andhra Pradesh",
    val: "Hyderabad",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    key: "Arunachal Pradesh",
    val: "Itanagar",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
  },
  {
    key: "Assam",
    val: "Dispur",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
  },
  {
    key: "Andhra Pradesh",
    val: "Hyderabad",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    key: "Arunachal Pradesh",
    val: "Itanagar",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
  },
  {
    key: "Assam",
    val: "Dispur",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
  },
  {
    key: "Andhra Pradesh",
    val: "Hyderabad",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    key: "Arunachal Pradesh",
    val: "Itanagar",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
  },
  {
    key: "Assam",
    val: "Dispur",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPHLvkIZrGoYmhqzTFhqThELsFYnJ4wDCJ4W53SfRkHF1PK1H-"
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
