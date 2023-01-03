import React from "react";
import { useState } from "react";
function Usestates() {
  // useState returns an array having two elements and take initial value of a variable as an argument.
  // 1. Variable.
  // 2. Function to set the value of that variable.
  const [myNum, setMyNum] = useState(0);
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <button
          onMouseOver={() => setMyNum(myNum + 1)}
          className="border-2 border-white mx-10 p-4 rounded-lg hover:bg-cyan-900 text-white hover:text-white text-3xl"
        >
          Increase
        </button>
        <div className="border-2 border-white p-4 rounded-lg">
          <h2 className="text-2xl text-white">{myNum}</h2>
        </div>
        <button
          onMouseOver={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
          className="border-2 border-white mx-10 p-4 rounded-lg hover:bg-cyan-900 text-white hover:text-white text-3xl"
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default Usestates;
