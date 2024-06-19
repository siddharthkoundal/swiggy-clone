import React from "react";
import dish from "../images/dish.png";

type signupProp = {
  setLoginModal: any;
};

const Signup = (props: signupProp) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
          <div className="p-10 relative transform overflow-hidden bg-white text-left shadow-xl transition-all  sm:w-4/12 sm:max-w-lg h-screen">
            <h1
              className="text-2xl cursor-pointer"
              onClick={() => props?.setLoginModal(false)}
            >
              X
            </h1>
            <div className="flex">
              <div>
                <h1 className="font-semibold text-3xl mt-3">Sign up</h1>
                <h1 className="mt-3">
                  or{" "}
                  <span className="text-orange-500 text-sm">
                    login to your account
                  </span>{" "}
                </h1>
                <hr className="w-8 bg-black h-px mt-3 border-0" />
              </div>
              <img
                className="w-24 h-24 rounded-full ml-24"
                src={dish}
                alt="dish"
              />
            </div>
            <input
              className="p-6 border border-gray-300 mt-7 w-80"
              placeholder="Phone number"
            />
            <input
              className="p-6 border border-gray-300 w-80"
              placeholder="Name"
            />
            <input
              className="p-6 border border-gray-300 w-80"
              placeholder="Email"
            />
            <button className="bg-orange-500 p-4 text-white font-semibold text-xs w-80 mt-10">
              CONTINUE
            </button>
            <h1 className="text-xs font-medium mt-2">
              By creating an account, I accept the Terms & Conditions & Privacy
              Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
