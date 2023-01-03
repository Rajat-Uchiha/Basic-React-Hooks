import React, { useState } from "react";

const myData = [
  { id: 0, name: "Rajat", age: 21 },
  { id: 1, name: "Sky", age: 22 },
  { id: 2, name: "Virat", age: 27 },
  { id: 3, name: "Rohit", age: 29 },
];

const UseStateArrays = () => {
  const [Data, setData] = useState(myData);
  const removeElem = (remId) => {
    const upDatedArr = Data.filter((ele) => {
      return ele.id !== remId;
    });
    setData(upDatedArr);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen  bg-yellow-300">
        {Data.map((currElem) => {
          return (
            <div
              key={currElem.id}
              className="border-2 my-3 justify-center items-center rounded-full bg-white border-white flex "
            >
              <p className="p-4 text-2xl font-semibold">
                {" "}
                Name is {currElem.name} and age is {currElem.age}
              </p>
              <button
                onClick={() => {
                  removeElem(currElem.id);
                }}
                className="border-2 py-5 px-2 text-lg rounded-full bg-blue-800 text-white"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseStateArrays;
