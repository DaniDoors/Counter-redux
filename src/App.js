import CounterUseReducer from "./CounterUseReducer";
import { combineReducers, createStore } from "redux";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux";

const reducer = combineReducers({
  counter,
});

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterRedux />
        <CounterRedux />
        <CounterUseReducer />
        <CounterUseReducer />
      </div>
    </Provider>
  );
}
