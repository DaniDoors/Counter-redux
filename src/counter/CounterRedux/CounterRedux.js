import { CounterReduxCount } from "./CounterReduxCount";
import { CounterReduxIncrement } from "./CounterReduxIncrement";
import { CounterReduxReset } from "./CounterReduxReset";

export function CounterRedux() {
  return (
    <div>
      <CounterReduxCount />
      <CounterReduxIncrement amount="+1" />
      <CounterReduxIncrement amount="-1" />
      <CounterReduxReset />
    </div>
  );
}
