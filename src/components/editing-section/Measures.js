import React, { useContext } from "react";

import consulting from "../../assets/consulting.png";
import diagram from "../../assets/diagram.png";
import instruction from "../../assets/instruction.png";
import observer from "../../assets/observer.png";
import support from "../../assets/support.png";
import caress from "../../assets/caress.png";
import speak from "../../assets/speak.png";

import { moodTextContext } from "../../Helpers/Context";
import { nameContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

const Measures = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const basalstimulationtext = [`${name} benötigt heute basale Stimulation zur Beruhigung. Dies zeigte Wirkung und verhalf zur Entspannung. `];
  const strukturtext = [`${name} benötigt heute  strukturierte Maßnahmen durch das Betreuerteam, was sich auch als Wirkungsvoll zeigt. `];
  const gespraechtext = [`Heute braucht es bei ${name} ein Einzelgespräch, um die Anforderungen des Betreuerteams mit den Anliegen von ${name} zu vereinbaren. `];
  const einzelsettingtext = [`${name} benötigt heute viel Betreuung im Einzelsetting, wodurch die Anforderungen des Klienten wahr genommen werden konnten. `];
  const beobachtungstext = [`${name} braucht heute Vormittag außerdem akribische Beobachtung, um ${name}'s Sicherheit zu gewährleisten. `];
  const unterstützungstext = [`${name} benötigt heute viel Unterstützung durch das Betreuerteam, da an diesem Vormittag die Alltagstätigkeiten schwer bewältigbar sind. `];
  const verbaleanleitungstext = [`${name} benötigt diesen Vormittag verbale Anleitung beim Ausführen diverser Aufgaben durch das Betreuerteam. `];

  let disablebutton = true;
  if ( name.length === 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ACTION = {
    BASALE_STIMULATION: "basale Stimulation",
    STRUKTURANGABE: "klare Strukturangabe",
    GESPRAECH: "klärendes Gespräch",
    EINZELSETTING_BETREUT: "Einzelsetting betreut",
    BEOBACHTUNG: "vermehrte Beobachtung",
    UNTERSTUETZUNG: "Unterstützung",
    VERBALE_ANLEITUNG: "verbale Anleitung",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.BASALE_STIMULATION) {
      setMoodText([
        moodText + 
        basalstimulationtext[Math.floor(Math.random() * basalstimulationtext.length)],
      ]);
    } else if (text === ACTION.STRUKTURANGABE) {
      setMoodText([
        moodText +
        strukturtext[Math.floor(Math.random() * strukturtext.length)],
      ]);
    } else if (text === ACTION.GESPRAECH) {
      setMoodText([
        moodText +
        gespraechtext[Math.floor(Math.random() * gespraechtext.length)],
      ]);
    } else if (text === ACTION.EINZELSETTING_BETREUT) {
      setMoodText([
        moodText +
        einzelsettingtext[Math.floor(Math.random() * einzelsettingtext.length)],
      ]);
    } else if (text === ACTION.BEOBACHTUNG) {
      setMoodText([
        moodText +
        beobachtungstext[Math.floor(Math.random() * beobachtungstext.length)],
      ]);
    } else if (text === ACTION.VERBALE_ANLEITUNG) {
      setMoodText([
        moodText +
        verbaleanleitungstext[Math.floor(Math.random() * verbaleanleitungstext.length)],
      ]);
    }else {
      setMoodText([
        moodText +
        unterstützungstext[Math.floor(Math.random() * unterstützungstext.length)],
      ]);
    }
  };
  return (
    <React.Fragment>
      <div className=" mood-text text-slate-300 font-bold text-2xl mb-2">
        Pädagogische Maßnahmen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        <ButtonElement
          icon={caress}
          text={ACTION.BASALE_STIMULATION}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={diagram}
          text={ACTION.STRUKTURANGABE}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={speak}
          disable={disablebutton}
          text={ACTION.GESPRAECH}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={consulting}
          text={ACTION.EINZELSETTING_BETREUT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={observer}
          text={ACTION.BEOBACHTUNG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={support}
          text={ACTION.UNTERSTUETZUNG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={instruction}
          text={ACTION.VERBALE_ANLEITUNG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Measures;
