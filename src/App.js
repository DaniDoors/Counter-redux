import { Provider } from "react-redux";
import { CounterUseReducer } from "./counter";
import { CounterRedux, CounterReduxIncrement } from "./counter";
import { store } from "./store";
import { ToogleRedux } from "./toggle";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <ToogleRedux />
        <CounterRedux />
        <CounterReduxIncrement amount={+25} />
        <CounterUseReducer />
        <CounterUseReducer />
      </div>
    </Provider>
  );
}
