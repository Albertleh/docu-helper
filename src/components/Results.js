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
      <button onClick={CopyClipboardHandler} className="button2">
        In Zwischenablage kopieren
      </button>
      <button onClick={ClearTextHandler} className="button2">
        Textfeld zurücksetzen
      </button>
    </div>
  );
};

export default Results;
