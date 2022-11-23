import React, { useContext } from "react";

import annoyed from "../../assets/mood-annoyed.png";
import confirmation from "../../assets/mood-confirmation.png";
import sad from "../../assets/mood-sad.png";
import sleepy from "../../assets/mood-sleepy.png";
import worried from "../../assets/mood-worried.png";
import relaxed from "../../assets/mood-relaxed.png";
import angry from "../../assets/mood-angry.png";

import { moodTextContext } from "../../Helpers/Context";
import { nameContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";



const Mood = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);
  const { name } = useContext(nameContext);

  const annoyedtext = [`Außerdem wirkte ${name} während des Vormittags über genervt und auch ein bisschen missverstanden. `];
  const confirmationtext = [`Ebenfalls suchte ${name} zunehmend Bestätigung von dem Betreuerteam und stellt sich öfters selbst in Frage. `];
  const sadtext = [`Außerdem wirkte ${name} während den frühen Stunden ein wenig traurig, was auf die isolierende Gestikulierung zurückzuführen war. `];
  const sleepytext = [`Zudem schien es so als hätte ${name} nicht gut oder ausreichen  geschlafen, da die Gestikulierung (insbesodere durch Gähnen) auf Müdigkeit hinwies. `];
  const worriedtext = [`Abgesehen davon wirkte ${name} die ganze Zeit über ein wenig betrübt und gestikulierte sich besorgt. `];
  const relaxedtext = [`Ebenfalls zu erwähnen ist, dass sich ${name} heute sehr ruhig verhielt und die Zeit über in einem allgemein entspannten Zustand verweilt. `];
  const angrytext = [`${name}'s Aggression gegenüber anderen Klienten war heute kaum zu übersehen, da das Gruppengeschehen vermehrt durch energische Gestiken und Handgriffe befeuert wurde. `];

  let disablebutton = true;
  if ( name.length == 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const ACTION = {
    GENERVT: "genervt",
    SUCHT_BESTAETIGUNG: "sucht Bestätigung",
    TRAURIG: "traurig",
    BESORGT: "besorgt",
    SAUER: "fremd- aggressiv",
    SCHLAEFRIG: "schläfrig",
    ENTSPANNT: "entspannt",
    GESPRAECHIG: "gesprächig",
    HILFSBEREIT: "hilfsbereit",
    ANGETRIEBEN: "angetrieben",
    NERVOES: "nervös",
    
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.GENERVT) {
      setMoodText([
        moodText + 
        annoyedtext[Math.floor(Math.random() * annoyedtext.length)],
      ]);
    } else if (text === ACTION.SUCHT_BESTAETIGUNG) {
      setMoodText([
        moodText +
        confirmationtext[Math.floor(Math.random() * confirmationtext.length)],
      ]);
    } else if (text === ACTION.TRAURIG) {
      setMoodText([
        moodText +
        sadtext[Math.floor(Math.random() * sadtext.length)],
      ]);
    } else if (text === ACTION.ENTSPANNT) {
      setMoodText([
        moodText +
        relaxedtext[Math.floor(Math.random() * relaxedtext.length)],
      ]);
    } else if (text === ACTION.SAUER) {
      setMoodText([
        moodText +
        angrytext[Math.floor(Math.random() * angrytext.length)],
      ]);
    } else if (text === ACTION.SCHLAEFRIG) {
      setMoodText([
        moodText +
        sleepytext[Math.floor(Math.random() * sleepytext.length)],
      ]);
    } else {
      setMoodText([
        moodText +
        worriedtext[Math.floor(Math.random() * worriedtext.length)],
      ]);
    }
  };
  return (
    <React.Fragment>
      <div className=" mood-text text-slate-300 font-bold text-2xl">
        Stimmungen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        <ButtonElement
          icon={annoyed}
          text={ACTION.GENERVT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sad}
          text={ACTION.TRAURIG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={confirmation}
          disable={disablebutton}
          text={ACTION.SUCHT_BESTAETIGUNG}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={angry}
          text={ACTION.SAUER}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={worried}
          text={ACTION.BESORGT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sleepy}
          text={ACTION.SCHLAEFRIG}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.ENTSPANNT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Mood;
