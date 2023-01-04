import React, { useRef } from "react";

//! In this we are going to use useRef hook
//* To get the reference of the value of the input fields we use useRef hook
const UncontrolledFormData = () => {
  //useRef is similar to useState(it preserves the value, No rereder of component is there.)
  //To get the value of the input field we use ref attribute of input tag.
  const LuckyNumber = useRef(null);

  //Then we need to declare a function onSubmit.
  const submitForm = (e) => {
    e.preventDefault();
    console.log(LuckyNumber); //It returns an object
    console.log(LuckyNumber.current); //It returns the html element as a whole i.e out input tag.
    console.log(LuckyNumber.current.value); // It returns the value of the input field.
  };
  return (
    <div className="flex bg-yellow-400 w-full min-h-screen justify-center items-center border-2 border-black">
      <form onSubmit={submitForm} action="">
        <div className="flex flex-col shadow-2xl bg-white rounded-xl p-6  ">
          <label
            htmlFor="LuckyNumber "
            className="text-2xl text-gray-700 font-serif "
          >
            Enter your Lucky number
          </label>
          <input
            ref={LuckyNumber}
            id="L-Number"
            className="border-2 p-2 border-black my-4"
            type="text"
          />
          <button
            type="submit"
            className=" py-2 text-lg bg-green-600 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledFormData;
