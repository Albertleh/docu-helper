import React, { useState } from "react";

import { moodTextContext } from "./Helpers/Context";
import { nameContext } from "./Helpers/Context";

import Dokupage from "./components/editing-section/Dokupage";
import Results from "./components/results-section/Results";
import Canvas from "./components/UI/Canvas";

function App() {
  const [moodText, setMoodText] = useState("");
  const [name, setName] = useState("");

  return (
    <nameContext.Provider value={{ name, setName }}>
      <moodTextContext.Provider value={{ moodText, setMoodText }}>
        <Canvas>
          <Dokupage />
          <Results text={moodText} />
        </Canvas>
      </moodTextContext.Provider>
    </nameContext.Provider>
  );
}

export default App;
