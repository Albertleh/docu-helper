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

const veryhappytext = [
  "Hr. Musterklient kam heute sehr zufrieden in die Tagesstätte.",
  "Hr. Musterklient ging heute mit einem Lächeln in die Tagesstätte und wirkte sehr zufrieden",
  "Hr. Musterklient war heute sehr gut aufgelegt und grüßte freundlich beim Betreten der Tagesstätte",
];
const happytext = ["happy1", "happy2", "happy3"];
const neutraltext = ["neutral1", "neutral2", "neutral3"];
const sadtext = ["sad1", "sad2", "sad3"];
const verysadtext = ["verysad1", "verysad2", "verysad3"];

const Mood = () => {
  const { moodText, setMoodText } = useContext(moodTextContext);

  const selectMoodHandler = (event) => {
    if (event.target.alt === "very-happy") {
      setMoodText(
        veryhappytext[Math.floor(Math.random() * veryhappytext.length)]
      );
    } else if (event.target.alt === "happy") {
      setMoodText(happytext[Math.floor(Math.random() * happytext.length)]);
    } else if (event.target.alt === "neutral") {
      setMoodText(neutraltext[Math.floor(Math.random() * neutraltext.length)]);
    } else if (event.target.alt === "sad") {
      setMoodText(sadtext[Math.floor(Math.random() * sadtext.length)]);
    } else {
      setMoodText(verysadtext[Math.floor(Math.random() * verysadtext.length)]);
    }
  };

  return (
    <React.Fragment>
      <div className=" mt-10 mood-text text-slate-100 font bold text-3xl underline">
        Stimmungen
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <ButtonElement icon={annoyed} text='genervt' />
        <ButtonElement icon={sad} text='traurig' />
        <ButtonElement icon={confirmation} text='sucht Bestätigung' />
        <ButtonElement icon={angry} text='sauer' />
        <ButtonElement icon={sleepy} text='schläfrig' />
        <ButtonElement icon={relaxed} text='entspannt' />
      </div>
    </React.Fragment>
  );
};

export default Mood;
