import React, { useState } from "react";
import food from "../images/food.jpg";
import swiggy from "../images/swiggy.png";
import Login from "./Login";
import Signup from "./Signup";

const Welcome = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  return (
    <div className="flex">
      <div className="h-screen w-9/12 p-10">
        <div className="flex items-center">
          <img src={swiggy} alt="swiggy-logo" className="w-48 h-16" />
          <h1
            className="font-semibold ml-60 cursor-pointer"
            onClick={() => setLoginModal(true)}
          >
            Sign In
          </h1>
          <button
            className="w-28 bg-black text-white font-bold p-3 ml-7"
            onClick={() => setSignupModal(true)}
          >
            Sign Up
          </button>
        </div>
        <h1 className="font-bold text-4xl text-gray-800 mt-20">
          Cooking gone wrong?
        </h1>
        <h1 className="mt-3 text-zinc-600 text-2xl">
          Order food from favourite restaurants near you.
        </h1>
        <input
          placeholder="Enter your delivery location"
          className="border border-black p-4 mt-12 w-8/12"
        />
        <button className="bg-orange-500 text-white font-bold p-4 w-36">
          Find food
        </button>
        <h1 className="text-zinc-400 text-sm mt-8">POPULAR CITIES IN INDIA</h1>
        <h1 className="text-zinc-700 font-bold mt-4">
          Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
          Pune & more.
        </h1>
      </div>
      <img src={food} alt="food" className="h-screen w-5/12" />
      {loginModal && <Login setLoginModal={setLoginModal} />}
      {signupModal && <Signup setLoginModal={setSignupModal} />}
    </div>
  );
};

export default Welcome;
