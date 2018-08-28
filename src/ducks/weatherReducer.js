import axios from "axios";

//constants
// const GET_REVIEWS = "GET_REVIEWS";
// const DELETE_REVIEW = "DELETE_REVIEW";
// const ADD_REVIEW = "ADD_REVIEW";
// const GET_AVG_RATING = "GET_AVG_RATING";
const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";

//action creators
// export function getReviews(id) {
//   return {
//     type: GET_REVIEWS,
//     payload: axios.get(`/api/reviews/${id}`)
//   };
// }

export function getCurrentWeather() {
  return {
    type: GET_CURRENT_WEATHER,
    payload: axios.get("/api/weather")
  };
}

//initial state
const initialState = {
  today: [],
  isLoading: false
};

//reducer
export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CURRENT_WEATHER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_CURRENT_WEATHER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        today: action.payload.data
      };
    case `${GET_CURRENT_WEATHER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        today: action.payload.data
      };
    default:
      return state;
  }
}
