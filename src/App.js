import React, { useState } from "react";

// import Main from "./components/Main";
import { moodTextContext } from "./Helpers/Context";
import { nameContext } from "./Helpers/Context";

import Dokupage from "./components/editing-section/Dokupage";
import Results from "./components/Results";

function App() {
  const [moodText, setMoodText] = useState("");
  const [name, setName] = useState("");

  return (
    <nameContext.Provider value={{ name, setName }}>
      <moodTextContext.Provider value={{ moodText, setMoodText }}>
        <div className="bg-slate-900 h-screen p-5">
          <Dokupage />
          <Results text={moodText} />
        </div>
      </moodTextContext.Provider>
    </nameContext.Provider>
  );
}

export default App;