import { useDispatch } from "react-redux";
import { reset } from "../counters";

export function CounterReduxReset({ id }) {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset(id))}>reset</button>;
}
