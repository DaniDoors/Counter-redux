import { useDispatch } from "react-redux";
import { reset } from "../../store/counter";

export function CounterReduxReset() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>reset</button>;
}
