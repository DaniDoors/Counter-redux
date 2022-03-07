import { useSelector } from "react-redux";
import { getCount } from "../counters";

export function CounterReduxCount({ id }) {
  const count = useSelector((state) => getCount(state, { id }));
  return (
    <>
      <h1>Counter {id}</h1>
      <div>{count}</div>
    </>
  );
}
