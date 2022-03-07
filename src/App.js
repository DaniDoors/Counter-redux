import { Provider } from "react-redux";
import { CounterRedux, CounterReduxIncrement } from "./counter";
import { store } from "./store";
import { ToogleRedux } from "./toggle";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <ToogleRedux />
        <CounterRedux id="entrades" />
        <CounterRedux id="sortides" />
        <CounterRedux id="snacks" />
        <CounterReduxIncrement amount={+25} />
      </div>
    </Provider>
  );
}
