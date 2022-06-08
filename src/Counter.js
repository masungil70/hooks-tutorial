import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      state.value++;
      return { value: state.value + 1 };
    case "DEC":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value} </b>입니다
      </p>
      <button onClick={() => dispatch({ type: "INC" })}>+1</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-1</button>
    </div>
  );
};

export default Counter;
