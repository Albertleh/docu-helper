import React, { useContext } from "react";
import { moodTextContext } from "../Helpers/Context";

const Results = (props) => {

  const {moodText, setMoodText} = useContext(moodTextContext);

  const CopyClipboardHandler = () => {
    navigator.clipboard.writeText(props.text);
  };

  const ClearTextHandler = () => {
    setMoodText('');
  };

  return (
    <div className="drop-shadow-lg z-20 py-3 px-6 mt-5 bg-gray-800 rounded-3xl container mx-auto max-w-5xl">
      <div className="drop-shadow-lg text-white mt-1 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-4xl">
        {props.text}
      </div>
      <button onClick={CopyClipboardHandler} className="drop-shadow-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 text-lg text-white font-bold ml-10 mt-5 mb-1 rounded-2xl py-2 px-7">
        In Zwischenablage kopieren
      </button>
      <button onClick={ClearTextHandler} className="drop-shadow-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 text-lg text-white font-bold ml-10 mt-5 mb-1 rounded-2xl py-2 px-7">
        Textfeld zurücksetzen
      </button>
    </div>
  );
};

export default Results;
