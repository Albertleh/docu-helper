import React, { useContext } from "react";

import annoyed from "../../assets/mood-annoyed.png";
import confirmation from "../../assets/mood-confirmation.png";
import sad from "../../assets/mood-sad.png";
import sleepy from "../../assets/mood-sleepy.png";
import worried from "../../assets/mood-worried.png";
import relaxed from "../../assets/mood-relaxed.png";
import angry from "../../assets/mood-angry.png";

import { moodTextContext } from "../../Helpers/Context";

const veryhappytext = [
  "Hr. Musterklient kam heute sehr zufrieden in die Tagesstätte.",
  "Hr. Musterklient ging heute mit einem Lächeln in die Tagesstätte und wirkte sehr zufrieden",
  "Hr. Musterklient war heute sehr gut aufgelegt und grüßte freundlich beim Betreten der Tagesstätte",
];
const happytext = ["happy1", "happy2", "happy3"];
const neutraltext = ["neutral1", "neutral2", "neutral3"];
const sadtext = ["sad1", "sad2", "sad3"];
const verysadtext = ["verysad1", "verysad2", "verysad3"];

const Tasks = () => {
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
        Aufgaben
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={annoyed}
            alt="very-happy"
          ></img>
          <h3 className="text-white text-lg">genervt</h3>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={sad}
            alt="happy"
          ></img>
          <h3 className="text-white text-lg">traurig</h3>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={confirmation}
            alt="neutral"
          ></img>
          <h3 className="text-white text-lg">sucht Bestätigung</h3>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={angry}
            alt="sad"
          ></img>
          <h3 className="text-white text-lg">sauer</h3>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={sleepy}
            alt="very-sad"
          ></img>
          <h3 className="text-white text-lg">schläfrig</h3>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={relaxed}
            alt="very-sad"
          ></img>
          <h3 className="text-white text-lg">relaxed</h3>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
