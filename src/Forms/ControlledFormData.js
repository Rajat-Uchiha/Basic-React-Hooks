import React, { useState } from "react";

//!IN REACT WE HAVE TWO TYPES OF FORMS 
//! 1.Controlled. -> in which we need to use onChange attributes and need to pass current values.
//! 2.Uncontrolled.

//!This is the example of controlled forms in which we take the help of value attribute of the element.


const ControlledFormData = () => {
  // Both the input fields has an attribute value.
  // To store the values of those input fields we need some variable and for convience, we use useState
  //   To get the value i.e. whatever it is written inside the input fields, we use onchange method as an attribute in the input fields

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //To store all the emails and passwords into one place, we require a new state
  const [AllEntries, setAllEntries] = useState([]); //Contains array of objects.

  const SubmitForm = (e) => {
    e.preventDefault();
    if (Email && Password) {
      //This is how a new entry is created. And it will be stored in AllEntries
      const newEntry = {
        id: new Date().getTime().toString(),
        Email,
        Password,
      };

      //the spread operator in used because we want to add a new entry NOT replace the previous entries.
      // If we want to replace the privous entries then we just simply write newEntry
      setAllEntries([...AllEntries, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("Please Fill the data Fields first.");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-yellow-300 flex justify-center items-center">
        <form
          action=""
          onSubmit={SubmitForm}
          className="w-full shadow-xl max-w-sm border-4 rounded-xl bg-white border-white p-8"
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3 flex justify-start">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3 flex justify-start">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="************"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="shadow bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Show Details
            </button>
          </div>
        </form>
      </div>
      <div className="">
        {AllEntries.map((currElem) => {
          return (
            <div
              key={currElem.id}
              className="border-2 my-3 justify-center items-center rounded-full bg-white border-white flex "
            >
              <p className="p-4 text-2xl font-semibold">
                {" "}
                Name is {currElem.Email} and age is {currElem.Password}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledFormData;
