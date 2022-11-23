import React from "react";

import Happiness from "./Happiness";
import Mood from "./Mood";
import NameInput from "./NameInput";
import Tasks from "./Tasks";
import Measures from "./Measures";

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
