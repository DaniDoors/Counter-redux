import { combineReducers, createStore } from "redux";
import { counters } from "./counter/counters";
import { toggle } from "./toggle/toggle";

const reducer = combineReducers({
  counters,
  toggle,
});
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
