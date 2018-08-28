import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// import reviewReducer from "./ducks/reviewReducer";
// import userReducer from "./ducks/userReducer";
// import freelancerReducer from "./ducks/freelancerReducer";
// import portfolioReducer from "./ducks/portfolioReducer";
// import employerReducer from "./ducks/employerReducer";
import weatherReducer from "./ducks/weatherReducer";

const combinedReducers = combineReducers({
  // reviewReducer,
  // userReducer,
  // freelancerReducer,
  // portfolioReducer,
  // employerReducer,
  weatherReducer
});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;
