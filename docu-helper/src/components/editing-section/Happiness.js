import React, { useContext } from "react";

import veryhappy from "../../assets/very-happy.png";
import happy from "../../assets/happy.png";
import neutral from "../../assets/neutral.png";
import sad from "../../assets/sad.png";
import verysad from "../../assets/very-sad.png";
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

const Happiness = () => {
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
      <div className="mood-text text-slate-100 font bold text-3xl underline">
        Zufriedenheit
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={veryhappy}
            alt="very-happy"
          ></img>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={happy}
            alt="happy"
          ></img>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={neutral}
            alt="neutral"
          ></img>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={sad}
            alt="sad"
          ></img>
        </button>
        <button class="button">
          <img
            onClick={selectMoodHandler}
            class="mood-image"
            src={verysad}
            alt="very-sad"
          ></img>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Happiness;
