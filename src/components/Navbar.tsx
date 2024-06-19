import React from "react";
import swiggy from "../images/swiggy.svg";
import search from "../images/search.svg";
import user from "../images/user.png";
import arrow from "../images/arrow.svg";

const Navbar = () => {
  return (
    <div className="flex items-center p-3 h-20 shadow-md">
      <img src={swiggy} alt="logo" className="w-14 h-14" />
      <h1 className="font-bold text-sm underline ml-5">Other</h1>
      <h1 className="text-sm ml-3 ">Location</h1>
      <img src={arrow} alt="arrow" className="w-7 h-7 p-2" />
      <img src={search} alt="search" className="w-4 h-4 ml-96" />
      <h1 className="ml-3">Search</h1>
      <img src={user} alt="user" className="w-7 h-7 ml-28" />
      <h1 className="ml-3">Sign In</h1>
    </div>
  );
};

export default Navbar;
