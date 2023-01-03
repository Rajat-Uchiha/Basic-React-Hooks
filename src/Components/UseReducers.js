// React useReducer is similar to useState but for smaller projects, useState is used and for large/Complex projects useReducer is used because it gives a clear picture that what we are going to do.

import React from "react";
import { useReducer } from "react";

//It takes two arguments :- state and action
const reducer = (state, action) => {
  if (action.type === "INCR") {
    state += 1;
  }
  if (state > 0 && action.type === "DECR") {
    state -= 1;
  }
  return state;
};

const UseReducers = () => {
  const initialData = 10;

  //This is the syntax of using useReducer hook.It's syntax is similar to useState but it takes two parameters
  // 1. Reducer:-which is a function. This is responsible for the change of the value of the state.
  // 2. initialData:- initial value of the state variable.

  // It returns an array same as useState containing two elements
  // 1. state variable.
  // 2. dispatch function which is used to call the reducer function.

  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <button
          onClick={() => dispatch({ type: "INCR" })}
          className="border-2 border-white mx-10 p-4 rounded-lg hover:bg-cyan-900 text-white hover:text-white text-3xl"
        >
          Increase
        </button>
        <div className="border-2 border-white p-4 rounded-lg">
          <h2 className="text-2xl text-white">{state}</h2>
        </div>
        <button
          onClick={() => dispatch({ type: "DECR" })}
          className="border-2 border-white mx-10 p-4 rounded-lg hover:bg-cyan-900 text-white hover:text-white text-3xl"
        >
          Decrease
        </button>
      </div>
    </>
  );
};

export default UseReducers;
