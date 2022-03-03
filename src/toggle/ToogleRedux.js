import { useDispatch, useSelector } from "react-redux";
import { getActivat, toggleActive, off, on } from "./toggle";

export function ToogleRedux() {
  const dispatch = useDispatch();
  const activat = useSelector(getActivat);

  return (
    <>
      Activat: {activat ? "cert" : "fals"}.
      <br />
      <button onClick={() => dispatch(toggleActive())}>Toglejar</button>
      <button onClick={() => dispatch(off())}>Off</button>
      <button onClick={() => dispatch(on())}>On</button>
    </>
  );
}
