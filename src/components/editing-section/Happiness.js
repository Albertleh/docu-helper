import React, { useContext } from "react";
import { nameContext } from "../../Helpers/Context";
import { moodTextContext } from "../../Helpers/Context";
import ButtonElement from "./ButtonElement";

import veryhappy from "../../assets/very-happy.png";
import happy from "../../assets/happy.png";
import neutral from "../../assets/neutral.png";
import sad from "../../assets/sad.png";
import verysad from "../../assets/very-sad.png";

const Happiness = () => {

  const { name } = useContext(nameContext);

  let disablebutton = true;
  if ( name.length === 0 ) {
    disablebutton = true;
  } else if ( name.length > 0 ) {
    disablebutton = false;
  }

  const veryhappytext = [
      `${name} kam heute sehr zufrieden in die Tagesstätte. `,
      `${name} ging heute mit einem Lächeln in die Tagesstätte und wirkte sehr zufrieden. `,
      `${name} war heute scheinbar sehr gut aufgelegt und grüßte freundlich beim Betreten der Tagesstätte. `,
  ];
  const happytext = [`${name} kam heute allgemein zufrieden in die Tagesstätte. `, 
                     `${name} ging heute wohlauf in die Tagesstätte und wirkte allgemein ziemlich zufrieden. `];
  const neutraltext = [`${name} wirkte heute beim Betreten der Werkstätte von der Zuftriedenheit gemischt. `, 
                       `${name} zeigte heute eine ausgeglichene Stimmung und wirkte allgemein neutral in seiner Zufriedenheit. `];
  const sadtext = [`${name} kam heute betrübt in die Tagesstätte und wirkte leicht schlecht gelaunt. `, 
                   `${name} betrat heute wenig zufrieden in die Tagesstätte und zeigte unglückliches Verhalten. `];
  const verysadtext = [`${name} kam heute sichtbar miserabel gelaunt in die Tagesstätte und verbalisierte immer wieder schlechte Stimmung. `, 
                       `${name} wirkte beim Betreten der Tagesstätte sehr schlecht gelaunt und gestikulierte sich abweisend. `];

  const { setMoodText } = useContext(moodTextContext);

  const ACTION = {
    EXZELLENT: "Sehr Gut",
    GUT: "Gut",
    NEUTRAL: "Neutral",
    SCHLECHT: "Schlecht",
    MISERABEL: "Sehr Schlecht",
  };

  const selectMoodHandler = (text) => {
    if (text === ACTION.EXZELLENT) {
      setMoodText(
        veryhappytext[Math.floor(Math.random() * veryhappytext.length)]
      );
    } else if (text === ACTION.GUT) {
      setMoodText(happytext[Math.floor(Math.random() * happytext.length)]);
    } else if (text === ACTION.NEUTRAL) {
      setMoodText(neutraltext[Math.floor(Math.random() * neutraltext.length)]);
    } else if (text === ACTION.SCHLECHT) {
      setMoodText(sadtext[Math.floor(Math.random() * sadtext.length)]);
    } else {
      setMoodText(verysadtext[Math.floor(Math.random() * verysadtext.length)]);
    }
  };

  return (
    <React.Fragment>
      <div className="mood-text text-slate-300 font-bold text-2xl">
        Zufriedenheit
      </div>
      <div class="m-3 grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <ButtonElement
          icon={veryhappy}
          text={ACTION.EXZELLENT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={happy}
          text={ACTION.GUT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={neutral}
          text={ACTION.NEUTRAL}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={sad}
          text={ACTION.SCHLECHT}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
        <ButtonElement
          icon={verysad}
          text={ACTION.MISERABEL}
          disable={disablebutton}
          onSelect={selectMoodHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Happiness;
