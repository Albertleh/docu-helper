import React from "react";

import Happiness from "./Happiness";
import Mood from "./Mood";
import NameInput from "./NameInput";
import Tasks from "./Tasks";

const Dokupage = () => {
  return (
    <div className="drop-shadow-xl z-20 py-3 px-6 flex flex-col justify-center items-center bg-gray-800 rounded-3xl container mx-auto max-w-5xl">
      <div className="drop-shadow-lg text-white mt-1 mb-5 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-5xl">
        <NameInput />
      </div>
      <div className="drop-shadow-lg text-white mt-1 mb-5 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-5xl">
        <Happiness />
      </div>
      <div className="drop-shadow-lg text-white mt-1 mb-5 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-5xl">
        <Mood />
      </div>
      <div className="drop-shadow-lg text-white mt-1 mb-3 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-5xl">
        <Tasks />
      </div>
    </div>
  );
};

export default Dokupage;
