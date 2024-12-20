import React, { useReducer } from 'react'
const initialState = {count:0}

const reducer = (state, action)=> {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };
  }
};
const Counter = () => {
  const [state, dispatch]=useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter