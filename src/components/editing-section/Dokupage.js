import React from "react";

import Happiness from "./Happiness";
import Mood from "./Mood";
import NameInput from "./NameInput";
import Tasks from "./Tasks";

const Dokupage = () => {
  return (
    <div className="drop-shadow-xl z-20 py-3 px-6 flex flex-col justify-center items-center bg-gray-800 rounded-3xl container mx-auto max-w-5xl">
      <NameInput />
      <div className="card-inner">
        <Happiness />
      </div>
      <div className="card-inner">
        <Mood />
      </div>
      <div className="card-inner mb-3">
        <Tasks />
      </div>
    </div>
  );
};

export default Dokupage;
