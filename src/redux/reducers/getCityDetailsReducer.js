// import { FETCH_FLIGHT } from "../actions/index";
import { CITYDETAILS } from "../actions/index";

const initialState = [
  {
    name: "Hydrabad",
    majorplace: "Aiport",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Hydrabad",
    majorplace: "Railswaystation",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Hydrabad",
    majorplace: "Busstation",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Hydrabad",
    majorplace: "History",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Hydrabad",
    majorplace: "Modern era",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Hydrabad",
    majorplace: "Places To Visit",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case CITYDETAILS:
      console.log(" INCREMENT action121", action);
      console.log("action1211", action);

      return state;
  }
  return state;
}
