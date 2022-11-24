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
  const strukturtext = [`Ebenfalls suchte ${name} zunehmend Bestätigung von dem Betreuerteam und stellt sich öfters selbst in Frage. `];
  const gespraechtext = [`Außerdem wirkte ${name} während den frühen Stunden ein wenig traurig, was auf die isolierende Gestikulierung zurückzuführen war. `];
  const einzelsettingtext = [`Abgesehen davon wirkte ${name} die ganze Zeit über ein wenig betrübt und gestikulierte sich besorgt. `];
  const beobachtungstext = [`Ebenfalls zu erwähnen ist, dass sich ${name} heute sehr ruhig verhielt und die Zeit über in einem allgemein entspannten Zustand verweilt. `];
  const unterstützungstext = [`${name}'s Aggression gegenüber anderen Klienten war heute kaum zu übersehen, da das Gruppengeschehen vermehrt durch energische Gestiken und Handgriffe befeuert wurde. `];
  const verbaleanleitungstext = [`${name}'s Aggression gegenüber anderen Klienten war heute kaum zu übersehen, da das Gruppengeschehen vermehrt durch energische Gestiken und Handgriffe befeuert wurde. `];

  let disablebutton = true;
  if ( name.length == 0 ) {
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
      <div className=" mood-text text-slate-300 font-bold text-2xl">
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
