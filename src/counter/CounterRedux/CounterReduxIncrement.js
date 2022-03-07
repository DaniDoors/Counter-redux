import { useDispatch } from "react-redux";
import { increment } from "../counters";

export function CounterReduxIncrement({ id, amount }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(id, +amount))}>{amount}</button>
  );
}
