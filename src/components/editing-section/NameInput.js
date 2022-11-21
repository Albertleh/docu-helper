import React from "react";

const NameInput = () => {
  return (
    <span className="mb-5 text-lg text-white ">
      Name des Klienten:
      <input type="text" className="py-1 px-2 ml-5 rounded-lg " />
      <button
        onClick={undefined}
        className="drop-shadow-lg bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 text-lg text-white font-bold ml-10 mt-5 mb-1 rounded-2xl py-2 px-7"
      >
        Name bestätigen
      </button>
    </span>
  );
};

export default NameInput;
