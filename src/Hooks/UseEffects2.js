import { useState, useEffect } from "react";

import React from "react";

//In this we are going to learn about cleanup function in useEffect hook.

const UseEffects2 = () => {
  //widthSize is a variable to store the value of the width size.
  const [widthSize, setWidthSize] = useState(window.screen.width);

  //This is the proper syntax of useEffect.
  // It includes:
  // 1.Event
  // 2.Returns an arrow function ( which contains a cleanup function)
  // 3.Array dependency.

  //Why cleanup function is important?
  // It is so important because whenever we fire an event, some function is called to handle that event that function is take memory of the browser. If that event is fired multiple time then it may result in the memory leakage, therefore to avoid this, cleanup function is used which removes the function from the browser memory once it is called by the eventhandler.

  const actualWidth = () => {
    setWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);

    return () => {
      //This arrow function is cleanup function which is used to clear the memory taken by the eventlistner.
      window.removeEventListener("resize", actualWidth);
    };
  }, [widthSize]);

  return (
    <div className="bg-yellow-600 w-100 min-h-screen flex justify-center items-center">
      <p className="text-2xl font-bold font-serif text-white">
        The actual width of the window is :
      </p>
      <div className="text-2xl font-bold font-serif text-white px-4">
        {widthSize}
      </div>
    </div>
  );
};

export default UseEffects2;
