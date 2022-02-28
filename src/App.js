import { Provider } from "react-redux";
import { CounterUseReducer } from "./CounterUseReducer";
import {
  CounterRedux,
  CounterReduxCount,
  CounterReduxIncrement,
  CounterReduxReset,
} from "./CounterRedux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterRedux />
        <CounterRedux />
        <CounterUseReducer />
        <CounterUseReducer />
        <br />
        <CounterReduxCount />
        <CounterReduxIncrement amount={+25} />
        <CounterReduxReset />
      </div>
    </Provider>
  );
}
