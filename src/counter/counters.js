const INCREMENT = "counters/INCREMENT";
export function increment(id, amount) {
  return { type: INCREMENT, id, amount };
}

const RESET = "counters/RESET";
export function reset(id) {
  return { type: RESET, id };
}

export function counters(
  state = { sortides: { id: "sortides", count: 1 } },
  action
) {
  switch (action.type) {
    case INCREMENT: {
      const stateCopy = { ...state };
      const counter = state[action.id];
      const counterCopy = { id: action.id, count: 0, ...counter };
      counterCopy.count += action.amount;
      console.log(counter, counterCopy);
      return stateCopy;
    }
    case RESET:
      const copy = { ...state };
      copy[action.id] = 0;
      return copy;
    default:
      return state;
  }
}

export function getCount(state, { id }) {
  return state.counters[id]?.count ?? 0;
}
