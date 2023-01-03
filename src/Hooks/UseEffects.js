import React, { useState, useEffect } from "react";

const UseEffects = () => {
  const [myNum, setMyNum] = useState(0);

  //This is how useEffect is used
  //This will be invoked once the state is changed
  //   Ex- When the value of myNum is increased or decreased, it will be invoked.
  useEffect(() => {
    document.title = `Chats (${myNum})`;
  });

  useEffect(() => {
    let doc = document.getElementById("myEle");
    doc.innerText = myNum;
  });

  //When we give this array dependency then only once the useEffect will be called.
  //   useEffect(() => {
  //     document.title = `Chats (${myNum})`;
  //   },[]);

  //If we do not write this second argument then it will be called as many time as the state changes .
  //   useEffect(() => {
  //     document.title = `Chats (${myNum})`;
  //   });

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
        <h1 className="text-5xl text-white " id="myEle">
          Hello World
        </h1>
      </div>
    </>
  );
};

export default UseEffects;
