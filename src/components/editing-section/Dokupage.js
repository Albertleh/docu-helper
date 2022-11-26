import React from "react";

import Happiness from "./categories/Happiness";
import Mood from "./categories/Mood";
import Tasks from "./categories/Tasks";
import Measures from "./categories/Measures";

import NameInput from "./NameInput";

const Dokupage = () => {
  return (
    <div className="drop-shadow-xl z-20 pb-3 px-6 flex flex-col justify-center sm:items-start bg-gray-800 rounded-3xl container mx-auto max-w-9xl">
        <NameInput />
      <div className="card-inner">
        <Happiness />
      </div>
      <div className="card-inner">
        <Mood />
      </div>
      <div className="card-inner mb-3">
        <Measures />
      </div>
      <div className="card-inner mb-3">
        <Tasks />
      </div>
    </div>
  );
};

export default Dokupage;
