// import { FETCH_FLIGHT } from "../actions/index";
import { CITYDETAILS } from "../actions/index";

const initialState = [
  {
    name: "Bangalore",
    majorplace: "Aiport",
    bodydata: "sdckdscjscjsj  Aiport",
    tabsdata: ["Palce 1", "Place 2", "Place 3"],
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFaoLVWFuD9Q32Dy2de9iHL5MWYmIIGY4yoA54basE4P6-GpGx"
  },
  {
    name: "Bangalore",
    majorplace: "Railswaystation",
    bodydata: "sdckdscjscjsj Railswaystation",
    tabsdata: ["Palce 1", "Place 2", "Place 3"],

    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB7KvzpMkINm9vLVMCDiTIj35uWWvetteU304deVZlP92JXHbL"
  },
  {
    name: "Bangalore",
    majorplace: "Busstation",
    bodydata: "sdckdscjscjsj Busstation",
    tabsdata: ["Palce 1", "Place 2", "Place 3"],

    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9C7m7otbRbjAPrPWK1EHf08QaEx2O4UL7LVXV2fvl0f_zkYuC"
  },
  {
    name: "Bangalore",
    majorplace: "History",
    bodydata: "sdckdscjscjsj History",
    tabsdata: [
      "Palce 1",
      "Place 2",
      "Place 3",
      "Palce 1",
      "Place 2",
      "Place 3",
      "Palce 1",
      "Place 2",
      "Place 3",
      "Palce 1",
      "Place 2",
      "Place 3"
    ],

    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Bangalore",
    majorplace: "Modern era",
    bodydata: "sdckdscjscjsj  Modern",
    tabsdata: ["Palce 1", "Place 2", "Place 3"],

    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBvR6NWnaJ2vJJ3lllZbshJ6oubGe3NzO88Ck-gMaXRezUexH"
  },
  {
    name: "Bangalore",
    majorplace: "Places To Visit",
    bodydata: "sdckdscjscjsj Places",
    tabsdata: ["Palce 1", "Place 2", "Place 3"],

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
