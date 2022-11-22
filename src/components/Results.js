import React, { useContext } from "react";
import { moodTextContext, nameContext } from "../Helpers/Context";

const Results = (props) => {

  const {moodText, setMoodText} = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  let disabledstyles = '';
  let disablebutton = true;
  if ( name.length == 0 ) {
    disablebutton = true;
    disabledstyles = " brightness-50 hover:bg-gray-900";
  } else if ( name.length > 0 ) {
    disablebutton = false;
    disabledstyles = "";
  }

  const CopyClipboardHandler = () => {
    navigator.clipboard.writeText(props.text);
  };

  const ClearTextHandler = () => {
    setMoodText('');
  };

  return (
    <div className="drop-shadow-lg z-20 py-3 px-6 mt-5 bg-gray-800 rounded-3xl container mx-auto max-w-9xl">
      <div className="drop-shadow-lg text-white mt-1 mb-3 text-lg drop-shadow-xl z-20 py-3 px-6 bg-gray-700 rounded-2xl container mx-auto max-w-9xl">
        {props.text}
      </div>
      <button onClick={CopyClipboardHandler} className={"button2 ml-0" + disabledstyles} disabled={disablebutton}>
        In Zwischenablage kopieren
      </button>
      <button onClick={ClearTextHandler} className={"button2" + disabledstyles} disabled={disablebutton}>
        Textfeld zurücksetzen
      </button>
    </div>
  );
};

export default Results;
