import React, { useContext } from "react";

// import annoyed from "../../assets/mood-annoyed.png";
// import confirmation from "../../assets/mood-confirmation.png";
// import sad from "../../assets/mood-sad.png";
// import sleepy from "../../assets/mood-sleepy.png";
// import worried from "../../assets/mood-worried.png";
// import relaxed from "../../assets/mood-relaxed.png";
// import angry from "../../assets/mood-angry.png";

import { moodTextContext, nameContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

const Tasks = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const makingcoffeetext = [`Bezüglich Tätigkeiten hat ${name} heute die Aufgabe des Kaffeekochens angenommen und auch erfüllt. `];
  const takingouttrashtext = [`Ebenfalls wurde der Müll heute von ${name} selbstständig zum Müllplatz getragen und dort entsorgt. `];
  const cleaningtext = [`${name}`];
  const participatingtext = [``];
  const carrytext = [``];
  const carryluchboxtext = [``];
  const basalstimulationtext = [``];

  let disablebutton = true;
  if ( name.length == 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ACTION = {
    KAFFEE_GEMACHT: "Kaffee gemacht",
    MUELL_RAUSGETRAGEN: "Müll rausgetragen",
    HAT_AUFGERAEUMT: "hat aufgeräumt",
    GRUPPENGESCHEHEN_TEILGENOMMEN: "Geschehen teilgenommen",
    BOTENGAENGE_ERLEDIGT: "Botengänge erledigt",
    JAUSENBOX_RUNTERGETRAGEN: "Jausenbox runtergetragen",
    BASALE_STIMULATION: "basale Stimulation",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.KAFFEE_GEMACHT) {
      setMoodText([
        moodText +
        makingcoffeetext[Math.floor(Math.random() * makingcoffeetext.length)],
      ]);
    } else if (text === ACTION.MUELL_RAUSGETRAGEN) {
      setMoodText([
        moodText +
        takingouttrashtext[Math.floor(Math.random() * takingouttrashtext.length)],
      ]);
    } else if (text === ACTION.HAT_AUFGERAEUMT) {
      setMoodText([
        moodText +
        cleaningtext[Math.floor(Math.random() * cleaningtext.length)],
      ]);
    } else if (text === ACTION.GRUPPENGESCHEHEN_TEILGENOMMEN) {
      setMoodText([
        moodText +
        participatingtext[Math.floor(Math.random() * participatingtext.length)],
      ]);
    } else if (text === ACTION.BOTENGAENGE_ERLEDIGT) {
      setMoodText([
        moodText +
        carrytext[Math.floor(Math.random() * carrytext.length)],
      ]);
    } else if (text === ACTION.JAUSENBOX_RUNTERGETRAGEN) {
      setMoodText([
        moodText +
        carryluchboxtext[Math.floor(Math.random() * carryluchboxtext.length)],
      ]);
    } else if (text === ACTION.BASALE_STIMULATION) {
      setMoodText([
        moodText +
        basalstimulationtext[Math.floor(Math.random() * basalstimulationtext.length)],
      ]);
    } else {
      alert('error')
    }
  };

  return (
    <React.Fragment>
      <div className="mood-text text-slate-100 font-bold text-2xl">
        Aufgaben
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        <ButtonElement
          icon={undefined}
          text={ACTION.KAFFEE_GEMACHT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.MUELL_RAUSGETRAGEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.HAT_AUFGERAEUMT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.GRUPPENGESCHEHEN_TEILGENOMMEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.BOTENGAENGE_ERLEDIGT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.JAUSENBOX_RUNTERGETRAGEN}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={undefined}
          text={ACTION.BASALE_STIMULATION}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Tasks;
