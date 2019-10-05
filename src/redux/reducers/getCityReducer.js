// import { FETCH_FLIGHT } from "../actions/index";
import { INCREMENT } from "../actions/index";

const initialState = [
  {
    key: "West Bengal",
    val: "Kolkata",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqqD7uwlPEDaYPZ5Pi0CfX6TJFa9o9y9vmEFRt9-O-vFSUwWPw",
    blinkdata: [
      "Bengali Food",
      "Love of Literature",
      "Bengali Cinema",
      "Howrah Bridge",
      "Durga Puja",
      "Rosgulla"
    ]
  },
  {
    key: "Jammu & Kashmir",
    val: "Srinagar(Summer)/Jammu(Winter)",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1m2PQpDHOyeOecINZGEuDK6lzKPnhN4hTyEAaFLUlTMvKTfW_",
    blinkdata: [
      "Bengali Food",
      "Love of Literature",
      "Bengali Cinema",
      "Howrah Bridge",
      "Durga Puja",
      "Rosgulla"
    ]
  },
  {
    key: "Karnataka",
    val: "Bangalore",
    imageurl:
      "https://www.squareyards.com/blog/wp-content/uploads/2018/12/Bangalore-peripheral-ring-road-to-boost-real-estate-and-surrounding-infrastructure.jpg",
    blinkdata: [
      "Bengali Food",
      "Love of Literature",
      "Bengali Cinema",
      "Howrah Bridge",
      "Durga Puja",
      "Rosgulla"
    ]
  },

  {
    key: "Uttar Pradesh",
    val: "Lucknow",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8QBkuKImKgosr29dgmJoSSf0Zv02UWCXa8SbTsEcPQ9RB-yqK",
    blinkdata: [
      "Ambedkar Memorial Park",
      "UP Mango Festival",
      "Marine Drive (Gomtinagar)",
      "Lucknow Zoological Garden",
      "Awadhi cuisine",
      "Chikankari, zari, zardozi"
    ]
  },
  {
    key: "Ladakh",
    val: "Leh",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKhMUTB_PRSuPDo1cnRxeAuJxfN73P5SYHEinMaGvVaab3V56k",
    blinkdata: [
      "Bengali Food",
      "Love of Literature",
      "Bengali Cinema",
      "Howrah Bridge",
      "Durga Puja",
      "Rosgulla"
    ]
  },
  {
    key: "Bihar",
    val: "Patna",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPTrhJ3lPajwX-SirN5wVzihEn7z7a3X47qUOYriurrkvo-mhY",
    blinkdata: [
      "Bengali Food",
      "Love of Literature",
      "Bengali Cinema",
      "Howrah Bridge",
      "Durga Puja",
      "Rosgulla"
    ]
  },

  {
    key: "Andhra Pradesh",
    val: "Hyderabad",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYoKlmJyXYsFTdTggPdlLb-Fmvk1a0e4mFmn8nozZJzjbEbSah",
    blinkdata: [
      " Ramoji Film City",
      "Nehru Zoological Park",
      "Shilparamam",
      "Lumbini Park",
      "Birla Mandir",
      "Pearls"
    ]
  },
  {
    key: "Rajasthan",
    val: "Jaipur",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUbdoQrBKVUp_7DvD1TfzwnZTEjwsoSQBekQFkWNNFbm0zWvtM",
    blinkdata: [
      "Forts and Palaces",
      "Exotic Heritage Hotels",
      "Desert Safari",
      " Lake Pichola in Udaipur ",
      "Chitorgarh fort",
      "Umaid Palace, Jodhpur"
    ]
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
