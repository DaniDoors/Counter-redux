import { useDispatch, useSelector } from "react-redux";
import { getCount, increment, reset } from "./counter";

export default function CounterRedux() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(increment(+1000))}>+1000</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
