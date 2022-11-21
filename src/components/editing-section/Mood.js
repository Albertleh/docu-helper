import React, { useContext } from "react";

import annoyed from "../../assets/mood-annoyed.png";
import confirmation from "../../assets/mood-confirmation.png";
import sad from "../../assets/mood-sad.png";
import sleepy from "../../assets/mood-sleepy.png";
import worried from "../../assets/mood-worried.png";
import relaxed from "../../assets/mood-relaxed.png";
import angry from "../../assets/mood-angry.png";

import { moodTextContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

const annoyedtext = ["annoyed1", "annoyed2", "annoyed3"];
const confirmationtext = ["confirmation1", "confirmation2", "confirmation3"];
const sadtext = ["sad1", "sad2", "sad3"];
const sleepytext = ["sleepy1", "sleepy2", "sleepy3"];
const worriedtext = ["worried1", "worried2", "worried3"];
const relaxedtext = ["relaxed1", "relaxed2", "relaxed3"];
const angrytext = ["angry1", "angry2", "angry3"];

const Mood = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);

  const ACTION = {
    GENERVT: "genervt",
    SUCHT_BESTAETIGUNG: "sucht Bestätigung",
    TRAURIG: "traurig",
    BESORGT: "besorgt",
    SAUER: "sauer",
    SCHLAEFRIG: "schläfrig",
    ENTSPANNT: "entspannt",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.GENERVT) {
      setMoodText([
        ...moodText,
        annoyedtext[Math.floor(Math.random() * annoyedtext.length)],
      ]);
    } else if (text === ACTION.SUCHT_BESTAETIGUNG) {
      setMoodText([
        ...moodText,
        confirmationtext[Math.floor(Math.random() * confirmationtext.length)],
      ]);
    } else if (text === ACTION.NEUTRAL) {
      setMoodText([
        ...moodText,
        sadtext[Math.floor(Math.random() * sadtext.length)],
      ]);
    } else if (text === ACTION.NEUTRAL) {
      setMoodText([
        ...moodText,
        relaxedtext[Math.floor(Math.random() * relaxedtext.length)],
      ]);
    } else if (text === ACTION.NEUTRAL) {
      setMoodText([
        ...moodText,
        angrytext[Math.floor(Math.random() * angrytext.length)],
      ]);
    } else if (text === ACTION.SCHLECHT) {
      setMoodText([
        ...moodText,
        sleepytext[Math.floor(Math.random() * sleepytext.length)],
      ]);
    } else {
      setMoodText([
        ...moodText,
        worriedtext[Math.floor(Math.random() * worriedtext.length)],
      ]);
    }
  };
  return (
    <React.Fragment>
      <div className=" mt-10 mood-text text-slate-100 font-bold text-3xl">
        Stimmungen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        <ButtonElement
          icon={annoyed}
          text={ACTION.GENERVT}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sad}
          text={ACTION.TRAURIG}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={confirmation}
          text={ACTION.SUCHT_BESTAETIGUNG}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={angry}
          text={ACTION.SAUER}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={worried}
          text={ACTION.ENTSPANNT}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sleepy}
          text={ACTION.SCHLAEFRIG}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={relaxed}
          text={ACTION.ENTSPANNT}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Mood;
