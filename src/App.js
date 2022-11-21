import React, { useState } from "react";

import Main from "./components/Main";
import { moodTextContext } from "./Helpers/Context";
import Dokupage from "./components/editing-section/Dokupage";
import Results from "./components/Results";

function App() {
  const [moodText, setMoodText] = useState("");
  console.log(moodText)


  return (
    <moodTextContext.Provider value={{ moodText, setMoodText }}>
      <div className="bg-slate-900 h-screen p-10">
        <Dokupage />
        <Results text={moodText}/>
      </div>
    </moodTextContext.Provider>
  );
}

export default App;
